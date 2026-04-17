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
    slug: "polyb-replacement-calgary-guide",
    title: "PolyB Replacement: A Calgary Homeowner's Guide",
    excerpt:
      "If your Calgary home was built between 1978 and 1995, you may have PolyB piping — and you may be at risk. Here is what to watch for and when to replace.",
    body: `
      <p>Polybutylene (PolyB) pipe was widely installed in Calgary homes from the late 1970s through the mid-1990s. It is typically grey in colour and fitted with plastic or metal crimp fittings. Over time, chlorine in the municipal water supply reacts with the pipe wall, causing it to become brittle and prone to failure without warning.</p>
      <h2>How to identify PolyB in your home</h2>
      <ul>
        <li>Grey flexible pipe entering the water meter</li>
        <li>Grey lines running to sinks, toilets, and fixtures</li>
        <li>Stamped markings like &quot;PB2110&quot; along the pipe</li>
      </ul>
      <h3>Why replacement matters now</h3>
      <p>Insurance carriers increasingly limit or deny coverage on homes with active PolyB plumbing. A single failure can cause tens of thousands of dollars in water damage. Proactive replacement restores insurability and eliminates the risk.</p>
      <blockquote>If you have PolyB, the question is not whether it will fail — it is when.</blockquote>
      <p>FlameTech handles full-home PolyB replacement with minimal drywall disruption. Call for a free estimate and we will map your plumbing, quote the job upfront, and get you on the schedule.</p>
    `,
    category: "Plumbing",
    category_slug: "plumbing",
    author: "FlameTech Team",
    read_time: 6,
    share_count: 1847,
  },
  {
    slug: "calgary-frozen-pipe-prevention",
    title: "Preventing Frozen Pipes Through a Calgary Winter",
    excerpt:
      "Calgary winters can drop pipe temperatures below the freezing point in hours. A short checklist to protect your plumbing before the cold snap hits.",
    body: `
      <p>When Calgary&apos;s temperature plunges — particularly during a Chinook-to-deep-freeze swing — pipes in exterior walls, crawlspaces, and unheated garages are the most vulnerable. A single frozen section can burst and flood a home within minutes of the thaw.</p>
      <h2>Before the cold snap</h2>
      <ul>
        <li>Disconnect and drain outdoor hoses; shut off exterior hose bibs from the interior</li>
        <li>Insulate pipes in the garage, crawlspace, and along exterior walls</li>
        <li>Open cabinet doors under sinks on exterior walls to let warm air circulate</li>
        <li>Keep the thermostat at or above 16°C, even when away</li>
      </ul>
      <h3>If a pipe freezes</h3>
      <p>Shut the main water valve first. Then apply gentle warmth — a hair dryer, heating pad, or warm towels — starting from the faucet end. Never use an open flame. If you cannot locate the frozen section, or if the pipe has already burst, call us.</p>
      <blockquote>A $40 pipe insulator is cheaper than a $40,000 flood.</blockquote>
      <p>FlameTech responds to emergency frozen and burst pipe calls across Calgary 24/7.</p>
    `,
    category: "Plumbing",
    category_slug: "plumbing",
    author: "FlameTech Team",
    read_time: 5,
    share_count: 923,
  },
  {
    slug: "tankless-vs-tank-water-heater-calgary",
    title: "Tankless vs Tank Water Heaters: Which Is Right for Calgary Homes?",
    excerpt:
      "A practical comparison between traditional hot water tanks and tankless on-demand heaters — including how Calgary&apos;s water and gas pricing affects the math.",
    body: `
      <p>The choice between a traditional tank and a tankless on-demand water heater comes down to household size, hot water usage patterns, available venting, and long-term budget. Both work well in Calgary — but each has trade-offs.</p>
      <h2>Traditional hot water tank</h2>
      <p>Lower upfront cost, simple install, and reliable performance. Typical service life is 10–12 years. Best for households with predictable, moderate hot water demand.</p>
      <h2>Tankless on-demand heater</h2>
      <p>Higher upfront cost and more demanding venting, but endless hot water and lower operating costs. Typical service life is 20+ years. Best for larger households, or homes with back-to-back shower demand.</p>
      <h3>What Calgary homeowners usually choose</h3>
      <ul>
        <li>Young families in a 2-bath home: traditional tank</li>
        <li>Large households or homes with teenagers: tankless</li>
        <li>Homeowners planning to stay 10+ years: tankless pays back</li>
      </ul>
      <blockquote>The right heater is the one that matches how you actually use hot water — not the one with the best spec sheet.</blockquote>
    `,
    category: "Heating",
    category_slug: "heating",
    author: "FlameTech Team",
    read_time: 7,
    share_count: 2314,
  },
  {
    slug: "high-efficiency-furnace-calgary",
    title: "High-Efficiency Furnaces: What Calgary Winters Demand",
    excerpt:
      "Calgary&apos;s cold months push a furnace harder than almost any other Canadian climate. A breakdown of why high-efficiency units pay for themselves here.",
    body: `
      <p>Furnaces in Calgary run harder, longer, and across more extreme temperature swings than in milder parts of the country. The difference between a mid-efficiency and a high-efficiency unit shows up on the gas bill every month of heating season.</p>
      <h2>The efficiency math</h2>
      <p>A mid-efficiency unit (80–83% AFUE) wastes roughly one in every five dollars of gas. A high-efficiency condensing unit (95–98% AFUE) captures almost all of the heat the gas produces. Over a Calgary winter, that is real money.</p>
      <h3>What to look for in a new install</h3>
      <ul>
        <li>Two-stage or modulating burner for quieter, steadier heat</li>
        <li>Variable-speed ECM blower for better air distribution</li>
        <li>Properly sized ductwork — oversized units short-cycle</li>
      </ul>
      <blockquote>An undersized furnace runs constantly. An oversized furnace short-cycles. Sizing is everything.</blockquote>
      <p>FlameTech performs a full load calculation before recommending a furnace size — never a guess based on square footage.</p>
    `,
    category: "Heating",
    category_slug: "heating",
    author: "FlameTech Team",
    read_time: 6,
    share_count: 1567,
  },
  {
    slug: "boiler-maintenance-schedule",
    title: "Annual Boiler Maintenance: What to Check and When",
    excerpt:
      "A properly maintained boiler runs for 20+ years. An unmaintained one fails on the coldest night of the year. Here is the maintenance schedule we run.",
    body: `
      <p>Boilers are quiet, efficient, and reliable — right up until they&apos;re not. The single biggest factor in boiler longevity is annual professional maintenance.</p>
      <h2>The annual service checklist</h2>
      <ul>
        <li>Combustion analysis and flue gas check</li>
        <li>Pressure and expansion tank inspection</li>
        <li>Pump and zone valve operation</li>
        <li>Heat exchanger inspection for scaling or corrosion</li>
        <li>Safety device testing (pressure relief, high-limit)</li>
      </ul>
      <h3>Between annual services</h3>
      <p>Watch for unusual noises (banging, whistling), a drop in system pressure, or radiators that no longer heat evenly. These are early warning signs — catching them in September saves a service call in January.</p>
      <blockquote>Boilers don&apos;t fail suddenly. They warn you. You just have to listen.</blockquote>
      <p>Book your annual boiler service with FlameTech before the heating season begins.</p>
    `,
    category: "Heating",
    category_slug: "heating",
    author: "FlameTech Team",
    read_time: 5,
    share_count: 1108,
  },
  {
    slug: "calgary-hard-water-softener-guide",
    title: "Why Calgary Homes Benefit from a Water Softener",
    excerpt:
      "Calgary water is hard. Very hard. What that does to your fixtures, appliances, and skin — and whether a softener is worth it for your home.",
    body: `
      <p>Calgary&apos;s municipal water measures between 14 and 16 grains per gallon of hardness — firmly in the &quot;very hard&quot; range. That mineral content affects every appliance and fixture in your home, and it adds up.</p>
      <h2>What hard water actually does</h2>
      <ul>
        <li>Scale buildup inside water heaters reduces efficiency and shortens service life</li>
        <li>Dishwashers and washing machines need more detergent to work properly</li>
        <li>Faucets, shower heads, and glass shower doors show permanent spotting</li>
        <li>Skin and hair feel drier; soap doesn&apos;t rinse cleanly</li>
      </ul>
      <h3>What a softener fixes</h3>
      <p>A properly sized softener removes the calcium and magnesium that cause hardness, extending appliance life, reducing soap and detergent use, and making fixtures easier to clean.</p>
      <blockquote>In Calgary, a water softener is not a luxury — it is a standard-of-living upgrade.</blockquote>
      <p>FlameTech installs and services residential water softeners sized to your household&apos;s actual usage.</p>
    `,
    category: "Air & Water",
    category_slug: "air-water",
    author: "FlameTech Team",
    read_time: 6,
    share_count: 802,
  },
  {
    slug: "drain-cleaning-signs",
    title: "Five Signs It's Time to Call About Your Drains",
    excerpt:
      "Blocked drains don&apos;t fix themselves — they get worse. The five warning signs that mean you should book professional drain cleaning now.",
    body: `
      <p>Most homeowners wait until a drain has fully blocked before calling a plumber. By then, the problem has usually spread deeper into the system. Here are the early signs worth acting on.</p>
      <h2>The five warning signs</h2>
      <ul>
        <li><strong>Slow drainage</strong> across multiple fixtures — suggests a mainline issue, not an isolated clog</li>
        <li><strong>Gurgling sounds</strong> from drains when you run water elsewhere</li>
        <li><strong>Persistent odors</strong> from drains even after cleaning the trap</li>
        <li><strong>Water backup</strong> into a tub or shower when the washing machine drains</li>
        <li><strong>Repeated clogs</strong> in the same fixture within weeks</li>
      </ul>
      <h3>Why DIY snaking often fails</h3>
      <p>Hardware-store augers clear the immediate blockage but leave the residue that caused it. Professional hydro-jetting scours the full diameter of the pipe and restores original flow.</p>
      <blockquote>A clog is a symptom. Clearing it without understanding the cause guarantees a repeat visit.</blockquote>
      <p>FlameTech offers camera inspection and full-diameter drain cleaning across Calgary and surrounding communities.</p>
    `,
    category: "Plumbing",
    category_slug: "plumbing",
    author: "FlameTech Team",
    read_time: 5,
    share_count: 456,
  },
  {
    slug: "heat-pump-alberta-guide",
    title: "Do Heat Pumps Actually Work in Alberta?",
    excerpt:
      "Modern cold-climate heat pumps have changed the math on home heating — even in Calgary. A plain-language explanation of when they make sense.",
    body: `
      <p>Heat pumps used to be a &quot;mild-climate-only&quot; technology. That is no longer true. Modern cold-climate heat pumps maintain efficient operation well below -25°C, which covers almost all of a typical Calgary winter.</p>
      <h2>How a cold-climate heat pump works</h2>
      <p>A heat pump moves heat rather than generating it. In winter, it extracts heat from outdoor air and delivers it indoors. In summer, it runs in reverse and provides air conditioning. One unit, two seasons.</p>
      <h3>When it makes sense in Calgary</h3>
      <ul>
        <li>Homes with an aging furnace and no AC — pair a heat pump with a new furnace for dual-fuel operation</li>
        <li>Homes planning to electrify over time</li>
        <li>Homeowners targeting lower long-term operating costs</li>
      </ul>
      <blockquote>The right setup for Calgary is usually a heat pump for mild-to-moderate temperatures and a furnace for deep cold — a &quot;dual-fuel&quot; system.</blockquote>
      <p>FlameTech designs and installs cold-climate heat pump systems matched to your home&apos;s actual load and existing mechanicals.</p>
    `,
    category: "Heating",
    category_slug: "heating",
    author: "FlameTech Team",
    read_time: 8,
    share_count: 1342,
  },
];

async function runSeed() {
  await sql`DROP TABLE IF EXISTS articles`;
  await sql`
    CREATE TABLE articles (
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
