"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Icon from "@/components/Icon";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "phone" | "email" | "address" | "issue";
type FieldErrors = Partial<Record<FieldName, string>>;

const PHONE_RE = /^[+\d][\d\s\-().]{6,}$/;
// Email regex — intentionally lightweight (not RFC 5322 perfect).
// Goal is "catches obvious typos like missing @ or domain", not
// rejecting edge-case-valid addresses. Formspree validates server-
// side too.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string): string | null {
  const v = value.trim();
  if (!v) {
    return "Required.";
  }
  if (name === "phone" && !PHONE_RE.test(v)) {
    return "Use a valid phone number (digits, spaces, dashes).";
  }
  if (name === "email" && !EMAIL_RE.test(v)) {
    return "Use a valid email address.";
  }
  if (name === "issue" && v.length < 10) {
    return "Tell us a bit more — at least 10 characters.";
  }
  return null;
}

function validateAll(values: Record<FieldName, string>): FieldErrors {
  const errs: FieldErrors = {};
  (Object.keys(values) as FieldName[]).forEach((k) => {
    const e = validateField(k, values[k]);
    if (e) errs[k] = e;
  });
  return errs;
}

export default function QuoteForm({
  issuePlaceholder,
}: {
  issuePlaceholder?: string;
} = {}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data: Record<FieldName, string> = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      issue: (form.elements.namedItem("issue") as HTMLTextAreaElement).value,
    };

    const validationErrors = validateAll(data);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Move focus to the first invalid field for keyboard / SR users.
      const firstBad = (Object.keys(validationErrors) as FieldName[])[0];
      (
        form.elements.namedItem(firstBad) as HTMLElement | null
      )?.focus();
      return;
    }
    setErrors({});
    setStatus("submitting");

    // Form submissions go straight to Formspree, which handles spam
    // filtering + email delivery to the owner's inbox. No DNS changes
    // on the customer's Google Workspace domain needed. Defaults to
    // the production FlameTech Formspree form; override via env var
    // when running staging deploys or swapping providers.
    const endpoint =
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
      "https://formspree.io/f/meenborw";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res
          .json()
          .catch(() => ({ errors: [{ message: "Request failed" }] }));
        const msg = Array.isArray(body.errors)
          ? body.errors.map((e: { message?: string }) => e.message).join(", ")
          : "Request failed";
        throw new Error(msg);
      }
      sendGTMEvent({ event: "generate_lead", form: "quote", value: 0 });
      setStatus("success");
      form.reset();
      // Send the user to the dedicated /thank-you route. The inline success
      // card below stays as a fallback in case routing fails.
      router.push("/thank-you/");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function clearFieldError(name: FieldName) {
    if (!errors[name]) return;
    setErrors((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-emergency/15 to-emergency/5 border-2 border-emergency/30 p-10 md:p-12 text-center animate-in fade-in zoom-in-95 duration-500">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emergency text-cream-50 mb-5 shadow-lg shadow-emergency/30">
          <Icon name="check_circle" className="text-3xl" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 text-ink-900">
          Request received.
        </h3>
        <p className="text-ink-500 mb-7 max-w-md mx-auto leading-relaxed">
          A FlameTech dispatcher will call you back with pricing and
          availability, usually within one business day (Mon–Sat). Need it
          handled today? Call directly for priority dispatch.
        </p>
        <a
          href="tel:+15878343668"
          className="inline-flex items-center gap-2 rounded-full bg-emergency text-cream-50 font-extrabold px-8 py-3.5 text-sm hover:bg-emergency-deep transition-colors shadow-md shadow-emergency/25"
        >
          <Icon name="call" className="text-base" />
          Call 587-834-3668 now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field
          label="Full name"
          name="name"
          required
          error={errors.name}
          onInput={() => clearFieldError("name")}
        />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          placeholder="587-834-3668"
          error={errors.phone}
          onInput={() => clearFieldError("phone")}
        />
      </div>
      <Field
        label="Email address"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        error={errors.email}
        onInput={() => clearFieldError("email")}
      />
      <Field
        label="Service address"
        name="address"
        required
        placeholder="Street, City, Postal Code"
        error={errors.address}
        onInput={() => clearFieldError("address")}
      />
      <div>
        <label
          htmlFor="issue"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2 block"
        >
          Describe the issue
          <span className="text-emergency">*</span>
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          required
          aria-invalid={errors.issue ? "true" : undefined}
          aria-describedby={errors.issue ? "issue-error" : undefined}
          onInput={() => clearFieldError("issue")}
          placeholder={
            issuePlaceholder ??
            "e.g. Water heater not working, tap leaking, furnace making noise…"
          }
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:ring-4 focus:ring-emergency/15 transition-all duration-150 placeholder:text-ink-500/60 ${
            errors.issue
              ? "border-emergency focus:border-emergency"
              : "border-line-light hover:border-ink-500/40 focus:border-emergency"
          }`}
        />
        {errors.issue && (
          <p
            id="issue-error"
            className="mt-2 text-xs font-semibold text-emergency-deep"
          >
            {errors.issue}
          </p>
        )}
      </div>
      {status === "error" && (
        <p className="text-xs text-emergency-deep" role="alert">
          {errorMsg || "Submission failed. Please call 587-834-3668 directly."}
        </p>
      )}

      {/* Trust microcopy — real-person callback + call-for-same-day nudge
          and anti-spam reassurance, immediately above the CTA where it
          matters for conversion. No unbacked callback-time promise. */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-bold uppercase tracking-[0.10em] text-ink-500/80 pt-1">
        <span className="inline-flex items-center gap-1.5">
          <Icon name="schedule" className="text-emergency text-sm" />
          A real person calls you back — call directly for same-day
        </span>
        <span className="hidden sm:inline-block h-3 w-px bg-ink-500/20" />
        <span className="inline-flex items-center gap-1.5">
          <Icon name="check_circle" className="text-emergency text-sm" />
          We never share or sell your info
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emergency text-cream-50 px-8 py-3.5 font-extrabold text-sm hover:bg-emergency-deep transition-all duration-150 shadow-md shadow-emergency/20 hover:shadow-lg hover:shadow-emergency/30 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-emergency disabled:active:scale-100"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="animate-spin h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="opacity-25"
                />
                <path
                  d="M12 2a10 10 0 0 1 10 10"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Request free estimate"
          )}
        </button>
        <p className="text-xs text-ink-500">
          Or call{" "}
          <a href="tel:+15878343668" className="text-emergency font-bold">
            587-834-3668
          </a>{" "}
          for immediate service
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
  onInput,
}: {
  label: string;
  name: FieldName;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onInput?: () => void;
}) {
  const errorId = error ? `${name}-error` : undefined;
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2 block"
      >
        {label}
        {required && <span className="text-emergency">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={errorId}
        onInput={onInput}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:ring-4 focus:ring-emergency/15 transition-all duration-150 placeholder:text-ink-500/60 ${
          error
            ? "border-emergency focus:border-emergency"
            : "border-line-light hover:border-ink-500/40 focus:border-emergency"
        }`}
      />
      {error && (
        <p
          id={errorId}
          className="mt-2 text-xs font-semibold text-emergency-deep"
        >
          {error}
        </p>
      )}
    </div>
  );
}
