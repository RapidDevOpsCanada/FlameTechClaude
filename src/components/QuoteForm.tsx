"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Icon from "@/components/Icon";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm({
  issuePlaceholder,
}: {
  issuePlaceholder?: string;
} = {}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      issue: (form.elements.namedItem("issue") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await res.json();
      if (!res.ok || !body.ok) throw new Error(body.error || "Request failed");
      setStatus("success");
      form.reset();
      // Send the user to the dedicated /thank-you route. The inline success
      // card below stays as a fallback in case routing fails.
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
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
          href="tel:5878343668"
          className="inline-block rounded-full bg-emergency text-ink-900 font-bold px-8 py-3 text-sm hover:bg-emergency-deep hover:text-white transition-colors"
        >
          Call 587-834-3668 now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Full name" name="name" required />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          placeholder="403-555-0100"
        />
      </div>
      <Field
        label="Service address"
        name="address"
        required
        placeholder="Street, City, Postal Code"
      />
      <div>
        <label
          htmlFor="issue"
          className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 mb-2 block"
        >
          Describe the issue
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          required
          placeholder={
            issuePlaceholder ??
            "e.g. Water heater not working, tap leaking, furnace making noise…"
          }
          className="w-full rounded-xl border border-line-light bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-emergency transition-colors"
        />
      </div>
      {status === "error" && (
        <p className="text-xs text-emergency-deep">
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
          <a href="tel:5878343668" className="text-emergency font-bold">
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
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
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
        className="w-full rounded-xl border border-line-light bg-white px-4 py-3 text-sm text-ink-900 focus:outline-none focus:border-emergency transition-colors"
      />
    </div>
  );
}
