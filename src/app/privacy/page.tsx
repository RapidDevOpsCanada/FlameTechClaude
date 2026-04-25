import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import PageHeader from "@/components/PageHeader";
import type { Metadata } from "next";

const SITE_URL = "https://flame-tech-claude-xd6r.vercel.app";

export const metadata: Metadata = {
  title: "Privacy Policy | FlameTech Plumbing & Heating",
  description:
    "How FlameTech Plumbing & Heating Ltd. collects, uses, and protects personal information submitted through our website and during service calls.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

const LAST_UPDATED = "April 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we handle your information."
        description={`Last updated ${LAST_UPDATED}. FlameTech Plumbing & Heating Ltd. operates this website and services. This policy explains what we collect, why, and how we keep it safe.`}
      />
      <main className="bg-cream-50 text-ink-900 py-20 border-t border-line-light light-surface">
        <div className="max-w-3xl mx-auto px-6 md:px-10">
          <article className="prose-privacy space-y-6 text-[17px] text-ink-700 leading-[1.8]">
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-2 mb-4">
                1. Information we collect
              </h2>
              <p>
                When you request a quote, book a service, or contact us
                through the website, we collect the information you provide
                — typically your name, phone number, email address, service
                address, and a description of the work you need done. If you
                call us, we record only what we need to dispatch a technician
                and follow up.
              </p>
              <p>
                Our website also receives standard log data (IP address,
                browser type, referring URL, pages viewed) automatically when
                pages are loaded. We do not currently run third-party
                analytics or advertising trackers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                2. How we use your information
              </h2>
              <p>
                Your information is used to respond to your inquiry, schedule
                service, send written quotes, dispatch a technician, take
                payment, register manufacturer warranties on equipment we
                install, and handle follow-up support. We may contact you by
                phone, text, or email for these purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                3. Sharing with third parties
              </h2>
              <p>
                We do not sell or rent your personal information. We share it
                only with service providers who help us operate the business:
              </p>
              <ul className="list-disc pl-6 space-y-2 my-4">
                <li>
                  <strong>Hosting and database:</strong> Vercel and Neon
                  Postgres host the website and store form submissions
                  securely.
                </li>
                <li>
                  <strong>Manufacturer warranty registration:</strong> Boiler,
                  furnace, and water heater manufacturers (Navien, IBC,
                  Bradford White, AirEase, etc.) when registering equipment
                  warranties on your behalf.
                </li>
                <li>
                  <strong>Financing partner:</strong> Financeit, when you
                  choose to apply for monthly-payment financing on a job we
                  quote.
                </li>
                <li>
                  <strong>Permits and inspections:</strong> The City of
                  Calgary and Alberta safety authorities, when we pull gas,
                  electrical, or plumbing permits for work at your property.
                </li>
              </ul>
              <p>
                We may also disclose information when required by law (court
                order, subpoena, or to protect the safety of a person or
                property).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                4. Cookies
              </h2>
              <p>
                The website uses minimal cookies needed for the site to
                function (for example, remembering form state during a
                submission). We do not currently use advertising,
                cross-site-tracking, or analytics cookies. If that changes,
                this policy will be updated and a banner will be added.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                5. Data retention
              </h2>
              <p>
                Quote requests and service-call records are retained for as
                long as needed to provide warranty support and for normal
                business and tax record-keeping (typically seven years in
                Alberta). After that, records are deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                6. Your rights
              </h2>
              <p>
                Under PIPEDA (Personal Information Protection and Electronic
                Documents Act) and Alberta&apos;s PIPA, you have the right to
                ask what information we hold about you, request corrections
                if it&apos;s wrong, and ask us to delete your information when
                we no longer have a legal or service-related reason to keep
                it. To exercise any of these rights, contact us using the
                details below.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                7. Security
              </h2>
              <p>
                We use industry-standard practices to protect your
                information — encrypted connections (HTTPS) for the website,
                managed cloud hosting with restricted access, and access
                controls limiting who on our team can see your records. No
                system is perfect, but we treat your information as
                seriously as we treat your home.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                8. Changes to this policy
              </h2>
              <p>
                If we update this policy materially, we&apos;ll change the
                date at the top of the page and, where appropriate, notify
                you by email or a notice on the site. Continuing to use the
                site after a change means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-ink-900 mt-10 mb-4">
                9. Contact us
              </h2>
              <p>
                Questions about this policy or about information we hold
                about you? Reach out:
              </p>
              <ul className="list-none pl-0 space-y-1 my-4">
                <li>
                  <strong>FlameTech Plumbing &amp; Heating Ltd.</strong>
                </li>
                <li>Woodbine Blvd, Calgary, Alberta</li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+15878343668"
                    className="text-emergency-deep underline underline-offset-2"
                  >
                    (587) 834-3668
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@flametechplumbing.ca"
                    className="text-emergency-deep underline underline-offset-2"
                  >
                    info@flametechplumbing.ca
                  </a>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
