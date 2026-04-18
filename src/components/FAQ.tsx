"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

const items = [
  {
    q: "How fast can a technician be on-site?",
    a: "For most Calgary and surrounding-area addresses, our typical response time is 60–90 minutes for priority and emergency calls during service hours. For non-urgent work, we'll book you in at the next available slot and confirm the window before we dispatch.",
  },
  {
    q: "Do you charge for estimates?",
    a: "No. Estimates for residential plumbing, heating, AC, and water-treatment work are free — and we give you the full price in writing before any work begins. You'll know exactly what you're paying.",
  },
  {
    q: "Do you offer financing?",
    a: "Yes, we partner with Financeit to offer flexible monthly-payment options for larger installs (boilers, furnaces, tankless heaters, water softeners, PolyB replacements). We'll walk you through the rates and terms before you commit.",
  },
  {
    q: "What areas do you service?",
    a: "We serve all of Calgary (NE, NW, SE, SW) plus Airdrie, Chestermere, Cochrane, Okotoks, Carstairs, Cooper's Crossing, Evergreen, Signal Hill, and most surrounding southern Alberta communities. If you're unsure, just call — we'll confirm whether we can cover your address.",
  },
  {
    q: "Are your technicians licensed and insured?",
    a: "Yes — every FlameTech technician is fully licensed, insured, and bonded, and all work is performed to Alberta's plumbing and gas code. We're BBB accredited and our owners are Red Seal–certified journeypersons with 45+ years of combined trade experience.",
  },
  {
    q: "Can you replace PolyB piping without tearing up the whole house?",
    a: "In most Calgary homes, yes. We map out the existing piping, plan the re-route, and minimize drywall removal wherever possible. You'll get an upfront quote that includes any patching needed, so there are no surprises.",
  },
  {
    q: "Do you service older boilers and furnaces, or only new installs?",
    a: "Both. We service every major residential boiler and furnace brand, including older units. If a repair is the right call, we'll quote the repair. If a replacement makes more financial sense, we'll tell you plainly and show you the math.",
  },
];

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
