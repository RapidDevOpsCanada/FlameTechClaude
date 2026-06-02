"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";
import Icon from "@/components/Icon";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "phone" | "address" | "issue";
type FieldErrors = Partial<Record<FieldName, string>>;

const PHONE_RE = /^[+\d][\d\s\-().]{6,}$/;

function validateField(name: FieldName, value: string): string | null {
  const v = value.trim();
  if (!v) {
    return "Required.";
  }
  if (name === "phone" && !PHONE_RE.test(v)) {
    return "Use a valid phone number (digits, spaces, dashes).";
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
      <div className="rounded-2xl bg-emergency/10 border border-emergency/30 p-10 text-center">
        <Icon name="check_circle" className="text-emergency text-5xl mb-4 block" />
        <h3 className="text-2xl font-extrabold tracking-tight mb-3 text-ink-900">
          Request received.
        </h3>
        <p className="text-ink-500 mb-6">
          A FlameTech dispatcher will call you back shortly. For immediate
          emergencies, please call directly.
        </p>
        <a
          href="tel:+15878343668"
          className="inline-block rounded-full bg-emergency text-ink-900 font-bold px-8 py-3 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
        >
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
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none transition-colors ${
            errors.issue
              ? "border-emergency focus:border-emergency"
              : "border-line-light focus:border-emergency"
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
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-full bg-emergency text-ink-900 px-8 py-3.5 font-bold text-sm hover:bg-emergency-deep hover:text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Request free estimate"}
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
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none transition-colors ${
          error
            ? "border-emergency focus:border-emergency"
            : "border-line-light focus:border-emergency"
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
