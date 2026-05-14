import "server-only";

/**
 * Email + SMS notifications for new lead-form submissions. Both
 * providers are reached via plain fetch (no SDK dependency). Each
 * sender is gated on its env vars being present, so a missing key
 * just logs a warning and is otherwise a no-op — the lead is already
 * persisted in Postgres before either fires.
 *
 * Env vars consumed:
 *   RESEND_API_KEY        — required to send email
 *   LEAD_NOTIFY_EMAIL     — recipient address (e.g. leads@flametechplumbing.ca)
 *   LEAD_NOTIFY_FROM      — verified Resend sender (default: leads@flametechplumbing.ca)
 *
 *   TWILIO_ACCOUNT_SID    — required to send SMS
 *   TWILIO_AUTH_TOKEN     — required
 *   TWILIO_FROM           — verified Twilio sending number (E.164)
 *   TWILIO_TO             — destination number to alert (E.164)
 *
 * Set the ones you want active in Vercel's project env. Missing vars
 * disable the corresponding channel without breaking the lead-save
 * path. Failures during send are caught + logged so a flaky provider
 * never returns 500 to the form.
 */

export type LeadPayload = {
  name: string;
  phone: string;
  address: string;
  issue: string;
};

const REQUEST_TIMEOUT_MS = 4000;

function fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  return fetch(url, { ...init, signal: controller.signal }).finally(() =>
    clearTimeout(timer),
  );
}

async function sendLeadEmail(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from =
    process.env.LEAD_NOTIFY_FROM ?? "leads@flametechplumbing.ca";
  if (!apiKey || !to) return;

  const subject = `New lead: ${lead.name} — ${lead.phone}`;
  const text = [
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phone}`,
    `Address: ${lead.address}`,
    "",
    "Issue:",
    lead.issue,
  ].join("\n");

  const res = await fetchWithTimeout("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ from, to, subject, text }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${body}`);
  }
}

async function sendLeadSms(lead: LeadPayload): Promise<void> {
  const sid = process.env.TWILIO_ACCOUNT_SID;
  const token = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_FROM;
  const to = process.env.TWILIO_TO;
  if (!sid || !token || !from || !to) return;

  const body = `New FlameTech lead: ${lead.name} (${lead.phone}) at ${lead.address}. ${lead.issue.slice(0, 200)}`;
  const params = new URLSearchParams({ From: from, To: to, Body: body });
  const url = `https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`;

  const res = await fetchWithTimeout(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`,
    },
    body: params,
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Twilio ${res.status}: ${txt}`);
  }
}

/**
 * Fire both notifications in parallel. Either failure is logged but
 * never thrown — the caller has already saved the lead, and the form
 * response should not be coupled to provider availability.
 */
export async function notifyLead(lead: LeadPayload): Promise<void> {
  const tasks: Promise<void>[] = [];
  tasks.push(
    sendLeadEmail(lead).catch((err) => {
      console.error("[lead-notify] email failed:", err);
    }),
  );
  tasks.push(
    sendLeadSms(lead).catch((err) => {
      console.error("[lead-notify] sms failed:", err);
    }),
  );
  await Promise.allSettled(tasks);
}
