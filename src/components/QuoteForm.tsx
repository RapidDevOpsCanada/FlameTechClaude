"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
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
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-primary bg-primary/5 p-10 text-center">
        <span className="material-symbols-outlined text-primary text-5xl mb-4 block">
          check_circle
        </span>
        <h3 className="text-2xl font-headline font-bold tracking-tight mb-3">
          Request received.
        </h3>
        <p className="text-technical-label mb-6">
          A FlameTech dispatcher will call you back shortly. For immediate
          emergencies, please call directly.
        </p>
        <a
          href="tel:5878343668"
          className="inline-block bg-emergency text-white font-technical font-bold px-8 py-4 text-xs uppercase tracking-widest hover:brightness-110 transition-all"
        >
          Call 587-834-3668 Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label="Full Name" name="name" required />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="403-555-0100"
        />
      </div>
      <Field
        label="Service Address"
        name="address"
        required
        placeholder="Street, City, Postal Code"
      />
      <div>
        <label
          htmlFor="issue"
          className="mono-label text-primary mb-2 block"
        >
          Describe the Issue
        </label>
        <textarea
          id="issue"
          name="issue"
          rows={4}
          required
          placeholder="e.g. Water heater not working, tap leaking, furnace making noise…"
          className="w-full border border-blueprint-grid bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      {status === "error" && (
        <p className="font-technical text-xs text-emergency">
          {errorMsg || "Submission failed. Please call 587-834-3668 directly."}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-primary text-white px-10 py-5 font-technical font-bold text-xs tracking-widest hover:bg-accent transition-all uppercase disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Request Free Estimate"}
        </button>
        <p className="mono-label text-technical-label">
          Or call{" "}
          <a href="tel:5878343668" className="text-primary font-bold">
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
      <label htmlFor={name} className="mono-label text-primary mb-2 block">
        {label}
        {required && <span className="text-emergency">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full border border-blueprint-grid bg-white px-4 py-3 text-sm font-body focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
