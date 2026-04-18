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
   * When set, the hero renders a "Financing Available" badge with the
   * Financeit logo. Only enable for bigger-ticket services (AC,
   * furnaces, boilers, heat pumps, PolyB, tankless heaters, water
   * softeners, hot water tanks). Leave undefined for service calls /
   * repairs / small jobs.
   */
  financing?: {
    detail?: string; // e.g. "Monthly payments · OAC via Financeit"
  };
  /**
   * Optional service-specific process timeline. When omitted the
   * template renders a generic 4-step timeline.
   */
  timeline?: {
    heading?: string;
    intro?: string;
    steps: { icon: string; title: string; body: string }[];
  };
  /**
   * Optional placeholder copy for the "Describe the issue" textarea
   * on the quote form. Makes the field feel tailored per service.
   */
  quoteFormPlaceholder?: string;
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
    slug: "boiler-service-calgary",
    category: "Heating",
    icon: "tune",
    title: "Boiler Service Calgary | Expert Boiler Maintenance & Repair",
    lead:
      "Calgary's harsh winters put serious demands on your boiler system.",
    heroBody: [
      "FlameTech has been servicing residential and commercial boilers across Calgary for years, handling everything from routine maintenance to emergency breakdowns. We work with all major brands including Viessmann, Buderus, Weil-McLain, and more, keeping your boiler system running efficiently when temperatures drop to −30°C.",
      "When your boiler fails on a January morning, you need someone who answers the phone and shows up fast. We offer priority emergency boiler service in Calgary, with fully stocked service trucks and technicians who know these systems inside and out.",
    ],
    heroSubhead: "Trusted Calgary Boiler Service Experts",
    heroBadgeImage: {
      src: "/images/REVIEWS1.png",
      alt: "5-star Google rated",
    },
    heroImage: {
      src: "/images/navine-boiler.png",
      alt: "Residential condensing boiler installed by FlameTech in Calgary",
    },
    intro:
      "Calgary's harsh winters put serious demands on your boiler system. FlameTech handles everything from routine maintenance to emergency breakdowns for every major boiler brand.",
    features: [
      "Annual boiler tune-ups",
      "Burner service & repair",
      "Heat exchanger cleaning",
      "Pressure & circulation repairs",
      "Thermostat & control repairs",
      "Priority emergency boiler service",
    ],
    bullets: [
      {
        t: "Locally owned & operated",
        d: "A Calgary plumbing business specializing in boiler service for homes and businesses across the city.",
      },
      {
        t: "B2 gas fitting licensed",
        d: "FlameTech's boiler technicians hold B2 gas fitting licenses and manufacturer certifications from the industry's top brands.",
      },
    ],
    callout:
      "Smell gas, lost heat, or hearing unusual noises? Call us right away for priority emergency boiler response.",
    seoTitle:
      "Boiler Service Calgary | Professional Boiler Repair & Maintenance",
    seoDescription:
      "Professional boiler service in Calgary. Annual maintenance, repairs, and priority emergency response. Licensed technicians. Fast response. Call 587-834-3668 today.",
    seoKeywords: [
      "boiler service Calgary",
      "boiler repair Calgary",
      "boiler maintenance Calgary",
      "Viessmann Buderus Weil-McLain Triangle Tube",
      "B2 gas fitting Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "boiler service",
    quoteFormPlaceholder:
      "e.g. boiler not firing, pilot light out, losing pressure, banging/kettling noises, or book an annual tune-up…",
    sidebar: {
      title: "Calgary Boiler Service",
      subtitle:
        "Annual tune-ups, repairs, and priority emergency response for every major boiler brand.",
      bullets: [
        "Viessmann · Buderus · Weil-McLain · Triangle Tube",
        "B2 gas fitting licensed technicians",
        "Service trucks stocked for same-day repairs",
        "Priority emergency response across Calgary",
      ],
    },
    stats: [
      { number: "B2", label: "Gas fitting licensed", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "1-2h", label: "Typical service visit", icon: "schedule" },
      { number: "ANY", label: "Brand serviced", icon: "check_circle" },
    ],
    richContent: {
      sections: [
        {
          heading:
            "Why Calgary Homeowners Choose FlameTech for Boiler Service",
          intro:
            "As a locally owned and operated plumbing business in Calgary, we specialize in professional boiler service for homes and businesses across the city. FlameTech's boiler technicians hold B2 gas fitting licenses and manufacturer certifications from the industry's top brands. We've worked on thousands of boiler systems across Calgary, from older cast iron units in Mount Royal to modern condensing boilers in Aspen Woods. Our service trucks carry common parts for most systems, so we can often complete repairs on the first visit instead of leaving you without heat.",
          items: [
            {
              heading: "Annual Boiler Tune-ups",
              body: "Complete system inspection, cleaning, and efficiency testing to prevent breakdowns and reduce gas bills.",
              image: {
                src: "/images/navine-boiler.png",
                alt: "Modern residential boiler serviced by FlameTech",
              },
            },
            {
              heading: "Burner Service & Repair",
              body: "Cleaning and adjusting gas burners, replacing flame sensors, and fixing ignition problems that cause lockouts.",
            },
            {
              heading: "Heat Exchanger Maintenance",
              body: "Professional cleaning to remove scale buildup and maintain efficient heat transfer in Calgary's hard-water conditions.",
            },
            {
              heading: "Pressure & Circulation Issues",
              body: "Diagnosing and repairing expansion tank problems, pressure relief valves, and circulation pump failures.",
            },
            {
              heading: "Thermostat & Control Repairs",
              body: "Fixing faulty thermostats, zone controls, and outdoor reset controls that affect system operation.",
            },
            {
              heading: "Priority Emergency Boiler Repairs",
              body: "Rapid response for no-heat situations, gas leaks, and other urgent boiler problems throughout Calgary.",
            },
          ],
        },
        {
          heading: "Common Boiler Service Issues in Calgary Homes",
          intro:
            "Calgary boiler owners deal with specific problems caused by our climate and water conditions. Here's what we see most often — don't let a small problem turn into a major breakdown. Call at the first sign of trouble.",
          items: [
            {
              body: "Flame sensor fouling from Calgary's hard water and dust, causing repeated system lockouts.",
            },
            {
              body: "Expansion tank failures during Chinook temperature swings that stress the system.",
            },
            {
              body: "Heat exchanger scale buildup reducing efficiency and causing overheating.",
            },
            {
              body: "Circulation pump seizures from mineral deposits in older boiler systems.",
            },
            {
              body: "Pressure relief valve weeping due to thermal expansion in closed-loop systems.",
            },
            {
              body: "Zone valve failures preventing proper heat distribution to different areas.",
            },
          ],
        },
        {
          heading:
            "Preventative Boiler Maintenance Tips for Calgary Homeowners",
          intro:
            "Regular boiler maintenance prevents 80% of the breakdowns we see in Calgary. Here's what every boiler owner should know:",
          items: [
            {
              body: "Check your boiler pressure monthly — it should stay between 12–15 PSI when cold.",
            },
            {
              body: "Test your pressure relief valve annually by lifting the lever briefly to clear mineral buildup.",
            },
            {
              body: "Keep the area around your boiler clear and check for any water leaks or corrosion.",
            },
            {
              body: "Schedule professional cleaning every 12 months to remove scale and maintain efficiency.",
            },
            {
              body: "Monitor your gas bills — a sudden increase often indicates efficiency problems.",
            },
            {
              body: "Listen for unusual noises like banging, whistling, or gurgling that signal internal issues.",
            },
          ],
        },
        {
          heading: "Calgary Boiler Service Expertise You Can Trust",
          items: [
            {
              body: "Our boiler technicians complete ongoing training with manufacturers like Viessmann, Buderus, and Triangle Tube to stay current on the latest technology. We hold B2 gas fitting licenses and have collectively serviced thousands of boiler systems across Calgary, from vintage cast iron units to modern condensing boilers requiring specialized repair techniques.",
            },
            {
              body: "FlameTech works with all major boiler brands and understands the specific challenges Calgary installations face. Many homes built in the 1980s and '90s have original boilers reaching end-of-life, while newer developments often have undersized systems that struggle during cold snaps.",
            },
            {
              body: "Alberta's temperature extremes and hard water create unique maintenance requirements for boiler systems. We stock parts specifically for Calgary conditions and know how Chinook winds, mineral buildup, and extended heating seasons affect different boiler types and ages.",
            },
          ],
        },
      ],
      faq: {
        heading:
          "Frequently Asked Questions About Boiler Service in Calgary",
        items: [
          {
            q: "How often should I have my boiler serviced in Calgary?",
            a: "Annual boiler service is recommended for Calgary homes due to our long heating season and hard-water conditions. During service, we clean the heat exchanger, test safety controls, and check for efficiency loss. Older boilers or systems with hard-water issues may benefit from bi-annual maintenance visits.",
          },
          {
            q: "What are the signs my Calgary boiler needs immediate repair?",
            a: "Call immediately if you smell gas, notice yellow flames instead of blue, hear banging or kettling noises, or see water leaking around the unit. Strange smells, frequent cycling, or uneven heating throughout your home also indicate problems requiring professional attention. Don't ignore these warning signs during Calgary's heating season.",
          },
          {
            q: "Why does my boiler keep shutting off during cold weather?",
            a: "Common causes include dirty flame sensors, blocked vents from snow buildup, or low system pressure from small leaks. Calgary's temperature swings can also cause expansion issues that trigger safety shutoffs. Our technicians can diagnose the exact cause and prevent repeated lockouts that leave you without heat.",
          },
          {
            q: "Can you service all boiler brands in Calgary?",
            a: "Yes, we service all major boiler brands including Viessmann, Buderus, Weil-McLain, Crown, Triangle Tube, and older models still common in Calgary homes. Our service trucks stock parts for the most common systems, and we can source specialized components for European brands or vintage units found in established neighborhoods.",
          },
          {
            q: "How long does a typical boiler service appointment take?",
            a: "Most routine boiler maintenance takes 1–2 hours, including cleaning, testing, and minor adjustments. Emergency repairs vary depending on the problem — simple fixes like replacing a flame sensor take 30 minutes, while major component replacement can take several hours. We always explain what we found and provide time estimates before starting work.",
          },
        ],
      },
    },
  },
  {
    slug: "furnaces",
    category: "Heating",
    icon: "local_fire_department",
    title: "Furnace Calgary – Installation, Repair & Maintenance",
    lead:
      "When Calgary's temperatures drop, a reliable furnace isn't just a luxury — it's essential. Flame Tech Plumbing & Heating is your trusted local expert for comprehensive furnace services in Calgary.",
    heroBody: [
      "Whether you need a brand-new high-efficiency furnace installed, urgent repairs to get your heat back on, or routine maintenance to keep things running smoothly, our certified technicians are here to ensure your home stays warm and comfortable all winter long.",
      "We work with all makes and models but are also a part of the AirEase Pro Team.",
    ],
    heroSubhead: "Satisfaction Guaranteed",
    heroBadgeImage: {
      src: "/images/REVIEWS1.png",
      alt: "5-star Google rated",
    },
    heroImage: {
      src: "/images/air-ease-furnace.png",
      alt: "AirEase high-efficiency furnace installed by FlameTech in Calgary",
    },
    intro:
      "Flame Tech is your trusted local expert for furnace services in Calgary — installation, repair, and maintenance for every make and model.",
    features: [
      "High-efficiency furnace installation",
      "Priority emergency furnace repair",
      "Annual tune-ups & safety inspections",
      "Smart thermostat integration",
      "AirEase Pro Team installs",
      "All makes & models serviced",
    ],
    bullets: [
      {
        t: "Local Calgary furnace experts",
        d: "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands our climate places on your furnace system and are equipped to handle any issue, big or small.",
      },
      {
        t: "Licensed & insured technicians",
        d: "Your peace of mind is our priority. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards.",
      },
    ],
    seoTitle: "Furnace Calgary: Expert Repair, Install & Service | FlameTech",
    seoDescription:
      "Trusted Calgary furnace experts! FlameTech offers reliable installation, emergency repair & maintenance. Licensed, insured & local!",
    seoKeywords: [
      "furnace Calgary",
      "furnace repair Calgary",
      "furnace installation Calgary",
      "AirEase Calgary",
      "high-efficiency furnace Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "furnace",
    quoteFormPlaceholder:
      "e.g. furnace not firing up, blowing cold air, short-cycling, or need a quote on a high-efficiency replacement…",
    sidebar: {
      title: "Calgary Furnace Service",
      subtitle:
        "Install, repair, and tune-ups for every major furnace brand — AirEase Pro Team certified.",
      bullets: [
        "High-efficiency AirEase, Carrier, Lennox, Rheem",
        "Licensed & insured HVAC technicians",
        "Priority emergency response across Calgary",
        "12-year warranty on qualifying AirEase installs",
      ],
    },
    stats: [
      { number: "12-YR", label: "AirEase warranty", icon: "award" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "ALL", label: "Makes & models", icon: "check_circle" },
      { number: "AFUE", label: "95%+ installs", icon: "verified" },
    ],
    financing: {
      detail:
        "Spread the cost of a new high-efficiency furnace into flexible monthly payments via our Financeit partner.",
    },
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Furnace Services in Calgary?",
          intro:
            "Choosing the right company for your furnace needs is crucial. Here's why Calgary trusts Flame Tech Plumbing & Heating:",
          items: [
            {
              heading: "Local Calgary Furnace Experts",
              body: "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands our climate places on your furnace system and are equipped to handle any issue, big or small.",
            },
            {
              heading: "Licensed & Insured Technicians",
              body: "Your peace of mind is our priority. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards.",
            },
          ],
        },
        {
          heading: "Our Calgary Furnace Services",
          intro:
            "Flame Tech Plumbing & Heating offers a complete range of furnace services to meet all your needs:",
          items: [
            {
              heading: "Furnace Installation",
              body: "Is it time for a new furnace? We provide expert installation services across Calgary, including high-efficiency options that lower your energy bills, expert sizing tailored to your home, and seamless code-compliant installation meeting all local codes and manufacturer specifications for optimal performance and safety.",
              image: {
                src: "/images/2025/04/furnace-install.jpg",
                alt: "New furnace installation in a Calgary home",
              },
            },
            {
              heading: "Furnace Repair",
              body: "Furnace broken down? Don't shiver in the cold. Flame Tech offers prompt and reliable furnace repair throughout Calgary — priority emergency service to get your heat restored during cold snaps, experienced technicians who can diagnose and repair any make or model, transparent pricing, and honest advice on whether to repair or replace.",
              image: {
                src: "/images/2025/04/furnace-repair.jpg",
                alt: "FlameTech technician repairing a residential furnace",
              },
            },
            {
              heading: "Furnace Maintenance",
              body: "Preventative maintenance is key to a long-lasting, efficient furnace. Protect your investment with annual tune-ups and safety inspections (including carbon monoxide), improved efficiency that saves on energy bills and extends operational lifespan, and pre-season check-ups that prevent mid-winter breakdowns during Calgary's coldest months.",
              image: {
                src: "/images/2025/04/furnace-maintainance.jpg",
                alt: "Annual furnace maintenance and tune-up in Calgary",
              },
            },
          ],
        },
        {
          heading: "Calgary Furnace Rebates & Energy Savings",
          intro:
            "Upgrading your furnace in Calgary doesn't have to break the bank. Alberta homeowners may qualify for rebates and incentives when installing high-efficiency furnace models.",
          items: [
            {
              body: "Programs like the Canada Greener Homes Initiative and municipal energy improvement programs can help offset the upfront cost of a new furnace, making it easier to switch to a system rated at 96% AFUE or higher.",
            },
            {
              body: "Our team stays up to date on current rebate programs and can help you understand which ones apply to your installation. We'll handle the paperwork and make sure your new furnace meets all the efficiency requirements to qualify.",
            },
            {
              body: "Not sure if your current furnace is costing you more than it should? A system older than 15 years is likely running well below modern efficiency standards — meaning higher monthly gas bills throughout Calgary's long heating season. Contact us for an honest assessment and we'll walk you through your options.",
            },
          ],
        },
      ],
      promo: {
        heading: "AirEase Special — 12-year parts and labor warranty*",
        image: {
          src: "/images/2026/02/SCR-20260212-hxkx.webp",
          alt: "AirEase furnace 12-year warranty offer",
        },
        groups: [
          {
            heading: "Qualifying Residential Products",
            items: ["Gas Furnaces: Models A97USMV and A962V."],
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
        heading: "Frequently Asked Questions About Furnaces in Calgary",
        items: [
          {
            q: "Ready to experience the Flame Tech difference?",
            a: "Contact us today for a free, no-obligation quote on our furnace services in Calgary. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience. We also offer furnace repairs in Airdrie.",
          },
          {
            q: "How often should I have my furnace serviced?",
            a: "We strongly recommend annual furnace maintenance, ideally in the fall before the heavy heating season begins. This ensures safety, efficiency, and helps catch minor issues before they become major problems during a Calgary cold spell.",
          },
          {
            q: "What's the best type of furnace for Calgary's climate?",
            a: "High-efficiency natural gas furnaces (95% AFUE or higher) are generally the most cost-effective and reliable choice for Calgary's climate. The specific model and size depend on your home. Our experts can provide tailored recommendations.",
          },
          {
            q: "When should I replace rather than repair my furnace?",
            a: "Consider the age of your furnace (typically 15–20 years is lifespan), frequency and cost of repairs, rising energy bills, and overall performance. If repairs are becoming frequent or costly, especially on an older unit, replacement is often the more economical long-term solution. We provide honest assessments to help you decide.",
          },
        ],
      },
    },
  },
  {
    slug: "high-efficiency-furnaces-calgary",
    category: "Heating",
    icon: "local_fire_department",
    title: "High Efficiency Furnaces Calgary | Professional Installation & Service",
    lead:
      "Calgary's unpredictable winters — from −35°C cold snaps to sudden chinook thaws — demand furnaces that can handle anything.",
    heroBody: [
      "FlameTech's heating specialists have been installing and servicing high-efficiency furnaces across Calgary for over a decade, helping homeowners cut their gas bills while staying warm through Alberta's toughest winters. Whether you're upgrading an old builder-grade unit in Evergreen or installing a new system in a custom home, we know which units perform best in Calgary's climate.",
      "When your furnace fails at 2 AM in January, you need someone who answers the phone — not a voicemail. Our technicians offer priority response and carry the parts needed to get Calgary homes heated fast.",
    ],
    heroSubhead: "Trusted Calgary High-Efficiency Furnace Experts",
    heroBadgeImage: {
      src: "/images/REVIEWS1.png",
      alt: "5-star Google rated",
    },
    heroImage: {
      src: "/images/2026/04/Furnace-after-len.webp",
      alt: "High-efficiency furnace installation completed by FlameTech",
    },
    intro:
      "High-efficiency furnaces installed and serviced by Calgary's trusted heating specialists. Expert installation, all major brands, priority emergency service.",
    features: [
      "92–95% AFUE condensing furnaces",
      "Ductwork design & modification",
      "Gas line & electrical upgrades",
      "Smart thermostat integration",
      "Annual efficiency maintenance",
      "Factory-trained on Carrier, Lennox, Rheem",
    ],
    bullets: [
      {
        t: "Factory-trained technicians",
        d: "Red Seal gas fitting certifications and manufacturer training on Carrier, Lennox, Rheem, and other top brands.",
      },
      {
        t: "Calgary-climate-aware installs",
        d: "We size, vent, and install for chinooks, hard water, and extended heating seasons — conditions other installers skip.",
      },
    ],
    seoTitle:
      "High Efficiency Furnaces Calgary | Expert Installation & Service",
    seoDescription:
      "High-efficiency furnaces installed by Calgary's trusted heating specialists. Priority service, expert installation, all major brands. Call 587-834-3668 today.",
    seoKeywords: [
      "high efficiency furnace Calgary",
      "96 AFUE furnace Calgary",
      "condensing furnace installation",
      "Carrier Lennox Rheem Calgary",
      "HVAC Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "high-efficiency furnace",
    quoteFormPlaceholder:
      "e.g. old builder-grade furnace needs replacing, looking at 95%+ AFUE upgrade, ductwork may need modification…",
    sidebar: {
      title: "High-Efficiency Furnace Installs",
      subtitle:
        "92–95% AFUE systems installed by Red Seal technicians who understand Calgary's climate.",
      bullets: [
        "Carrier Infinity, Lennox SLP98V, Rheem Prestige",
        "Proper sizing + ductwork modifications",
        "Gas line & venting upgrades when needed",
        "Rebate paperwork handled for you",
      ],
    },
    stats: [
      { number: "95%+", label: "AFUE installs", icon: "award" },
      { number: "6-8h", label: "Typical install", icon: "schedule" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Red", label: "Seal licensed", icon: "verified" },
    ],
    financing: {
      detail:
        "Spread the cost of a new high-efficiency furnace into flexible monthly payments via our Financeit partner.",
    },
    richContent: {
      sections: [
        {
          heading:
            "Why Calgary Homeowners Choose FlameTech for High-Efficiency Furnaces",
          intro:
            "From emergency repairs in Signal Hill to new installations in west Calgary, our certified technicians bring real-world experience with every major furnace brand. FlameTech's HVAC technicians are factory-trained on Carrier, Lennox, Rheem, and other top brands, with extensive experience installing high-efficiency units in Calgary's diverse housing stock. We've handled everything from cramped mechanical rooms in Mount Royal character homes to wide-open basements in new builds across Cranston. Our installations include proper sizing calculations, ductwork modifications, and gas line upgrades when needed — work that many contractors skip but makes the difference between a furnace that struggles and one that performs efficiently for 15–20 years.",
          items: [
            {
              heading: "High-Efficiency Furnace Installation",
              body: "Complete installation of 90%+ AFUE furnaces with proper sizing, gas line upgrades, and ductwork modifications to maximize efficiency in Calgary homes.",
            },
            {
              heading: "Furnace Upgrades & Replacements",
              body: "Replacing old builder-grade furnaces with high-efficiency models, including removal, disposal, and full system commissioning.",
            },
            {
              heading: "Ductwork Design & Modification",
              body: "Upgrading or redesigning ductwork to work with new high-efficiency furnaces, eliminating hot and cold spots throughout your Calgary home.",
            },
            {
              heading: "Gas Line & Electrical Upgrades",
              body: "Installing proper gas connections and electrical circuits for high-efficiency furnaces, meeting all Alberta safety codes.",
            },
            {
              heading: "Smart Thermostat Integration",
              body: "Installing and programming smart thermostats that work with high-efficiency furnaces to maximize energy savings.",
            },
            {
              heading: "Annual Efficiency Maintenance",
              body: "Specialized maintenance for high-efficiency furnaces, including heat exchanger cleaning and combustion analysis to maintain peak performance.",
            },
          ],
        },
        {
          heading:
            "Common High-Efficiency Furnace Issues in Calgary Homes",
          intro:
            "Calgary homeowners looking at high-efficiency furnaces often run into the same problems — contractors who don't properly size the system, skip ductwork upgrades, or install the wrong unit for Alberta's climate. These aren't just installation headaches — they cost you money every month in higher gas bills and premature equipment failure.",
          items: [
            {
              body: "Furnace undersized for Calgary winters, struggles when temperatures hit −30°C.",
            },
            {
              body: "Old ductwork not modified for high-efficiency airflow requirements.",
            },
            {
              body: "Improper venting causing condensation problems in mechanical rooms.",
            },
            {
              body: "Gas line too small for new high-efficiency furnace demand.",
            },
            {
              body: "No provision for condensate drainage from high-efficiency operation.",
            },
            {
              body: "Furnace installed without proper clearances for maintenance access.",
            },
          ],
        },
        {
          heading:
            "Keeping Your High-Efficiency Furnace Running in Calgary",
          intro:
            "High-efficiency furnaces extract more heat from combustion, but that means they need different maintenance than standard furnaces — especially in Calgary's dry climate with temperature swings that stress all mechanical systems.",
          items: [
            {
              body: "Check and clean condensate drain lines monthly — Calgary's hard water can clog these quickly.",
            },
            {
              body: "Replace filters every 2–3 months during heating season — high-efficiency units are sensitive to airflow restrictions.",
            },
            {
              body: "Have heat exchangers professionally cleaned annually to maintain efficiency ratings.",
            },
            {
              body: "Inspect venting for ice buildup during cold snaps — condensation can freeze and block exhaust.",
            },
            {
              body: "Test condensate pump operation before each heating season starts.",
            },
            {
              body: "Schedule annual combustion analysis to verify the furnace is still operating at rated efficiency.",
            },
          ],
        },
        {
          heading: "The 3 High-Efficiency Furnace Problems We See Most in Calgary",
          items: [
            {
              heading: "Condensate System Failures",
              body: "Calgary's hard water clogs condensate drains, and our temperature swings can freeze condensate pumps. We see this constantly in fall when homeowners fire up furnaces for the first time. Regular drain cleaning and pump testing prevents most of these emergency calls.",
            },
            {
              heading: "Undersized Gas Lines",
              body: "Many older Calgary homes have 3/4\" gas lines that can't supply enough fuel for high-efficiency furnaces under peak demand. The furnace works fine in mild weather but can't reach full output when it hits −30°C. We identify and upgrade gas lines before installation.",
            },
            {
              heading: "Improper Venting Issues",
              body: "High-efficiency furnaces produce condensation that can freeze in incorrectly installed venting. We regularly fix installations where contractors used standard venting instead of proper condensing-furnace materials. This causes back-drafting and potential carbon monoxide issues.",
            },
          ],
        },
        {
          heading: "Calgary High-Efficiency Furnace Expertise You Can Trust",
          items: [
            {
              body: "FlameTech's technicians hold Red Seal gas fitting certifications and manufacturer training on all major high-efficiency furnace brands. We've been installing these systems in Calgary since they became mainstream, giving us real-world experience with how different models perform through Alberta winters and what problems develop over time.",
            },
            {
              body: "We work with Carrier Infinity series, Lennox SLP98V, Rheem Prestige, and other top-tier units, matching the right furnace to Calgary's housing types — from 1960s bungalows with original ductwork to new construction with modern HVAC design. We understand the building characteristics across Calgary's neighborhoods and size systems accordingly.",
            },
            {
              body: "Calgary's chinooks create unique challenges for high-efficiency furnaces — rapid temperature swings that stress heat exchangers and condensate systems that can freeze during sudden cold snaps. Our installations account for these conditions with proper venting design and condensate management that works reliably through Alberta's unpredictable weather patterns.",
            },
          ],
        },
      ],
      faq: {
        heading: "High-Efficiency Furnace Questions from Calgary Homeowners",
        items: [
          {
            q: "What efficiency rating should I look for in a new furnace for Calgary's climate?",
            a: "For Calgary winters, we recommend 92–95% AFUE furnaces as the sweet spot between efficiency and reliability. Units above 95% can have more maintenance issues with our temperature swings, while anything below 90% won't deliver the gas bill savings that justify the higher upfront cost. The exact model depends on your home's size and existing ductwork configuration.",
          },
          {
            q: "How long does it take to install a high-efficiency furnace in a Calgary home?",
            a: "Most installations take 6–8 hours for a straightforward replacement, but can extend to 2 days if we need to upgrade gas lines or modify ductwork. Older Calgary homes often need electrical upgrades for the new controls and proper venting installation. We always do a pre-installation assessment so you know exactly what's involved before we start work.",
          },
          {
            q: "Will a high-efficiency furnace work with my existing ductwork?",
            a: "High-efficiency furnaces move air differently than older units — they often require larger return air ducts and properly sealed distribution systems. We perform airflow calculations during our assessment and recommend ductwork modifications if needed. Skipping this step is why some homeowners end up with uneven heating and higher-than-expected gas bills.",
          },
          {
            q: "Do high-efficiency furnaces require more maintenance?",
            a: "Yes, they require condensate drain cleaning, heat exchanger inspection, and combustion analysis that standard furnaces don't need. Calgary's hard water can clog condensate lines, and our dry air affects the electronic controls differently than in other climates. We recommend annual professional maintenance plus monthly filter changes during heating season.",
          },
          {
            q: "What's the best high-efficiency furnace brand for Calgary?",
            a: "Carrier, Lennox, and Rheem all make reliable high-efficiency units, but the specific model matters more than the brand. We've had excellent results with Carrier Infinity series and Lennox SLP98V in Calgary installations. The key is proper sizing and installation — a mediocre furnace installed correctly will outperform a premium unit that's incorrectly sized or poorly installed.",
          },
        ],
      },
    },
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
      detail:
        "Spread the cost of your AC install into flexible monthly payments via our Financeit partner.",
    },
    quoteFormPlaceholder:
      "e.g. AC blowing warm air, outside unit making noise, want a quote for a new central install…",
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
