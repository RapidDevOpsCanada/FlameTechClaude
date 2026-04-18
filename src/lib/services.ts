export type RichImage = { src: string; alt: string };

export type RichItem = {
  heading?: string;
  body: string;
  image?: RichImage;
};

export type RichSection = {
  heading: string;
  intro?: string;
  items: RichItem[];
};

export type RichPromo = {
  heading: string;
  image: RichImage;
  groups: { heading: string; items: string[] }[];
  disclaimer?: string;
};

export type RichFAQ = {
  heading: string;
  items: { q: string; a: string }[];
};

export type RichContent = {
  sections?: RichSection[];
  promo?: RichPromo;
  faq?: RichFAQ;
};

export type ServicePage = {
  slug: string;
  category: "Plumbing" | "Heating" | "Air" | "Water";
  icon: string;
  title: string;
  /** First hero paragraph (strong lead). */
  lead: string;
  /** Fallback short description used by generic template. */
  intro: string;
  /** Additional hero paragraphs rendered under the lead. */
  heroBody?: string[];
  /** Small kicker/subhead shown under hero body (e.g. "Satisfaction Guaranteed"). */
  heroSubhead?: string;
  /** Badge image shown next to the hero subhead (e.g. 5-star reviews). */
  heroBadgeImage?: RichImage;
  features: string[];
  bullets: { t: string; d: string }[];
  callout?: string;
  heroImage?: RichImage;
  richContent?: RichContent;
  /** SEO */
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  /** Optional image rendered below a specific richContent section. Key = section heading. */
  sectionImages?: Record<string, RichImage>;
  /** Per-service sticky sidebar copy (falls back to generic defaults). */
  sidebar?: {
    title?: string;
    subtitle?: string;
    bullets?: string[];
  };
  /** Stats strip rendered directly under the hero (4 items). */
  stats?: { number: string; label: string; icon?: string }[];
  /** Short noun for the quote-form heading ("AC", "boiler", "drain"). */
  quoteFormLabel?: string;
  /**
   * Monthly financing-from price shown in the hero as a subtle chip.
   * Only set this for larger-ticket services (AC, furnaces, boilers,
   * heat pumps, PolyB, tankless heaters, water softeners, hot water
   * tanks). Leave undefined for service calls / repairs / small jobs.
   */
  financing?: {
    fromAmount: string; // e.g. "$89/mo"
    detail?: string; // e.g. "OAC via Financeit"
  };
};

