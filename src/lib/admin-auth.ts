import "server-only";
import crypto from "node:crypto";
import { cookies } from "next/headers";

/**
 * Auth for the /grizzly admin panel.
 *
 * Credentials and the signing secret live ONLY in environment variables.
 * This repository is public — a hardcoded password would be readable by
 * anyone the moment it was pushed. Set these in Vercel (Project →
 * Settings → Environment Variables) for Production and Preview:
 *
 *   GRIZZLY_USER      the admin username
 *   GRIZZLY_PASSWORD  the admin password
 *   AUTH_SECRET       any long random string, used to sign the session
 *                     cookie (e.g. `openssl rand -base64 32`)
 *
 * If GRIZZLY_PASSWORD or AUTH_SECRET is missing the panel refuses every
 * login rather than falling open. That is deliberate: a misconfigured
 * deploy should lock the door, not remove it.
 */

const COOKIE = "grizzly_session";
const MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

function secret(): string | null {
  const s = process.env.AUTH_SECRET;
  return s && s.length >= 16 ? s : null;
}

/** Constant-time string compare that tolerates differing lengths. */
function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a, "utf8");
  const bb = Buffer.from(b, "utf8");
  // timingSafeEqual throws on length mismatch, so hash first — this keeps
  // the comparison constant-time regardless of input length.
  const ah = crypto.createHash("sha256").update(ab).digest();
  const bh = crypto.createHash("sha256").update(bb).digest();
  return crypto.timingSafeEqual(ah, bh);
}

function sign(expiry: number, key: string): string {
  return crypto
    .createHmac("sha256", key)
    .update(String(expiry))
    .digest("base64url");
}

/** Verify a username/password pair against the configured env vars. */
export function checkCredentials(user: string, password: string): boolean {
  const expectedUser = process.env.GRIZZLY_USER;
  const expectedPass = process.env.GRIZZLY_PASSWORD;
  if (!expectedUser || !expectedPass || !secret()) return false;
  // Evaluate both so a wrong username and a wrong password take the same
  // time — avoids leaking which half was correct.
  const userOk = safeEqual(user, expectedUser);
  const passOk = safeEqual(password, expectedPass);
  return userOk && passOk;
}

/** Mint the signed session value. */
export function createSessionValue(): string | null {
  const key = secret();
  if (!key) return null;
  const expiry = Date.now() + MAX_AGE_SECONDS * 1000;
  return `${expiry}.${sign(expiry, key)}`;
}

function isValidSession(value: string | undefined): boolean {
  const key = secret();
  if (!key || !value) return false;
  const [expRaw, sig] = value.split(".");
  if (!expRaw || !sig) return false;
  const expiry = Number(expRaw);
  if (!Number.isFinite(expiry) || expiry < Date.now()) return false;
  return safeEqual(sig, sign(expiry, key));
}

/** True when the current request carries a valid admin session. */
export async function isAuthed(): Promise<boolean> {
  const jar = await cookies();
  return isValidSession(jar.get(COOKIE)?.value);
}

/** True when the deploy has the env vars needed for the panel to work. */
export function isConfigured(): boolean {
  return !!(
    process.env.GRIZZLY_USER &&
    process.env.GRIZZLY_PASSWORD &&
    secret()
  );
}

export const SESSION_COOKIE = COOKIE;
export const SESSION_MAX_AGE = MAX_AGE_SECONDS;
