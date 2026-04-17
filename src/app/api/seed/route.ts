import { NextResponse } from "next/server";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

type SeedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  category: string;
  category_slug: string;
  author: string;
  read_time: number;
  share_count: number;
};

const articles: SeedArticle[] = [
  {
    slug: "sonic-leak-mapping-2026",
    title: "Sonic Leak Mapping: The 94.8% Precision Standard",
    excerpt:
      "How non-invasive acoustic imaging replaced guesswork in residential leak detection — and what that means for deployment timelines.",
    body: `
      <p>Traditional leak detection relied on visual inspection and invasive access cuts. The FlameTech sonic mapping protocol deploys a 32-node acoustic array across the thermal shell, triangulating pressure anomalies with sub-millimeter precision.</p>
      <h2>Why acoustic imaging wins</h2>
      <p>Sonic signatures travel through solid matter with predictable attenuation curves. Our proprietary calibration model compares the live waveform against the as-built blueprint and flags deviations that exceed the 0.15 dB tolerance band.</p>
      <p>In field deployments across 2025, the sonic array identified <strong>94.8%</strong> of active leaks before visible water intrusion occurred. The remaining 5.2% were traced to vapor-phase escapes outside the acoustic detection envelope.</p>
      <h3>Deployment workflow</h3>
      <ul>
        <li>Phase 01 — Shell survey and node placement (45 min)</li>
        <li>Phase 02 — Pressurization sweep and waveform capture</li>
        <li>Phase 03 — Diagnostic overlay and report generation</li>
      </ul>
      <blockquote>Zero invasive cuts. Zero drywall replacement. Full diagnostic coverage in under two hours.</blockquote>
      <p>The result is a blueprint the homeowner can actually read: every pressure anomaly mapped, every vulnerability ranked, every next step quantified.</p>
    `,
    category: "Diagnostics",
    category_slug: "diagnostics",
    author: "Dr. Rena Okafor",
    read_time: 6,
    share_count: 1847,
  },
  {
    slug: "teal-polymer-pressure-ratings",
    title: "Teal-Spec Polymer: Pressure Ratings in Residential Arrays",
    excerpt:
      "A field-level breakdown of the high-pressure teal polymer compound and why it outperforms legacy PEX at thermal extremes.",
    body: `
      <p>Teal-spec polymer is a cross-linked polyethylene variant engineered for sustained pressure loads above 180 PSI at elevated temperatures. It is the default conduit material in FlameTech residential deployments.</p>
      <h2>Pressure performance envelope</h2>
      <p>At 140°F ambient, standard PEX-B loses approximately 18% of its burst rating. Teal-spec polymer loses less than 4% under the same conditions, due to the modified crosslink density and fiber-reinforced core.</p>
      <h3>Where we specify it</h3>
      <ul>
        <li>Primary hot water trunk lines above 3/4"</li>
        <li>Radiant floor heating loops</li>
        <li>High-flow branch risers serving multi-fixture bathroom groups</li>
      </ul>
      <p>The teal pigment is not cosmetic — the compound includes a UV-stabilizing additive that extends the conduit's service life when exposed to attic daylight during maintenance access.</p>
      <blockquote>Specification drives longevity. The material choice is the deployment choice.</blockquote>
      <p>For full engineering data sheets, see the FlameTech specification archive.</p>
    `,
    category: "Materials",
    category_slug: "materials",
    author: "Marcus Vale",
    read_time: 5,
    share_count: 923,
  },
  {
    slug: "emergency-deployment-40-minute-target",
    title: "The 40-Minute Target: Emergency Deployment Protocol",
    excerpt:
      "Breaking down the crisis response workflow that keeps our emergency unit arriving on-site within 40 minutes of sensor alert.",
    body: `
      <p>When an integrated telemetry node flags a pressure spike or thermal anomaly, the emergency response clock starts. Our protocol targets on-site arrival within 40 minutes — here's how.</p>
      <h2>The three-phase response chain</h2>
      <p>The dispatch chain is automated from alert to wheels-rolling. Human intervention happens only where human judgment outperforms the decision model.</p>
      <h3>Phase 1: Alert classification (under 60 seconds)</h3>
      <p>The telemetry hub scores incoming alerts against a severity matrix and auto-dispatches the nearest unit for any alert above tier-3. Tier-1 alerts interrupt any non-critical work in progress.</p>
      <h3>Phase 2: Transit and pre-arrival prep</h3>
      <p>The dispatched technician receives the diagnostic overlay in-vehicle, reviews the sensor history, and stages the correct toolkit before arrival. No time is lost on-site to pattern matching.</p>
      <h3>Phase 3: On-site triage</h3>
      <ul>
        <li>Immediate pressure isolation</li>
        <li>Damage containment</li>
        <li>Stabilization and scheduling of permanent repair</li>
      </ul>
      <blockquote>The 40-minute target is not a marketing claim. It is the engineered output of a deliberately designed response system.</blockquote>
    `,
    category: "Operations",
    category_slug: "operations",
    author: "Elena Thorne",
    read_time: 7,
    share_count: 2314,
  },
  {
    slug: "thermal-telemetry-smart-home",
    title: "Integrated Thermal Telemetry for the Smart Residence",
    excerpt:
      "Embedded sensors in every high-pressure node deliver real-time thermal data to the infrastructure hub. Here is the architecture.",
    body: `
      <p>Modern residential plumbing is no longer a closed system. FlameTech deploys embedded telemetry at every high-pressure node, creating a live thermal model of the building envelope.</p>
      <h2>Sensor placement strategy</h2>
      <p>Each junction, manifold, and terminal fixture receives a low-power wireless sensor rated for continuous operation at temperatures between -20°F and 220°F. The mesh topology ensures single-node failures do not blind the system.</p>
      <h3>What the data reveals</h3>
      <ul>
        <li>Micro-leaks that would not trigger a pressure alarm</li>
        <li>Thermal drift in insulation performance over seasons</li>
        <li>Unexpected usage patterns that indicate fixture failure</li>
      </ul>
      <blockquote>The infrastructure is the diagnostic. Every pipe reports its own health in real time.</blockquote>
      <p>Homeowners access the thermal model through a unified hub — no app required on individual devices, no separate login for the plumber on-call.</p>
      <p>Integration with existing home automation controllers is handled via an open telemetry bridge. No vendor lock-in. No black boxes.</p>
    `,
    category: "Telemetry",
    category_slug: "telemetry",
    author: "Dr. Rena Okafor",
    read_time: 8,
    share_count: 1567,
  },
  {
    slug: "laser-aligned-installation-process",
    title: "Laser-Aligned Installation: Zero-Stress Mounting Explained",
    excerpt:
      "Why conduit stress at the mount point is the leading cause of long-term plumbing failure — and how laser alignment eliminates it.",
    body: `
      <p>A pipe does not fail in the middle. It fails at the mount. Thermal cycling, combined with even minor misalignment at installation, produces micro-fractures at the fastener point that progress over years until they breach.</p>
      <h2>The stress vector problem</h2>
      <p>When a conduit is fastened off-axis, every pressure pulse bends the material slightly. Repeated millions of times per year, this becomes fatigue loading. Legacy installation practice tolerates up to 3° of off-axis mounting. That is too much.</p>
      <h3>Laser alignment in practice</h3>
      <p>FlameTech deploys a dual-axis laser rig during mounting. The conduit centerline is surveyed against the fastener plane, and the installation is accepted only when off-axis error drops below 0.2°.</p>
      <ul>
        <li>Survey time per mount: approximately 90 seconds</li>
        <li>Rejection rate on first attempt: 12%</li>
        <li>Lifetime failure rate at the mount: statistically undetectable</li>
      </ul>
      <blockquote>The extra 90 seconds per mount buys 40 years of reliability.</blockquote>
    `,
    category: "Engineering",
    category_slug: "engineering",
    author: "Julian Sterling",
    read_time: 5,
    share_count: 1108,
  },
  {
    slug: "radiant-floor-hydronics-blueprint",
    title: "Radiant Floor Hydronics: The Blueprint-First Approach",
    excerpt:
      "Why radiant floor systems live or die on the blueprint phase, and the six variables we model before a single pipe is cut.",
    body: `
      <p>A radiant floor system is a heat exchanger pretending to be a floor. Design errors in the blueprint phase compound once the concrete pour is complete — and at that point, corrections cost five figures.</p>
      <h2>The six variables we model</h2>
      <ul>
        <li>Floor surface area and zone boundaries</li>
        <li>Subfloor thermal mass and insulation R-value</li>
        <li>Finished surface material (tile, engineered hardwood, concrete)</li>
        <li>Expected ambient setpoint variance across seasons</li>
        <li>Boiler or heat pump output curve</li>
        <li>Manifold placement and loop length limits</li>
      </ul>
      <h3>Why loop length matters</h3>
      <p>Each loop has a maximum length before pressure drop exceeds circulator capacity. Exceed it and the distal section runs cold. We cap single-loop runs at 300 feet of teal-spec polymer.</p>
      <blockquote>The blueprint phase is the cheapest phase. Never skip it. Never shortcut it.</blockquote>
      <p>Homeowners who invest in a proper hydronic blueprint see commissioning time drop by roughly half and post-install adjustment calls drop to nearly zero.</p>
    `,
    category: "Engineering",
    category_slug: "engineering",
    author: "Marcus Vale",
    read_time: 9,
    share_count: 802,
  },
  {
    slug: "iso-9001-deployment-audit",
    title: "Inside the ISO-9001 Deployment Audit",
    excerpt:
      "A walk-through of the certification audit that validates FlameTech deployment procedures at every residential installation.",
    body: `
      <p>ISO-9001 is often treated as a paperwork exercise. At FlameTech, it is a live operating standard — every deployment produces an audit record, and every audit record is reviewable by the client.</p>
      <h2>What the audit actually checks</h2>
      <p>The audit verifies that the deployment followed the published protocol, that material lot numbers match the specification, that tolerance measurements fall inside the acceptance band, and that any deviations were documented at the time they occurred.</p>
      <h3>Why homeowners benefit</h3>
      <ul>
        <li>Full traceability of every component in the system</li>
        <li>Documented baseline for future diagnostics</li>
        <li>Insurance and resale value defensibility</li>
      </ul>
      <blockquote>If it is not audited, it did not happen. That is the standard.</blockquote>
      <p>Client access to the audit record is included with every FlameTech deployment. The record is preserved for the life of the installation.</p>
    `,
    category: "Operations",
    category_slug: "operations",
    author: "Elena Thorne",
    read_time: 6,
    share_count: 456,
  },
];

async function runSeed() {
  await sql`
    CREATE TABLE IF NOT EXISTS articles (
      id SERIAL PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      excerpt TEXT NOT NULL,
      body TEXT NOT NULL,
      category TEXT NOT NULL,
      category_slug TEXT NOT NULL,
      author TEXT NOT NULL,
      read_time INTEGER NOT NULL DEFAULT 5,
      share_count INTEGER NOT NULL DEFAULT 0,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;

  await sql`DELETE FROM articles`;

  for (const a of articles) {
    await sql`
      INSERT INTO articles
        (slug, title, excerpt, body, category, category_slug, author, read_time, share_count)
      VALUES
        (${a.slug}, ${a.title}, ${a.excerpt}, ${a.body}, ${a.category},
         ${a.category_slug}, ${a.author}, ${a.read_time}, ${a.share_count})
    `;
  }

  const rows = await sql`SELECT COUNT(*)::int AS count FROM articles`;
  return rows[0]?.count ?? 0;
}

export async function GET() {
  try {
    const count = await runSeed();
    return NextResponse.json({
      ok: true,
      seeded: count,
      message: `Seeded ${count} articles.`,
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
}