export const services: ServicePage[] = [
  // PLUMBING
  {
    slug: "bathroom-plumbing",
    category: "Plumbing",
    icon: "bathroom",
    title: "Bathroom Plumbing Calgary",
    lead: "Sinks, toilets, showers, and full bathroom retrofits done right.",
    intro:
      "From a leaking faucet to a ground-up ensuite retrofit, our Calgary plumbers handle every fixture and rough-in to Alberta code, with pricing agreed up front.",
    features: [
      "Faucet & fixture installation",
      "Toilet repair and replacement",
      "Rough-in for bathroom renovations",
      "Shower and tub upgrades",
      "Water supply and drain tie-ins",
    ],
    bullets: [
      {
        t: "Code-compliant installs",
        d: "Every fixture set to Alberta plumbing code — protecting your home and your insurance.",
      },
      {
        t: "Clean, careful work",
        d: "Drop cloths, shoe covers, and debris removal. We leave your bathroom cleaner than we found it.",
      },
    ],
  },
  {
    slug: "shower-plumbing",
    category: "Plumbing",
    icon: "shower",
    title: "Shower Plumbing Calgary",
    lead: "Shower installs, valve replacements, and leak diagnosis.",
    intro:
      "Mixing valves, pressure-balance cartridges, thermostatic controls — we service and install the full range of shower plumbing for Calgary homes.",
    features: [
      "Pressure-balance & thermostatic valves",
      "Shower head and hand-held combos",
      "Body jets and custom shower tiles",
      "Leak diagnosis behind tile walls",
      "Valve rough-in for new builds",
    ],
    bullets: [
      {
        t: "Scald-protection upgrades",
        d: "Older homes benefit from anti-scald pressure-balance valves — we'll recommend when it's worth it.",
      },
      {
        t: "Minimal tile disruption",
        d: "We plan access panels carefully; if tile work is needed, we coordinate with your tiler.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    category: "Plumbing",
    icon: "water_damage",
    title: "Drain Cleaning Calgary",
    lead: "Clogs, slow drains, and camera inspections across Calgary.",
    intro:
      "Slow drains rarely fix themselves. Our drain cleaning uses professional augers and camera inspection to clear the blockage and show you what caused it.",
    features: [
      "Kitchen and bathroom drain clearing",
      "Mainline and stack clearing",
      "Camera inspection with video record",
      "Root intrusion diagnosis",
      "Hydro-jetting on severe lines",
    ],
    bullets: [
      {
        t: "Camera-confirmed results",
        d: "We verify the drain is clear with a camera pass — no guessing whether the job's done.",
      },
      {
        t: "Honest repair advice",
        d: "If a repeat clog is a sign of bigger issues (belly, break), we'll tell you plainly.",
      },
    ],
  },
  {
    slug: "emergency-plumbing",
    category: "Plumbing",
    icon: "contact_emergency",
    title: "Emergency Plumbing Calgary",
    lead: "Burst pipes, active leaks, and urgent repairs when it can't wait.",
    intro:
      "When water is pouring or a fixture has failed, we prioritize your call, get a technician en route, and work to contain damage while we fix the cause.",
    features: [
      "Burst and frozen pipe repairs",
      "Active leak containment",
      "Emergency shutoff installs",
      "Water heater failures",
      "Sewer backup response",
    ],
    bullets: [
      {
        t: "Priority dispatch",
        d: "Urgent calls move to the front of the queue so we can minimize damage.",
      },
      {
        t: "Fair emergency pricing",
        d: "No surprise surcharges. We quote before we start — even in a crisis.",
      },
    ],
    callout: "Water damage spreads fast. Call 587-834-3668 the moment you notice a leak.",
  },
  {
    slug: "polyb-plumbing",
    category: "Plumbing",
    icon: "swap_horiz",
    title: "PolyB Replacement Calgary",
    lead: "Full-home polybutylene pipe replacement for 1980s and '90s homes.",
    intro:
      "PolyB piping was installed across Calgary from the late 1970s through the mid-'90s. It degrades silently and can fail without warning. We plan, quote, and replace it with minimal disruption.",
    features: [
      "Full-home PolyB re-pipe",
      "Minimal drywall removal",
      "Upgraded PEX or copper",
      "Insurance-grade documentation",
      "Coordination with drywallers",
    ],
    bullets: [
      {
        t: "Insurance-first approach",
        d: "Carriers increasingly decline to cover active PolyB. A documented replacement restores insurability.",
      },
      {
        t: "Clear, staged pricing",
        d: "We walk the home, build a plan, and quote in writing before any work starts.",
      },
    ],
  },
  // HEATING
  {
    slug: "boiler-installation",
    category: "Heating",
    icon: "build",
    title: "Boiler Installation Calgary",
    lead: "New high-efficiency boilers sized to your home's actual load.",
    intro:
      "A properly sized boiler runs quieter, uses less gas, and lasts longer. We perform a full load calculation before recommending a unit — never a guess off square footage.",
    features: [
      "Full heat-loss load calculation",
      "High-efficiency condensing boilers",
      "Radiant floor and zoned hydronic",
      "Modulating combustion setups",
      "Commissioning and handover walk-through",
    ],
    bullets: [
      {
        t: "Sized for Calgary winters",
        d: "We design for sustained -30°C cold snaps, not generic climate zones.",
      },
      {
        t: "Quiet, steady heat",
        d: "Modulating burners avoid the cycle-and-bang problem older boilers are known for.",
      },
    ],
  },
  {
    slug: "boiler-repair",
    category: "Heating",
    icon: "handyman",
    title: "Boiler Repair Calgary",
    lead: "Fast diagnosis and honest repair advice for failing boilers.",
    intro:
      "When your boiler fails on the coldest night of the year, you need a clear diagnosis and a real recommendation. We'll tell you whether to repair or replace.",
    features: [
      "Pressure and leak diagnosis",
      "Circulator pump repair",
      "Zone valve and thermostat service",
      "Ignition and combustion tuning",
      "Expansion tank troubleshooting",
    ],
    bullets: [
      {
        t: "Honest repair-or-replace advice",
        d: "If a repair doesn't make financial sense, we'll say so and show you the math.",
      },
      {
        t: "Stocked service vehicles",
        d: "Common parts on board so most repairs finish the same day.",
      },
    ],
  },
  {
    slug: "boiler-service",
    category: "Heating",
    icon: "tune",
    title: "Boiler Service Calgary",
    lead: "Annual maintenance that keeps your boiler running for 20+ years.",
    intro:
      "Boilers don't fail suddenly — they give warning signs. Annual service catches them in September instead of January.",
    features: [
      "Combustion analysis",
      "Pressure and expansion tank check",
      "Pump and zone valve testing",
      "Heat exchanger inspection",
      "Safety device verification",
    ],
    bullets: [
      {
        t: "Pre-season timing",
        d: "Book in August–October to beat the winter rush and catch issues before they matter.",
      },
      {
        t: "Documented service record",
        d: "Keeps warranty valid and supports insurance claims if anything ever goes wrong.",
      },
    ],
  },
  {
    slug: "high-efficiency-furnaces",
    category: "Heating",
    icon: "local_fire_department",
    title: "High-Efficiency Furnace Installs Calgary",
    lead: "95–98% AFUE condensing furnaces built for Alberta winters.",
    intro:
      "Calgary runs furnaces harder than almost any Canadian climate. The jump from mid-efficiency to high-efficiency pays back on the gas bill every heating month.",
    features: [
      "Modulating two-stage burners",
      "Variable-speed ECM blowers",
      "Ductwork assessment",
      "Properly sized replacement",
      "Smart thermostat integration",
    ],
    bullets: [
      {
        t: "Real load calculation",
        d: "We measure your home's heat loss rather than sizing by square footage alone.",
      },
      {
        t: "Cleaner commissioning",
        d: "We verify airflow and combustion after install — not just that it fires up.",
      },
    ],
  },
  {
    slug: "garage-heaters",
    category: "Heating",
    icon: "garage",
    title: "Garage Heater Installs Calgary",
    lead: "Warm, safe, code-compliant garage heat for Calgary homes.",
    intro:
      "A heated garage in Calgary is a workshop, a dog-walking staging area, and a faster winter morning all at once. We size, vent, and install to code.",
    features: [
      "Tube and unit heater sizing",
      "Gas line extensions",
      "Proper combustion-air venting",
      "Thermostat and safety controls",
      "Insulation upgrade guidance",
    ],
    bullets: [
      {
        t: "Code-compliant venting",
        d: "Combustion air and exhaust are critical — we follow Alberta gas code exactly.",
      },
      {
        t: "Sized to your insulation",
        d: "An uninsulated garage eats BTUs. We'll recommend insulation first when it's worth it.",
      },
    ],
  },
  {
    slug: "heat-pumps",
    category: "Heating",
    icon: "ac_unit",
    title: "Cold-Climate Heat Pumps Calgary",
    lead: "Modern dual-fuel heat pump systems that handle Alberta winters.",
    intro:
      "Cold-climate heat pumps maintain efficient operation well below -25°C, pairing with a furnace for deep-cold backup. One system, both seasons.",
    features: [
      "Cold-climate rated heat pumps",
      "Dual-fuel (heat pump + furnace) setups",
      "Summer air conditioning in the same unit",
      "Load-matched sizing",
      "Smart crossover controls",
    ],
    bullets: [
      {
        t: "One system, two seasons",
        d: "Heat pumps run in reverse in summer, replacing a separate AC install.",
      },
      {
        t: "Lower long-term operating cost",
        d: "Especially compelling for homeowners planning to electrify over time.",
      },
    ],
  },
  // AIR
  {
    slug: "air-conditioning",
    category: "Air",
    icon: "ac_unit",
    title: "Air Conditioning Calgary – Expert AC Services",
    lead:
      "Flame Tech Plumbing & Heating is a trusted name in Calgary for all things heating and cooling.",
    heroBody: [
      "We're not just another company; we're your neighbours, dedicated to providing reliable and efficient air conditioning services to homes across the city.",
      "Our deep understanding of Calgary's unique climate ensures we provide solutions tailored to your specific needs.",
    ],
    heroSubhead: "Satisfaction Guaranteed",
    heroBadgeImage: {
      src: "/images/REVIEWS1.png",
      alt: "5-star customer reviews",
    },
    intro:
      "Flame Tech Plumbing & Heating is a trusted name in Calgary for all things heating and cooling.",
    features: [
      "Central AC installation",
      "AC repair for all makes & models",
      "AC tune-ups and maintenance",
      "Emergency air conditioning services",
      "Ductless mini-split systems",
      "Smart thermostat integration",
    ],
    bullets: [
      {
        t: "Local Calgary AC experts",
        d: "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands our climate places on your AC system.",
      },
      {
        t: "Licensed & insured technicians",
        d: "Your peace of mind is our priority. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards.",
      },
    ],
    heroImage: {
      src: "/images/2025/12/air-ease-ac.png",
      alt: "Air Ease Air Conditioning Unit",
    },
    seoTitle:
      "Calgary Air Conditioning Experts - Get Upto 12 Years Warranty!",
    seoDescription:
      "Expert air conditioning services in Calgary. AC installation, repair & maintenance. Licensed technicians. Call Flame Tech today!",
    seoKeywords: [
      "air conditioning Calgary",
      "AC repair Calgary",
      "AC installation Calgary",
      "HVAC Calgary",
      "ductless mini-split Calgary",
      "FlameTech Plumbing Heating",
    ],
    sidebar: {
      title: "Calgary Air Conditioning",
      subtitle:
        "Free estimates on installs, repairs, and maintenance — any make, any model.",
      bullets: [
        "12-year AirEase parts & labor warranty",
        "Licensed & insured HVAC technicians",
        "AC repair for all makes & models",
        "Same-day service when availability allows",
      ],
    },
    stats: [
      { number: "12-YR", label: "AirEase warranty", icon: "award" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "FREE", label: "Written estimates", icon: "request_quote" },
      { number: "ANY", label: "Make or model", icon: "check_circle" },
    ],
    quoteFormLabel: "AC",
    financing: {
      fromAmount: "$89/mo",
      detail: "OAC via Financeit",
    },
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Air Conditioning in Calgary?",
          intro:
            "Choosing the right company for your Air Conditioning needs is crucial. Here's why Calgary trusts Flame Tech Plumbing & Heating:",
          items: [
            {
              heading: "Local Calgary AC Experts",
              body: "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands our climate places on your AC system and are equipped to handle any issue, big or small.",
            },
            {
              heading: "Licensed & Insured Technicians",
              body: "Your peace of mind is our priority. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards.",
            },
          ],
        },
        {
          heading: "Our Air Conditioning Services",
          intro:
            "Flame Tech Plumbing & Heating offers a complete range of AC services to meet all your needs:",
          items: [
            {
              heading: "Air Conditioner Installation",
              body: "Looking to upgrade your old AC unit or install a new system in your Calgary home? Our experts will guide you through the selection process, ensuring you choose the right size and type of air conditioner for your needs and budget. We handle the entire installation process efficiently and professionally.",
              image: {
                src: "/images/2023/03/main-slider-2-2.jpg",
                alt: "Air conditioner installation in a Calgary home",
              },
            },
            {
              heading: "Air Conditioning Repair",
              body: "Is your AC unit making strange noises, not cooling effectively, or has it stopped working altogether? Our experienced technicians are equipped to diagnose and repair all makes and models of air conditioners quickly and effectively, restoring comfort to your home. If you need AC repair Calgary, Flame Tech is ready to help.",
              image: {
                src: "/images/2023/03/services-details-img-1-2.jpg",
                alt: "AC repair being performed by a technician",
              },
            },
            {
              heading: "AC Maintenance & Tune-Ups",
              body: "Regular maintenance is key to ensuring the longevity and efficiency of your air conditioning system. Our comprehensive AC tune-up services in Calgary help prevent costly breakdowns, improve performance, and ensure your unit runs smoothly all summer long.",
              image: {
                src: "/images/2023/03/services-2-2.jpg",
                alt: "AC maintenance service",
              },
            },
            {
              heading: "Emergency Air Conditioning Services",
              body: "We understand that AC emergencies can happen at any time, especially during a heatwave. That's why Flame Tech offers emergency air conditioning services in Calgary to get your system back up and running as quickly as possible.",
              image: {
                src: "/images/2023/03/services-2-3.jpg",
                alt: "Emergency AC service in Calgary",
              },
            },
          ],
        },
        {
          heading:
            "How to Choose the Right Air Conditioner for Your Calgary Home",
          items: [
            {
              heading: "Types of Air Conditioners We Install",
              body: "We offer a variety of air conditioning systems to suit different homes and preferences, including central AC units, ductless mini-split systems, and more. Our experts can explain the benefits of each type and help you make the best choice for your Calgary residence.",
              image: {
                src: "/images/2025/04/air-conditioning-calgary.png",
                alt: "AC types — central and ductless options",
              },
            },
            {
              heading: "Factors to Consider (Home Size, Budget, Efficiency)",
              body: "Choosing the right AC unit involves considering several factors, such as the size of your home, your budget, and the energy efficiency ratings of different models. We'll walk you through these considerations to ensure you make an informed decision.",
            },
            {
              heading: "Our Expert Recommendations",
              body: "With our extensive knowledge of air conditioning systems and the specific needs of Calgary homeowners, we provide expert recommendations tailored to your individual situation.",
            },
          ],
        },
      ],
      promo: {
        heading: "AirEase Special — 12-year parts and labor warranty*",
        image: {
          src: "/images/2026/01/AirEase-Promo.png",
          alt: "AirEase Air Conditioning Promo",
        },
        groups: [
          {
            heading: "Qualifying Residential Products",
            items: ["Air Conditioners: Units 4SCU20LX and 4SCU16LS."],
          },
          {
            heading: "Requirements for Coverage",
            items: [
              "Registration: Equipment must be registered online within 60 days of installation.",
              "Residential Application: Limited to owner-occupied residential use.",
              "Annual Maintenance: Documented annual professional maintenance is required to maintain the labor portion of the agreement.",
            ],
          },
        ],
        disclaimer: "Terms and Conditions Apply",
      },
      faq: {
        heading: "Frequently Asked Questions About Air Conditioning in Calgary",
        items: [
          {
            q: "Ready to experience the Flame Tech difference?",
            a: "Contact us today for a free, no-obligation quote on our air conditioning services in Calgary. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
          },
          {
            q: "How often should I service my AC?",
            a: "We recommend scheduling professional AC maintenance at least once a year, ideally before the start of the cooling season, to ensure optimal performance and prevent potential issues.",
          },
          {
            q: "What are signs my AC needs repair?",
            a: "Unusual noises, inconsistent cooling, strange odours, leaks, and a sudden increase in energy bills can all be signs that your AC system needs repair. Don't delay in calling our Calgary AC repair experts.",
          },
          {
            q: "How long does installation take?",
            a: "The duration of an AC installation can vary depending on the type of system and the complexity of the installation process. We will provide you with a clear timeline before starting any work.",
          },
        ],
      },
    },
  },
  {
    slug: "humidifiers",
    category: "Air",
    icon: "water_drop",
    title: "Whole-Home Humidifiers Calgary",
    lead: "Comfortable winter humidity — less static, less dry skin, fewer cracks.",
    intro:
      "Calgary winter air is desert-dry. A whole-home humidifier ties into your furnace and keeps the entire home comfortable without standalone units.",
    features: [
      "Bypass and power-fan humidifiers",
      "Furnace integration",
      "Humidistat controls",
      "Annual pad replacement",
      "Troubleshooting dry-air symptoms",
    ],
    bullets: [
      {
        t: "Tune-to-target humidity",
        d: "Too low is uncomfortable; too high causes window condensation. We'll dial in your setpoint.",
      },
      {
        t: "Low-maintenance designs",
        d: "We install modern units that need only an annual pad swap.",
      },
    ],
  },
  // WATER
  {
    slug: "hot-water-tanks",
    category: "Water",
    icon: "propane_tank",
    title: "Hot Water Tanks Calgary",
    lead: "Service, repair, and new installs on traditional hot water tanks.",
    intro:
      "A traditional tank is reliable, simple, and the right choice for many Calgary homes. We service every major brand and quote upfront on replacements.",
    features: [
      "Gas and electric tank service",
      "Element and thermostat replacement",
      "Anode rod inspection",
      "Pressure relief valve testing",
      "Same-day replacement when possible",
    ],
    bullets: [
      {
        t: "When to repair vs replace",
        d: "Tanks over 10 years with a major failure are usually better replaced. We'll show you why.",
      },
      {
        t: "Code-compliant venting",
        d: "New installs meet Alberta gas code, including seismic straps and proper venting.",
      },
    ],
  },
  {
    slug: "hot-water-tank-replacement",
    category: "Water",
    icon: "sync",
    title: "Hot Water Tank Replacement Calgary",
    lead: "Fast, same-day tank swaps when yours has failed.",
    intro:
      "When a tank lets go, you want hot water back today — not next week. We stock common sizes and brands so most replacements finish the same day.",
    features: [
      "Same-day replacement (stock permitting)",
      "Old tank disposal",
      "Upgrade to high-efficiency options",
      "Expansion tank adds where required",
      "Written 10-year pricing comparison",
    ],
    bullets: [
      {
        t: "Emergency stock on hand",
        d: "We carry common 40/50/60-gallon tanks — fewer delays on replacement day.",
      },
      {
        t: "Clean, safe removal",
        d: "Old tanks drained, vented, and hauled away to licensed recycling.",
      },
    ],
  },
  {
    slug: "tankless-water-heaters",
    category: "Water",
    icon: "whatshot",
    title: "Tankless Water Heaters Calgary",
    lead: "Endless hot water with lower long-term operating cost.",
    intro:
      "Tankless units are excellent for larger homes and long-run households — teenagers with back-to-back showers, big families, or homes planning to stay 10+ years.",
    features: [
      "Tankless install and retrofit",
      "Gas line and venting upgrade",
      "Annual descaling service",
      "Recirculation loop options",
      "Honest tank-vs-tankless advice",
    ],
    bullets: [
      {
        t: "Right for the right home",
        d: "We'll tell you honestly when a traditional tank is the better choice — we don't upsell.",
      },
      {
        t: "Calgary hard-water aware",
        d: "We recommend softener pairing and annual descaling to protect the heat exchanger.",
      },
    ],
  },
  {
    slug: "water-softeners",
    category: "Water",
    icon: "science",
    title: "Water Softeners Calgary",
    lead: "Protect fixtures, appliances, and skin from Alberta hard water.",
    intro:
      "Calgary water measures 14–16 grains per gallon — firmly in the very-hard range. A softener extends appliance life, reduces soap use, and makes fixtures easier to clean.",
    features: [
      "Properly sized softener systems",
      "Demand-regenerating controls",
      "Bypass plumbing setup",
      "Salt recommendation and service",
      "Integration with tankless heaters",
    ],
    bullets: [
      {
        t: "Sized for your household",
        d: "Oversized softeners waste salt; undersized ones don't soften. We calculate from actual usage.",
      },
      {
        t: "Appliance protection",
        d: "Softened water extends hot water tank and dishwasher life — real savings over time.",
      },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServicePage["category"]) {
  return services.filter((s) => s.category === category);
}

export function getRelatedServices(slug: string, limit = 3): ServicePage[] {
  const current = getService(slug);
  if (!current) return [];
  return services
    .filter((s) => s.category === current.category && s.slug !== slug)
    .slice(0, limit);
}
