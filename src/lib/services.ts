export type RichImage = {
  src: string;
  alt: string;
  /**
   * How this image should fill its hero frame.
   * - "contain" (default): good for product renders / cutouts on a
   *   cream card (keeps the whole image visible, no crop)
   * - "cover": good for lifestyle/install photos — fills the frame
   *   by cropping to fit
   */
  fit?: "contain" | "cover";
};

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
    slug: "drain-cleaning-calgary",
    category: "Plumbing",
    icon: "water_damage",
    title: "Professional Drain Cleaning Calgary | Fast & Reliable Service",
    lead:
      "When stubborn clogs and slow drains disrupt your Calgary home, Flame Tech Plumbing delivers expert drain cleaning solutions that get your plumbing flowing freely again.",
    heroBody: [
      "Our certified technicians use advanced equipment including hydro-jetting systems, drain snakes, and video inspection cameras to tackle everything from kitchen grease buildup to tree root intrusions.",
      "Drain emergencies don't follow business hours, which is why Flame Tech provides priority drain cleaning throughout Calgary and surrounding areas. Our emergency response team arrives equipped with professional-grade tools to resolve your drainage issues quickly, preventing water damage and restoring your home's plumbing functionality.",
    ],
    heroSubhead: "Trusted Calgary Drain Cleaning Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech service van — Calgary drain cleaning", fit: "cover" },
    intro:
      "Expert drain cleaning services in Calgary. Clogs, blockages, and backup repairs. 25+ years experience. Priority emergency response.",
    features: [
      "Kitchen drain cleaning",
      "Bathroom drain services",
      "Main sewer line hydro-jetting",
      "Floor drain maintenance",
      "Video drain inspection",
      "Preventative drain maintenance",
    ],
    bullets: [
      {
        t: "Camera-confirmed results",
        d: "Advanced video inspection verifies the drain is clear and shows exactly what caused the blockage.",
      },
      {
        t: "25+ years in Calgary",
        d: "We've seen every drain issue our city's clay soil, hard water, and freeze-thaw cycles can create.",
      },
    ],
    seoTitle: "Drain Cleaning Calgary | Professional Drain Services",
    seoDescription:
      "Expert drain cleaning services in Calgary. Clogs, blockages & backup repairs. 25+ years experience. Priority emergency service. Call now!",
    seoKeywords: [
      "drain cleaning Calgary",
      "hydro jetting Calgary",
      "main sewer line Calgary",
      "clogged drain Calgary",
      "video drain inspection",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "drain cleaning",
    quoteFormPlaceholder:
      "e.g. kitchen sink backing up, slow shower drain, basement floor drain gurgling, or suspected root intrusion…",
    sidebar: {
      title: "Calgary Drain Cleaning",
      subtitle:
        "Clogs, slow drains, main-line blockages — cleared and camera-verified.",
      bullets: [
        "Hydro-jetting for grease, scale, and roots",
        "Video inspection on every mainline job",
        "25+ years on Calgary plumbing",
        "Priority emergency dispatch",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "1-2h", label: "Typical visit", icon: "schedule" },
      { number: "4000", label: "PSI hydro-jet", icon: "check_circle" },
    ],
    callout:
      "Sewage backing up or water coming out of a floor drain? Call us right away — drain emergencies escalate quickly.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose Flame Tech for Drain Cleaning",
          intro:
            "As a locally owned and operated Calgary plumbing experts, we specialize in professional drain cleaning services for homes and businesses across the city. Calgary's challenging soil conditions and aging infrastructure demand experienced professionals who understand local drainage patterns and common blockage causes. Flame Tech's technicians are certified in advanced drain cleaning techniques, from traditional cable snaking to high-pressure water jetting for commercial-grade results. Our team regularly services homes across Calgary's diverse neighborhoods, from newer developments in Evergreen to heritage properties in established areas where cast iron and clay pipes present unique challenges.",
          items: [
            { heading: "Kitchen Drain Cleaning", body: "Professional removal of grease, food debris, and soap buildup using specialized enzymes and mechanical cleaning tools designed for kitchen drainage systems." },
            { heading: "Bathroom Drain Services", body: "Complete cleaning of bathtub, shower, and sink drains affected by hair clogs, soap scum, and mineral deposits common in Calgary's hard-water areas." },
            { heading: "Main Sewer Line Cleaning", body: "High-pressure hydro-jetting and rooter services to clear tree roots, debris, and blockages in primary sewer connections to municipal systems." },
            { heading: "Floor Drain Maintenance", body: "Basement and utility-room floor drain cleaning including P-trap servicing and debris removal to prevent backup during Calgary's heavy rainfall periods." },
            { heading: "Video Drain Inspection", body: "Advanced camera technology to identify blockage locations, pipe damage, and root intrusions without excavation, providing accurate diagnosis for targeted repairs." },
            { heading: "Preventative Drain Maintenance", body: "Regular cleaning schedules using eco-friendly solutions and mechanical methods to maintain optimal drainage before emergency situations develop." },
          ],
        },
        {
          heading: "Common Drain Cleaning Issues in Calgary Homes",
          intro:
            "Calgary homeowners frequently encounter drainage problems that stem from our city's unique environmental conditions and infrastructure challenges. Don't let drainage problems escalate into costly water damage — contact our experienced team for prompt, professional service.",
          items: [
            { body: "Tree root infiltration into aging clay and cast iron pipes, particularly common in mature neighborhoods." },
            { body: "Grease and oil solidification during Calgary's cold winters, creating stubborn kitchen drain blockages." },
            { body: "Hair and soap buildup accelerated by hard water mineral deposits throughout the drainage system." },
            { body: "Basement floor drain backups during spring runoff and heavy summer storms." },
            { body: "Frozen drain lines in unheated areas during extended cold snaps below −30°C." },
            { body: "Municipal sewer line connections blocked by debris accumulation and settling." },
          ],
        },
        {
          heading: "Preventative Drain Maintenance for Calgary Homes",
          intro:
            "Regular drain maintenance prevents emergency situations while extending the lifespan of your plumbing system, particularly important in Calgary where seasonal temperature extremes stress drainage infrastructure.",
          items: [
            { body: "Monthly hot-water flushes help dissolve grease buildup before it solidifies in Calgary's cold temperatures." },
            { body: "Installing drain screens prevents hair, food particles, and debris from entering the drainage system." },
            { body: "Avoiding chemical drain cleaners protects pipes from corrosion while maintaining beneficial bacteria in septic systems." },
            { body: "Professional annual inspections identify developing issues before they become costly emergency repairs." },
            { body: "Proper disposal of cooking oils and grease prevents accumulation in kitchen drainage lines." },
            { body: "Tree root barriers near older homes protect sewer lines from invasive root systems." },
          ],
        },
        {
          heading: "Common Calgary Drain Problems We Solve",
          items: [
            { heading: "Tree Root Blockages", body: "Mature trees throughout Calgary send roots seeking moisture into underground drainage pipes, creating partial or complete blockages. Our hydro-jetting equipment cuts through root masses while video inspection identifies entry points for permanent repair solutions. Root barriers and regular maintenance prevent recurring problems in established neighborhoods." },
            { heading: "Winter Grease Solidification", body: "Calgary's cold temperatures cause cooking oils and grease to solidify in kitchen drains, creating stubborn blockages that resist simple remedies. Professional hot-water jetting combined with specialized degreasers dissolves these accumulations completely. We also provide education on proper grease disposal to prevent future problems." },
            { heading: "Municipal Sewer Backups", body: "Heavy rainfall and spring snowmelt can overwhelm Calgary's storm water systems, causing basement floor drain backups. Our emergency response team provides immediate water extraction and drain clearing services to prevent extensive damage. We install backflow preventers and recommend sump pump systems for ongoing protection." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Drain Cleaning in Calgary",
        items: [
          { q: "How much does professional drain cleaning cost in Calgary?", a: "Basic drain cleaning services typically range from $150–$300 for standard residential clogs, while complex main sewer line cleaning can cost $400–$800 depending on blockage severity and pipe length. Video inspection services add approximately $200–$350 but often save money by identifying exact problem locations without excavation. Our technicians provide upfront pricing before beginning work, ensuring no surprise charges." },
          { q: "How long does drain cleaning take in Calgary homes?", a: "Most residential drain cleaning jobs complete within 1–2 hours, including setup and cleanup time. Complex blockages involving main sewer lines or multiple affected drains may require 3–4 hours for thorough cleaning. Emergency services prioritize rapid response, with technicians typically arriving within an hour in central Calgary areas. Preventative maintenance visits usually take 45–90 minutes depending on the number of drains serviced." },
          { q: "What's the difference between snaking and hydro-jetting for drain cleaning?", a: "Traditional drain snaking uses mechanical cables to break through clogs but may leave residual buildup on pipe walls, while hydro-jetting uses high-pressure water (up to 4000 PSI) to completely scour pipes clean. Hydro-jetting is more effective for grease buildup and root removal but requires professional equipment and expertise to avoid damaging older pipes. Our technicians assess pipe condition and blockage type to recommend the most appropriate method for lasting results." },
          { q: "Can Calgary's hard water affect drain cleaning effectiveness?", a: "Calgary's naturally hard water does create additional mineral buildup in drainage pipes, requiring specialized cleaning solutions and techniques for optimal results. Hard water mineral deposits can trap debris and reduce pipe diameter over time, making regular professional cleaning more important than in soft-water areas. We often recommend water softener systems to reduce future buildup and extend time between professional cleanings." },
          { q: "How often should Calgary homeowners have drains professionally cleaned?", a: "Most Calgary homes benefit from annual professional drain cleaning, though households with heavy usage or older plumbing may need service every 6–9 months. Homes with large trees nearby often require more frequent main sewer line cleaning due to root intrusion. Kitchen drains in busy households may need attention twice yearly due to grease accumulation, especially during winter months when oils solidify more readily in our cold climate." },
        ],
      },
    },
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
    slug: "boiler-installation-calgary",
    category: "Heating",
    icon: "build",
    title: "Boiler Installation Calgary | Professional Boiler Services",
    lead:
      "Calgary's harsh winters demand reliable heating systems, and boiler installation requires the expertise that comes from years of working with Alberta's climate extremes.",
    heroBody: [
      "FlameTech's certified technicians have installed hundreds of boilers throughout Calgary, from compact units for downtown condos to high-capacity systems for sprawling homes in communities like Aspen Woods. We handle everything from gas-fired condensing boilers to electric units, matching the right system to your home's specific heating needs.",
      "When your old boiler finally gives up during a January cold snap, you need fast response from people who answer their phones. Our Calgary-based crew offers priority emergency boiler installations — no automated messages, no waiting until Monday morning.",
    ],
    heroSubhead: "Trusted Calgary Boiler Installation Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/navine-boiler.png", alt: "Navien high-efficiency boiler installed by FlameTech" },
    intro:
      "Professional boiler installation in Calgary by certified technicians. Priority service, gas & electric boilers, all brands.",
    features: [
      "Gas boiler installation",
      "Electric boiler installation",
      "Condensing boiler systems",
      "Combi boiler installation",
      "Hydronic radiant systems",
      "Boiler replacement & upgrades",
    ],
    bullets: [
      {
        t: "Calgary-climate sizing",
        d: "Every install sized for our −40°C design temperature, not just mild winter days.",
      },
      {
        t: "Top-brand certifications",
        d: "Manufacturer training on Viessmann, Navien, Triangle Tube, Crown, and Weil-McLain.",
      },
    ],
    seoTitle: "Boiler Installation Calgary | Expert Boiler Services",
    seoDescription:
      "Professional boiler installation in Calgary by certified technicians. Priority service, gas & electric boilers, all brands. Call FlameTech today for fast service!",
    seoKeywords: [
      "boiler installation Calgary",
      "condensing boiler Calgary",
      "gas boiler install",
      "Viessmann Navien Triangle Tube",
      "combi boiler Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "boiler install",
    quoteFormPlaceholder:
      "e.g. old boiler needs replacing, looking at condensing upgrade, planning a hydronic radiant system…",
    sidebar: {
      title: "Calgary Boiler Installation",
      subtitle:
        "High-efficiency gas, electric, condensing, and combi boilers — sized for Calgary's −40°C design temperature.",
      bullets: [
        "Viessmann · Navien · Triangle Tube · Crown · Weil-McLain",
        "Proper heat-loss load calculations",
        "Gas line + venting + condensate upgrades",
        "Priority emergency installations",
      ],
    },
    stats: [
      { number: "15+", label: "Years installing", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "6-10h", label: "Typical install", icon: "schedule" },
      { number: "90-95%", label: "AFUE efficiency", icon: "award" },
    ],
    financing: {
      detail:
        "Spread the cost of your new boiler into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Boiler down in a cold snap? Call now for priority replacement — we stock emergency boiler inventory in Calgary.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Boiler Installation",
          intro:
            "From emergency installations to planned upgrades, our Calgary boiler specialists bring decades of hands-on experience with every major brand and model. FlameTech's technicians hold gas fitter certifications and manufacturer training from Viessmann, Navien, Triangle Tube, and other top boiler brands. We've installed systems in everything from 1920s Mount Royal heritage homes to brand-new builds in Cranston. Our truck inventory includes parts for the most common Calgary boiler models, which means we can often complete installations in a single visit instead of ordering parts and coming back next week. Every installation includes proper sizing calculations based on your home's square footage, insulation levels, and Calgary's −40°C design temperature.",
          items: [
            { heading: "Gas Boiler Installation", body: "We install high-efficiency gas-fired boilers from all major manufacturers, handling gas line connections, venting, and system commissioning to manufacturer specifications." },
            { heading: "Electric Boiler Installation", body: "For homes without gas access or as backup heating systems, we install electric boilers with proper electrical connections and safety controls." },
            { heading: "Condensing Boiler Systems", body: "These high-efficiency units extract extra heat from exhaust gases, reducing your natural gas bills during Calgary's long heating season." },
            { heading: "Combi Boiler Installation", body: "Combination units that provide both space heating and domestic hot water in a single compact system, perfect for smaller Calgary homes and condos." },
            { heading: "Hydronic Radiant Systems", body: "We install in-floor radiant heating systems with new boilers, providing even heat distribution throughout your Calgary home." },
            { heading: "Boiler Replacement & Upgrades", body: "Complete removal of old units and installation of new systems, including all necessary piping modifications and control upgrades." },
          ],
        },
        {
          heading: "Common Boiler Installation Issues in Calgary Homes",
          intro:
            "Calgary homeowners call us for boiler installations when their old systems can't keep up with our brutal winters or when energy bills get too expensive to ignore. If your boiler is over 20 years old or your heating bills keep climbing, it's time for a replacement conversation.",
          items: [
            { body: "Old cast iron boilers that take forever to heat up and waste gas." },
            { body: "Undersized boilers that run constantly but never get the house warm enough." },
            { body: "Ancient boilers with parts that aren't made anymore." },
            { body: "Systems installed in the 1980s with efficiency ratings under 70%." },
            { body: "Boilers that can't handle Calgary's hard water and scale up quickly." },
            { body: "Units that break down every winter when you need them most." },
          ],
        },
        {
          heading: "Calgary Boiler Installation Best Practices",
          intro:
            "Proper boiler installation is critical in Calgary's climate — a system that's not sized correctly or installed properly will cost you thousands in wasted energy and repairs over its lifespan.",
          items: [
            { body: "Size the boiler correctly for Calgary's −40°C design temperature, not just mild winter days." },
            { body: "Install proper water treatment systems to handle Calgary's hard water." },
            { body: "Use high-quality expansion tanks sized for the system's water volume." },
            { body: "Install zone controls if you have multiple heating areas in your home." },
            { body: "Schedule annual maintenance starting the year after installation." },
            { body: "Keep the boiler room clear and accessible for service calls." },
          ],
        },
        {
          heading: "Common Calgary Boiler Installation Challenges We Handle",
          items: [
            { heading: "Undersized Gas Lines", body: "Many Calgary homes have gas lines sized for old, low-input boilers. New high-efficiency units often need larger gas supply lines to operate properly. We assess gas line capacity during the installation quote and upgrade lines when necessary." },
            { heading: "Inadequate Venting Systems", body: "Older Calgary homes often have brick chimneys that aren't suitable for modern condensing boilers. These units need plastic venting that can handle acidic condensate. We install proper venting systems that meet current Alberta gas codes and manufacturer requirements." },
            { heading: "Hard Water Damage", body: "Calgary's hard water causes scale buildup in boiler heat exchangers, reducing efficiency and causing premature failure. We recommend and install water treatment systems during boiler installations to protect your investment from mineral buildup." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Boiler Installation in Calgary",
        items: [
          { q: "How long does boiler installation take in Calgary homes?", a: "Most boiler installations take 6–10 hours for a straight replacement, or 1–2 days for complex installations with new piping or electrical work. Calgary's older homes often need additional work like upgrading gas lines or installing new venting systems. We'll give you an accurate timeline after assessing your specific installation requirements." },
          { q: "What size boiler do I need for my Calgary home?", a: "Boiler sizing depends on your home's square footage, insulation levels, ceiling heights, and Calgary's −40°C design temperature. Most Calgary homes need 20–30 BTU per square foot, but older homes with poor insulation may need more. We perform proper heat-loss calculations instead of just matching your old boiler's size, which may have been wrong to begin with." },
          { q: "Can you install a boiler in Calgary's winter weather?", a: "Yes, we install boilers year-round, including during Calgary's coldest months. Winter installations require extra care to prevent pipes from freezing during the changeover, but our technicians carry freeze-protection equipment and work quickly to minimize downtime. Emergency winter installations typically take longer due to weather precautions." },
          { q: "Do I need permits for boiler installation in Calgary?", a: "Yes, boiler installations in Calgary require gas permits and often electrical permits if we're upgrading controls or adding new circuits. FlameTech handles all permit applications and city inspections as part of our installation service. We know Calgary's inspection requirements and schedule inspections to avoid delays in getting your system operational." },
          { q: "What's the difference between condensing and non-condensing boilers for Calgary homes?", a: "Condensing boilers extract extra heat from exhaust gases, achieving 90–95% efficiency compared to 80–85% for standard units. In Calgary's long heating season, the extra efficiency saves significant money on natural gas bills. However, condensing boilers need proper drainage for condensate and may require different venting materials. We'll recommend the best type based on your home's setup and budget." },
        ],
      },
    },
  },
  {
    slug: "boiler-repair-calgary",
    category: "Heating",
    icon: "handyman",
    title: "Boiler Repair Calgary | Expert Heating System Services",
    lead:
      "Calgary's unforgiving winters demand reliable heating, and when your boiler fails, FlameTech Plumbing delivers the expert repair services you need to restore warmth to your home.",
    heroBody: [
      "With over 25 years of experience servicing residential and commercial boilers throughout Calgary, our certified technicians understand the intricate mechanics of modern condensing boilers, traditional cast iron systems, and everything in between.",
      "Heating emergencies strike without warning, which is why Flame Tech offers priority emergency boiler repair throughout Calgary and surrounding areas. Whether your boiler is cycling erratically during a −30°C cold snap or completely shut down on a Sunday evening, our real technicians answer the phone and dispatch immediately with fully-stocked service vehicles.",
    ],
    heroSubhead: "Trusted Calgary Boiler Repair Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN.jpg", alt: "FlameTech service van ready for boiler repair in Calgary", fit: "cover" },
    intro:
      "Expert boiler repair in Calgary. 25+ years experience with all brands. Priority emergency response. Certified technicians.",
    features: [
      "Comprehensive boiler diagnostics",
      "Burner assembly repair",
      "Heat exchanger descaling",
      "Pressure & circulation issues",
      "Control system repair",
      "Emergency safety shutdowns",
    ],
    bullets: [
      {
        t: "25+ years of Calgary experience",
        d: "We've troubleshot thousands of boiler failures across every Calgary neighborhood from Kensington to McKenzie Towne.",
      },
      {
        t: "Stocked service trucks",
        d: "Pumps, controls, sensors, and safety devices for most major brands — same-visit repairs whenever possible.",
      },
    ],
    seoTitle: "Calgary Boiler Repair | Priority Emergency Service | Flame Tech",
    seoDescription:
      "Expert boiler repair in Calgary. 25+ years experience with all brands. Priority emergency service. Certified technicians. Call now!",
    seoKeywords: [
      "boiler repair Calgary",
      "emergency boiler repair",
      "condensing boiler repair",
      "cast iron boiler service",
      "heating repair Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "boiler repair",
    quoteFormPlaceholder:
      "e.g. boiler cycling on/off, no heat to radiators, leaking water, error code on display, banging noises…",
    sidebar: {
      title: "Calgary Boiler Repair",
      subtitle:
        "25+ years servicing Calgary boilers — diagnostics, burner service, pressure fixes, and emergency shutdowns.",
      bullets: [
        "Every major brand — Viessmann to vintage cast iron",
        "Trucks stocked for same-visit repair",
        "Chinook-aware calibration",
        "Priority emergency dispatch",
      ],
    },
    stats: [
      { number: "25+", label: "Years repairing", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "<1h", label: "Priority dispatch", icon: "schedule" },
      { number: "ANY", label: "Brand serviced", icon: "check_circle" },
    ],
    callout:
      "Smell gas, see water leaking, or hear banging from your boiler? Shut it off at the switch and call us immediately.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose Flame Tech for Boiler Repair",
          intro:
            "As a locally owned and operated plumbers in Calgary, we specialize in professional boiler repair services for homes and businesses across the city. Technical expertise separates professional boiler repair from guesswork, and FlameTech's team brings decades of specialized knowledge to every service call. Calgary's challenging climate — from extreme temperature swings to chinook winds that stress heating systems — requires technicians who understand how weather patterns affect boiler performance, and our team has troubleshot thousands of boiler failures across every Calgary neighborhood from Kensington to McKenzie Towne.",
          items: [
            { heading: "Comprehensive Boiler Diagnostics", body: "Advanced testing protocols identify root causes of boiler malfunctions, including combustion analysis, pressure testing, and electronic control system evaluation to pinpoint issues before costly repairs escalate." },
            { heading: "Burner Assembly Repair", body: "Complete burner servicing covers gas valve calibration, flame sensor cleaning, ignition system replacement, and air-to-fuel ratio optimization for efficient, safe combustion in Calgary's varying atmospheric conditions." },
            { heading: "Heat Exchanger Service", body: "Professional descaling removes mineral buildup that reduces efficiency, while our technicians inspect for stress cracks and corrosion that develop from Calgary's hard water and temperature extremes." },
            { heading: "Pressure and Circulation Issues", body: "Expert repair of expansion tanks, pressure relief valves, circulation pumps, and zone valves restores proper water flow and system pressure throughout your heating zones." },
            { heading: "Control System Repair", body: "Thermostat calibration, outdoor reset controls, modulating valve repair, and smart control integration ensure your boiler responds accurately to heating demands while maximizing energy efficiency." },
            { heading: "Emergency Safety Shutdowns", body: "Immediate response to boiler lockouts, gas leaks, carbon monoxide concerns, and other safety-related shutdowns that require certified technician intervention to restore safe operation." },
          ],
        },
        {
          heading: "Common Boiler Repair Issues in Calgary Homes",
          intro:
            "Calgary homeowners encounter specific boiler challenges that stem from our unique climate conditions and local water chemistry, requiring experienced diagnosis to resolve effectively. Recognizing these warning signs early prevents complete system failures that leave families without heat during Calgary's harshest weather.",
          items: [
            { body: "Frequent cycling during chinook temperature swings overwhelms boiler controls designed for steady outdoor temperatures." },
            { body: "Mineral scaling from Calgary's hard water reduces heat exchanger efficiency and blocks circulation pathways." },
            { body: "Condensate drain freezing during extreme cold weather causes system shutdowns and potential water damage." },
            { body: "Pressure loss from expansion tank failure becomes critical when outdoor temperatures plummet rapidly." },
            { body: "Combustion air intake blockage from snow accumulation triggers safety shutdowns during winter storms." },
            { body: "Thermostat sensor drift causes temperature inconsistencies that worsen during Calgary's dramatic weather shifts." },
          ],
        },
        {
          heading: "Preventative Boiler Maintenance for Calgary Conditions",
          intro:
            "Regular maintenance tailored to Calgary's demanding climate conditions prevents expensive emergency repairs while extending boiler lifespan through systematic care of critical components. Professional servicing addresses wear patterns unique to our temperature extremes and prepares heating systems for reliable winter operation.",
          items: [
            { body: "Annual combustion analysis ensures optimal fuel efficiency and identifies developing issues before they cause system failures during peak heating season." },
            { body: "Descaling heat exchangers removes mineral deposits from Calgary's hard water that restrict heat transfer and increase energy consumption." },
            { body: "Expansion tank inspection prevents pressure-related shutdowns that commonly occur during rapid temperature changes from chinook winds." },
            { body: "Condensate drain flushing eliminates blockages that cause water backup and system shutdowns during freezing weather." },
            { body: "Control system calibration maintains accurate temperature response as sensors drift over time from constant cycling." },
            { body: "Safety device testing verifies proper operation of pressure relief valves, gas shutoffs, and flame sensors that protect your family." },
          ],
        },
        {
          heading: "Calgary Boiler Repair Expertise You Can Trust",
          items: [
            { body: "Twenty-five years of Calgary boiler service has equipped our team with deep understanding of how different boiler designs perform in our climate, enabling accurate diagnosis of complex issues that stump less experienced technicians." },
            { body: "From high-efficiency condensing boilers in new construction to cast iron workhorses in heritage Calgary homes, our technicians service every boiler type installed throughout the city's diverse housing stock. Experience with Calgary's building codes, basement configurations, and utility connections ensures proper repairs that meet local standards while addressing unique installation challenges in older neighborhoods like Hillhurst and newer developments in Cranston." },
            { body: "Calgary's extreme winter conditions and dramatic temperature swings create unique stresses on boiler systems that require specialized knowledge to address effectively. Our team understands why expansion tanks fail more frequently in our climate and how to prevent condensate freezing issues that plague boilers during extended cold spells, ensuring reliable heating performance through Calgary's demanding winter months." },
          ],
        },
      ],
    },
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
      fit: "cover",
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
    slug: "heat-pumps-calgary",
    category: "Heating",
    icon: "ac_unit",
    title: "Heat Pumps Calgary – Professional Installation & Service",
    lead:
      "Flame Tech Plumbing & Heating is Calgary's premier provider of energy-efficient heat pump solutions.",
    heroBody: [
      "As local specialists with deep roots in our community, we understand the unique heating and cooling challenges that Calgary's climate presents throughout the year.",
      "Our expertise in heat pump technology ensures you receive customized solutions that maximize comfort while minimizing energy costs.",
    ],
    heroSubhead: "Year-Round Comfort",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/01/image.png", alt: "AirEase cold-climate heat pump installed by FlameTech" },
    intro:
      "Expert heat pump installation, repair, and maintenance in Calgary. Energy-efficient heating and cooling for Alberta homes.",
    features: [
      "Heat pump installation",
      "Heat pump repair (all brands)",
      "Preventative maintenance & service",
      "Air-source & ductless mini-split",
      "Ground-source heat pumps",
      "Priority emergency service",
    ],
    bullets: [
      {
        t: "Calgary heat pump specialists",
        d: "Our certified technicians live and serve right here in Calgary. We're familiar with how our extreme temperature swings impact heat pump performance.",
      },
      {
        t: "Licensed & insured",
        d: "Every member of our team carries full licensing and comprehensive insurance — the strictest safety benchmarks in the industry.",
      },
    ],
    seoTitle: "Heat Pump Installation Calgary | Flame Tech Plumbing",
    seoDescription:
      "Expert heat pump installation, repair & maintenance in Calgary. Energy-efficient heating & cooling solutions for Alberta homes. Priority service.",
    seoKeywords: [
      "heat pump Calgary",
      "heat pump installation Calgary",
      "ductless mini-split Calgary",
      "cold climate heat pump",
      "AirEase heat pump Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "heat pump",
    quoteFormPlaceholder:
      "e.g. looking at a new heat pump install, existing unit losing heat, considering a ductless mini-split for the basement…",
    sidebar: {
      title: "Calgary Heat Pump Service",
      subtitle:
        "Installation, repair, and maintenance of air-source, ductless mini-split, and ground-source heat pumps.",
      bullets: [
        "AirEase 12-year parts & labor warranty",
        "Ductless mini-split specialists",
        "One system heats AND cools",
        "Certified Calgary technicians",
      ],
    },
    stats: [
      { number: "12-YR", label: "AirEase warranty", icon: "award" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "ALL", label: "Makes & models", icon: "check_circle" },
      { number: "2-IN-1", label: "Heat + cool", icon: "verified" },
    ],
    financing: {
      detail:
        "Spread the cost of your new heat pump into flexible monthly payments via our Financeit partner.",
    },
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Trust Flame Tech for Heat Pumps",
          intro:
            "Selecting the ideal heat pump provider makes all the difference in performance and longevity. Here's what sets Flame Tech Plumbing & Heating apart in Calgary:",
          items: [
            { heading: "Calgary Heat Pump Specialists", body: "Our certified technicians live and serve right here in Calgary. We're intimately familiar with how our extreme temperature swings impact heat pump performance and know exactly which systems thrive in our climate conditions." },
            { heading: "Certified & Covered Professionals", body: "Your investment deserves protection. Every member of our team carries full licensing and comprehensive insurance, delivering services that meet the strictest quality and safety benchmarks in the industry. We also have Heat Pump Experts available in Airdrie." },
          ],
        },
        {
          heading: "Our Heat Pump Services",
          intro:
            "Flame Tech Plumbing & Heating delivers comprehensive heat pump services designed for Calgary's climate:",
          items: [
            { heading: "Heat Pump Installation", body: "Considering a heat pump upgrade for your Calgary property? Our specialists assess your property's heating and cooling requirements, recommending the optimal heat pump system that balances performance with your financial goals. We manage every installation phase with precision and professionalism from start to finish." },
            { heading: "Heat Pump Repair", body: "Experiencing reduced heating or cooling output, unusual sounds, or complete system failure? Our trained technicians troubleshoot and repair all heat pump brands and configurations rapidly, bringing reliable climate control back to your Calgary home. When you need heat pump repair Calgary, Flame Tech responds quickly." },
            { heading: "Heat Pump Maintenance & Service", body: "Preventative maintenance protects your heat pump investment and ensures peak efficiency year-round. Our thorough heat pump servicing in Calgary prevents expensive failures, optimizes energy consumption, and extends system lifespan through all seasons." },
            { heading: "Emergency Heat Pump Services", body: "Heat pump failures never follow convenient schedules, particularly during Calgary's temperature extremes. Flame Tech provides priority emergency heat pump services in Calgary to restore your comfort when you need it most urgently." },
          ],
        },
        {
          heading: "Selecting the Perfect Heat Pump for Your Calgary Property",
          items: [
            { heading: "Heat Pump System Options", body: "We install multiple heat pump configurations suited to diverse Calgary properties, including air-source systems, ductless mini-splits, and ground-source options. Our professionals clarify the advantages of each system type and guide you toward the ideal match for your specific situation." },
            { heading: "Key Selection Criteria (Property Size, Investment, Performance)", body: "Your ideal heat pump selection depends on multiple variables including square footage, available investment, and desired efficiency performance levels. We thoroughly review these elements with you to guarantee a well-informed choice." },
            { heading: "Professional Guidance You Can Trust", body: "Drawing on comprehensive heat pump knowledge and years serving Calgary residents, we deliver personalized recommendations aligned perfectly with your unique circumstances." },
          ],
        },
      ],
      promo: {
        heading: "AirEase Special — 12-year parts and labor warranty*",
        image: { src: "/images/2026/02/SCR-20260212-hxkx.webp", alt: "AirEase warranty offer" },
        groups: [
          { heading: "Qualifying Residential Products", items: ["Heat Pumps: Model 4SHP18LX."] },
          { heading: "Requirements for Coverage", items: [
            "Registration: Equipment must be registered online within 60 days of installation.",
            "Residential Application: Limited to owner-occupied residential use.",
            "Annual Maintenance: Documented annual professional maintenance is required to maintain the labor portion of the agreement.",
          ]},
        ],
        disclaimer: "Terms and Conditions Apply",
      },
      faq: {
        heading: "Heat Pump Questions Calgary Homeowners Ask",
        items: [
          { q: "Ready to discover the Flame Tech advantage?", a: "Reach out now for a complimentary, pressure-free estimate on our heat pump services in Calgary. Connect with us via phone, email, or our convenient online scheduling platform. We're standing by to address your questions and arrange service whenever suits you best." },
          { q: "How often should I have my heat pump serviced?", a: "We advise booking professional heat pump maintenance twice annually — spring and fall — to maintain peak efficiency and catch problems before they escalate into major repairs." },
          { q: "What are the signs my heat pump needs repair?", a: "Warning signs include irregular heating or cooling patterns, unfamiliar operational sounds, moisture accumulation, ice formation, and unexplained spikes in utility costs. Contact our Calgary heat pump repair specialists immediately when noticing these symptoms." },
          { q: "How long does installation take?", a: "Installation timelines vary based on system configuration and installation complexity. We establish transparent expectations and provide detailed scheduling before beginning any project." },
        ],
      },
    },
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
    slug: "water-softener",
    category: "Water",
    icon: "science",
    title: "Water Softener Calgary – Installation & Service",
    lead:
      "Calgary's water hardness can lead to frustrating issues, from dingy laundry to costly appliance repairs.",
    heroBody: [
      "At Flame Tech Plumbing & Heating, we understand these challenges. We provide top-quality water softener systems and professional installation and maintenance services, ensuring your home enjoys the luxury of soft, clean water.",
    ],
    heroSubhead: "Satisfaction Guaranteed",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/water-softener-calgary.png", alt: "Residential water softener installed by FlameTech" },
    intro:
      "Calgary water measures 14–16 grains per gallon — firmly in the very-hard range. A softener extends appliance life, reduces soap use, and makes fixtures easier to clean.",
    features: [
      "Professional softener installation",
      "Annual service & maintenance",
      "Bypass plumbing setup",
      "Salt system recommendations",
      "Tankless-heater integration",
      "Emergency service calls",
    ],
    bullets: [
      {
        t: "Local water-softening experts",
        d: "Our team lives and works in Calgary — we understand the specific demands our hard water places on homes and appliances.",
      },
      {
        t: "Licensed & insured technicians",
        d: "Professional and safe service that adheres to the highest industry standards. We also offer water softener services in Airdrie.",
      },
    ],
    seoTitle: "Water Softener Calgary | Installation & Service | FlameTech",
    seoDescription:
      "Calgary water softener installation and service from FlameTech. Protect fixtures and appliances from hard-water damage. Call 587-834-3668 for a free quote.",
    seoKeywords: [
      "water softener Calgary",
      "hard water Calgary",
      "water softener installation",
      "Calgary water treatment",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "water softener",
    quoteFormPlaceholder:
      "e.g. hard-water spotting on fixtures, laundry feels stiff, looking for a softener install, need annual service…",
    sidebar: {
      title: "Calgary Water Softener",
      subtitle:
        "Installation and servicing of properly sized softener systems — sized for your household's actual usage.",
      bullets: [
        "Protect fixtures, water heaters, and dishwashers",
        "Demand-regenerating controls",
        "Bypass plumbing on every install",
        "Annual service & salt refills",
      ],
    },
    stats: [
      { number: "14-16", label: "GPG Calgary hardness", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "10-15", label: "Years softener life", icon: "schedule" },
      { number: "FREE", label: "Estimates", icon: "request_quote" },
    ],
    financing: {
      detail:
        "Spread the cost of a whole-home softener install into flexible monthly payments via our Financeit partner.",
    },
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Water Softeners in Calgary?",
          intro:
            "Choosing the right company for your water-softening needs is crucial. Here's why Calgary trusts Flame Tech Plumbing & Heating:",
          items: [
            { heading: "Local Water Softening Experts", body: "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands our climate places on your water softener system and are equipped to handle any issue, big or small. We also offer water softener services in Airdrie." },
            { heading: "Licensed & Insured Technicians", body: "Your peace of mind is our priority. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards." },
          ],
        },
        {
          heading: "Benefits of Water Softeners for Calgary Homes",
          intro:
            "Installing a water softener from Flame Tech Plumbing & Heating offers a multitude of benefits for your Calgary home:",
          items: [
            { body: "Extends the life of water heaters, dishwashers, washing machines, and other appliances by preventing scale buildup." },
            { body: "Reduces soap and detergent use — softened water lathers better and rinses cleanly." },
            { body: "Keeps fixtures, glass shower doors, and sinks free from hard-water spotting." },
            { body: "Improves skin and hair feel after showers by eliminating the mineral film hard water leaves behind." },
            { body: "Protects tankless water heaters from scaling that otherwise requires frequent descaling service." },
            { body: "Makes laundry softer and brighter, with colors lasting longer over repeat washes." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Water Softening in Calgary",
        items: [
          { q: "How does a water softener work?", a: "Water softeners use a process called ion exchange to remove calcium and magnesium minerals from your water. Resin beads within the softener attract and trap these hard-water minerals, replacing them with sodium ions." },
          { q: "How much does a water softener cost?", a: "The cost of a water softener can vary depending on the size and type of system, as well as the complexity of the installation. Contact us for a free, no-obligation quote." },
          { q: "How long do water softeners last?", a: "With proper maintenance, a good quality water softener can last for 10 to 15 years or even longer." },
          { q: "Is softened water safe to drink?", a: "Yes, softened water is generally safe to drink. The amount of sodium added during the softening process is typically minimal and well within safe drinking water standards. Individuals on strict low-sodium diets should consult with their doctor." },
          { q: "How often does a water softener need servicing?", a: "Regular maintenance typically involves periodically adding salt to the brine tank and potentially having a professional inspection every few years." },
        ],
      },
    },
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
