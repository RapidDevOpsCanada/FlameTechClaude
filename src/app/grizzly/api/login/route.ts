import { NextResponse } from "next/server";
import {
  checkCredentials,
  createSessionValue,
  isConfigured,
  SESSION_COOKIE,
  SESSION_MAX_AGE,
} from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData();
  const user = String(form.get("user") ?? "");
  const password = String(form.get("password") ?? "");
  const url = new URL("/grizzly", req.url);

  if (!isConfigured()) {
    url.searchParams.set("e", "config");
    return NextResponse.redirect(url, 303);
  }
  if (!checkCredentials(user, password)) {
    url.searchParams.set("e", "bad");
    return NextResponse.redirect(url, 303);
  }
  const value = createSessionValue();
  if (!value) {
    url.searchParams.set("e", "config");
    return NextResponse.redirect(url, 303);
  }

  const res = NextResponse.redirect(url, 303);
  res.cookies.set(SESSION_COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return res;
}
