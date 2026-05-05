"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { homepageFaqs as items } from "@/lib/homepage-faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream-50 text-ink-900 py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="eyebrow-light justify-center mb-4 mx-auto">
            Common Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.025em] mt-4 leading-[1.02]">
            Frequently asked questions
          </h2>
          <p className="text-ink-500 mt-4 max-w-xl mx-auto">
            Quick answers to what Calgary homeowners ask us most. Don&apos;t see
            your question? Call us at{" "}
            <a
              href="tel:5878343668"
              className="text-emergency-deep font-bold"
            >
              587-834-3668
            </a>
            .
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className={`rounded-2xl bg-white border transition-colors ${
                  isOpen ? "border-primary" : "border-line-light"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base md:text-lg">
                    {item.q}
                  </span>
                  <Icon
                    name="add"
                    className={`text-primary text-xl transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 md:px-8 pb-6 text-ink-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
