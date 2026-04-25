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
  items?: RichItem[];
};

export type RichPromo = {
  heading: string;
  image: RichImage;
  groups: { heading: string; items: string[] }[];
  disclaimer?: string;
};

export type RichFAQ = {
  heading: string;
  intro?: string;
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
  /** City this page targets. Defaults to "Calgary" when omitted. */
  location?: "Calgary" | "Airdrie";
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
  /**
   * Optional photo portfolio rendered as a scroll-snap carousel between
   * the process timeline and related services. Use sparingly — best on
   * install-focused pages where "here's our work" lands.
   */
  portfolio?: {
    eyebrow?: string;
    heading?: string;
    intro?: string;
    items: { src: string; alt: string; caption?: string }[];
  };
  /**
   * Optional before/after image pairs rendered as drag-to-reveal sliders.
   * Best on pages where we have actual install transformations (furnace
   * swap-outs, boiler replacements, fixture upgrades).
   */
  beforeAfter?: {
    eyebrow?: string;
    heading?: string;
    intro?: string;
    pairs: {
      before: { src: string; alt: string };
      after: { src: string; alt: string };
      caption?: string;
    }[];
  };
};

export const services: ServicePage[] = [
  // PLUMBING
  {
    slug: "bathroom-plumbing-calgary",
    category: "Plumbing",
    icon: "bathroom",
    title: "Bathroom Plumbing Calgary | Professional Bathroom Services",
    lead:
      "Calgary's hard water and extreme temperature swings wreak havoc on bathroom plumbing — we see it every day. FlameTech's bathroom plumbing specialists handle everything from emergency burst pipes in older [Mount Royal](/mount-royal-plumbers-calgary) homes to complete bathroom renovations in new [Evergreen](/evergreen-plumbers-calgary) developments.",
    heroBody: [
      "When your toilet won't stop running at 3 AM or your shower suddenly turns ice cold, we answer the phone — not a voicemail system. Our Calgary crews are equipped to handle any bathroom plumbing emergency with priority dispatch, day or night.",
      "From emergency calls in established neighbourhoods to full renovations in new builds, our Calgary plumbing specialists have seen every bathroom configuration this city has to offer.",
    ],
    heroSubhead: "Trusted Calgary Bathroom Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/Toilet.webp", alt: "Bathroom plumbing installed by FlameTech in Calgary", fit: "cover" },
    intro:
      "Bathroom plumbing Calgary — toilets, showers, vanities, drain cleaning, and complete renovation rough-ins. Priority emergency response, two decades of experience.",
    features: [
      "Toilet repair & replacement",
      "Shower & tub plumbing",
      "Vanity & sink installation",
      "Bathroom drain cleaning",
      "Bathroom renovation rough-in",
      "Emergency bathroom repairs",
    ],
    bullets: [
      {
        t: "Calgary hard-water ready",
        d: "We stock parts built to handle mineral deposits that destroy builder-grade fixtures within a few years.",
      },
      {
        t: "Clean, careful work",
        d: "Drop cloths, shoe covers, debris removal. We leave your bathroom cleaner than we found it.",
      },
    ],
    seoTitle: "Bathroom Plumbing Calgary | Expert Bathroom Plumbing Services",
    seoDescription:
      "Expert bathroom plumbing in Calgary. Toilets, showers, vanities, drain cleaning & renovations. Priority emergency response. Call FlameTech today!",
    seoKeywords: [
      "bathroom plumbing Calgary",
      "toilet repair Calgary",
      "shower plumbing Calgary",
      "bathroom renovation plumber",
      "vanity install Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "bathroom plumbing",
    quoteFormPlaceholder:
      "e.g. toilet running constantly, weak shower pressure, leaky vanity supply line, bathroom renovation rough-in…",
    sidebar: {
      title: "Calgary Bathroom Plumbing",
      subtitle:
        "Toilets, showers, vanities, drain cleaning, and complete bathroom renovation rough-ins.",
      bullets: [
        "Kohler · Moen · Delta · American Standard",
        "Alberta-licensed journeyman plumbers",
        "Priority emergency bathroom repairs",
        "Permit applications handled start-to-finish",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "1-2d", label: "Bathroom rough-in", icon: "schedule" },
      { number: "Licensed", label: "journeyman", icon: "award" },
    ],
    callout:
      "Overflowing toilet, burst supply line, or sewage backup? Call 587-834-3668 — we dispatch emergency crews across Calgary within the hour.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Bathroom Plumbing",
          intro:
            "From emergency calls in established neighbourhoods to full renovations in new builds, our Calgary plumbing specialists have seen every bathroom configuration this city has to offer. We've been fixing bathroom plumbing across Calgary for over two decades — from the original galvanized steel in Mount Royal character homes to the builder-grade fixtures failing in 2010-era developments. Our technicians carry parts for every major brand, understand Calgary's hard water issues, and know exactly what goes wrong with the cheap vanity faucets and shower valves that builders love to install. When poly-b supply lines burst behind bathroom walls or when that 15-year-old toilet finally gives up, we get there fast with the right parts and tools.",
          items: [
            { heading: "Toilet Repair & Replacement", body: "Complete toilet services from simple flapper replacements to full toilet swaps. We stock quality toilets that can handle Calgary's hard water and won't break down in three years." },
            { heading: "Shower & Tub Plumbing", body: "Shower valve repairs, tub drain cleaning, and complete shower/tub plumbing installation. We fix the weak water pressure issues common in Calgary's newer subdivisions." },
            { heading: "Vanity & Sink Installation", body: "Professional vanity plumbing from simple faucet swaps to complete vanity installations. We properly secure supply lines and prevent the leaks that ruin bathroom floors." },
            { heading: "Bathroom Drain Cleaning", body: "Heavy-duty drain cleaning for bathroom sinks, tubs, and showers. Hair clogs, soap buildup, and Calgary's mineral deposits don't stand a chance against our equipment." },
            { heading: "Bathroom Renovation Plumbing", body: "Complete rough-in plumbing for bathroom renovations. We handle permit applications and work with your contractor to get plumbing inspections passed the first time." },
            { heading: "Emergency Bathroom Repairs", body: "Priority emergency service for burst supply lines, overflowing toilets, and sewage backups. We carry emergency repair parts and can stop the damage fast." },
          ],
        },
        {
          heading: "Common Bathroom Plumbing Issues in Calgary Homes",
          intro:
            "Calgary's hard water and temperature extremes create specific bathroom plumbing problems that we see repeatedly across the city. Don't let small bathroom plumbing issues turn into expensive water damage — call us when you first notice a problem.",
          items: [
            { body: "Toilet fill valves failing after 5-7 years due to mineral buildup from hard water." },
            { body: "Shower mixing valves sticking or failing, causing sudden temperature changes." },
            { body: "Bathroom sink pop-up drains clogged with hair and soap scum buildup." },
            { body: "Vanity supply lines leaking where they connect to shut-off valves." },
            { body: "Tub drains backing up from hair clogs and mineral deposits." },
            { body: "Wax ring failures under toilets, especially in homes with foundation settling." },
          ],
        },
        {
          heading: "Bathroom Plumbing Maintenance for Calgary Homeowners",
          intro:
            "Regular bathroom maintenance prevents the expensive emergencies that Calgary's hard water and temperature swings can cause. A few minutes of prevention beats hours of cleanup and repair bills.",
          items: [
            { body: "Check toilet tank components yearly — replace flappers and fill valves before they fail completely." },
            { body: "Clean shower heads and faucet aerators monthly to prevent mineral buildup from Calgary's hard water." },
            { body: "Test bathroom exhaust fans and replace them if they're not moving air — moisture causes serious plumbing problems." },
            { body: "Check under vanities monthly for small leaks at supply line connections." },
            { body: "Pour hot water down bathroom drains weekly to prevent soap and hair buildup." },
            { body: "Have bathroom drain cleaning done annually, especially if you have long hair in the household." },
          ],
        },
        {
          heading: "Calgary Bathroom Plumbing Expertise You Can Trust",
          intro:
            "FlameTech's bathroom plumbing technicians are certified for all major fixture brands and hold current Alberta plumbing licenses. We've completed thousands of bathroom renovations and repairs across Calgary, from emergency calls in established neighbourhoods to full hot water tank installations serving new master bathrooms. We work with every major bathroom fixture brand sold in Calgary — Kohler, Moen, Delta, American Standard, and the builder-grade fixtures common in newer developments. Our trucks stock parts for the mixing valves, fill valves, and faucet cartridges that fail most often in Calgary homes built between 2005-2015. Alberta's temperature extremes put serious stress on bathroom plumbing — from frozen pipes during cold snaps to thermal expansion during chinooks. We understand how Calgary's climate affects bathroom fixtures and always account for temperature movement when installing new plumbing. Hard water is another constant challenge that we factor into every repair and installation recommendation.",
        },
      ],
      faq: {
        heading: "What Calgary Homeowners Ask About Bathroom Plumbing",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "How do I know when to repair versus replace my toilet?", a: "If your toilet rocks when you sit on it, has cracks in the porcelain, or needs repairs more than twice a year, it's time for replacement. Toilets typically last 15-20 years in Calgary before the hard water and settling foundations cause problems that cost more to fix than replace. Emergency repairs can often buy you time, but recurring issues mean replacement makes more financial sense." },
          { q: "Why does my shower pressure drop when other fixtures are used?", a: "This is extremely common in Calgary homes built after 2005 where builders used undersized supply lines or installed cheap pressure-balancing valves. The mixing valve can't maintain proper flow when water demand increases elsewhere in the house. We can upgrade the valve or increase supply line size depending on your home's plumbing configuration." },
          { q: "What causes sewer gas smells from bathroom drains?", a: "Dry P-traps are the most common cause — if a bathroom fixture isn't used regularly, the water seal evaporates and sewer gases come up through the drain. Hair and soap buildup can also trap debris that creates odors. Regular use and monthly hot water flushes usually solve the problem, but persistent odors need professional drain cleaning." },
          { q: "When should I call for emergency bathroom plumbing in Calgary?", a: "Call immediately for overflowing toilets, any visible water leaking onto floors, or sewage backing up. Also call for complete loss of hot water in winter — frozen pipes can burst quickly in Calgary's cold. Slow drains, running toilets, or dripping faucets can usually wait until business hours, but don't ignore them for weeks." },
          { q: "How long does a bathroom renovation plumbing job take?", a: "Rough-in plumbing for a complete bathroom renovation typically takes 1-2 days, depending on how much we're relocating. Fixture installation and connections usually happen over another day once your contractor has walls and flooring completed. Tankless water heater installations for new master bathrooms can add a day to the timeline." },
        ],
      },
    },
  },
  {
    slug: "shower-plumbing-calgary",
    category: "Plumbing",
    icon: "shower",
    title: "Shower Plumbing Calgary | Expert Shower Installation & Repair Services",
    lead:
      "Calgary's unpredictable weather puts stress on every part of your plumbing system, but nothing's more frustrating than stepping into a cold shower on a -30 morning. FlameTech's shower plumbing specialists have been fixing pressure problems, temperature swings, and complete shower failures across Calgary for over two decades.",
    heroBody: [
      "We work with everything from builder-grade installations in newer communities to custom bathroom plumbing. Whether your shower valve died at 6 AM or you're planning a bathroom renovation, we answer our phone — no voicemail, no call centre.",
      "Our Calgary service trucks carry the parts and tools to handle most shower plumbing jobs on the first visit, from pressure balancing valves to thermostatic mixers and complete tear-outs.",
    ],
    heroSubhead: "Trusted Calgary Shower Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/Shower-Install.webp", alt: "Shower plumbing installation by FlameTech in Calgary", fit: "cover" },
    intro:
      "Shower plumbing Calgary — installation, valve repair, pressure problems, temperature control, and behind-the-wall leak diagnosis. Certified for Kohler, Moen, Delta, Grohe.",
    features: [
      "Shower valve repair & replacement",
      "Shower installation & rough-in",
      "Shower pressure diagnosis",
      "Temperature control repair",
      "Behind-the-wall leak repair",
      "Steam & multi-head systems",
    ],
    bullets: [
      {
        t: "Certified installer network",
        d: "Kohler, Moen, Delta, Grohe — we stock cartridges and parts for every major shower valve sold in Calgary.",
      },
      {
        t: "Calgary-climate experience",
        d: "Chinooks, hard water, poly-b supply lines — we know what goes wrong in Alberta and how to build systems that last.",
      },
    ],
    seoTitle: "Shower Plumbing Calgary | Expert Shower Installation & Repair",
    seoDescription:
      "Professional shower plumbing services in Calgary. Installation, repair, pressure problems & leaks. Priority emergency response. Call Flame Tech today!",
    seoKeywords: [
      "shower plumbing Calgary",
      "shower valve repair Calgary",
      "shower install Calgary",
      "thermostatic shower valve",
      "shower leak Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "shower plumbing",
    quoteFormPlaceholder:
      "e.g. shower temperature fluctuating, weak pressure, valve cartridge stuck, planning a tile shower rebuild…",
    sidebar: {
      title: "Calgary Shower Plumbing",
      subtitle:
        "Valve repairs, pressure problems, temperature control, and full shower installs — including steam and multi-head systems.",
      bullets: [
        "Certified: Kohler · Moen · Delta · Grohe",
        "Cartridges stocked for common Calgary valves",
        "Priority emergency dispatch",
        "Proper waterproofing & Alberta code compliance",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "~2h", label: "Emergency ETA", icon: "schedule" },
      { number: "Licensed", label: "journeyman", icon: "award" },
    ],
    callout:
      "Cold shower on a -30 morning? Burst valve flooding the bathroom? Call 587-834-3668 — we reach most of Calgary within two hours.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Shower Plumbing",
          intro:
            "From emergency shower repairs to complete bathroom renovations, our Calgary plumbing crew knows what actually works in Alberta homes. We've installed and repaired thousands of showers across Calgary, from basic builder-grade setups in Panorama Hills to high-end steam showers in Aspen Woods. Our technicians are certified in pressure balancing valve installation, know the quirks of every major shower valve manufacturer, and understand how Calgary's hard water affects different fixtures. When you call FlameTech, you're getting plumbers who've seen it all — poly-b supply lines that split during chinooks, mixing valves that fail after 15 years, and tile jobs that leak because the contractor didn't waterproof properly.",
          items: [
            { heading: "Shower Valve Repair & Replacement", body: "Pressure balancing valves, thermostatic mixers, and single-handle cartridge systems. We stock cartridges for Moen, Delta, Kohler, and most builder-grade valves." },
            { heading: "Shower Installation & Rough-In", body: "Complete shower plumbing from rough-in to final fixture installation. Proper slope, waterproofing, and code-compliant valve placement." },
            { heading: "Shower Pressure Problems", body: "Low pressure diagnosis and repair. Flow restrictors, clogged shower heads, supply line issues, and pressure balancing valve adjustments." },
            { heading: "Temperature Control Issues", body: "Scalding water, cold water only, or temperature fluctuations. Mixing valve repair, cartridge replacement, and thermostat calibration." },
            { heading: "Shower Leak Repair", body: "Behind-the-wall leaks, valve stem leaks, and fixture connection problems. Complete tear-out and waterproofing when needed." },
            { heading: "Steam Shower & Multi-Head Systems", body: "High-end shower installations with multiple body sprays, rain heads, and steam generators. Proper pressure and flow calculations." },
          ],
        },
        {
          heading: "Common Shower Plumbing Issues in Calgary Homes",
          intro:
            "Calgary's hard water and temperature swings create specific problems for shower plumbing that we see repeatedly across the city. Most of these problems start small but get expensive fast if you ignore them.",
          items: [
            { body: "Pressure balancing valves failing after 12-15 years, especially in homes built during the 2000s construction boom." },
            { body: "Moen cartridges seizing up from mineral buildup — common in areas with particularly hard water." },
            { body: "Temperature fluctuations when other fixtures are used, usually a pressure balancing problem." },
            { body: "Shower heads clogging with calcium deposits within 2-3 years of installation." },
            { body: "Behind-the-wall leaks in tile surrounds where waterproofing was done poorly or not at all." },
            { body: "Cold water delivery problems in newer communities where builders undersized supply lines." },
          ],
        },
        {
          heading: "Shower Maintenance Tips for Calgary Homeowners",
          intro:
            "Regular maintenance can prevent most shower problems and extend the life of your fixtures, especially important with Calgary's hard water.",
          items: [
            { body: "Remove and clean shower heads every 6 months to prevent calcium buildup that reduces flow and pressure." },
            { body: "Test your pressure balancing valve annually — water temperature shouldn't change when you flush toilets or run other fixtures." },
            { body: "Check caulking around shower fixtures every year and re-seal as needed to prevent water damage." },
            { body: "Have mixing valve cartridges replaced every 8-10 years before they seize up from mineral deposits." },
            { body: "Install a water softener if you have very hard water — it will double the life of your shower components." },
            { body: "Keep spare cartridges for your shower valves on hand — they're cheap insurance against weekend emergencies." },
          ],
        },
        {
          heading: "Calgary Shower Plumbing Expertise You Can Trust",
          intro:
            "FlameTech's plumbing technicians are licensed journeymen with extensive training on all major shower valve manufacturers. We're certified installers for Kohler, Moen, Delta, and Grohe systems, and we stock parts for most shower valves installed in Calgary over the past 20 years. When you need someone who knows the difference between a thermostatic valve and a pressure balancing valve — and which one works better in your specific situation — you've found us. We work with everything from basic builder-grade shower installations to high-end custom tile work with multiple shower heads and steam systems. Our crew understands Calgary's building codes, knows how to properly waterproof shower surrounds, and can handle the plumbing for complex installations like recirculation pumps for instant hot water delivery. Alberta's weather creates unique challenges for shower plumbing that many contractors don't understand. Chinook temperature swings can cause pipes to expand and contract rapidly, poly-b supply lines are particularly vulnerable to failure, and hard water accelerates wear on valve cartridges.",
        },
      ],
      faq: {
        heading: "What Calgary Homeowners Ask About Shower Plumbing",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "How long do shower valves typically last in Calgary homes?", a: "Most shower valves last 12-15 years in Calgary, but hard water can shorten that to 8-10 years if you don't maintain them. The cartridges usually fail first — they get clogged with mineral deposits and start sticking. Regular cleaning and cartridge replacement can extend the valve's life significantly." },
          { q: "Should I repair or replace my old shower valve?", a: "If your valve is less than 10 years old and just needs a cartridge replacement, repair makes sense. If it's older than 15 years or you're having multiple issues, replacement is usually more cost-effective. We can assess your specific situation and give you an honest recommendation over the phone." },
          { q: "What's the difference between pressure balancing and thermostatic shower valves?", a: "Pressure balancing valves adjust the hot/cold mix when water pressure changes — they prevent scalding when someone flushes a toilet. Thermostatic valves maintain exact temperature regardless of pressure changes and are required for multiple shower head installations. For most Calgary homes, pressure balancing valves work fine and cost less." },
          { q: "Can you install a new shower in my Calgary basement?", a: "Yes, but it requires proper planning for drainage and venting. We'll need to assess your basement's plumbing layout and may need to install additional drainage or move the main stack. The job typically takes 1-2 days depending on how much plumbing needs to be modified." },
          { q: "Why is my shower water temperature changing constantly?", a: "This usually means your pressure balancing valve isn't working properly, or your home has undersized supply lines — common in some newer Calgary developments. We can test your water pressure and flow rates to determine if you need valve adjustment, supply line upgrades, or water pressure boosting." },
        ],
      },
    },
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
    heroImage: { src: "/images/2025/04/drain-cleaning-pipe.jpeg", alt: "Plumber working on a drain line under a sink — Calgary drain cleaning", fit: "cover" },
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
    timeline: {
      heading: "How a drain call goes",
      intro:
        "We don't just shove a snake down and hope. Every visit is diagnosed first so the fix actually lasts.",
      steps: [
        { icon: "call", title: "Describe the symptoms", body: "Where is it slow or backing up? When did it start? We get the basics over the phone so we arrive with the right gear." },
        { icon: "tune", title: "Camera inspection first", body: "We run a video camera through the line so we can see exactly what's blocking it — grease, scale, roots, or a collapsed pipe — before we cut anything." },
        { icon: "water_damage", title: "Clear it (snake or hydro-jet)", body: "Light clogs come out with a cable; heavy grease, scale, or roots get a 4000 PSI hydro-jet pass that scours the pipe wall back to bare metal." },
        { icon: "verified", title: "Verify on camera + report", body: "We re-camera the line so you can see it run clear, and tell you straight if there's an underlying pipe issue worth addressing now vs. monitoring." },
      ],
    },
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
    slug: "emergency-plumber-calgary",
    category: "Plumbing",
    icon: "contact_emergency",
    title: "Emergency Plumbers Calgary – Fast Response When You Need It Most",
    lead:
      "When disaster strikes, you need emergency plumbers in Calgary who respond immediately. At Flame Tech, we provide rapid emergency plumbing services to protect your home from water damage and restore your comfort quickly.",
    heroBody: [
      "Our emergency plumbers in Calgary are on call around the clock, ready to tackle urgent plumbing crises that can't wait until morning. From burst pipes during Calgary's harsh winters to sudden water heater failures, our certified technicians arrive equipped to handle any emergency plumbing situation.",
      "When you call us, you're getting immediate help from Calgary's most trusted emergency plumbing team — priority dispatch, fair pricing, and real people who answer the phone.",
    ],
    heroSubhead: "Priority Emergency Response",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/04/flame-tech-van.jpg", alt: "FlameTech emergency plumbing service van in Calgary", fit: "cover" },
    intro:
      "Emergency plumbing in Calgary — burst pipes, active leaks, sewer backups, water heater failures. Priority dispatch, honest quotes, certified technicians.",
    features: [
      "Burst and frozen pipe repairs",
      "Active leak containment",
      "Sewer and drain backups",
      "Water heater failures",
      "Gas line leak response",
      "Overflowing toilet repairs",
    ],
    bullets: [
      {
        t: "Priority dispatch",
        d: "Urgent calls move to the front of the queue so we can minimize damage to your home.",
      },
      {
        t: "Fair emergency pricing",
        d: "No surprise surcharges. We quote before we start — even in a crisis.",
      },
    ],
    seoTitle: "Emergency Plumbers Calgary | Fast Emergency Plumbing Services",
    seoDescription:
      "Need an emergency plumber in Calgary? Flame Tech offers priority emergency plumbing services. Fast response for burst pipes, leaks & more. Call now!",
    seoKeywords: [
      "emergency plumber Calgary",
      "emergency plumbing Calgary",
      "burst pipe Calgary",
      "after hours plumber",
      "sewer backup Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "emergency plumbing",
    quoteFormPlaceholder:
      "e.g. burst pipe in basement, sewer backing up, water heater leaking fast, toilet overflowing…",
    sidebar: {
      title: "Calgary Emergency Plumbing",
      subtitle:
        "Burst pipes, sewer backups, major leaks — priority dispatch from Calgary's most trusted emergency plumbers.",
      bullets: [
        "Certified, licensed, and insured technicians",
        "Fully-stocked emergency service vehicles",
        "All Calgary quadrants + surrounding towns",
        "Honest pricing — even in a crisis",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Priority", label: "Dispatch", icon: "schedule" },
      { number: "Licensed", label: "& Insured", icon: "award" },
    ],
    callout:
      "Water damage spreads fast. If a pipe has burst or a drain is backing up, call 587-834-3668 right now — we'll dispatch a technician immediately.",
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Emergency Plumbing in Calgary?",
          intro:
            "Plumbing emergencies don't keep business hours, and neither do we. As Calgary's most reliable emergency plumbers, Flame Tech Plumbing & Heating is your lifeline when disaster strikes. We understand that plumbing emergencies cause stress, property damage, and disruption to your daily life. That's why we guarantee rapid response times throughout Calgary and surrounding communities. Our certified emergency plumbers arrive fully equipped with professional tools and genuine parts to solve your crisis efficiently — day or night, weekends and holidays included. FlameTech specializes in emergency plumbing services that protect Calgary homes from catastrophic water damage, combining decades of experience with state-of-the-art equipment to handle urgent situations including burst pipes, severe leaks, sewer backups, and water heater failures.",
          items: [
            { heading: "Rapid Response Times", body: "Strategically positioned service vehicles throughout the Calgary region mean our emergency plumbers arrive fast, minimizing water damage and limiting repair costs." },
            { heading: "Certified Technicians", body: "Every emergency plumber on our Calgary team is fully licensed, bonded, and insured — meeting all Alberta plumbing codes with the training to handle any crisis safely." },
            { heading: "Fully-Stocked Trucks", body: "Our emergency vehicles carry professional tools and genuine parts so we can often resolve your emergency in a single visit instead of leaving you waiting for parts." },
            { heading: "Transparent Pricing", body: "Honest, upfront quotes even in a crisis. No surprise surcharges, no pressure — just fair pricing so you know exactly what to expect." },
          ],
        },
        {
          heading: "Common Plumbing Emergencies We Handle in Calgary",
          intro:
            "Our emergency plumbers in Calgary have seen it all and are equipped to handle any urgent situation. No matter the emergency, our certified technicians arrive prepared to minimize damage and restore your plumbing system quickly and safely.",
          items: [
            { body: "Burst or frozen pipes during Calgary's harsh winters that can cause thousands in water damage within hours." },
            { body: "Severe drain and sewer backups that create health hazards and require immediate professional attention." },
            { body: "Water heater failures that leave families without hot water when they need it most." },
            { body: "Gas line leaks that pose serious safety risks and demand instant response." },
            { body: "Major leaks and flooding from failed appliances or plumbing fixtures that can devastate your property." },
            { body: "Overflowing toilets that won't stop running and require urgent intervention." },
          ],
        },
        {
          heading: "Emergency Plumbers Serving All of Calgary",
          intro:
            "When plumbing disasters strike anywhere in Calgary, our emergency response team is ready to help. We provide urgent service throughout all Calgary quadrants and surrounding communities including Airdrie, Chestermere, Okotoks, and Cochrane. Our fully-stocked emergency vehicles are strategically positioned throughout the Calgary region for the fastest possible response times to your plumbing crisis. Whether you're downtown, in the suburbs, or in outlying areas, you can count on Flame Tech's emergency plumbers to arrive quickly with the expertise and equipment needed to resolve your plumbing emergency and prevent further damage to your home.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions — Emergency Plumbers Calgary",
        intro:
          "Facing a plumbing emergency? You're not alone — and you probably have questions. As Calgary's premier emergency plumbing service, we understand the stress and urgency of plumbing crises, from midnight pipe bursts to weekend water heater failures. Browse our emergency plumbing FAQs below for quick answers. If your situation needs immediate attention, don't hesitate — call Flame Tech Plumbing at 587-834-3668 now for urgent assistance.",
        items: [
          { q: "What qualifies as a plumbing emergency?", a: "A plumbing emergency is any situation that threatens immediate property damage, creates health hazards, or leaves your home without essential water services. This includes burst pipes, severe leaks flooding your home, sewer backups, gas line leaks, complete water heater failures, or any plumbing issue that cannot safely wait until regular business hours. If you're unsure whether your situation is an emergency, call us at 587-834-3668 — we're happy to assess your situation over the phone." },
          { q: "How quickly can an emergency plumber arrive in Calgary?", a: "We maintain strategically positioned service vehicles throughout the Calgary region to ensure the fastest possible response. For life-threatening situations like gas leaks, we prioritize immediate dispatch. Our goal is to minimize damage and restore your peace of mind as quickly as possible." },
          { q: "What should I do while waiting for the emergency plumber?", a: "If safe to do so, shut off the main water supply to stop flooding. For burst pipes, turn off your home's water at the main shut-off valve. If there's a gas leak, evacuate immediately and call 911, then contact us. Move valuables away from water damage. Take photos for insurance purposes if possible. For overflowing toilets, stop using all plumbing fixtures. Our emergency dispatch team will provide specific guidance based on your situation when you call." },
          { q: "Are your emergency plumbers licensed and insured?", a: "Absolutely. Every emergency plumber on our Calgary team is fully licensed, bonded, and insured. We meet all Alberta plumbing codes and regulations, and our technicians undergo rigorous training and background checks. You can trust that the emergency plumber arriving at your door has the qualifications, expertise, and insurance coverage to handle your crisis safely and effectively — protecting both you and your property." },
        ],
      },
    },
  },
  {
    slug: "polyb-plumbing-calgary",
    category: "Plumbing",
    icon: "swap_horiz",
    title: "Poly-B Plumbing Calgary — Inspection, Repair & Complete Replacement",
    lead:
      "Protect your Calgary home from failing Poly-B pipes. Flame Tech provides expert inspection, emergency repairs, and complete polybutylene replacement services that restore your plumbing reliability and protect your property value.",
    heroBody: [
      "If your Calgary home was constructed between 1978 and 1995, there's a strong possibility it contains polybutylene piping — a material now recognized for premature deterioration and unexpected failures that threaten property and disrupt lives. Flame Tech specializes in identifying Poly-B systems throughout Calgary neighborhoods, assessing their current condition, and executing complete replacements using modern, reliable materials like PEX and copper that insurance companies trust and homebuyers demand.",
      "Don't wait for catastrophic pipe failure — proactive replacement protects your investment, maintains insurance coverage, and delivers peace of mind that your plumbing won't betray you at the worst possible moment.",
    ],
    heroSubhead: "Calgary's Poly-B Replacement Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2023/03/man-working-with-electronics.jpg", alt: "FlameTech technician working on Poly-B replacement", fit: "cover" },
    intro:
      "Calgary Poly-B plumbing specialists — inspection, emergency repair, and complete polybutylene replacement with PEX or copper. Insurance-grade documentation, manufacturer warranties.",
    features: [
      "Poly-B identification & inspection",
      "Emergency Poly-B leak repairs",
      "Full-home repiping with PEX or copper",
      "Minimal drywall disruption",
      "Insurance-grade documentation",
      "Manufacturer-backed warranties",
    ],
    bullets: [
      {
        t: "Insurance-first approach",
        d: "Carriers increasingly decline to cover active Poly-B. A documented replacement restores insurability and protects resale value.",
      },
      {
        t: "Clear, staged pricing",
        d: "We walk the home, build a plan, and quote in writing — every cost factor explained before work starts.",
      },
    ],
    seoTitle: "Poly-B Plumbing Calgary | Replacement & Repair Experts",
    seoDescription:
      "Poly-B plumbing problems in Calgary? Flame Tech specializes in inspection, repair, and complete replacement. Protect your home — call today for a free quote.",
    seoKeywords: [
      "Poly-B plumbing Calgary",
      "polybutylene replacement Calgary",
      "Poly-B repair Calgary",
      "PEX repiping Calgary",
      "Poly-B insurance Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Poly-B replacement",
    quoteFormPlaceholder:
      "e.g. 1988 home with grey Poly-B, insurance asking for replacement, Poly-B leak behind wall…",
    sidebar: {
      title: "Calgary Poly-B Replacement",
      subtitle:
        "Identify, repair, or fully replace polybutylene systems with modern PEX or copper — backed by manufacturer warranties.",
      bullets: [
        "Homes built 1978–1995 often have Poly-B",
        "PEX & copper replacements (insurance-approved)",
        "Free Poly-B identification inspections",
        "Detailed documentation for insurers",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "1978–95", label: "Poly-B era", icon: "schedule" },
      { number: "PEX", label: "& copper", icon: "award" },
    ],
    financing: {
      detail:
        "Spread the cost of full Poly-B replacement into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Poly-B leak or insurance deadline looming? Call 587-834-3668 — we'll assess, document, and plan replacement on your timeline.",
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Poly-B Issues in Calgary?",
          intro:
            "Thousands of Calgary homes built during the construction boom of the 1980s and early 1990s contain Poly-B plumbing that ages poorly and fails without warning. Unlike gradual deterioration you might notice, polybutylene pipes can appear perfectly fine one day and rupture catastrophically the next. Flame Tech understands the unique challenges facing Calgary homeowners with polybutylene systems. We provide honest assessments of your piping condition, explain insurance implications clearly, and deliver efficient whole-home repiping that minimizes disruption while maximizing long-term reliability. Our replacement installations meet current Alberta building codes, use materials approved by all major insurance carriers, and come backed by comprehensive warranties that protect your investment for decades to come.",
          items: [
            { heading: "Visual Poly-B Identification", body: "We recognize polybutylene's signature grey plastic appearance and PB2110 stamping, and we provide free inspections to confirm whether your home has Poly-B." },
            { heading: "Emergency Leak Repairs", body: "When a Poly-B fitting or pipe fails, we respond fast to contain the leak, stabilize the situation, and plan your next steps." },
            { heading: "Whole-Home Repiping", body: "Complete replacement using modern PEX or copper, executed to Alberta code with minimal drywall disruption and full insurance documentation." },
            { heading: "Insurance Documentation", body: "Detailed written documentation of replacement work, materials, and scope — ready for your insurance carrier's records." },
          ],
        },
        {
          heading: "Understanding Poly-B Problems in Calgary Homes",
          intro:
            "Polybutylene's widespread failure stems from chemical reactions between the plastic material and common water treatment additives including chlorine and chloramine. Gradual degradation weakens pipe walls from the inside out, creating brittle sections prone to sudden cracking, pinhole leaks, and complete ruptures that flood homes without warning. Calgary's temperature extremes accelerate degradation as freeze-thaw cycles stress already compromised materials.",
          items: [
            { body: "Insurance challenges — many providers restrict coverage on homes with known Poly-B systems, refuse renewal until replacement occurs, or deny claims for damage caused by polybutylene failures." },
            { body: "Resale difficulties affect market value since informed buyers recognize the liability and either demand price reductions or walk away entirely." },
            { body: "Fitting failures at connection points cause the majority of visible leaks as metal components corrode and plastic becomes brittle." },
            { body: "Hidden deterioration means pipes can appear functional while internal damage progresses silently." },
            { body: "Chemical degradation from chlorine and chloramine additives weakens pipe walls from the inside out." },
            { body: "Calgary's freeze-thaw cycles stress already compromised Poly-B materials, accelerating failure." },
          ],
        },
        {
          heading: "Poly-B Services Throughout Calgary & Surrounding Communities",
          intro:
            "Flame Tech serves the entire Calgary metropolitan area where Poly-B installations remain prevalent in homes built during the 1980s and 1990s construction boom. Our replacement services extend throughout all four Calgary quadrants plus neighboring communities including Airdrie, Chestermere, Okotoks, and Cochrane. We're particularly familiar with neighborhoods developed during polybutylene's peak usage years and understand the specific installation patterns common to Calgary builders of that era. Whether you need emergency leak repair after a Poly-B failure or want to proactively replace your entire system before problems develop, our experienced technicians provide thorough assessments, transparent pricing, and professional installations that restore confidence in your home's plumbing infrastructure.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions – Poly-B Plumbing Calgary",
        intro:
          "Concerned about Poly-B piping in your Calgary property? These common questions address the critical issues homeowners face when dealing with polybutylene plumbing systems. Understanding the risks, costs, and solutions helps you make informed decisions about protecting your home and preserving its value. Need immediate guidance on your specific situation? Contact Flame Tech at 587-834-3668 for a professional assessment and personalized recommendations.",
        items: [
          { q: "How do I know if my Calgary home has Poly-B plumbing?", a: "Polybutylene pipes appear as flexible gray or occasionally white plastic tubing, typically stamped with \"PB2110\" markings along their length. Check visible plumbing beneath sinks, around water heaters, and in basement mechanical rooms — if your Calgary home was built between 1978 and 1995, there's substantial likelihood of Poly-B installation. Common locations include main water supply lines entering the house, distribution pipes running through walls and ceilings, and connections to fixtures throughout your home. The plastic fittings connecting Poly-B pipes often use metal crimp rings or compression fittings that appear different from standard copper connections. If you're uncertain, Flame Tech provides free inspections to identify polybutylene systems and assess their current condition." },
          { q: "Should I proactively replace Poly-B pipes before they fail?", a: "Proactive replacement offers significant advantages over waiting for catastrophic failure. Poly-B pipes deteriorate unpredictably — one section might last decades while another fails tomorrow, making it impossible to predict when disaster will strike. Emergency repairs after pipe bursts cost substantially more than planned replacements due to water damage remediation, rushed service calls, and temporary housing needs if your home becomes uninhabitable. Insurance complications worsen with age as carriers increasingly refuse coverage or demand replacement as a condition of policy renewal. Property value suffers since informed buyers recognize Poly-B as a major liability requiring immediate attention. Scheduled replacement allows you to choose timing that fits your budget and schedule, avoid emergency stress, and install superior modern materials with manufacturer warranties. Most Calgary homeowners find peace of mind alone justifies replacement investment." },
          { q: "Will my insurance cover Poly-B damage or replacement?", a: "Insurance coverage for polybutylene failures varies dramatically between providers and specific policy language. Many Calgary insurers now exclude Poly-B-related claims entirely, refuse new policies on homes with known polybutylene systems, or demand immediate replacement as a condition of coverage continuation. Some carriers provide limited coverage for sudden failures but exclude gradual leaks or damage from known defective materials. Review your specific policy carefully and contact your insurance provider directly about Poly-B coverage — many homeowners discover exclusions only after filing claims following catastrophic failures. Documentation proving regular maintenance and prompt repairs strengthens coverage arguments, but replacement remains the only guaranteed solution to insurance complications. Flame Tech provides detailed documentation suitable for insurance purposes following all Poly-B work." },
          { q: "How much does Poly-B replacement cost in Calgary?", a: "Complete Poly-B replacement costs depend on numerous factors including home size, accessibility of existing pipes, chosen replacement material, and extent of drywall repair required. Typical Calgary homes range from basic replacements in smaller properties with exposed plumbing to extensive repiping in larger multi-story residences requiring significant wall access. PEX installations generally cost less than copper replacements while providing excellent performance and freeze resistance suited to Calgary's climate. Partial replacements focusing on high-risk areas cost substantially less but leave vulnerable sections that may fail later. We provide detailed written estimates after thorough home assessment, explaining all cost factors transparently and offering financing options for qualified homeowners. Many Calgary residents find replacement costs comparable to premium insurance deductibles plus water damage repairs following just one major Poly-B failure." },
          { q: "What's the best replacement material for Poly-B — PEX or copper?", a: "PEX (cross-linked polyethylene) represents the optimal replacement material for most Calgary homes due to excellent freeze resistance, flexibility that simplifies installation through existing walls, resistance to corrosion and scale buildup, and cost-effectiveness compared to copper alternatives. Modern PEX carries manufacturer warranties extending 25-50 years, requires fewer fittings reducing potential leak points, and performs reliably in Calgary's temperature extremes. Copper remains preferred for specific applications including exposed piping where aesthetics matter and situations requiring maximum heat resistance. Both materials satisfy building codes, meet insurance requirements, and provide dramatic improvements over polybutylene's failure-prone characteristics. Flame Tech assesses your specific situation to recommend the ideal replacement material balancing performance, longevity, budget, and installation complexity for your unique Calgary home." },
        ],
      },
    },
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
      "FlameTech's certified technicians have installed hundreds of boilers throughout Calgary, from compact units for downtown condos to high-capacity systems for sprawling homes in communities like [Aspen Woods](/aspen-woods-plumbers-calgary). We handle everything from gas-fired condensing boilers to electric units, matching the right system to your home's specific heating needs.",
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
    timeline: {
      heading: "How a boiler install runs",
      intro:
        "A boiler isn't a swap-and-go appliance — sized wrong or vented wrong it costs you for the next 20 years. Here's how we keep that from happening.",
      steps: [
        { icon: "request_quote", title: "On-site heat-loss assessment", body: "We measure square footage, insulation, windows, and ceiling heights — then run a Manual J calc against Calgary's −40°C design temp to size the boiler properly. No guessing from the old unit." },
        { icon: "build", title: "Quote + permits in writing", body: "You get the model, AFUE rating, gas line + venting scope, and the all-in price before anything starts. Gas + electrical permits are pulled by us." },
        { icon: "handyman", title: "Install + gas, vent, condensate", body: "Old unit drained and removed, new boiler hung, gas line and venting upgraded if needed, condensate routed to a neutralizer + drain. Typically a single day for a straight swap." },
        { icon: "verified", title: "Commission + walkthrough", body: "Combustion analysis, pressure test, thermostat pairing, and a walk-through of the controls. We register the warranty and book your first annual service." },
      ],
    },
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
    portfolio: {
      eyebrow: "Calgary install portfolio",
      heading: "Real boilers, Calgary homes.",
      intro:
        "A few recent installs from around Calgary — condensing, combi, and hydronic systems, each sized to the home's heat loss and wired for Alberta winters.",
      items: [
        { src: "/images/2026/04/Boiler.webp", alt: "High-efficiency condensing boiler installed in a Calgary mechanical room" },
        { src: "/images/2026/04/Boiler2.webp", alt: "Wall-hung gas boiler with zoned hydronic manifold" },
        { src: "/images/2026/04/Boiler3.webp", alt: "FlameTech boiler install with insulated copper primary loop" },
        { src: "/images/2026/04/Boiler5.webp", alt: "Navien combi boiler installation in a Calgary home" },
        { src: "/images/2026/04/Boiler6.webp", alt: "Condensing boiler with neutralizer and condensate drain" },
        { src: "/images/2026/04/Boiler7.webp", alt: "Tidy boiler piping with labelled isolation valves" },
        { src: "/images/2026/04/Boiler12.webp", alt: "Viessmann boiler wall-mount with PEX hydronic distribution" },
        { src: "/images/2026/04/Boiler14.webp", alt: "Boiler install serving in-floor radiant heating" },
        { src: "/images/2026/04/Boiler19.webp", alt: "High-efficiency boiler with expansion tank and air separator" },
        { src: "/images/2026/04/Boiler20.webp", alt: "Boiler and indirect tank combo for domestic hot water" },
        { src: "/images/2026/04/Combination-boiler.webp", alt: "Combi boiler providing space heating and domestic hot water" },
        { src: "/images/2026/04/Double-boiler.webp", alt: "Twin boiler configuration for a larger Calgary home" },
      ],
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
        d: "We've troubleshot thousands of boiler failures across every Calgary neighborhood from Kensington to [McKenzie Towne](/mckenzie-towne-plumbers-calgary).",
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
            { body: "From high-efficiency condensing boilers in new construction to cast iron workhorses in heritage Calgary homes, our technicians service every boiler type installed throughout the city's diverse housing stock. Experience with Calgary's building codes, basement configurations, and utility connections ensures proper repairs that meet local standards while addressing unique installation challenges in older neighborhoods like Hillhurst and newer developments in [Cranston](/cranston-plumber-calgary)." },
            { body: "Calgary's extreme winter conditions and dramatic temperature swings create unique stresses on boiler systems that require specialized knowledge to address effectively. Our team understands why expansion tanks fail more frequently in our climate and how to prevent condensate freezing issues that plague boilers during extended cold spells, ensuring reliable heating performance through Calgary's demanding winter months." },
          ],
        },
      ],
    },
    portfolio: {
      eyebrow: "Boilers we've fixed",
      heading: "Repairs that put heat back on.",
      intro:
        "A few of the boiler systems we've diagnosed and repaired across Calgary — condensing units, combis, and heritage cast iron, all running again.",
      items: [
        { src: "/images/2026/04/Boiler.webp", alt: "Repaired high-efficiency boiler back in service" },
        { src: "/images/2026/04/Boiler2.webp", alt: "Wall-hung boiler after control board replacement" },
        { src: "/images/2026/04/Boiler3.webp", alt: "Boiler repaired and recommissioned in a Calgary basement" },
        { src: "/images/2026/04/Boiler5.webp", alt: "Combi boiler after heat-exchanger flush and repair" },
        { src: "/images/2026/04/Boiler6.webp", alt: "Condensing boiler repair — neutralizer and condensate fixed" },
        { src: "/images/2026/04/Boiler7.webp", alt: "Boiler piping re-worked after a freeze failure" },
        { src: "/images/2026/04/Boiler12.webp", alt: "Wall-mount boiler after ignition and sensor repair" },
        { src: "/images/2026/04/Boiler14.webp", alt: "Boiler back online after circulator pump replacement" },
        { src: "/images/2026/04/Boiler19.webp", alt: "Boiler with expansion tank and air separator renewed" },
        { src: "/images/2026/04/Boiler20.webp", alt: "Boiler and indirect tank repaired and retested" },
        { src: "/images/2026/04/Combination-boiler.webp", alt: "Combi boiler repaired — heat and hot water restored" },
        { src: "/images/2026/04/Double-boiler.webp", alt: "Twin-boiler setup repaired for a larger Calgary home" },
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
    timeline: {
      heading: "What an annual boiler service covers",
      intro:
        "A real tune-up is more than wiping down the cabinet. Here's the checklist we run on every boiler we service.",
      steps: [
        { icon: "tune", title: "Inspect + flush", body: "Visual inspection of heat exchanger, expansion tank, pressure relief valve, and circulator. Flush sediment if pressure has been swinging or the boiler has been kettling." },
        { icon: "build", title: "Combustion analysis", body: "Live combustion test with a calibrated analyzer — CO, CO₂, O₂, stack temp. Adjust gas valve if combustion is off-spec; that alone often pulls 5-10% efficiency back." },
        { icon: "verified", title: "Safety + control checks", body: "Test pressure relief valve, low-water cutoff, flame sensor, and gas leak check on connections. Confirm thermostat + zone valves respond cleanly." },
        { icon: "event_available", title: "Report + schedule next year", body: "Written report of what we did, anything to watch, and a recommendation on when to plan replacement. Annual service reminder lands in your calendar before next heating season." },
      ],
    },
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
    portfolio: {
      eyebrow: "Serviced by FlameTech",
      heading: "Tune-ups and inspections we've completed.",
      intro:
        "Boiler service jobs across Calgary — full inspections, flushes, expansion-tank swaps, and annual tune-ups that keep heating systems running all winter.",
      items: [
        { src: "/images/2026/04/Boiler.webp", alt: "Boiler serviced and recommissioned by FlameTech" },
        { src: "/images/2026/04/Boiler2.webp", alt: "Annual boiler maintenance completed on a wall-hung unit" },
        { src: "/images/2026/04/Boiler3.webp", alt: "Boiler and manifold tidied up during a service visit" },
        { src: "/images/2026/04/Boiler5.webp", alt: "Combi boiler after full service and flush" },
        { src: "/images/2026/04/Boiler6.webp", alt: "Condensing boiler serviced — neutralizer and condensate cleaned" },
        { src: "/images/2026/04/Boiler7.webp", alt: "Boiler tune-up — isolation valves and piping inspected" },
        { src: "/images/2026/04/Boiler12.webp", alt: "Wall-mount boiler serviced with updated controls" },
        { src: "/images/2026/04/Boiler14.webp", alt: "Boiler service on a hydronic in-floor system" },
        { src: "/images/2026/04/Boiler19.webp", alt: "Boiler with expansion tank and air separator inspected" },
        { src: "/images/2026/04/Boiler20.webp", alt: "Boiler + indirect tank combo serviced and tested" },
        { src: "/images/2026/04/Combination-boiler.webp", alt: "Combi boiler after annual service" },
        { src: "/images/2026/04/Double-boiler.webp", alt: "Twin boiler system serviced for a larger Calgary home" },
      ],
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
    portfolio: {
      eyebrow: "Calgary furnace portfolio",
      heading: "A few recent furnace installs.",
      intro:
        "Tidy retrofits, high-efficiency AirEase swap-outs, and clean mechanical rooms from around Calgary — built to survive Alberta winters.",
      items: [
        { src: "/images/2026/04/Furnace.webp", alt: "High-efficiency furnace installed by FlameTech in a Calgary basement" },
        { src: "/images/2026/04/Furnace1.webp", alt: "Tidy furnace installation with labelled gas and return air" },
        { src: "/images/2026/04/Furnace_.webp", alt: "AirEase furnace install in a Calgary mechanical room" },
        { src: "/images/2026/04/Furnace_1.webp", alt: "Furnace install with new venting and condensate drain" },
        { src: "/images/2026/04/Furnace-after-beach.webp", alt: "Finished furnace install — Beach residence" },
      ],
    },
    beforeAfter: {
      eyebrow: "Before & after",
      heading: "Drag the divider to see the swap-out.",
      intro:
        "Three real Calgary furnace replacements — old atmospheric units pulled and replaced with high-efficiency AirEase furnaces, new venting, and clean piping. Drag the slider on each to compare.",
      pairs: [
        {
          before: { src: "/images/2026/04/Furnace-before-len.webp", alt: "Old furnace before replacement — Len residence" },
          after: { src: "/images/2026/04/Furnace-after-len.webp", alt: "New high-efficiency furnace after install — Len residence" },
          caption: "Len residence — atmospheric → 96% AFUE condensing",
        },
        {
          before: { src: "/images/2026/04/Furnace-before-crooks.webp", alt: "Aging furnace before removal — Crooks residence" },
          after: { src: "/images/2026/04/Furnace-after-crooks.webp", alt: "Replacement furnace installed — Crooks residence" },
          caption: "Crooks residence — replacement with new venting",
        },
        {
          before: { src: "/images/2026/04/Furnace-before-picture-turner.webp", alt: "Old furnace before replacement — Turner residence" },
          after: { src: "/images/2026/04/Furnace-after-turner.webp", alt: "Clean new furnace install — Turner residence" },
          caption: "Turner residence — full retrofit including condensate",
        },
      ],
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
      "FlameTech's heating specialists have been installing and servicing high-efficiency furnaces across Calgary for over a decade, helping homeowners cut their gas bills while staying warm through Alberta's toughest winters. Whether you're upgrading an old builder-grade unit in [Evergreen](/evergreen-plumbers-calgary) or installing a new system in a custom home, we know which units perform best in Calgary's climate.",
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
    portfolio: {
      eyebrow: "High-efficiency installs",
      heading: "95%+ AFUE furnaces, installed clean.",
      intro:
        "Real high-efficiency furnace installs across Calgary — before/after swap-outs and tidy mechanical rooms sized for our −35°C cold snaps.",
      items: [
        { src: "/images/2026/04/Furnace-before-len.webp", alt: "Old furnace before high-efficiency replacement" },
        { src: "/images/2026/04/Furnace-after-len.webp", alt: "New 95% AFUE furnace installed by FlameTech" },
        { src: "/images/2026/04/Furnace-before-crooks.webp", alt: "Older furnace before high-efficiency upgrade" },
        { src: "/images/2026/04/Furnace-after-crooks.webp", alt: "High-efficiency furnace installed with new venting" },
        { src: "/images/2026/04/Furnace-before-picture-turner.webp", alt: "Aging furnace before high-efficiency swap" },
        { src: "/images/2026/04/Furnace-after-turner.webp", alt: "New condensing furnace after clean retrofit" },
        { src: "/images/2026/04/Furnace-after-beach.webp", alt: "High-efficiency furnace install — Beach residence" },
        { src: "/images/2026/04/Furnace.webp", alt: "Finished high-efficiency furnace install in a Calgary basement" },
        { src: "/images/2026/04/Furnace1.webp", alt: "Tidy high-efficiency furnace with labelled gas and return" },
        { src: "/images/2026/04/Furnace_.webp", alt: "High-efficiency AirEase furnace install" },
        { src: "/images/2026/04/Furnace_1.webp", alt: "Condensing furnace with new PVC venting and condensate line" },
      ],
    },
  },
  {
    slug: "garage-heaters-calgary",
    category: "Heating",
    icon: "garage",
    title: "Garage Heaters Calgary | Professional Installation & Repair Services",
    lead:
      "Calgary garages drop to -40°C in January, and working in that cold isn't just uncomfortable — it's dangerous. FlameTech installs and services garage heaters across Calgary, from forced-air gas units to radiant tube heaters and electric models.",
    heroBody: [
      "We know which heating solutions work best in Alberta's brutal winters and which ones are just money down the drain.",
      "Your project doesn't stop because it's cold outside. We're available with priority emergency response for garage heater repairs and can usually get to Calgary homes within two hours for emergency calls.",
    ],
    heroSubhead: "Trusted Calgary Garage Heater Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/garage-heater-featured.jpg", alt: "Calgary garage with overhead radiant heater installed", fit: "cover" },
    intro:
      "Professional garage heater installation and repair in Calgary. Gas, electric, and radiant heaters. Priority emergency response, licensed gas fitters, 15+ years of Calgary experience.",
    features: [
      "Gas garage heater installation",
      "Electric garage heater setup",
      "Radiant tube heater service",
      "Garage heater repair",
      "Venting & gas line work",
      "Thermostat & control upgrades",
    ],
    bullets: [
      {
        t: "Gas + electrical certified",
        d: "Our techs hold gas fitting tickets AND electrical certifications — no subcontractors needed.",
      },
      {
        t: "Calgary-climate sized",
        d: "We size units for -40°C design temps, oversizing for uninsulated garages where it's needed.",
      },
    ],
    seoTitle: "Garage Heaters Calgary | Installation & Repair | FlameTech",
    seoDescription:
      "Professional garage heater installation & repair in Calgary. Gas, electric & radiant heaters. Priority service. Beat the Alberta cold. Call 587-834-3668 today.",
    seoKeywords: [
      "garage heaters Calgary",
      "garage heater install Calgary",
      "gas garage heater",
      "radiant tube heater Calgary",
      "electric garage heater",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "garage heater",
    quoteFormPlaceholder:
      "e.g. looking at a forced-air gas heater for a double garage, radiant tube for a shop, electric unit for a single…",
    sidebar: {
      title: "Calgary Garage Heaters",
      subtitle:
        "Forced-air gas, radiant tube, and electric heaters sized properly for Alberta's -40°C winters.",
      bullets: [
        "Modine · Reznor · Sterling · Cadet",
        "Gas line + venting + electrical all in-house",
        "Priority emergency dispatch",
        "City permits and inspections handled",
      ],
    },
    stats: [
      { number: "15+", label: "Years installing", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "~2h", label: "Emergency ETA", icon: "schedule" },
      { number: "Licensed", label: "gas + electrical", icon: "award" },
    ],
    callout:
      "Garage heater quit in a cold snap? Call 587-834-3668 — we dispatch same-day with common parts stocked on every truck.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Garage Heaters",
          intro:
            "When your garage heater quits in February, our Calgary heating technicians show up with the right parts and tools to get you back to work. FlameTech has been installing garage heaters in Calgary since 2015, and we've seen every type of unit fail in every possible way. Our crew holds gas fitting tickets and electrical certifications, so we can handle any garage heating system — from simple electric baseboard heaters to complex radiant tube systems. We work in Aspen Woods garages with 20-foot ceilings and cramped Altadore single-car garages built in the 1960s. Every installation includes proper venting, gas line sizing, and electrical connections that pass Calgary building code inspection.",
          items: [
            { heading: "Gas Garage Heater Installation", body: "Complete installation of forced-air and radiant gas heaters, including gas line run, proper venting, and electrical connections for Calgary garages." },
            { heading: "Electric Garage Heater Setup", body: "Installation of 240V electric heaters, baseboard units, and in-floor radiant systems with proper electrical panel upgrades where needed." },
            { heading: "Radiant Tube Heater Service", body: "Installation and repair of overhead radiant tube heaters perfect for high-ceiling Calgary garages and workshops." },
            { heading: "Garage Heater Repair", body: "Troubleshooting and fixing ignition problems, fan motor failures, thermostat issues, and gas valve replacements on all brands." },
            { heading: "Venting & Gas Line Work", body: "Proper venting installation through garage walls or roofs, plus gas line sizing and pressure testing for safe operation." },
            { heading: "Thermostat & Control Upgrades", body: "Installing programmable thermostats, zone controls, and safety switches for better temperature control and energy efficiency." },
          ],
        },
        {
          heading: "Common Garage Heater Issues in Calgary Homes",
          intro:
            "Calgary garage heaters take a beating from temperature swings and dust. Here are the problems we fix most often. Don't suffer through another winter with a cold garage — call us before the first snowfall.",
          items: [
            { body: "Ignition systems failing after sitting unused all summer — pilot lights won't stay lit or electronic ignitors crack from temperature changes." },
            { body: "Fan motors burning out from running constantly in -30°C weather, especially on undersized units working overtime." },
            { body: "Thermostat problems where the unit won't shut off or never reaches set temperature due to poor placement or wiring issues." },
            { body: "Blocked venting from snow, ice, or debris causing units to shut down on high limit switches." },
            { body: "Gas pressure problems where heaters won't fire properly due to undersized gas lines or regulator issues." },
            { body: "Cracked heat exchangers on older units that have been through too many Calgary freeze-thaw cycles." },
          ],
        },
        {
          heading: "Garage Heater Maintenance Tips for Calgary Homeowners",
          intro:
            "Garage heaters work harder than house furnaces because they're heating uninsulated spaces in Alberta's extreme cold. Regular maintenance prevents expensive breakdowns and keeps your heating bills reasonable.",
          items: [
            { body: "Clean or replace air filters monthly during heating season — garage dust clogs filters faster than house furnace filters." },
            { body: "Check venting annually for blockages, especially after chinooks when ice can form and melt repeatedly." },
            { body: "Test your heater before first cold snap — don't wait until it's -20°C to discover problems." },
            { body: "Keep the area around your heater clear — stored items too close can block airflow and create fire hazards." },
            { body: "Have gas connections and pressure tested every 3 years by a qualified technician." },
            { body: "Lubricate fan motors annually and check electrical connections for corrosion from temperature cycling." },
          ],
        },
        {
          heading: "Common Calgary Garage Heater Problems We Fix",
          items: [
            { heading: "Won't Ignite or Stay Lit", body: "Pilot lights that won't stay lit or electronic ignitors that spark but won't catch are usually caused by dirty sensors, bad thermocouples, or gas pressure problems. We carry ignition components for most brands and can usually fix these issues same-day." },
            { heading: "Runs But Won't Heat", body: "When your heater fires up but doesn't produce heat, the problem is often a failed heat exchanger, blocked burner, or fan motor issue. These problems get worse quickly in Calgary's cold, so don't wait to call for service." },
            { heading: "Short Cycling On and Off", body: "Units that turn on and off every few minutes are usually oversized, have blocked venting, or faulty limit switches. This wastes gas and wears out components fast — we can diagnose and fix the root cause." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Garage Heaters in Calgary",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "What size garage heater do I need for my Calgary garage?", a: "Most single-car Calgary garages need 25,000-30,000 BTU units, while double garages typically require 45,000-60,000 BTU depending on insulation and ceiling height. We calculate heat loss based on your garage's construction, not just square footage. Our heating specialists can assess your space and recommend the right size during a free consultation." },
          { q: "Can I install a garage heater myself in Calgary?", a: "Gas garage heaters require a licensed gas fitter in Calgary, and electrical units over 240V need a qualified electrician. DIY installations often fail city inspections and void manufacturer warranties. Many insurance companies also require professional installation for coverage." },
          { q: "How long do garage heaters last in Calgary's climate?", a: "Quality gas garage heaters typically last 15-20 years in Calgary, while electric units can run 20-25 years with proper maintenance. Units that cycle frequently due to poor insulation or undersizing tend to fail sooner. Regular annual maintenance significantly extends lifespan." },
          { q: "Should I choose gas or electric for my Calgary garage?", a: "Gas heaters heat faster and cost less to operate in Calgary's long winters, making them ideal for frequent use. Electric heaters work better for occasional use or garages without gas lines, but operating costs are higher. We can assess your usage patterns and recommend the most cost-effective option." },
          { q: "Do garage heaters work well in uninsulated Calgary garages?", a: "Yes, but they'll run constantly and cost more to operate. Most Calgary garages built before 2000 have minimal insulation, so we typically recommend oversizing the heater by 20-30% and adding basic insulation to exterior walls. Even basic insulation makes a huge difference in heating efficiency and comfort." },
        ],
      },
    },
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
    slug: "humidifiers-calgary",
    category: "Air",
    icon: "water_drop",
    title: "Humidifiers Calgary | Professional Installation & Service",
    lead:
      "Calgary's bone-dry winters can drop indoor humidity below 15% — that's drier than most deserts. We've been installing and servicing humidifiers across Calgary for over 15 years, and your health and your home depend on getting humidity levels right.",
    heroBody: [
      "Our furnace specialists integrate humidifiers properly with your heating system to maintain that sweet spot of 30-50% humidity. We work on every major brand — Aprilaire, Honeywell, GeneralAire, and Skuttle.",
      "When your humidifier stops working or you're tired of bloody noses and cracked furniture, we answer the phone. Real person, fast dispatch, and a fully stocked truck with the pads, cylinders, and solenoids needed to fix the problem or install a new system.",
    ],
    heroSubhead: "Trusted Calgary Humidifier Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/humidifier-install-calgary.jpg", alt: "Whole-home humidifier installed by FlameTech in Calgary", fit: "cover" },
    intro:
      "Humidifier installation, service, and repair in Calgary. Bypass, powered flow-through, and steam units from Aprilaire, Honeywell, GeneralAire, and Skuttle. 5-year parts warranty.",
    features: [
      "Whole-home humidifier installation",
      "Humidifier pad replacement",
      "Steam humidifier service",
      "Humidifier control repair",
      "Water line installation",
      "Ductwork integration",
    ],
    bullets: [
      {
        t: "5-year parts warranty",
        d: "New installations come with a 5-year warranty on parts, plus replacement pads and solenoids stocked on every truck.",
      },
      {
        t: "Calgary-climate calibrated",
        d: "We size, install, and dial in humidifiers for -35°C winters, chinooks, and hard water — no condensation problems.",
      },
    ],
    seoTitle: "Humidifiers Calgary | Professional Installation & Repair",
    seoDescription:
      "Calgary's dry winters demand proper humidity control. FlameTech installs & repairs all humidifier types. Priority service, 5-year parts warranty. Call today!",
    seoKeywords: [
      "humidifiers Calgary",
      "whole home humidifier Calgary",
      "Aprilaire humidifier",
      "steam humidifier Calgary",
      "humidifier install Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "humidifier",
    quoteFormPlaceholder:
      "e.g. bypass unit for a high-efficiency furnace, steam humidifier for a 3500 sqft home, white dust problem…",
    sidebar: {
      title: "Calgary Humidifiers",
      subtitle:
        "Whole-home humidifiers sized and installed for Calgary's dry winters — bypass, powered flow-through, and steam.",
      bullets: [
        "Aprilaire · Honeywell · GeneralAire · Skuttle",
        "5-year parts warranty on new installs",
        "Integration with any modern furnace",
        "Priority emergency repair dispatch",
      ],
    },
    stats: [
      { number: "15+", label: "Years installing", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "30-40%", label: "Winter target RH", icon: "schedule" },
      { number: "5-yr", label: "Parts warranty", icon: "award" },
    ],
    callout:
      "Bloody noses, cracked furniture, constant static? Call 587-834-3668 — dry air is doing real damage and we can fix it fast.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Humidifiers",
          intro:
            "FlameTech's Calgary technicians understand how Alberta's extreme weather affects indoor air quality. We install and service every major humidifier brand — Aprilaire, Honeywell, GeneralAire, and Skuttle. Most Calgary homes need bypass or powered flow-through models because of our forced-air heating systems. We've worked on everything from basic drum units in older homes in Mount Royal to steam humidifiers in new builds in Aspen Woods. We carry 5-year parts warranties on new installations and stock replacement pads, cylinders, and solenoids on every truck.",
          items: [
            { heading: "Whole-Home Humidifier Installation", body: "We size and install bypass, powered, and steam humidifiers to work perfectly with your existing furnace and ductwork." },
            { heading: "Humidifier Pad Replacement", body: "Annual pad changes keep your system running efficiently — we stock Aprilaire, Honeywell, and aftermarket options." },
            { heading: "Steam Humidifier Service", body: "Cylinder cleaning, electrode replacement, and mineral buildup removal for steam units in high-end Calgary homes." },
            { heading: "Humidifier Control Repair", body: "Digital and manual humidistat calibration, wiring repairs, and control panel replacement when needed." },
            { heading: "Water Line Installation", body: "Proper water supply lines with shut-off valves — no more jury-rigged saddle valves that leak in your basement." },
            { heading: "Ductwork Integration", body: "Return air plenum modifications and supply connections that don't restrict airflow or create condensation issues." },
          ],
        },
        {
          heading: "Common Humidifier Issues in Calgary Homes",
          intro:
            "Calgary homeowners call us most often for these humidifier problems. Don't let dry air damage your health and home — call us for a proper diagnosis.",
          items: [
            { body: "Humidifier not producing moisture despite running — usually clogged distribution tray or worn-out pad." },
            { body: "White dust throughout the house from over-mineralized tap water — needs proper media or steam conversion." },
            { body: "Mold growth in or around the humidifier from poor drainage or oversized unit." },
            { body: "Furnace cycling issues when humidifier draws power — electrical connection problems." },
            { body: "Water pooling under the unit from cracked reservoir or loose fittings." },
            { body: "Humidity readings never reaching set point — faulty humidistat or undersized unit." },
          ],
        },
        {
          heading: "Humidifier Maintenance for Calgary's Dry Climate",
          intro:
            "Calgary's hard water and dusty air make regular humidifier maintenance critical. Skip it, and you'll face expensive repairs or complete system replacement within a few years.",
          items: [
            { body: "Replace humidifier pads every heating season — more often if you have very hard water or pets." },
            { body: "Clean the reservoir and distribution tray monthly during heating season to prevent mold and mineral buildup." },
            { body: "Check and clean the drain line to prevent water backup and basement flooding." },
            { body: "Calibrate your humidistat annually — Calgary's temperature swings can throw off the readings." },
            { body: "Inspect water supply connections for leaks, especially saddle valves that tend to fail over time." },
            { body: "Monitor humidity levels with a separate hygrometer — aim for 30-40% in winter, 50% max in summer." },
          ],
        },
        {
          heading: "Calgary Humidifier Expertise You Can Trust",
          intro:
            "We've been installing humidifiers in Calgary since 2008 and we're certified on all major brands — Aprilaire, Honeywell, GeneralAire, and Skuttle. Most Calgary homes need 600-800 gallons per day capacity because of our dry climate and forced-air heating. We properly size units based on your home's square footage, ductwork design, and furnace capacity — no guesswork. Calgary's building boom means we work on everything from 1960s bungalows to 2023 luxury homes. Older homes often need ductwork modifications for proper humidifier installation. Newer builds frequently have undersized units because builders went cheap. We know which systems work best with high-efficiency furnaces and which ones cause condensation problems in Calgary's climate. Alberta winters are brutal on humidifiers — we regularly see -35°C with 10% humidity. Chinooks create wild temperature swings that stress mechanical components. Our installations account for these extremes with proper drainage, oversized water lines, and controls that prevent over-humidification during warm spells.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Humidifiers in Calgary",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "What type of humidifier works best for Calgary homes?", a: "Bypass and powered flow-through humidifiers work best with Calgary's forced-air heating systems. Steam units are great for larger homes but require more maintenance with our hard water. Avoid portable units — they can't handle Calgary's extreme dryness and often cause mold problems. We'll assess your ductwork and furnace type to recommend the right system." },
          { q: "How often do humidifier pads need replacement in Calgary?", a: "Replace pads every heating season at minimum — often twice per year with Calgary's hard water. Mineral buildup clogs the media faster here than in softer water areas. Signs you need new pads include white dust, musty odors, or humidity readings that won't climb despite the unit running constantly." },
          { q: "Can I install a humidifier on a high-efficiency furnace?", a: "Yes, but it requires proper planning. High-efficiency furnaces have different ductwork configurations and condensate management systems. We've installed hundreds on 90%+ efficiency units across Calgary without issues. The key is proper water line routing and drain connections that won't interfere with furnace operation." },
          { q: "Why does my humidifier create white dust throughout the house?", a: "White dust comes from mineral deposits in Calgary's hard water being dispersed by the humidifier. This happens with drum-style and some ultrasonic units. Flow-through models with proper media reduce this significantly, or you can pair your system with a water softener for the best results." },
          { q: "What humidity level should I maintain during Calgary winters?", a: "Aim for 30-40% humidity in winter — higher levels can cause condensation on windows and walls when it's -30°C outside. Summer humidity can safely reach 50%. Calgary's dry air often starts below 15%, so any increase helps with comfort, static electricity, and protecting wood furniture and flooring." },
        ],
      },
    },
  },
  // WATER
  {
    slug: "hot-water-tanks",
    category: "Water",
    icon: "propane_tank",
    title: "Hot Water Tanks Calgary – Professional Installation & Repair",
    lead:
      "Calgary homeowners rely on Flame Tech Plumbing & Heating for dependable hot water tank solutions. Has your morning shower turned into an unwelcome cold surprise? Maybe you've spotted water pooling around the base of your current unit or noticed your energy bills creeping higher each month.",
    heroBody: [
      "A properly sized and professionally installed hot water tank makes all the difference for your household's daily comfort and long-term budget.",
      "Flame Tech Plumbing & Heating delivers complete hot water tank services throughout Calgary, from selecting the right capacity for your family's needs to ensuring flawless installation and ongoing maintenance.",
    ],
    heroSubhead: "Trusted Hot Water Specialists",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/02/bradford-white-hot-water-tank.png", alt: "Bradford White hot water tank installed by FlameTech in Calgary", fit: "contain" },
    intro:
      "Hot water tank installation, repair, and replacement in Calgary. Gas and electric units, proper sizing, permits handled, annual flushing and anode rod service.",
    features: [
      "Hot water tank installation",
      "Tank repair & diagnostics",
      "Annual flushing & maintenance",
      "Anode rod inspection & replacement",
      "Gas & electric models",
      "Airdrie service coverage",
    ],
    bullets: [
      {
        t: "Calgary hard-water aware",
        d: "We factor in hard water sediment when recommending tanks, anode rods, and flush intervals.",
      },
      {
        t: "Licensed & insured",
        d: "Every installer is fully licensed, bonded, and insured — work meets all applicable codes.",
      },
    ],
    seoTitle: "Hot Water Tanks Calgary | Installation & Repair | Flame Tech",
    seoDescription:
      "Need a new hot water tank in Calgary? Flame Tech offers professional installation, repair & replacement. Licensed technicians, upfront prices.",
    seoKeywords: [
      "hot water tanks Calgary",
      "water heater Calgary",
      "gas hot water tank",
      "tank install Calgary",
      "water heater repair Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "hot water tank",
    quoteFormPlaceholder:
      "e.g. replace a 50-gallon gas tank, upgrade from electric to gas, annual flushing service…",
    sidebar: {
      title: "Calgary Hot Water Tanks",
      subtitle:
        "Gas and electric tank installation, repair, and maintenance — sized to your household and built for Alberta winters.",
      bullets: [
        "Upfront pricing, no surprises",
        "Permits and inspections handled",
        "Labour + equipment warranties",
        "Airdrie service coverage",
      ],
    },
    stats: [
      { number: "8-12yr", label: "Typical lifespan", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Same-day", label: "when stock allows", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Rust water, puddles at the base, or rumbling noises? Your tank is telling you something — call 587-834-3668 for an honest repair-vs-replace assessment.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Families Trust Flame Tech for Hot Water Tanks",
          intro:
            "Your hot water tank works harder than almost any other appliance in your home, delivering reliable warmth for showers, laundry, dishwashing, and countless daily tasks. When it comes time for replacement or repair, partnering with experienced professionals ensures your investment performs optimally for years to come. We also offer hot water tank services in Airdrie.",
          items: [
            { heading: "Calgary's Hot Water Tank Specialists", body: "Our technicians bring years of hands-on experience installing and servicing hot water tanks across Calgary neighbourhoods. We know how our region's hard water and temperature extremes affect equipment longevity, and we factor these local conditions into every recommendation we make." },
            { heading: "Certified & Fully Covered", body: "Every member of our installation crew holds current licensing and carries comprehensive insurance coverage. This protects your property and gives you confidence that the work meets all applicable codes and manufacturer specifications." },
          ],
        },
        {
          heading: "Advantages of a Modern Hot Water Tank",
          intro:
            "Today's storage water heaters offer significant improvements over older models. Here's what a new hot water tank brings to your Calgary home.",
          items: [
            { heading: "Lower Operating Costs", body: "Current hot water tank models feature enhanced insulation and more efficient burners compared to units manufactured even a decade ago. This translates to meaningful monthly savings on your natural gas bill, especially during Calgary's long heating season when demand peaks." },
            { heading: "Consistent Supply", body: "A correctly sized storage tank maintains a ready reserve of heated water for your household's peak usage times. Whether everyone's getting ready for work and school simultaneously or you're running back-to-back loads of laundry, your hot water keeps flowing." },
            { heading: "Straightforward Maintenance", body: "Storage water heaters use proven technology with widely available replacement parts. Annual flushing and periodic anode rod checks keep your system running efficiently for its full expected lifespan without complicated service requirements." },
            { heading: "Built for Alberta Winters", body: "Quality hot water tanks handle cold incoming water temperatures without struggling, maintaining output even when Calgary's groundwater arrives near freezing during January cold snaps." },
          ],
        },
        {
          heading: "Complete Hot Water Tank Installation in Calgary",
          intro:
            "Replacing a hot water tank involves more than simply swapping out equipment. Our licensed technicians at Flame Tech Plumbing & Heating manage every aspect of the process to deliver lasting results.",
          items: [
            { heading: "Thorough Evaluation", body: "We calculate your household's actual hot water demand based on occupants, fixtures, and usage patterns to recommend the ideal tank capacity and recovery rate." },
            { heading: "Permit & Code Handling", body: "Every installation follows current Calgary building requirements for gas connections, venting, and safety devices. We pull necessary permits and arrange inspections so you never have to worry about compliance." },
            { heading: "Clean & Careful Work", body: "Our crews protect your floors, remove the old unit responsibly, and leave your mechanical room tidier than they found it. We respect your home throughout the entire process." },
            { heading: "Backed by Our Promise", body: "We stand behind our installations with solid warranties on both labour and equipment. If something isn't right, we make it right — that's the Flame Tech commitment to Calgary homeowners." },
          ],
        },
      ],
      faq: {
        heading: "Common Questions About Hot Water Tanks in Calgary",
        intro:
          "Have questions about replacing or repairing your hot water tank? Get in touch with our team for straightforward answers and honest recommendations. Call us at 587-834-3668, send an email, or book online. We're ready to help you find the right solution for your home's hot water needs.",
        items: [
          { q: "What size hot water tank does my Calgary home need?", a: "Tank size depends on your household's peak hot water demand. A family of four typically needs a 50-gallon tank, though homes with multiple bathrooms or high-flow fixtures may benefit from larger capacity. We assess your specific situation to recommend the right fit." },
          { q: "How long should a hot water tank last in Calgary?", a: "Most conventional hot water tanks provide 8 to 12 years of service with proper maintenance. Calgary's hard water can shorten this lifespan if sediment builds up, which is why annual flushing and anode rod inspections matter. Units approaching a decade old warrant a professional evaluation." },
          { q: "What are signs my hot water tank needs replacing?", a: "Watch for rust-coloured water, rumbling noises during heating cycles, puddles around the base, inconsistent water temperature, or noticeably longer recovery times. Any of these symptoms suggest internal corrosion or failing components that often make replacement more cost-effective than repair." },
          { q: "Should I choose gas or electric for my hot water tank?", a: "Natural gas hot water tanks typically cost less to operate in Alberta due to our relatively low gas prices, and they recover faster than electric models. However, your home's existing infrastructure, available space, and venting options all factor into the best choice. We help you weigh all considerations." },
          { q: "How much does hot water tank installation cost in Calgary?", a: "Installation pricing varies based on tank size, fuel type, accessibility of your mechanical room, and whether any plumbing or venting modifications are needed. We provide detailed, upfront quotes after assessing your situation so there are no surprises. Contact us for a free estimate tailored to your home." },
        ],
      },
    },
  },
  {
    slug: "hot-water-tank-replacement-calgary",
    category: "Water",
    icon: "sync",
    title: "Hot Water Tank Replacement Calgary | Professional Installation Services",
    lead:
      "Calgary's hard water kills hot water tanks faster than anywhere else in Alberta. At FlameTech, we've been replacing failed tanks throughout Calgary for years, and we know exactly what brands hold up best in our water conditions.",
    heroBody: [
      "Whether your tank is leaking, making noise, or just not heating water properly, our hot water tank specialists will get you back to hot showers fast. We stock Bradford White, AO Smith, and Rheem tanks in our service vehicles — all models that handle Calgary's hard water better than cheap builder-grade units.",
      "We answer our phones with priority dispatch — no call centre, no voicemail. When your hot water tank fails, we'll be there fast with a truck full of quality tanks ready for installation.",
    ],
    heroSubhead: "Trusted Calgary Hot Water Tank Replacement Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/Power-Vent-hot-water-tank.webp", alt: "Power-vent hot water tank installed by FlameTech in Calgary", fit: "contain" },
    intro:
      "Calgary hot water tank replacement by Red Seal certified plumbers. Bradford White, AO Smith, and Rheem stocked. Emergency service, permits handled, warranty included.",
    features: [
      "Emergency tank replacement",
      "Tank removal & disposal",
      "Gas & electric connections",
      "Expansion tank installation",
      "Drain pan & safety upgrades",
      "Tankless conversion service",
    ],
    bullets: [
      {
        t: "Red Seal certified",
        d: "Our technicians are Red Seal plumbers with specialized gas fitting — installation and permits done right.",
      },
      {
        t: "Quality brands in stock",
        d: "Bradford White, AO Smith, and Rheem tanks on every truck — the units that actually last in Calgary's hard water.",
      },
    ],
    seoTitle: "Hot Water Tank Replacement Calgary | Expert Installation",
    seoDescription:
      "Calgary hot water tank replacement by licensed technicians. Priority emergency service, all brands, free quotes. Call FlameTech for fast installation: 587-834-3668",
    seoKeywords: [
      "hot water tank replacement Calgary",
      "water heater replacement Calgary",
      "Bradford White Calgary",
      "tank install emergency",
      "AO Smith Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "tank replacement",
    quoteFormPlaceholder:
      "e.g. 50-gallon gas tank leaking, need same-day replacement, considering tankless conversion…",
    sidebar: {
      title: "Calgary Tank Replacement",
      subtitle:
        "Emergency dispatch, quality brands on every truck, and Red Seal certified installers for tank swaps across Calgary.",
      bullets: [
        "Bradford White · AO Smith · Rheem",
        "Permits and inspections handled",
        "Old tank removal & disposal included",
        "Manufacturer + labor warranty",
      ],
    },
    stats: [
      { number: "3-4h", label: "Typical swap", icon: "schedule" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "15+", label: "Years replacing", icon: "verified" },
      { number: "Red Seal", label: "certified", icon: "award" },
    ],
    timeline: {
      heading: "How a tank swap actually goes",
      intro:
        "From the leaking tank to a hot shower, here's the day. Most replacements are done in 3–4 hours.",
      steps: [
        { icon: "call", title: "Phone triage + dispatch", body: "We ask the basics — fuel type (gas or electric), tank size, age, and whether it's actively leaking — then dispatch with the right tank already on the truck." },
        { icon: "water_damage", title: "Shut off + drain old tank", body: "Water + gas/power off, tank drained safely, expansion tank inspected. Old unit disconnected and walked out — no mess left in the mechanical room." },
        { icon: "build", title: "Install new tank + connections", body: "New tank set, gas or electrical connected, water lines tied in with new shut-offs, expansion tank fitted, drain pan + relief valve to current code. Permits arranged with the city." },
        { icon: "verified", title: "Test, walkthrough, warranty", body: "Pressurize, leak-check every connection, light the burner (or energize the elements), set thermostat, and walk you through how to flush it annually. Manufacturer + labour warranty registered before we leave." },
      ],
    },
    financing: {
      detail:
        "Spread the cost of your new hot water tank replacement into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Tank leaking or water is cold? Call 587-834-3668 — most emergency replacements done within 4–6 hours of the call.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Hot Water Tank Replacement",
          intro:
            "FlameTech's Calgary plumbing team has installed thousands of hot water tanks across every neighborhood from Mount Royal to McKenzie Towne. We've personally replaced tanks in Calgary homes for over 15 years, and we can tell you which brands fail early and which ones actually last. We stock Bradford White, AO Smith, and Rheem tanks in our service vehicles — all models that handle Calgary's hard water better than the cheap builder-grade units. Our technicians are Red Seal certified and insured, and we warranty both parts and labor. From heritage homes in Mount Royal with tricky basement access to new builds in Cranston with standard installations, we've done it all.",
          items: [
            { heading: "Emergency Tank Replacement", body: "Tank burst at 3 AM? We'll shut off your water, assess the damage, and have a new tank installed fast. Our emergency trucks carry 40 and 50-gallon tanks ready to go." },
            { heading: "Tank Removal & Disposal", body: "We handle the heavy lifting. Old tanks get drained, disconnected, and hauled out properly. No mess left behind for you to deal with." },
            { heading: "Gas Line & Electrical Connections", body: "Both gas and electric tank installations. We're licensed for gas work and handle all the permit requirements Calgary requires for tank replacements." },
            { heading: "Expansion Tank Installation", body: "Calgary homes need expansion tanks to handle pressure buildup. We install them with every replacement to protect your new tank and plumbing system." },
            { heading: "Drain Pan & Safety Upgrades", body: "New drain pans, temperature relief valves, and proper venting. We bring everything up to current Calgary building codes during replacement." },
            { heading: "Tankless Conversion Service", body: "Ready to switch from a tank to tankless? We handle gas line upgrades, venting changes, and electrical work needed for the conversion." },
          ],
        },
        {
          heading: "Common Hot Water Tank Replacement Issues in Calgary Homes",
          intro:
            "Calgary homeowners call us with these hot water tank problems every single day. Don't wait until you're taking cold showers — call us at the first sign of tank trouble.",
          items: [
            { body: "Tank leaking from the bottom — usually means the tank has rusted through and needs immediate replacement." },
            { body: "No hot water after 8-10 years — heating element burned out on electric tanks or thermocouple failed on gas units." },
            { body: "Rusty or brown water coming from hot taps — sediment buildup from Calgary's hard water has corrupted the tank." },
            { body: "Rumbling or banging noises — mineral deposits on the tank bottom are overheating and need to be addressed." },
            { body: "Pilot light keeps going out — thermocouple or gas valve problems that often mean it's time for a new tank." },
            { body: "Water temperature fluctuating — dip tube failure or thermostat issues that happen as tanks age past their prime." },
          ],
        },
        {
          heading: "Extending Your Calgary Hot Water Tank Life",
          intro:
            "Calgary's hard water is brutal on hot water tanks, but proper maintenance can help your tank reach its full 8-12 year lifespan instead of failing at 6 years like most do.",
          items: [
            { body: "Flush your tank annually to remove sediment buildup — Calgary water deposits minerals that settle at the bottom and cause premature failure." },
            { body: "Replace the anode rod every 3-4 years — this sacrificial rod protects the tank from corrosion but gets eaten away by our hard water." },
            { body: "Test the temperature relief valve yearly — lift the lever to make sure it releases properly and reseats without dripping." },
            { body: "Set temperature to 120°F maximum — higher settings waste energy and accelerate mineral buildup in Calgary water." },
            { body: "Check for leaks around fittings monthly — small drips turn into major failures fast, especially with our temperature swings." },
            { body: "Install a water softener if you don't have one — it's the single best investment to protect your tank from Calgary's hard water." },
          ],
        },
        {
          heading: "Common Calgary Hot Water Tank Problems We Fix",
          items: [
            { heading: "Tank Leaking & Water Damage", body: "Calgary homes with failing tanks often have water pooling around the unit or dripping from relief valves. Once a tank starts leaking from the bottom, it's done — the steel has rusted through and replacement is the only option. We'll shut off water, assess damage, and get a new tank installed fast." },
            { heading: "No Hot Water Production", body: "When Calgary families suddenly lose hot water, it's usually a failed heating element, thermocouple, or gas valve. On tanks over 8 years old with our hard water conditions, these failures often mean the tank is at end-of-life. We'll diagnose the problem and give you honest advice about repair versus replacement." },
            { heading: "Mineral Buildup & Efficiency Loss", body: "Calgary's hard water creates mineral deposits that reduce tank capacity and make your unit work harder. If your gas bills are climbing and hot water runs out faster than before, sediment buildup is likely the culprit. Sometimes flushing helps, but heavily scaled tanks usually need replacement." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Hot Water Tank Replacement in Calgary",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "How long does a hot water tank replacement take in Calgary?", a: "Most standard tank replacements take 3-4 hours from start to finish. This includes removing the old tank, installing the new one, connecting gas or electrical, and testing everything. Complex installations in tight spaces or with gas line modifications can take 5-6 hours. We'll give you an accurate time estimate once we see your setup." },
          { q: "What size hot water tank do I need for my Calgary home?", a: "A 40-gallon tank works for 1-2 people, 50-gallon for 3-4 people, and 60+ gallons for larger families. Calgary homes with multiple bathrooms or teenagers usually need the larger size. We factor in your family size, number of bathrooms, and usage patterns to recommend the right capacity." },
          { q: "Do I need permits for hot water tank replacement in Calgary?", a: "Yes, Calgary requires permits for gas hot water tank installations and electrical permits for electric tanks. We handle all permit applications and inspections as part of our service. The permits protect you by ensuring the work meets current safety codes and won't cause insurance issues later." },
          { q: "Should I replace my hot water tank or repair it?", a: "If your tank is over 8 years old and having problems, replacement usually makes more sense than repairs. Calgary's hard water is brutal on tanks, and once they start failing, multiple problems follow quickly. Tankless water heaters are also worth considering for long-term savings." },
          { q: "Can you install a hot water tank in any Calgary home?", a: "We can install tanks in almost any situation — basement installations, main floor utility rooms, even outdoor installations with proper enclosures. Older Calgary homes sometimes need gas line upgrades or venting modifications, but our experienced technicians have handled every possible configuration. We'll assess your space and explain any modifications needed upfront." },
        ],
      },
    },
  },
  {
    slug: "tankless-water-heaters",
    category: "Water",
    icon: "whatshot",
    title: "Tankless Water Heaters Calgary – Expert Water Heating Services",
    lead:
      "Flame Tech Plumbing & Heating is a trusted name in Calgary for water heaters. Tired of running out of hot water or paying high energy bills for your traditional tanked water heater? Upgrading to a tankless water heater could be the perfect solution for your Calgary home.",
    heroBody: [
      "At Flame Tech Plumbing & Heating, we specialize in the expert installation, maintenance, and repair of tankless water heaters, providing Calgary residents with efficient, on-demand hot water.",
      "Our team comprises highly skilled and experienced technicians who live and work right here in Calgary. We understand the specific demands each unique home places on your water heating system and are equipped to handle any issue, big or small.",
    ],
    heroSubhead: "Calgary Tankless Water Heater Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/04/Ibc-tankless.webp", alt: "IBC tankless water heater installed by FlameTech in Calgary", fit: "contain" },
    intro:
      "Tankless water heater install, service, and repair in Calgary. On-demand hot water, higher efficiency, space-saving design, and 20+ year lifespan with proper maintenance.",
    features: [
      "Tankless install & retrofit",
      "Gas line & venting upgrade",
      "Annual descaling service",
      "Combi & recirculation loops",
      "Honest tank-vs-tankless advice",
      "Manufacturer-trained technicians",
    ],
    bullets: [
      {
        t: "Right for the right home",
        d: "We'll tell you honestly when a traditional tank is the better choice — we don't upsell.",
      },
      {
        t: "Calgary hard-water aware",
        d: "We recommend softener pairing and annual descaling to protect the heat exchanger from mineral buildup.",
      },
    ],
    seoTitle: "Tankless Water Heaters Calgary | Expert Installation & Service",
    seoDescription:
      "Calgary's trusted tankless water heater experts. Professional installation, maintenance & repair. Endless hot water, energy efficient. Call Flame Tech today!",
    seoKeywords: [
      "tankless water heater Calgary",
      "on-demand water heater Calgary",
      "tankless install Calgary",
      "Navien Rinnai tankless",
      "water heater repair Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "tankless water heater",
    quoteFormPlaceholder:
      "e.g. retiring our old tank, big family running out of hot water, looking at a Navien NPE combi, planning a basement suite…",
    sidebar: {
      title: "Calgary Tankless Water Heaters",
      subtitle:
        "Expert installation, annual descaling, and honest advice on whether tankless is right for your Calgary home.",
      bullets: [
        "Licensed and insured technicians",
        "Proper sizing for busy Calgary households",
        "Code-compliant gas, venting, and condensate",
        "Free, no-obligation quotes",
      ],
    },
    stats: [
      { number: "20+", label: "Year lifespan", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Endless", label: "hot water", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    financing: {
      detail:
        "Spread the cost of your new tankless water heater into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Old tank leaking or constantly running out of hot water? Call 587-834-3668 for a free, no-obligation tankless assessment.",
    richContent: {
      sections: [
        {
          heading: "Why Choose Flame Tech for Your Tankless Water Heater in Calgary?",
          intro:
            "Tankless water heaters, also known as on-demand water heaters, offer numerous advantages over conventional storage tank models, making them an increasingly popular choice for homeowners in Calgary. Our team comprises highly skilled and experienced technicians who live and work right here in Calgary — we understand the specific demands each unique home places on your water heating system and are equipped to handle any issue, big or small. All our technicians are fully licensed and insured, guaranteeing professional and safe service that adheres to the highest industry standards.",
          items: [
            { heading: "Local Calgary Experts", body: "Our technicians live and work in Calgary. We understand the demands local homes place on water heating systems and are equipped to handle any issue, big or small." },
            { heading: "Licensed & Insured", body: "Every technician on our team is fully licensed and insured, guaranteeing professional, safe service that adheres to the highest industry standards." },
            { heading: "Manufacturer-Trained", body: "We complete manufacturer training on the leading tankless brands so every install, service, and repair follows factory specifications." },
            { heading: "Honest Recommendations", body: "We'll tell you straight if a traditional tank is the better choice for your home and budget. No upselling, no pressure." },
          ],
        },
        {
          heading: "Why Go Tankless?",
          intro: "Here are some key benefits of tankless water heaters to consider for your Calgary home.",
          items: [
            { heading: "Energy Efficiency", body: "Tankless units only heat water when you need it, unlike tanked heaters that continuously heat and store water. This on-demand system can significantly reduce energy consumption and lower your utility bills — a valuable saving in Calgary's climate." },
            { heading: "Endless Hot Water", body: "Never run out of hot water, even with multiple showers or appliances running simultaneously. Tankless heaters provide a continuous supply of hot water, perfect for busy Calgary households." },
            { heading: "Space-Saving Design", body: "Without a large storage tank, tankless water heaters are much more compact and can be installed in smaller spaces, freeing up valuable square footage in your basement or utility room." },
            { heading: "Suited to Calgary's Climate", body: "Modern tankless water heaters are designed to perform efficiently even in colder climates like Calgary, providing reliable hot water throughout the year." },
          ],
        },
        {
          heading: "Our Expert Tankless Water Heater Installation Services in Calgary",
          intro:
            "Installing a tankless water heater is a complex job that requires specialized knowledge and experience. Our team of licensed and insured technicians at Flame Tech Plumbing & Heating are experts in tankless water heater installation in Calgary.",
          items: [
            { heading: "Professional Assessment", body: "We assess your home's hot water needs and recommend the right size and model of tankless heater for optimal performance." },
            { heading: "Code Compliance", body: "Our installations strictly adhere to all local Calgary building codes and regulations for your safety and peace of mind." },
            { heading: "Quality Workmanship", body: "We take pride in our meticulous work, ensuring a seamless and reliable installation that will last for years." },
            { heading: "Customer Satisfaction", body: "Your satisfaction is our top priority. We stand behind our work with guarantees on our services." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Tankless Water Heaters in Calgary",
        intro:
          "Ready to experience the Flame Tech difference? Contact us today for a free, no-obligation quote on our tankless water heater services in Calgary. You can reach us by phone, email, or through our online booking system. We're here to answer your questions and schedule your service at your convenience.",
        items: [
          { q: "What is a tankless water heater?", a: "A tankless water heater is a unit that heats water on demand as it flows through the device, rather than storing and heating water in a tank." },
          { q: "How much does tankless water heater installation cost in Calgary?", a: "The cost of tankless water heater installation in Calgary varies depending on the model, complexity of the installation, and any necessary plumbing or venting modifications. Contact us for a free, no-obligation quote." },
          { q: "How long does a tankless water heater last?", a: "With proper maintenance, a tankless water heater can last 20 years or more, significantly longer than the average lifespan of a traditional tanked heater." },
          { q: "Are tankless water heaters energy efficient in Calgary's climate?", a: "Yes, modern tankless water heaters are designed to be highly energy efficient even in colder climates like Calgary, as they only heat water when needed." },
          { q: "Can I replace my old tank water heater with a tankless unit?", a: "In most cases, yes. However, it may require modifications to your existing plumbing, gas line, or venting. Our experts can assess your home and determine the best installation plan." },
        ],
      },
    },
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

  // ────────────────────────────────────────────────────────────
  // AIRDRIE — service-area pages
  // ────────────────────────────────────────────────────────────

  {
    slug: "airdrie-plumbers",
    category: "Plumbing",
    location: "Airdrie",
    icon: "plumbing",
    title: "Airdrie Plumbers | Expert Plumbing Services",
    lead:
      "When plumbing problems strike your Airdrie home or business, you need reliable professionals who respond quickly and get the job done right. Flame Tech Plumbing delivers exceptional plumbing services throughout Airdrie and surrounding areas, combining technical expertise with honest, transparent service.",
    heroBody: [
      "As a locally-operated plumbing company serving Airdrie, we understand the unique challenges that Alberta's climate and infrastructure present — from frozen pipes during harsh winters to water heater failures and emergency leaks.",
      "We also offer heating services and are Airdrie furnace experts. Call us today at 587-834-3668 for fast, reliable plumbing service in Airdrie.",
    ],
    heroSubhead: "Trusted Airdrie Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Airdrie", fit: "cover" },
    intro:
      "Expert plumbers serving Airdrie, Alberta. Fast, reliable plumbing repairs, installations, and priority emergency service. Licensed, insured, honest pricing.",
    features: [
      "Emergency plumbing repairs",
      "Drain cleaning & repair",
      "Water heater service",
      "Fixture installation & repair",
      "Leak detection",
      "Frozen pipe repair",
    ],
    bullets: [
      {
        t: "Licensed & insured",
        d: "Our team is fully licensed and insured with years of experience serving Airdrie residents and businesses.",
      },
      {
        t: "Upfront pricing",
        d: "Clear, detailed estimates before any work begins. No hidden fees, no surprises.",
      },
    ],
    seoTitle: "Airdrie Plumbers | Emergency Service & Trusted Local Plumbing",
    seoDescription:
      "Expert plumbers serving Airdrie, Alberta. Fast, reliable plumbing repairs, installations & priority emergency service. Call 587-834-3668 today!",
    seoKeywords: [
      "Airdrie plumbers",
      "plumber Airdrie",
      "emergency plumber Airdrie",
      "Airdrie plumbing",
      "Kings Heights plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Airdrie plumbing",
    quoteFormPlaceholder:
      "e.g. leaking pipe in Coopers Crossing, frozen line in Kings Heights, water heater failing in Reunion…",
    sidebar: {
      title: "Airdrie Plumbers",
      subtitle:
        "Fast, reliable plumbing service across every Airdrie neighbourhood — priority emergency dispatch, honest pricing.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Modern diagnostic equipment",
        "Every Airdrie neighbourhood covered",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Airdrie ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in Airdrie? Call 587-834-3668 — a real person will dispatch a plumber right away.",
    richContent: {
      sections: [
        {
          heading: "Comprehensive Plumbing Services in Airdrie",
          intro:
            "Plumbing emergencies don't wait for convenient times. Whether it's a burst pipe flooding your basement at midnight or a backed-up sewer line on a holiday weekend, our emergency plumbers are ready to respond with priority service that minimizes damage and restores your plumbing system quickly.",
          items: [
            { heading: "Drain Cleaning & Repair", body: "Slow drains and clogs are warning signs of potential problems. Our Airdrie plumbers use advanced equipment including hydro-jetting and video camera inspections to thoroughly clean your drains and identify underlying issues before they become major repairs." },
            { heading: "Water Heater Services", body: "From tankless water heater installations to traditional tank repairs and replacements, we handle all your hot water needs. We work with all major brands and help you choose the most energy-efficient solution for your Airdrie home." },
            { heading: "Fixture Installation & Repair", body: "Upgrading your bathroom or kitchen? We install and repair all types of plumbing fixtures including faucets, toilets, sinks, garbage disposals, and more. Our attention to detail ensures proper installation and optimal performance." },
          ],
        },
        {
          heading: "Why Choose Flame Tech Plumbing for Your Airdrie Property",
          items: [
            { heading: "Experienced, Licensed Plumbers", body: "Our team consists of fully licensed and insured professionals with years of hands-on experience serving Airdrie residents and businesses." },
            { heading: "Upfront Pricing", body: "We provide clear, detailed estimates before any work begins. No hidden fees, no surprises — just honest pricing you can trust." },
            { heading: "Quality Workmanship", body: "We stand behind our work with comprehensive warranties. When we complete a job, it's done right the first time." },
            { heading: "Modern Equipment", body: "We invest in the latest plumbing technology to diagnose problems accurately and complete repairs efficiently." },
            { heading: "Local Knowledge", body: "As a company serving the Calgary area including Airdrie, we understand local building codes, common plumbing issues in the area, and how to navigate Alberta's unique climate challenges." },
          ],
        },
        {
          heading: "Serving All of Airdrie",
          intro:
            "We proudly serve every neighborhood in Airdrie, including Kings Heights, Coopers Crossing, Williamstown, Edwards Landing, Reunion, Chinook Gate, Ravenswood, Big Springs, and Hillcrest.",
        },
        {
          heading: "Common Airdrie Plumbing Issues We Solve",
          intro:
            "Living in Airdrie means dealing with specific plumbing challenges. Our plumbers are experts at handling all of the below.",
          items: [
            { body: "Frozen pipes during Alberta's cold winters." },
            { body: "Hard water problems that damage fixtures and appliances." },
            { body: "Aging plumbing systems in older Airdrie neighborhoods." },
            { body: "Low water pressure issues." },
            { body: "Sump pump failures that can flood basements." },
            { body: "Running toilets that waste water and increase utility bills." },
          ],
        },
      ],
    },
  },

  {
    slug: "airdrie-furnace-repairs",
    category: "Heating",
    location: "Airdrie",
    icon: "local_fire_department",
    title: "Airdrie Furnace Repair – Fast, Reliable Heating Solutions",
    lead:
      "When your furnace stops working in Airdrie, you need help fast. Flame Tech Plumbing & Heating delivers priority furnace repair services throughout Airdrie and surrounding communities, ensuring your family stays warm when it matters most.",
    heroBody: [
      "Our certified heating technicians specialize in diagnosing and repairing all furnace makes and models found in Airdrie homes. From minor fixes to major component replacements, we bring the expertise and parts needed to restore your heat quickly and correctly.",
      "Serving Airdrie's established neighborhoods and new developments alike, we're proud members of the AirEase Pro Team.",
    ],
    heroSubhead: "Emergency Service Available",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/04/furnace-repair.jpg", alt: "Furnace repair in Airdrie by FlameTech", fit: "cover" },
    intro:
      "Furnace repair in Airdrie by certified technicians. Priority emergency response, all brands, honest diagnosis — AirEase Pro Team members.",
    features: [
      "Emergency furnace repair",
      "New furnace installation",
      "Preventative maintenance",
      "Ignition & thermostat repair",
      "Carbon monoxide testing",
      "AirEase Pro Team",
    ],
    bullets: [
      {
        t: "Rapid Airdrie response",
        d: "We know Alberta winters don't wait — our team responds quickly from Coopers Crossing to Williamstown.",
      },
      {
        t: "Certified heating professionals",
        d: "Proper certifications and insurance coverage for safe, code-compliant repairs that protect your home.",
      },
    ],
    seoTitle: "Airdrie Furnace Repair | Priority Heating Solutions",
    seoDescription:
      "Need furnace repair in Airdrie, Alberta? Call FlameTech Plumbing & Heating. Local furnace experts with priority emergency response and honest pricing.",
    seoKeywords: [
      "Airdrie furnace repair",
      "furnace repair Airdrie",
      "Airdrie heating",
      "emergency furnace Airdrie",
      "AirEase Pro Team",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie furnace repair",
    quoteFormPlaceholder:
      "e.g. furnace short-cycling, no heat in Kings Heights, thermostat not responding, ignition failure…",
    sidebar: {
      title: "Airdrie Furnace Repair",
      subtitle:
        "Priority emergency repair, new installs, and annual maintenance for every major furnace brand in Airdrie.",
      bullets: [
        "AirEase Pro Team certified installers",
        "All makes and models serviced",
        "Transparent pricing, free estimates",
        "Airdrie response within the hour",
      ],
    },
    stats: [
      { number: "25+", label: "Years heating", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Same-day", label: "most repairs", icon: "schedule" },
      { number: "Certified", label: "& insured", icon: "award" },
    ],
    callout:
      "No heat in Airdrie? Call 587-834-3668 — priority dispatch for families with young children, elderly residents, or no backup heat.",
    richContent: {
      sections: [
        {
          heading: "Why Airdrie Homeowners Choose Flame Tech for Furnace Repairs",
          intro:
            "Your heating system deserves expert attention. Here's what sets Flame Tech apart when you need furnace repair in Airdrie.",
          items: [
            { heading: "Rapid Response for Airdrie Residents", body: "We know Alberta winters don't wait for convenient timing. Our team responds quickly to furnace breakdowns across Airdrie, from Cooper's Crossing to Williamstown, getting your heating system operational again without unnecessary delays." },
            { heading: "Certified Heating Professionals", body: "Every technician on our team holds proper certifications and insurance coverage. We're committed to safe, code-compliant repairs that protect your family and your investment in your Airdrie home." },
          ],
        },
        {
          heading: "Furnace Services We Provide in Airdrie",
          intro: "Beyond emergency repairs, Flame Tech offers comprehensive heating solutions for Airdrie homeowners.",
          items: [
            { heading: "New Furnace Installation", body: "Planning to upgrade your heating system? Our installation team serves Airdrie homes with precision and care. We help you select energy-efficient models that match your home's heating requirements and your budget. From proper sizing calculations to flawless installation that meets all building codes, we handle every detail." },
            { heading: "Emergency Furnace Repair", body: "Heating failures happen at the worst possible moments. Our technicians arrive equipped to diagnose problems efficiently and carry common replacement parts on their trucks. We service all major furnace brands found in Airdrie residences, from older models to the latest high-efficiency units." },
            { heading: "Preventative Maintenance", body: "Regular servicing protects your heating investment and prevents inconvenient breakdowns. Our maintenance program includes thorough cleaning, detailed inspections of essential components, and complete safety testing including carbon monoxide checks. Scheduling annual maintenance before winter arrives helps ensure your furnace won't fail during Airdrie's coldest weather." },
          ],
        },
      ],
      faq: {
        heading: "Common Furnace Questions from Airdrie Homeowners",
        intro:
          "Need furnace repair in Airdrie? Call Flame Tech at 587-834-3668 for fast, professional service. We provide free estimates and transparent pricing with no hidden fees.",
        items: [
          { q: "What causes most furnace breakdowns in Airdrie?", a: "The most common furnace problems we see in Airdrie homes involve dirty or clogged filters restricting airflow, which forces your system to work harder and can trigger safety shutoffs. Ignition problems, faulty thermostats, and worn blower motors also account for many service calls. Regular maintenance prevents most of these issues." },
          { q: "How quickly can you repair my furnace in Airdrie?", a: "Response time depends on demand and weather conditions, but we prioritize emergency calls. Our technicians stock common parts and can often complete repairs the same day. For more complex issues requiring special-order components, we'll explain the timeline upfront. During extreme cold snaps, we triage calls to help families with young children, elderly residents, or no backup heat source first." },
          { q: "Should I repair or replace my older furnace?", a: "Depends on your furnace's age, the repair cost, and efficiency. Generally, if repair costs exceed half the price of replacement, or if your furnace is over 15 years old, replacement often makes better financial sense. Modern high-efficiency furnaces can reduce your heating costs by 20–40% compared to older models. We'll provide honest recommendations based on your specific situation." },
        ],
      },
    },
  },

  {
    slug: "boiler-installation-airdrie",
    category: "Heating",
    location: "Airdrie",
    icon: "build",
    title: "Boiler Installation Airdrie | Expert Boiler Services for Airdrie Homes",
    lead:
      "Alberta winters demand dependable heating systems, and choosing the right boiler installation makes all the difference in your home's comfort and energy costs. At Flame Tech Plumbing & Heating, we bring specialized expertise to Airdrie homeowners looking for efficient, reliable boiler solutions.",
    heroBody: [
      "From professional new installations to emergency repairs and preventative maintenance programs, our certified technicians deliver heating solutions that keep your family warm through even the coldest months.",
      "We install and maintain every major boiler type for Airdrie properties — high-efficiency condensing boilers, standard efficiency boilers, and combi units that deliver radiant heating and endless domestic hot water from a single compact appliance.",
    ],
    heroSubhead: "Your Trusted Airdrie Boiler Installation Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/navine-boiler.png", alt: "Navien high-efficiency boiler installed by FlameTech in Airdrie" },
    intro:
      "Expert boiler installation in Airdrie. Navien and IBC condensing boilers, combi systems, and standard efficiency units. Certified installers, full warranty.",
    features: [
      "High-efficiency condensing boilers",
      "Standard efficiency boilers",
      "Combi boiler installation",
      "Navien & IBC systems",
      "Complete gas, venting, hydronic piping",
      "Priority emergency response",
    ],
    bullets: [
      {
        t: "Airdrie-area specialists",
        d: "We size and install boilers for Airdrie's prairie temperature swings and wind exposure — not just generic specs.",
      },
      {
        t: "Fully certified & covered",
        d: "Every installation meets Alberta building codes and manufacturer specs, with comprehensive insurance coverage.",
      },
    ],
    seoTitle: "Boiler Installation Airdrie | Highly Rated Local Experts",
    seoDescription:
      "Looking for professional boiler installation in Airdrie, Alberta? The 5-star rated FlameTech team installs Navien and IBC systems built for Alberta winters.",
    seoKeywords: [
      "boiler installation Airdrie",
      "Navien boiler Airdrie",
      "IBC boiler Airdrie",
      "combi boiler Airdrie",
      "Airdrie heating install",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie boiler install",
    quoteFormPlaceholder:
      "e.g. upgrading to a Navien condensing boiler, planning a hydronic radiant system, replacing a 20-year-old boiler…",
    sidebar: {
      title: "Airdrie Boiler Installation",
      subtitle:
        "High-efficiency Navien and IBC systems sized for Airdrie's −32°C design temperature, installed to Alberta code.",
      bullets: [
        "Navien · IBC Technologies certified",
        "AFUE ratings up to 98%",
        "Combi units for space + hot water",
        "Free heat-loss calculation",
      ],
    },
    stats: [
      { number: "15-20yr", label: "Boiler lifespan", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "98%", label: "Max AFUE", icon: "award" },
      { number: "Certified", label: "installers", icon: "check_circle" },
    ],
    financing: {
      detail:
        "Spread the cost of your new Airdrie boiler installation into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Planning a boiler upgrade in Airdrie? Call 587-834-3668 for a free heat-loss calculation and transparent written quote.",
    richContent: {
      sections: [
        {
          heading: "Your Trusted Airdrie Boiler Installation Experts",
          intro:
            "Selecting a heating contractor impacts your home's comfort for decades. Here's what sets Flame Tech apart in Airdrie.",
          items: [
            { heading: "Airdrie-Area Heating Specialists", body: "Our technicians serve Airdrie neighborhoods daily, from established communities to newer developments. We understand how our prairie location's temperature swings and wind exposure affect heating system performance, and we size and install boilers accordingly." },
            { heading: "Fully Certified & Covered", body: "Every installation meets Alberta building codes and manufacturer specifications. Our complete licensing and comprehensive insurance coverage protects your property and gives you confidence that the work is done right the first time." },
          ],
        },
        {
          heading: "Boiler Systems We Install in Airdrie",
          intro: "Our team installs and maintains every major boiler type for Airdrie properties.",
          items: [
            { heading: "High-Efficiency Condensing Boilers", body: "Modern condensing technology recovers heat that traditional boilers waste, achieving up to 98% efficiency ratings. These systems dramatically reduce natural gas consumption and monthly utility expenses for Airdrie homeowners." },
            { heading: "Standard Efficiency Boilers", body: "Traditional boiler systems remain a practical choice for many Airdrie homes, offering proven performance and straightforward operation. Our technicians help you select the optimal system based on your heating requirements and financial considerations." },
            { heading: "Combination Boilers", body: "Combi units deliver both radiant heating and endless domestic hot water from a single compact appliance. These space-efficient systems eliminate the need for separate water heaters while providing on-demand hot water whenever you need it." },
          ],
        },
        {
          heading: "Premium Boiler Brands for Airdrie Installations",
          intro:
            "We exclusively install top-tier manufacturers engineered to handle Alberta's demanding climate conditions year after year.",
          items: [
            { heading: "Navien Heating Systems", body: "Navien's condensing boilers incorporate dual stainless steel heat exchangers that maximize energy capture while resisting the corrosive effects of Alberta's mineral-heavy water supply. These wall-hung units save basement square footage while delivering AFUE ratings that frequently exceed 95%. Navien systems feature robust ignition components proven to start dependably even when the mercury plummets below −35°C." },
            { heading: "IBC Technologies Systems", body: "IBC brings Canadian engineering expertise to every installation, with manufacturing facilities that understand prairie heating demands intimately. Advanced modulation technology allows IBC boilers to match output precisely to your home's moment-by-moment heating requirements, eliminating wasteful on-off cycling. Properly maintained IBC systems routinely deliver two decades or more of dependable service in Alberta installations." },
          ],
        },
        {
          heading: "Frequent Boiler Issues in Airdrie We Resolve",
          items: [
            { heading: "Limescale Buildup & Noise", body: "Airdrie's mineral-rich water creates scale deposits on heat exchangers that restrict flow and cause loud rumbling. We chemically descale affected systems and implement water conditioning to prevent recurrence." },
            { heading: "Condensate Freezing Issues", body: "Extreme cold snaps can freeze condensate drains, triggering safety shutdowns. We insulate vulnerable sections, verify proper drainage slope, and install heated drain lines where necessary." },
            { heading: "Rapid Cycling Problems", body: "Units cycling on and off excessively waste energy and stress components. Common causes include oversized equipment, faulty thermostats, low system pressure, or dirty heat exchangers. We identify root causes and implement permanent corrections." },
          ],
        },
      ],
      faq: {
        heading: "Airdrie Boiler Installation Questions Answered",
        items: [
          { q: "How do I determine the correct boiler size for my Airdrie property?", a: "Accurate sizing depends on total heated area, insulation, window quality, ceiling heights, and Airdrie's −32°C winter design temperature. Average 1,500–2,000 sq ft residences require approximately 75,000–100,000 BTU capacity, while larger 2,500–3,500 sq ft homes need 100,000–150,000 BTU systems. Our technicians perform comprehensive Manual J heat-loss calculations to specify optimal capacity." },
          { q: "What warning signs indicate my boiler needs professional attention?", a: "Watch for rumbling or kettling sounds caused by limescale, whistling from trapped air, or gurgling indicating circulation problems. Pressure repeatedly dropping below 12 PSI, visible water seepage, temperature inconsistencies between rooms, excessive cycling, or yellow burner flames all warrant professional diagnosis. Contact Flame Tech at 587-834-3668 when you notice these symptoms." },
          { q: "When should Airdrie homeowners replace rather than repair boilers?", a: "Replacement becomes economically sensible when equipment reaches 15–20+ years. Repair costs exceeding half the replacement value suggest investing in new equipment instead. Units with AFUE below 80% waste considerable energy compared to modern 95%+ systems, potentially saving $500–900 annually in Airdrie's climate. Visible rust, corrosion, or heat exchanger cracks require immediate replacement." },
          { q: "What does annual boiler maintenance include?", a: "Our technicians thoroughly clean heat exchangers, verify all safety controls, test combustion efficiency, inspect venting systems, flush and chemically treat the system against Airdrie's hard water, confirm proper operating pressure and flow rates, lubricate pump bearings, and test zone valve operation. Regular maintenance extends equipment life 5–10 years and preserves efficiency." },
          { q: "Are energy efficiency rebates available for Airdrie boiler installations?", a: "Federal and provincial programs periodically offer incentives for high-efficiency heating upgrades, including the Canada Greener Homes Grant providing up to $5,000 for qualifying improvements. Eligibility typically requires minimum 95% AFUE ratings and professional installation with complete documentation. Our team stays current on available incentive programs and assists Airdrie clients through application processes." },
          { q: "Is converting from forced air to boiler heat feasible in Airdrie?", a: "Yes, but it's a substantial investment requiring installing the boiler, adding radiators or baseboard emitters, running distribution piping, and potentially removing existing ductwork. Total costs generally span $16,000–$32,000 depending on property size. Airdrie homeowners often pursue conversions during major renovations to gain zone control, eliminate allergen circulation, and enjoy quieter heat." },
        ],
      },
    },
  },

  {
    slug: "boilers-airdrie",
    category: "Heating",
    location: "Airdrie",
    icon: "local_fire_department",
    title: "Boilers Airdrie | Professional Boiler Services & Repair",
    lead:
      "Airdrie's rapid growth means thousands of homes rely on boilers for radiant heat and domestic hot water. Our crew at FlameTech has serviced boilers across Airdrie neighborhoods since these communities started filling up in the 2000s. We know which builder-grade boilers are failing first and which systems will give you another decade of reliable service.",
    heroBody: [
      "When your boiler dies on a −35°C morning, you need someone who answers the phone — not a voicemail. We're available with priority emergency response for boiler repairs and can usually get to most Airdrie homes within the hour.",
      "Most heating contractors in Airdrie focus on forced air furnaces. Boilers are different animals — they need technicians who understand water pressure, circulation pumps, expansion tanks, and zone controls. Our trucks carry boiler-specific parts that most shops don't stock.",
    ],
    heroSubhead: "Trusted Airdrie Boilers Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/04/close-up-of-hands-adjusting-a-boiler-system.jpeg", alt: "Boiler service being performed on an Airdrie home", fit: "cover" },
    intro:
      "Boiler installation, repair, and service in Airdrie. Circulation pumps, expansion tanks, zone valves, heat exchanger cleaning — all major brands.",
    features: [
      "Boiler installation & replacement",
      "Circulation pump repair",
      "Pressure & expansion issues",
      "Zone control service",
      "Heat exchanger cleaning",
      "Annual maintenance plans",
    ],
    bullets: [
      {
        t: "Hydronic specialists",
        d: "Twenty years of hydronic heating experience — we understand the water-side systems most HVAC shops skip.",
      },
      {
        t: "Boiler parts stocked",
        d: "Circulation pumps, pressure relief valves, aquastats, and zone valves on every truck.",
      },
    ],
    seoTitle: "Boilers Airdrie | Repair, Installation & Emergency Service",
    seoDescription:
      "Expert boiler repair, installation & maintenance in Airdrie. Priority emergency service. Licensed technicians handle all boiler brands. Call 587-834-3668.",
    seoKeywords: [
      "boilers Airdrie",
      "boiler repair Airdrie",
      "circulation pump Airdrie",
      "hydronic heating Airdrie",
      "Airdrie boiler service",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie boiler service",
    quoteFormPlaceholder:
      "e.g. boiler banging on startup, cold radiators upstairs, pressure relief valve dripping…",
    sidebar: {
      title: "Airdrie Boiler Service",
      subtitle:
        "Priority emergency repair and annual maintenance for every boiler system in Airdrie — cast iron to condensing.",
      bullets: [
        "Grundfos · Taco · Bell & Gossett pumps",
        "Honeywell & Taco zone controls",
        "Combustion analysis + safety checks",
        "No after-hours surcharges",
      ],
    },
    stats: [
      { number: "20+", label: "Years on boilers", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "~1h", label: "Emergency ETA", icon: "schedule" },
      { number: "Certified", label: "hydronic", icon: "award" },
    ],
    callout:
      "Boiler noise, cold radiators, pressure loss? Call 587-834-3668 — real person answers, and our emergency trucks carry the parts to fix most issues same-day.",
    richContent: {
      sections: [
        {
          heading: "Why Airdrie Homeowners Choose FlameTech for Boilers",
          intro:
            "As a locally owned and operated plumbing company, we specialize in professional boiler services for Airdrie homes and businesses. Most heating contractors focus on forced-air furnaces; boilers need technicians who understand water pressure, circulation pumps, expansion tanks, and zone controls. We've worked on everything from old cast iron radiators in [Ravenswood](/ravenswood-plumbers-airdrie) character homes to modern condensing boilers in [Coopers Crossing](/coopers-crossing-plumbers).",
          items: [
            { heading: "Boiler Installation", body: "Complete replacement of old or failed boilers with high-efficiency condensing units. We handle all gas connections, venting, and hydronic piping." },
            { heading: "Circulation Pump Repair", body: "Failed pumps mean no heat distribution. We carry replacement pumps for Grundfos, Taco, and Bell & Gossett models commonly found in Airdrie homes." },
            { heading: "Pressure & Expansion Issues", body: "Low water pressure, leaking pressure relief valves, and failed expansion tanks. These problems compound quickly in Alberta's temperature swings." },
            { heading: "Zone Control Service", body: "Thermostats calling for heat but rooms staying cold usually means zone valve problems. We diagnose and repair Honeywell and Taco zone systems." },
            { heading: "Heat Exchanger Cleaning", body: "Annual cleaning prevents efficiency loss and extends boiler life — critical for condensing boilers that can clog with Alberta's hard water deposits." },
            { heading: "Boiler Maintenance Plans", body: "Annual tune-ups including combustion analysis, safety checks, and component inspection. Prevents mid-winter breakdowns." },
          ],
        },
        {
          heading: "Common Boiler Issues in Airdrie Homes",
          intro:
            "Airdrie homeowners call us most often for these boiler problems that seem to hit during the worst cold snaps. These aren't DIY fixes — boiler repairs involve gas lines, high-pressure water systems, and electrical controls that need proper diagnosis.",
          items: [
            { body: "No heat after power outages — usually a tripped safety switch or failed ignition sequence." },
            { body: "Radiators cold on upper floors while main floor overheats — circulation pump or air trapped in system." },
            { body: "Boiler short cycling on and off every few minutes — typically oversized boiler or failed aquastat." },
            { body: "Water leaking around boiler base — could be anything from loose fittings to cracked heat exchanger." },
            { body: "Banging and kettling noises especially during startup — usually sediment buildup or low water flow." },
            { body: "High gas bills with poor heat output — dirty heat exchanger or combustion air problems." },
          ],
        },
        {
          heading: "Boiler Maintenance Tips for Airdrie Homeowners",
          intro:
            "Proper maintenance keeps your boiler running efficiently through Alberta's brutal winters and prevents expensive mid-season breakdowns.",
          items: [
            { body: "Check boiler pressure monthly — should read between 12–15 PSI when cold. Low pressure means you're losing water somewhere in the system." },
            { body: "Bleed radiators annually before heating season starts. Air pockets prevent proper heat circulation." },
            { body: "Test pressure relief valve yearly by lifting the lever slightly. If no water comes out or it won't stop dripping afterward, replace it immediately." },
            { body: "Keep boiler area clear of storage and combustibles. Boilers need proper air circulation for safe operation and easy service access." },
            { body: "Schedule annual professional cleaning and tune-up before October. This includes combustion analysis and safety system testing." },
            { body: "Monitor your gas bills for sudden increases. Rising costs with same usage often means declining efficiency from dirty components." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Boilers in Airdrie",
        items: [
          { q: "How long do boilers last in Alberta's climate?", a: "Properly maintained boilers typically last 15–20 years in Alberta, though cast iron boilers can run 25+ years with good care. The constant freeze-thaw cycles and hard water accelerate wear on circulation pumps and expansion tanks. Annual maintenance and water softening significantly extend boiler life." },
          { q: "Can I switch from a furnace to a boiler in my Airdrie home?", a: "Yes, but it requires installing a complete hydronic distribution system — baseboard heaters, radiators, or in-floor tubing. Most Airdrie homes were built with forced air, so boiler conversion is a major renovation. We typically see this when homeowners are doing full basement finishing and want the comfort of radiant heat." },
          { q: "Why is my boiler making banging noises?", a: "Banging or kettling sounds usually indicate sediment buildup in the heat exchanger or air trapped in the system. Alberta's hard water creates mineral deposits that cause hot spots and steam bubbles. Professional cleaning and proper system bleeding typically solve the problem." },
          { q: "Do I need annual boiler maintenance?", a: "Yes — annual maintenance prevents 90% of mid-winter breakdowns and maintains efficiency. We clean the heat exchanger, test safety controls, check combustion, and inspect all system components. Boiler repairs caught early cost hundreds instead of thousands." },
        ],
      },
    },
  },

  {
    slug: "heat-pumps-airdrie",
    category: "Heating",
    location: "Airdrie",
    icon: "ac_unit",
    title: "Heat Pumps Airdrie – Expert Installation & Reliable Service",
    lead:
      "Flame Tech Plumbing & Heating brings superior heat pump expertise to Airdrie homeowners seeking year-round comfort. Serving families throughout Airdrie and surrounding areas, we've built our reputation on delivering dependable heating and cooling solutions that stand up to Alberta's demanding weather patterns.",
    heroBody: [
      "With advanced heat pump technology and hands-on experience, we help Airdrie residents achieve optimal indoor temperatures while keeping monthly utility expenses under control.",
      "Our skilled technicians understand what Airdrie properties need. From frigid January nights to scorching summer afternoons, we've mastered matching the right heat pump systems to homes that face Alberta's dramatic seasonal shifts.",
    ],
    heroSubhead: "Trusted Local Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/12/air-ease-ac.png", alt: "AirEase heat pump installed by FlameTech in Airdrie", fit: "contain" },
    intro:
      "Heat pump installation, repair, and maintenance in Airdrie. Air-source, ductless mini-split, and geothermal systems. AirEase 12-year parts + labor warranty on qualifying units.",
    features: [
      "Heat pump installation",
      "Heat pump repair",
      "Bi-annual maintenance & tune-ups",
      "Priority emergency support",
      "Air-source, ductless, geothermal",
      "AirEase 12-year warranty*",
    ],
    bullets: [
      {
        t: "Alberta-tested sizing",
        d: "We evaluate square footage, insulation, and comfort preferences to pinpoint the right heat pump for Airdrie conditions.",
      },
      {
        t: "Licensed & fully insured",
        d: "Every technician maintains current certifications and complete insurance coverage to meet provincial codes.",
      },
    ],
    seoTitle: "Heat Pumps Airdrie | Installation, Repair & Service | Flame Tech",
    seoDescription:
      "Expert heat pump installation, repair & maintenance in Airdrie. Flame Tech offers energy-efficient heating & cooling with priority emergency service. Free quotes.",
    seoKeywords: [
      "heat pumps Airdrie",
      "heat pump install Airdrie",
      "heat pump repair Airdrie",
      "ductless mini-split Airdrie",
      "AirEase heat pump",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie heat pump",
    quoteFormPlaceholder:
      "e.g. adding a heat pump to an existing furnace, ductless mini-split for a bonus room, geothermal consultation…",
    sidebar: {
      title: "Airdrie Heat Pumps",
      subtitle:
        "Energy-efficient heating and cooling matched to your Airdrie home — air-source, ductless, and geothermal systems.",
      bullets: [
        "AirEase 12-year parts + labor warranty*",
        "Bi-annual tune-ups extend equipment life",
        "Honest sizing, tailored recommendations",
        "Priority emergency dispatch",
      ],
    },
    stats: [
      { number: "12yr", label: "AirEase warranty*", icon: "award" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "Year-round", label: "heat + cool", icon: "ac_unit" },
      { number: "Licensed", label: "& insured", icon: "verified" },
    ],
    callout:
      "Planning a heat pump install or noticing weak airflow on an existing unit? Call 587-834-3668 for a free Airdrie assessment.",
    richContent: {
      sections: [
        {
          heading: "What Makes Flame Tech the Right Choice for Airdrie Heat Pumps",
          intro:
            "Finding a dependable heat pump contractor can transform your home's comfort and energy savings. Discover why Airdrie residents continue choosing Flame Tech.",
          items: [
            { heading: "Airdrie's Heat Pump Authorities", body: "Our skilled technicians understand what Airdrie properties need. From frigid January nights to scorching summer afternoons, we've mastered matching the right heat pump systems to homes facing Alberta's dramatic seasonal shifts." },
            { heading: "Licensed & Fully Insured Team", body: "Peace of mind comes standard with every job. Our crew maintains current certifications and complete insurance coverage, ensuring your heat pump project meets all provincial codes and exceeds industry standards." },
          ],
        },
        {
          heading: "Heat Pump Services We Offer",
          intro: "Flame Tech provides end-to-end heat pump solutions built for Airdrie's weather conditions.",
          items: [
            { heading: "Heat Pump Installation", body: "Our team conducts thorough home evaluations, analyzing square footage, insulation quality, and comfort preferences to pinpoint the perfect system that delivers results without breaking your budget. From initial consultation through final commissioning, we handle every detail." },
            { heading: "Heat Pump Repair", body: "Noticing weak airflow, strange noises, or a unit that won't start? Our experienced crew diagnoses and fixes problems across all major heat pump makes and models, getting your Airdrie home back to comfortable temperatures fast." },
            { heading: "Heat Pump Maintenance & Tune-Ups", body: "Routine care keeps your heat pump running smoothly and prevents unexpected breakdowns. Our detailed maintenance catches small issues before they become costly repairs, reduces energy waste, and adds years to your equipment's working life." },
            { heading: "Priority Emergency Heat Pump Support", body: "Heating emergencies strike without warning, often during Airdrie's coldest snaps or hottest days. Flame Tech offers priority emergency heat pump services in Airdrie so your family stays safe and comfortable when trouble hits." },
          ],
        },
        {
          heading: "AirEase Special — 12-Year Parts and Labor Warranty*",
          intro:
            "Qualifying residential products (Heat Pump Model 4SHP18LX) come with a 12-year parts + labor warranty when you register within 60 days of installation, use in an owner-occupied residence, and maintain documented annual professional maintenance. *Terms and conditions apply.",
        },
        {
          heading: "Finding the Right Heat Pump for Your Airdrie Home",
          items: [
            { heading: "Available Heat Pump Types", body: "We work with various heat pump styles — traditional air-source units, versatile ductless mini-splits, and high-efficiency geothermal systems — to accommodate different Airdrie properties." },
            { heading: "Factors to Consider", body: "Choosing the best heat pump involves weighing home size, upfront costs, long-term energy savings, and environmental impact. We walk through each factor with you so you can make a confident, informed decision." },
            { heading: "Expert Advice Tailored to You", body: "Backed by extensive training and real-world experience serving Airdrie households, we provide honest, customized suggestions that address your specific heating and cooling needs." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Heat Pump Questions from Airdrie Residents",
        intro:
          "Get in touch for a free, no-obligation quote on heat pump services in Airdrie. Reach us by phone, email, or our online booking system.",
        items: [
          { q: "How often does a heat pump need professional maintenance?", a: "Schedule tune-ups twice per year — once before winter and again before summer. This bi-annual approach helps your system run at maximum efficiency while catching minor issues before they turn into major headaches." },
          { q: "What are the warning signs that my heat pump needs repair?", a: "Watch for uneven temperatures throughout your home, grinding or rattling sounds, water pooling near the unit, frost building up on coils, or sudden increases in your energy bills. If you spot any of these, call our Airdrie heat pump repair team right away." },
          { q: "How long does it take to install a new heat pump?", a: "The timeline depends on which system you choose and how complex your installation requirements are. We provide clear timeframes upfront during your consultation so you know exactly what to expect." },
        ],
      },
    },
  },

  {
    slug: "hot-water-tanks-airdrie",
    category: "Water",
    location: "Airdrie",
    icon: "propane_tank",
    title: "Hot Water Tanks Airdrie | Professional Installation & Repair Services",
    lead:
      "Airdrie's hard water and temperature swings are brutal on hot water tanks. FlameTech's technicians have replaced hundreds of tanks in Airdrie neighborhoods, from [Coopers Crossing](/coopers-crossing-plumbers)' newer builds to established areas where original tanks are hitting the 12-year mark. When your tank starts leaking or you're running out of hot water, our Airdrie plumbers know exactly what's wrong and how to fix it.",
    heroBody: [
      "We're based in Calgary but keep our service vehicles stocked and ready for fast dispatch to Airdrie. No waiting days for parts or scheduling weeks out — we answer the phone with priority dispatch and can usually get a new tank installed same day.",
      "Our certified hot water specialists have been handling tank installations and repairs across Airdrie's communities for over two decades. We stock the most common 40 and 50-gallon tanks on our trucks and know which models hold up best against Airdrie's mineral-heavy water.",
    ],
    heroSubhead: "Trusted Airdrie Hot Water Tank Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/02/bradford-white-hot-water-tank.png", alt: "Bradford White hot water tank installed by FlameTech in Airdrie", fit: "contain" },
    intro:
      "Hot water tank installation, replacement, and repair in Airdrie. Bradford White, AO Smith, Rheem tanks stocked. Priority emergency service, same-day installs.",
    features: [
      "Hot water tank installation",
      "Tank replacement & upgrades",
      "Emergency tank repairs",
      "Anode rod replacement",
      "Gas valve & thermostat service",
      "Tank maintenance & flushing",
    ],
    bullets: [
      {
        t: "Stocked for Airdrie",
        d: "Popular 40 and 50-gallon tanks on every truck — no waiting days for parts.",
      },
      {
        t: "Red Seal certified",
        d: "Red Seal plumbing certifications and gas fitting tickets for safe tank installation in Alberta.",
      },
    ],
    seoTitle: "Hot Water Tanks Airdrie | Expert Installation & Repair",
    seoDescription:
      "Hot water tank problems in Airdrie? FlameTech provides priority emergency service, installation, and repair. Calgary-based with fast dispatch to Airdrie.",
    seoKeywords: [
      "hot water tanks Airdrie",
      "water heater Airdrie",
      "Bradford White Airdrie",
      "tank replacement Airdrie",
      "anode rod Airdrie",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie hot water tank",
    quoteFormPlaceholder:
      "e.g. leaking 50-gallon gas tank, no hot water in Ravenswood, tank at 10 years in Coopers Crossing…",
    sidebar: {
      title: "Airdrie Hot Water Tanks",
      subtitle:
        "Bradford White, AO Smith, and Rheem tanks with priority dispatch from Calgary — same-day installs across Airdrie.",
      bullets: [
        "Red Seal + gas fitting certified",
        "40 & 50-gallon tanks on-truck",
        "60-90 minute Airdrie ETA",
        "Warranty on parts + labor",
      ],
    },
    stats: [
      { number: "2,000+", label: "Tanks installed", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Airdrie ETA", icon: "schedule" },
      { number: "Red Seal", label: "certified", icon: "award" },
    ],
    callout:
      "Tank leaking or water gone cold? Call 587-834-3668 — our Calgary trucks are stocked and can reach most Airdrie addresses within 60-90 minutes.",
    richContent: {
      sections: [
        {
          heading: "Why Airdrie Homeowners Choose FlameTech for Hot Water Tanks",
          intro:
            "Our certified hot water specialists have been handling tank installations and repairs across Airdrie's communities for over two decades. FlameTech technicians are certified to work on all major brands — Bradford White, AO Smith, Rheem, and the builder-grade units common in Airdrie's 2000s developments. We stock the most common 40 and 50-gallon tanks on our trucks and know which models hold up best against Airdrie's mineral-heavy water.",
          items: [
            { heading: "Hot Water Tank Installation", body: "Complete removal of old tank and professional installation of new unit, including proper venting, gas connections, and code compliance." },
            { heading: "Tank Replacement & Upgrades", body: "Upgrading from builder-grade tanks to high-efficiency models that handle Airdrie's hard water better and reduce energy costs." },
            { heading: "Emergency Tank Repairs", body: "Priority repair service for leaking tanks, faulty thermostats, pilot light issues, and heating element failures." },
            { heading: "Anode Rod Replacement", body: "Replacing sacrificial anodes to extend tank life in Airdrie's mineral-rich water conditions — critical maintenance often overlooked." },
            { heading: "Gas Valve & Thermostat Service", body: "Diagnosing and replacing faulty gas valves, thermocouples, and temperature controls that commonly fail in Alberta's temperature swings." },
            { heading: "Tank Maintenance & Flushing", body: "Annual tank flushing to remove sediment buildup from hard water, plus safety inspections and efficiency tune-ups." },
          ],
        },
        {
          heading: "Common Hot Water Tank Issues in Airdrie Homes",
          intro:
            "Airdrie homeowners deal with specific hot water tank problems thanks to the area's hard water and rapid temperature changes.",
          items: [
            { body: "Sediment buildup from mineral-heavy water reducing tank capacity and efficiency." },
            { body: "Premature anode rod corrosion leading to tank rust and leaks." },
            { body: "Pilot light and gas valve issues from temperature fluctuations during chinooks." },
            { body: "Pressure relief valve failures from thermal expansion in newer, tightly sealed homes." },
            { body: "Insulation deterioration and heat loss in unheated garages during cold snaps." },
            { body: "Builder-grade tanks failing around year 8–10 in communities built during the 2005–2015 boom." },
          ],
        },
        {
          heading: "Hot Water Tank Maintenance Tips for Airdrie Homeowners",
          intro:
            "Proper maintenance can extend your tank's life from 8 years to 12+ years, even with Airdrie's challenging water conditions.",
          items: [
            { body: "Flush your tank annually to remove sediment — Airdrie's hard water creates more buildup than most areas." },
            { body: "Check and replace anode rods every 3–4 years instead of the standard 5-year recommendation." },
            { body: "Test your pressure relief valve annually — thermal expansion is common in newer Airdrie homes." },
            { body: "Insulate hot water lines in unheated garages to prevent freezing and reduce heat loss." },
            { body: "Monitor for rust-colored water or metallic taste — early signs of tank corrosion." },
            { body: "Keep the area around your tank clear and check for small leaks during monthly inspections." },
          ],
        },
      ],
    },
  },

  {
    slug: "water-softener-airdrie",
    category: "Water",
    location: "Airdrie",
    icon: "science",
    title: "Water Softener Airdrie | Professional Installation & Repair",
    lead:
      "Airdrie's hard water is brutal on your plumbing, appliances, and skin. We install and service water softeners that actually work — not the big box store units that break down after two years. Our Airdrie plumbers handle everything from whole-home systems to maintenance on existing units.",
    heroBody: [
      "When your water softener quits regenerating, you need someone who answers the phone. We're available with priority emergency response for repairs throughout Airdrie and can usually get your system running the same day.",
      "FlameTech has been installing water softeners in Airdrie since the community started booming in the early 2000s. Our technicians are certified on Fleck, Autotrol, and Clack valve systems — the workhorses that last 15+ years.",
    ],
    heroSubhead: "Trusted Airdrie Water Softener Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/04/water-softener-calgary.png", alt: "Whole-home water softener installed by FlameTech in Airdrie", fit: "contain" },
    intro:
      "Water softener installation, repair, and service in Airdrie. Fleck, Autotrol, and Clack valve systems. Certified technicians, 15+ year lifespan with proper sizing.",
    features: [
      "Water softener installation",
      "Control valve repair",
      "Resin tank replacement",
      "Brine tank service",
      "System maintenance",
      "Water testing & analysis",
    ],
    bullets: [
      {
        t: "Fleck · Autotrol · Clack",
        d: "Certified on the three valve systems that last 15+ years — not the big-box-store units that fail in 5.",
      },
      {
        t: "Airdrie hardness tested",
        d: "We test your specific water (typically 15-25 grains/gal in Airdrie) and size the system to actual usage.",
      },
    ],
    seoTitle: "Water Softener Airdrie | Installation & Repair Services",
    seoDescription:
      "Expert water softener installation, repair & maintenance in Airdrie. Priority emergency service. Hard water solutions for Alberta homes. Call now!",
    seoKeywords: [
      "water softener Airdrie",
      "Fleck softener Airdrie",
      "hard water Airdrie",
      "water softener repair Airdrie",
      "whole home softener",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "Airdrie water softener",
    quoteFormPlaceholder:
      "e.g. softener not regenerating, salt bridge in brine tank, upgrading from a big-box unit, iron in water…",
    sidebar: {
      title: "Airdrie Water Softeners",
      subtitle:
        "Whole-home softener installs plus control valve and resin service for every major valve system in Airdrie.",
      bullets: [
        "Factory-trained on Fleck, Autotrol, Clack",
        "32,000–40,000 grain systems sized right",
        "Iron-out salt recommendations",
        "Priority emergency dispatch",
      ],
    },
    stats: [
      { number: "15-20yr", label: "Softener lifespan", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "15-25", label: "grains/gal hardness", icon: "water_drop" },
      { number: "Certified", label: "valve systems", icon: "award" },
    ],
    financing: {
      detail:
        "Spread the cost of a new Airdrie water softener into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Hard water damaging your plumbing and appliances? Call 587-834-3668 — real person answers, same-day diagnosis in Airdrie.",
    richContent: {
      sections: [
        {
          heading: "Why Airdrie Homeowners Choose FlameTech for Water Softener",
          intro:
            "FlameTech has been installing water softeners in Airdrie since the community started booming in the early 2000s. We know which brands survive Alberta's mineral-heavy groundwater and which ones fail after a few years. Our technicians are certified on Fleck, Autotrol, and Clack valve systems — the workhorses that last 15+ years.",
          items: [
            { heading: "Water Softener Installation", body: "Complete whole-home system setup with proper sizing, bypass valves, and drain connections for Airdrie homes." },
            { heading: "Control Valve Repair", body: "Fix stuck regeneration cycles, timer issues, and valve replacement on Fleck, Autotrol, and Clack systems." },
            { heading: "Resin Tank Replacement", body: "Replace worn-out resin beds that stop removing hardness minerals from your water supply." },
            { heading: "Brine Tank Service", body: "Clean salt bridges, repair float assemblies, and fix brine draw problems that prevent regeneration." },
            { heading: "System Maintenance", body: "Annual cleaning, salt level checks, and performance testing to keep your softener running efficiently." },
            { heading: "Water Testing & Analysis", body: "Test your Airdrie water hardness levels and recommend the right softener capacity for your home." },
          ],
        },
        {
          heading: "Common Water Softener Issues in Airdrie Homes",
          intro:
            "Airdrie homeowners call us when their water softener stops doing its job. Don't let hard water damage your appliances and plumbing.",
          items: [
            { body: "Salt bridges forming in the brine tank, preventing proper regeneration cycles." },
            { body: "Control valves sticking due to iron buildup in Airdrie's groundwater supply." },
            { body: "Resin beads breaking down after 10+ years, letting hard water through the system." },
            { body: "Timer mechanisms failing, causing the system to regenerate at wrong times or not at all." },
            { body: "Drain line clogs backing up brine waste water during regeneration cycles." },
            { body: "Bypass valves leaking or stuck open, sending untreated hard water to your home." },
          ],
        },
        {
          heading: "Water Softener Maintenance Tips for Airdrie Homeowners",
          intro:
            "A properly maintained water softener lasts 15–20 years in Alberta. Skip the maintenance, and you'll be replacing it in half that time.",
          items: [
            { body: "Check salt levels monthly — keep the brine tank 1/3 full but don't overfill." },
            { body: "Break up salt bridges with a broom handle if water stops getting soft." },
            { body: "Clean the brine tank annually to remove buildup and mushy salt residue." },
            { body: "Test your water hardness yearly — Airdrie levels can change with seasonal groundwater shifts." },
            { body: "Replace pre-filters every 3–6 months if your system has them installed." },
            { body: "Schedule professional service every 2–3 years to clean the control valve and resin bed." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Water Softeners in Airdrie",
        items: [
          { q: "How hard is Airdrie's water and what size softener do I need?", a: "Airdrie water typically tests between 15–25 grains per gallon of hardness, which is very hard. Most homes need a 32,000 or 40,000 grain capacity system depending on household size and water usage. We test your specific water and calculate the right size based on your family's consumption patterns." },
          { q: "How often should my water softener regenerate in Airdrie?", a: "With Airdrie's hard water, most residential systems regenerate every 3–7 days depending on usage. If your system is regenerating daily, either it's undersized or has a problem with the control valve. We can adjust the regeneration frequency based on your actual hardness levels and water consumption." },
          { q: "What type of salt should I use in my Airdrie water softener?", a: "Use solar salt pellets or crystals — avoid rock salt which contains impurities that clog the system. With Airdrie's iron content, we sometimes recommend iron-out salt additive to keep the resin bed clean. Never use table salt or salt substitute products in your softener." },
          { q: "Why is my softened water leaving white spots on dishes?", a: "White spots usually mean your system isn't regenerating properly or the resin bed needs replacement. It could also indicate your water softener is undersized for your home's demand. We'll test your treated water and check the regeneration cycle to find the problem." },
          { q: "How long do water softeners last in Alberta's climate?", a: "Quality systems like Fleck or Autotrol typically last 15–20 years with proper maintenance in Alberta conditions. Cheaper units from big box stores often fail within 5–8 years due to our hard water and temperature extremes. The control valve and resin bed are the components that usually need service first." },
        ],
      },
    },
  },

  {
    slug: "ravenswood-plumbers-airdrie",
    category: "Plumbing",
    location: "Airdrie",
    icon: "plumbing",
    title: "Ravenswood Plumbers Airdrie | Expert Local Service",
    lead:
      "Need a dependable plumber in Ravenswood, Airdrie? Flame Tech Plumbing delivers outstanding results to homeowners and businesses throughout this thriving neighborhood. Our skilled technicians provide quick, reliable solutions tailored to Ravenswood's modern homes and expanding commercial properties.",
    heroBody: [
      "As Airdrie's trusted plumbing service provider, we bring specialized knowledge and commitment to every Ravenswood address we serve. This established neighborhood showcases quality construction from the early 2000s, creating specific maintenance requirements that our veteran team manages with precision and care.",
      "Emergencies ignore the calendar. Flame Tech Plumbing provides priority emergency availability for Ravenswood residents confronting critical situations — you'll connect with actual staff members instantly, never automated menus.",
    ],
    heroSubhead: "Ravenswood's Top-Rated Plumbing Service",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Ravenswood, Airdrie", fit: "cover" },
    intro:
      "Ravenswood plumbers serving Airdrie's established early-2000s neighborhood. Emergency repairs, water heaters, drain cleaning, leak detection.",
    features: [
      "Priority emergency response",
      "Professional drain cleaning",
      "Complete water heater services",
      "Fixture installation & replacement",
      "Advanced leak detection",
      "Maintenance programs",
    ],
    bullets: [
      {
        t: "Ravenswood veterans",
        d: "Our team knows Ravenswood's early-2000s construction and the maintenance issues that come with 20-year-old fixtures.",
      },
      {
        t: "Licensed, insured, bonded",
        d: "Every technician holds full licensing and certification for work throughout Alberta.",
      },
    ],
    seoTitle: "Ravenswood Plumbers Airdrie | Priority Service | FlameTech",
    seoDescription:
      "Ravenswood plumbers serving Airdrie homes. Emergency repairs, water heaters, drain cleaning, leak detection. Licensed team. Call 587-834-3668!",
    seoKeywords: [
      "Ravenswood plumbers",
      "plumber Ravenswood Airdrie",
      "Ravenswood plumbing",
      "Airdrie plumber",
      "Ravenswood water heater",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Ravenswood plumbing",
    quoteFormPlaceholder:
      "e.g. leaking fixture in Ravenswood, slow basement drain, water heater pooling, renovation rough-in…",
    sidebar: {
      title: "Ravenswood Plumbers",
      subtitle:
        "Fast, reliable plumbing for Ravenswood's modern homes and commercial properties — priority emergency dispatch.",
      bullets: [
        "60-90 minute Ravenswood response",
        "Infrared + acoustic leak detection",
        "Full licensing + insurance",
        "Comprehensive workmanship warranty",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Ravenswood ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, leak, or sewer backup in Ravenswood? Call 587-834-3668 — real people, priority dispatch, fully-stocked trucks.",
    richContent: {
      sections: [
        {
          heading: "Comprehensive Plumbing Services for Ravenswood",
          items: [
            { heading: "Priority Emergency Response", body: "Unexpected failures occur without notice — ruptured lines, significant leaks, or complete sewer blockages demand immediate attention. Our response team arrives equipped and ready, protecting your Ravenswood property from extensive water damage through swift professional action." },
            { heading: "Professional Drainage Solutions", body: "Persistent clogs disrupt daily routines. We employ industrial-strength tools to completely clear obstructions, returning full functionality to your waste lines. From bathroom fixtures to main sewer connections, we handle every drainage challenge efficiently." },
            { heading: "Complete Water Heater Services", body: "From energy-efficient tankless models to dependable storage tanks, our specialists guarantee continuous hot water supply throughout Alberta's harsh winter months. We work with leading manufacturers and suggest optimal solutions matching your household requirements." },
            { heading: "Fixture Installation & Replacement", body: "Considering renovations? Our technicians expertly fit contemporary taps, commodes, basins, and shower assemblies that boost utility and visual appeal. Every installation adheres to current building regulations while increasing your Ravenswood home's market value." },
            { heading: "Advanced Leak Identification", body: "Concealed water intrusion creates devastating damage silently. Using infrared cameras and acoustic sensors, we pinpoint exact leak locations behind walls and beneath flooring, then implement permanent solutions preventing recurring problems." },
          ],
        },
        {
          heading: "Frequent Plumbing Challenges in Ravenswood Properties",
          intro:
            "Residents in this well-established community encounter characteristic issues we've resolved repeatedly across Airdrie neighborhoods.",
          items: [
            { body: "Original fixtures showing age and requiring modern replacements." },
            { body: "Winter freeze risks affecting exposed piping during Alberta cold snaps." },
            { body: "Mature landscaping roots penetrating underground wastewater lines." },
            { body: "Hard water mineral accumulation degrading fixture efficiency." },
            { body: "System capacity stretched as household needs evolve." },
            { body: "Renovation projects demanding updated code-compliant work." },
          ],
        },
        {
          heading: "Proactive Maintenance Programs for Ravenswood Homes",
          intro:
            "Forward-thinking property owners embrace maintenance preventing expensive emergencies. We advise Ravenswood residents implement the following.",
          items: [
            { body: "Yearly comprehensive inspections catching issues before escalation." },
            { body: "Autumn winterization protecting vulnerable pipes from temperature extremes." },
            { body: "Tank flushing services prolonging heater operational life substantially." },
            { body: "Regular cleaning preventing persistent drainage obstacles." },
            { body: "Triennial camera examinations tracking underground line integrity." },
            { body: "Pressure evaluations confirming appropriate water delivery throughout structures." },
          ],
        },
      ],
      faq: {
        heading: "Common Questions About Ravenswood Plumbing Services",
        intro:
          "From urgent repairs to routine service or major installations, we're ready to assist. Review our commonly asked questions below, or contact us directly at 587-834-3668.",
        items: [
          { q: "Are priority emergency plumbing services available in Ravenswood?", a: "Yes, Flame Tech Plumbing provides priority emergency service throughout Ravenswood, Airdrie. Whether facing burst pipes, major leaks, or sewer backups, our licensed technicians respond rapidly. Contact us anytime at 587-834-3668." },
          { q: "What's your typical response time for Ravenswood calls?", a: "Our technicians generally reach Ravenswood locations within 60-90 minutes following your call, depending on current service demand and traffic patterns. During emergencies, we prioritize swift arrival to minimize property damage and restore functionality." },
          { q: "Which plumbing services does Flame Tech offer in Ravenswood?", a: "We deliver complete plumbing solutions including drain clearing, water heater service and installation, leak identification, pipe repair and replacement, fixture installations, sewer line work, and bathroom/kitchen renovations." },
          { q: "Do your technicians carry proper licensing and insurance?", a: "Absolutely. Every Flame Tech Plumbing technician holds full licensing, insurance coverage, and certification for work throughout Alberta. We maintain extensive liability protection safeguarding both our crew and your property." },
          { q: "What warranty coverage accompanies your services?", a: "We back our craftsmanship with comprehensive warranties on all work performed. Our satisfaction commitment ensures complete happiness with results, or we'll correct any concerns. We additionally provide manufacturer warranties on components and equipment we install." },
        ],
      },
    },
  },

  {
    slug: "reunion-plumbers-airdrie",
    category: "Plumbing",
    location: "Airdrie",
    icon: "plumbing",
    title: "Reunion Plumbers Airdrie | Quality Service & Fast Response",
    lead:
      "Require expert plumbing in Reunion, Airdrie? Flame Tech Plumbing provides superior service to residences and businesses across this dynamic community. Our qualified technicians deliver timely, dependable solutions crafted specifically for Reunion's contemporary residential developments.",
    heroBody: [
      "As your community-focused plumbing provider, we deliver specialized expertise and outstanding customer care throughout every Reunion residence. This newer development represents Airdrie's modern residential growth, featuring quality construction and contemporary plumbing infrastructure.",
      "Crises respect no timetable. Flame Tech Plumbing offers priority emergency availability supporting Reunion residents — reach genuine team members directly, never automated systems.",
    ],
    heroSubhead: "Reunion's Trusted Plumbing Professionals",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Reunion, Airdrie", fit: "cover" },
    intro:
      "Reunion plumbers serving Airdrie's newest homes. Priority emergency service, fixture installation, advanced leak tracking. Licensed professionals.",
    features: [
      "Continuous emergency coverage",
      "Advanced drain management",
      "Hot water system excellence",
      "Modern fixture services",
      "Sophisticated leak tracking",
      "Preventative maintenance",
    ],
    bullets: [
      {
        t: "New-build specialists",
        d: "Reunion's modern plumbing infrastructure requires technicians who understand contemporary construction — we work on these homes daily.",
      },
      {
        t: "Alberta-licensed team",
        d: "Complete licensing and comprehensive liability coverage for every technician on our crew.",
      },
    ],
    seoTitle: "Reunion Plumbers Airdrie | Priority Service | FlameTech",
    seoDescription:
      "Reunion plumbers serving Airdrie's newest homes. Priority emergency service, fixture installation. Licensed professionals. Call 587-834-3668.",
    seoKeywords: [
      "Reunion plumbers",
      "plumber Reunion Airdrie",
      "Reunion plumbing",
      "Airdrie new home plumber",
      "Reunion water heater",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Reunion plumbing",
    quoteFormPlaceholder:
      "e.g. fixture warranty issue in Reunion, new-build rough-in, leak detection, renovation plumbing…",
    sidebar: {
      title: "Reunion Plumbers",
      subtitle:
        "Specialized plumbing for Reunion's modern residential developments — priority emergency dispatch.",
      bullets: [
        "60-90 minute Reunion response",
        "Thermal + ultrasonic leak detection",
        "Full licensing + insurance",
        "Comprehensive workmanship warranty",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Reunion ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Plumbing emergency in Reunion? Call 587-834-3668 — real people answer, priority dispatch, fully-stocked service trucks.",
    richContent: {
      sections: [
        {
          heading: "Complete Plumbing Solutions for Reunion Properties",
          items: [
            { heading: "Continuous Emergency Coverage", body: "Disasters strike unexpectedly — fractured connections, substantial water escapes, or complete wastewater backups demand immediate professional response. Our emergency specialists arrive fully prepared, safeguarding your Reunion property from serious water damage." },
            { heading: "Advanced Drain Management", body: "Stubborn blockages interrupt household routines. Using commercial-grade machinery, we obliterate obstacles completely, reestablishing optimal drainage throughout your system. Whether tackling bathroom fixtures or primary sewer connections, our approach guarantees lasting results." },
            { heading: "Hot Water System Excellence", body: "Whether installing cutting-edge tankless technology or servicing conventional storage units, our experts ensure uninterrupted hot water supply during Alberta's brutal winter conditions." },
            { heading: "Modern Fixture Services", body: "Updating your spaces? Our professionals masterfully install stylish faucets, efficient toilets, elegant basins, and sophisticated shower assemblies. Each installation complies fully with provincial regulations while enhancing your Reunion home's functionality and appeal." },
            { heading: "Sophisticated Leak Tracking", body: "Invisible moisture intrusion generates catastrophic damage gradually. Employing thermal imaging plus ultrasonic detection, we identify precise leak positions within walls and beneath floors rapidly, implementing comprehensive repairs preventing subsequent issues." },
          ],
        },
        {
          heading: "Common Plumbing Concerns Facing Reunion Residents",
          intro:
            "Homeowners in this contemporary neighborhood encounter predictable service requirements our qualified team has managed repeatedly throughout Airdrie's newer developments.",
          items: [
            { body: "Modern fixtures occasionally needing adjustment or warranty service." },
            { body: "Seasonal freeze protection essential during Alberta's coldest periods." },
            { body: "Young landscape plantings beginning to affect underground infrastructure." },
            { body: "Mineral-rich water gradually impacting system components." },
            { body: "Growing families requiring enhanced capacity planning." },
            { body: "Personalization projects demanding professional installation expertise." },
          ],
        },
        {
          heading: "Smart Maintenance Strategies for Reunion Homeowners",
          intro:
            "Proactive property owners embrace preventive care avoiding costly emergency situations.",
          items: [
            { body: "Annual comprehensive evaluations identifying developing concerns proactively." },
            { body: "Pre-winter preparation services safeguarding exposed piping from temperature drops." },
            { body: "Systematic tank maintenance maximizing heater longevity dramatically." },
            { body: "Scheduled cleaning eliminating recurring drainage impediments." },
            { body: "Regular camera assessments tracking subsurface line health." },
            { body: "Force testing verifying proper water distribution across all fixtures." },
          ],
        },
      ],
      faq: {
        heading: "Your Reunion Plumbing Questions Answered",
        intro:
          "Whether addressing urgent repairs, standard maintenance, or significant installations, we're prepared to help. Reach us directly at 587-834-3668.",
        items: [
          { q: "Does Flame Tech offer priority emergency service in Reunion?", a: "Yes, Flame Tech Plumbing delivers priority emergency coverage throughout Reunion, Airdrie. Whether confronting broken pipes, substantial leaks, or sewer obstructions, our licensed professionals respond swiftly. Reach us anytime at 587-834-3668." },
          { q: "How fast can your team reach Reunion properties?", a: "Our professionals usually arrive at Reunion addresses within 60-90 minutes after your call, subject to prevailing service demand and traffic circumstances. For critical emergencies, we emphasize rapid arrival." },
          { q: "What plumbing services do you provide in Reunion?", a: "We supply total plumbing solutions encompassing drain cleaning, water heater maintenance and setup, leak discovery, pipe restoration and substitution, fixture placements, sewer line operations, and bathroom/kitchen remodeling." },
          { q: "Are all your plumbers properly licensed and insured?", a: "Absolutely. Every Flame Tech Plumbing technician possesses complete licensing, insurance protection, and certification throughout Alberta. We carry extensive liability coverage protecting our personnel and your premises." },
          { q: "What warranty protection comes with your services?", a: "We support our craftsmanship through comprehensive warranties covering all completed work. Our satisfaction commitment guarantees total happiness with outcomes, or we'll resolve any issues. We also extend manufacturer warranties covering parts and equipment we install." },
        ],
      },
    },
  },

  // ────────────────────────────────────────────────────────────
  // CALGARY NEIGHBOURHOODS — drafted from WP content, ported by agents
  // ────────────────────────────────────────────────────────────

  // --- from nb-entries-A.ts ---
  {
    slug: "altadore-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Altadore Plumbers Calgary | Priority Emergency Service Available",
    lead:
      "Need a dependable plumber in Altadore, Calgary? Flame Tech Plumbing delivers outstanding service to this charming inner-city neighborhood's heritage homes and modern residences. Our experienced technicians provide swift, reliable solutions perfectly suited for Altadore's unique blend of character homes and contemporary properties.",
    heroBody: [
      "As your trusted [SW Calgary plumber](/calgary-plumbers-sw), we understand the distinct character of Altadore and deliver customized service to match this established community's needs. This mature inner-city community showcases homes spanning from the 1950s through recent developments, creating unique plumbing challenges that our specialists navigate with expertise and care.",
      "From cracked pipes and serious leaks to sewer backups, our skilled technicians arrive swiftly at your Altadore property, fully equipped to handle critical situations and prevent extensive water damage. Call 587-834-3668 for priority dispatch any time.",
    ],
    heroSubhead: "Trusted Altadore Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Altadore", fit: "cover" },
    intro:
      "Expert plumbers serving Altadore, Calgary. Heritage home specialists with fast response, honest pricing, and priority emergency service for inner-city SW Calgary properties.",
    features: [
      "Priority emergency plumbing response",
      "Drain cleaning & hydro-jetting",
      "Water heater service & installation",
      "Advanced leak detection",
      "Sewer line camera inspection",
      "Heritage home pipe replacement",
    ],
    bullets: [
      {
        t: "Heritage home specialists",
        d: "We work confidently on homes spanning from the 1950s through modern infills, navigating aging pipe systems and code-compliant upgrades.",
      },
      {
        t: "Upfront pricing",
        d: "Clear, detailed estimates before any work begins. No hidden fees, no surprises — just honest pricing you can trust.",
      },
    ],
    seoTitle: "Altadore Plumbers Calgary | Priority Emergency Services Available",
    seoDescription:
      "Need a dependable plumber in Altadore, Calgary? Look no further than 5-Star rated FlameTech Plumbing & Heating. Priority service available.",
    seoKeywords: [
      "Altadore plumbers",
      "plumber Altadore Calgary",
      "SW Calgary plumber",
      "Altadore emergency plumber",
      "heritage home plumber Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Altadore plumbing",
    quoteFormPlaceholder:
      "e.g. galvanized line leaking in a 1950s bungalow, sewer backup on 33rd Ave, water heater failing…",
    sidebar: {
      title: "Altadore Plumbers",
      subtitle:
        "Inner-city SW Calgary plumbing experts — heritage homes, modern infills, and everything in between.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "60-90 minute Altadore ETA",
        "Heritage home experience",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Altadore ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in Altadore? Call 587-834-3668 — a real person will dispatch a plumber right away.",
    richContent: {
      sections: [
        {
          heading: "Complete Plumbing Solutions for Altadore",
          intro:
            "Plumbing emergencies don't wait for business hours — cracked pipes, serious leaks, or sewer backups demand immediate attention. Our skilled technicians arrive swiftly at your Altadore property, fully equipped to handle critical situations and prevent extensive water damage.",
          items: [
            { heading: "Professional Drain Solutions", body: "Slow-moving drains create daily frustrations. We use advanced equipment to clear blockages completely, ensuring optimal drainage throughout your property. From bathroom sinks to main sewer lines, we solve drainage problems with lasting results. Learn more about our [drain cleaning services in Calgary](/drain-cleaning-calgary)." },
            { heading: "Water Heater Service & Installation", body: "From [tankless models](/tankless-water-heaters) to [conventional tanks](/hot-water-tanks), our experts guarantee reliable hot water supply through Calgary's harsh winters. We maintain all leading brands and help you select the ideal system matching your household requirements and budget constraints." },
            { heading: "Fixture Replacement & Installation", body: "Considering kitchen or [bathroom upgrades](/bathroom-plumbing-calgary)? We install contemporary faucets, toilets, sinks, and [shower systems](/shower-plumbing-calgary) that improve functionality while elevating your home's aesthetics. All installations comply with current building regulations." },
            { heading: "Advanced Leak Detection", body: "Concealed leaks silently damage your property's structure. Using thermal cameras and acoustic sensors, we pinpoint leaks behind walls and beneath floors without unnecessary demolition, then implement permanent repairs that protect your investment." },
            { heading: "Complete Sewer Line Services", body: "Through video camera inspections and powerful hydro-jetting technology, we maintain healthy sewer systems. Our specialists handle everything from minor repairs to full line replacements when needed for Altadore homes." },
          ],
        },
        {
          heading: "Common Plumbing Challenges in Altadore Properties",
          intro:
            "This established inner-city community presents specific maintenance requirements we see again and again:",
          items: [
            { body: "Aging pipe systems in older homes requiring replacement or retrofitting." },
            { body: "Historic properties needing specialized plumbing knowledge." },
            { body: "Mature tree roots causing sewer line intrusions." },
            { body: "Hard water mineral buildup reducing system efficiency." },
            { body: "Renovation projects requiring code-compliant upgrades." },
            { body: "Winter freeze protection for exposed exterior plumbing." },
          ],
        },
        {
          heading: "Altadore's Priority Emergency Plumbing Team",
          intro:
            "Plumbing disasters strike without warning. Flame Tech Plumbing provides around-the-clock [emergency plumbing service for Calgary residents](/emergency-plumber-calgary) dealing with urgent plumbing crises. Connect with a real person instantly — no automated systems — who dispatches qualified technicians to your location right away. We maintain fully-stocked service vehicles to resolve most emergencies during the first visit.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you offer priority emergency plumbing in Altadore?",
            a: "Yes, Flame Tech Plumbing provides priority emergency plumbing throughout Altadore, Calgary. Whether facing a burst pipe, critical leak, or sewer backup, our licensed plumbers respond rapidly. Contact us anytime at 587-834-3668 for immediate help.",
          },
          {
            q: "How fast can a plumber arrive at my Altadore property?",
            a: "Our plumbers generally reach Altadore homes within 60-90 minutes after your call, depending on current service demand and traffic patterns. For emergency situations, we prioritize quick response times to minimize water damage and restore your plumbing system promptly.",
          },
          {
            q: "What plumbing services are available in Altadore?",
            a: "We deliver comprehensive plumbing services including drain cleaning, water heater service and replacement, leak detection, pipe repair and replacement, fixture installation, sewer line maintenance, and kitchen/bathroom plumbing renovations.",
          },
          {
            q: "Are your plumbers properly licensed and insured?",
            a: "Absolutely. Every Flame Tech Plumbing technician holds full licensing, insurance, and certification to work throughout Calgary. We maintain comprehensive liability coverage protecting both our team and your property.",
          },
          {
            q: "Do you warranty your plumbing work?",
            a: "Yes, we back our craftsmanship with a comprehensive warranty on all services. Our satisfaction guarantee ensures that if you're dissatisfied with our work, we'll correct it. We also provide manufacturer warranties on parts and equipment we install.",
          },
        ],
      },
    },
  },

  {
    slug: "aspen-woods-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Aspen Woods Plumbers Calgary | Premium Plumbing Services",
    lead:
      "Searching for premium plumbing service in Aspen Woods, Calgary? Flame Tech Plumbing brings professional expertise to this exclusive community's luxury homes and upscale neighborhoods. Our certified plumbers specialize in Aspen Woods' sophisticated plumbing requirements, delivering meticulous service that maintains your property's value and ensures your family's comfort.",
    heroBody: [
      "Your dedicated [plumbing experts for SW Calgary](/calgary-plumbers-sw) recognize Aspen Woods' exclusive community standards and deliver premium service tailored to this upscale neighborhood's exceptional properties.",
      "Aspen Woods' luxury estates and custom-built homes — from sprawling family residences to exclusive cul-de-sac properties — demand sophisticated plumbing solutions that match the community's premium standards and discerning homeowner expectations. Call 587-834-3668 for priority dispatch.",
    ],
    heroSubhead: "Premium Plumbing for Aspen Woods Homes",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Aspen Woods", fit: "cover" },
    intro:
      "Premium plumbers serving Aspen Woods, Calgary. Luxury home specialists offering priority emergency response, Poly-B inspections, advanced leak detection, and white-glove service.",
    features: [
      "Priority emergency plumbing",
      "Luxury fixture installation",
      "Poly-B identification & replacement",
      "Advanced leak detection",
      "Premium water heater solutions",
      "Sewer camera & hydro-jetting",
    ],
    bullets: [
      {
        t: "White-glove service",
        d: "Discretion, punctuality, and careful coordination on every visit — respecting your home, your finishes, and your schedule.",
      },
      {
        t: "Poly-B experts",
        d: "Some earlier-phase Aspen Woods homes were built with Poly-B piping. We identify, assess, and replace it with modern PEX or copper.",
      },
    ],
    seoTitle: "Aspen Woods Plumbers Calgary | Priority Plumbing Services",
    seoDescription:
      "Premium plumbers serving Aspen Woods, Calgary. Luxury home specialists with priority emergency service, Poly-B replacement, and advanced leak detection. Call 587-834-3668.",
    seoKeywords: [
      "Aspen Woods plumbers",
      "plumber Aspen Woods Calgary",
      "SW Calgary plumber",
      "luxury home plumber Calgary",
      "Poly-B plumbing Aspen Woods",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Aspen Woods plumbing",
    quoteFormPlaceholder:
      "e.g. Poly-B inspection needed, tankless install, leak behind a tiled wall, sewer camera inspection…",
    sidebar: {
      title: "Aspen Woods Plumbers",
      subtitle:
        "Premium SW Calgary plumbing service for luxury homes — priority dispatch, Poly-B expertise, fully-stocked trucks.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "60-90 minute Aspen Woods ETA",
        "Poly-B identification & replacement",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Aspen Woods ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Luxury home emergency in Aspen Woods? Call 587-834-3668 — our priority dispatch team sends a fully-equipped technician right away.",
    richContent: {
      sections: [
        {
          heading: "Comprehensive Plumbing Solutions for Aspen Woods",
          intro:
            "Sophisticated drainage systems, luxury fixtures, and premium water heaters deserve technicians who match that standard. Our Aspen Woods service is built around discretion, precision, and first-visit resolution.",
          items: [
            { heading: "Expert Drain and Sewer Services", body: "Luxury homes need specialized attention. Our professionals utilize cutting-edge [drain cleaning technology](/drain-cleaning-calgary) to eliminate stubborn blockages completely, from gourmet kitchen drains to main sewer lines, with precision and thoroughness." },
            { heading: "Premium Water Heater Solutions", body: "From state-of-the-art [tankless systems](/tankless-water-heaters) to high-capacity [conventional units](/hot-water-tanks), our specialists ensure uninterrupted hot water for your luxury lifestyle. We service elite brands and recommend solutions delivering exceptional performance through Calgary's demanding winters." },
            { heading: "Luxury Fixture Installation", body: "Enhancing your executive home's [bathrooms](/bathroom-plumbing-calgary) or designer kitchen? We install premium faucets, high-end toilets, designer sinks, and spa-grade [shower systems](/shower-plumbing-calgary) that complement your home's sophisticated aesthetic." },
            { heading: "Sophisticated Leak Detection", body: "Concealed leaks waste resources, damage expensive finishes, and escalate utility costs. Employing thermal imaging and precision acoustic detection, we locate leaks within walls and beneath floors without invasive investigation." },
          ],
        },
        {
          heading: "Poly-B Pipe Concerns in Aspen Woods",
          intro:
            "Some of Aspen Woods' earlier-phase properties were constructed during the period when polybutylene (Poly-B) piping was standard in Calgary home builds. This grey plastic piping is now recognized for premature deterioration and unexpected failures that can cause significant water damage to luxury finishes and expensive renovations. If your Aspen Woods home was built before the mid-1990s, or you're unsure what piping material is behind your walls, we recommend a professional inspection. Learn more about our [Poly-B plumbing inspection and replacement services in Calgary](/polyb-plumbing-calgary).",
        },
        {
          heading: "Serving Adjacent Communities",
          intro:
            "Beyond Aspen Woods, FlameTech Plumbing delivers exceptional service throughout Calgary's premier west communities, including Springbank Hill, [West Springs](/west-springs-plumbers-calgary), Cougar Ridge, Strathcona Park, and [Signal Hill](/signal-hill-plumbers-calgary). Whether you require [emergency repairs](/emergency-plumber-calgary), sophisticated drain solutions, or preventive maintenance, our certified plumbers respond promptly.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Does Flame Tech provide priority emergency service in Aspen Woods?",
            a: "Absolutely. Flame Tech Plumbing delivers priority emergency response throughout Aspen Woods, Calgary. When confronting burst pipes, significant leaks, or sewage crises, our certified professionals respond rapidly. Contact our emergency line at 587-834-3668 anytime for prompt assistance.",
          },
          {
            q: "How rapidly can you reach Aspen Woods properties?",
            a: "Our technicians generally arrive at Aspen Woods estates within 60-90 minutes of your emergency contact, contingent upon current service demand and Calgary traffic patterns. We prioritize swift response for emergencies to minimize damage.",
          },
          {
            q: "What plumbing solutions do you offer Aspen Woods homeowners?",
            a: "We deliver comprehensive plumbing expertise including sophisticated drain cleaning, premium water heater service and installation, advanced leak detection, expert pipe repair and replacement, luxury fixture installations, thorough sewer maintenance, and executive-quality bathroom/kitchen renovations.",
          },
          {
            q: "Are your plumbers licensed and insured?",
            a: "Certainly. Every Flame Tech Plumbing technician maintains complete licensure, bonding, and certification for Calgary operations. We carry comprehensive liability insurance protecting both our professionals and your valuable property.",
          },
          {
            q: "Do Aspen Woods homes have Poly-B plumbing?",
            a: "Some earlier-phase Aspen Woods properties built before the mid-1990s may contain polybutylene (Poly-B) piping, a material now known for premature failure. If you're unsure whether your home has Poly-B, Flame Tech offers free inspections to identify the piping material and assess its condition. Visit our [Poly-B plumbing Calgary](/polyb-plumbing-calgary) page for details on identification, insurance implications, and replacement options.",
          },
        ],
      },
    },
  },

  {
    slug: "auburn-bay-plumber-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Auburn Bay Plumber Calgary | Priority Emergency Service | FlameTech",
    lead:
      "Auburn Bay homeowners know that when your plumbing fails, you need a plumber who understands this newer community's unique challenges. FlameTech Plumbing has been serving Auburn Bay since these homes started going up in 2005, and we've seen every issue these builder-grade systems can throw at you. From [hot water tank failures](/hot-water-tanks) in those mechanical rooms to main line backups, we know exactly what breaks and how to fix it right.",
    heroBody: [
      "As a locally owned and operated [plumbing team in SE Calgary](/calgary-plumbers-se), we understand the unique challenges that Auburn Bay properties face. Auburn Bay's homes are mostly built between 2005-2015, which means your builder-grade plumbing is hitting that 15-20 year mark where things start failing.",
      "Our crew has serviced homes throughout SE Calgary, from [Cranston](/cranston-plumber-calgary) to [McKenzie Towne](/mckenzie-towne-plumbers-calgary), so we understand how these newer communities were built and what problems to expect. Call 587-834-3668 any time — priority dispatch, real person on the line.",
    ],
    heroSubhead: "Auburn Bay's Trusted SE Calgary Plumbers",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Auburn Bay", fit: "cover" },
    intro:
      "Auburn Bay plumber serving SE Calgary. Priority emergency service, water heaters, drain cleaning, leak repairs. Local experts. Call 587-834-3668 today.",
    features: [
      "Priority emergency plumbing",
      "Hot water tank replacement",
      "Main line cleaning & camera",
      "Leak detection & repair",
      "Sump pump service",
      "Water softener installation",
    ],
    bullets: [
      {
        t: "Auburn Bay experience",
        d: "We've worked in hundreds of Auburn Bay homes and know how Morrison, Brookfield, and other builders ran their plumbing.",
      },
      {
        t: "45-minute typical ETA",
        d: "Our trucks run from SE Calgary, so we're usually at Auburn Bay homes fast — even in the middle of a blizzard.",
      },
    ],
    seoTitle: "Auburn Bay Plumber Calgary | Priority Emergency Service | FlameTech",
    seoDescription:
      "Auburn Bay plumber serving SE Calgary. Priority emergency service, water heaters, drain cleaning, leak repairs. Local experts. Call 587-834-3668 today.",
    seoKeywords: [
      "Auburn Bay plumber",
      "plumber Auburn Bay Calgary",
      "SE Calgary plumber",
      "Auburn Bay emergency plumber",
      "hot water tank Auburn Bay",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Auburn Bay plumbing",
    quoteFormPlaceholder:
      "e.g. hot water tank leaking, main line backup, frozen bathroom pipe, sump pump failure…",
    sidebar: {
      title: "Auburn Bay Plumber",
      subtitle:
        "Local SE Calgary plumbers — 45-minute typical ETA, fully-stocked trucks, priority emergency dispatch.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "45-min typical Auburn Bay ETA",
        "Builder-grade system experts",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45m", label: "Auburn Bay ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or hot water tank failure in Auburn Bay? Call 587-834-3668 — priority dispatch, real person on the line.",
    richContent: {
      sections: [
        {
          heading: "Our Auburn Bay Plumbing Services",
          intro:
            "Auburn Bay's homes are mostly built between 2005-2015, which means your builder-grade plumbing is hitting that 15-20 year mark where things start failing. We know exactly where the weak points are.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Priority service for burst pipes, sewer backups, flooding, and major leaks that can't wait. See our [emergency plumber page](/emergency-plumber-calgary) for more." },
            { heading: "Drain Cleaning & Unclogging", body: "Main line cleaning, kitchen sink clogs, bathroom drains, and laundry room backups. Learn more about our [Calgary drain cleaning service](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "[Tank replacement](/hot-water-tanks), [tankless installation](/tankless-water-heaters), repairs, and maintenance for all brands. Most Auburn Bay tanks are hitting the 12-15 year mark." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks, slab leaks, pipe repairs, and water damage prevention using thermal imaging and acoustic detection." },
            { heading: "Sewer Line Services", body: "Camera inspections, line cleaning, repairs, and full sewer line replacement. Mid-2000s Auburn Bay sewer lines need checking every 5 years." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Auburn Bay Homes",
          intro:
            "Auburn Bay's location in SE Calgary brings specific plumbing challenges that we see repeatedly:",
          items: [
            { body: "Hot water tanks failing at the 12-15 year mark (most Auburn Bay homes got builder-grade 6-year warranty tanks)." },
            { body: "Main sewer line issues from settling and poor initial grading during the building boom." },
            { body: "Frozen pipes in those corner bathrooms during Calgary's -30°C cold snaps." },
            { body: "Sump pump failures during spring melt — Auburn Bay's lower elevation makes basements vulnerable." },
            { body: "Hard water buildup destroying faucets and fixtures faster than expected." },
            { body: "Cheap builder-grade shut-off valves failing and causing water damage." },
          ],
        },
        {
          heading: "Preventative Plumbing Maintenance for Auburn Bay",
          intro:
            "Regular maintenance prevents those 3 AM emergency calls and saves you thousands in water damage. Here's what Auburn Bay homeowners should be doing:",
          items: [
            { body: "Check your hot water tank annually after year 8 — most Auburn Bay tanks are pushing their limits." },
            { body: "Have your main line cleaned every 2-3 years to prevent backups." },
            { body: "Test your sump pump before spring melt hits Auburn Bay." },
            { body: "Flush your water heater annually to remove hard water sediment buildup." },
            { body: "Insulate pipes in crawl spaces and against exterior walls." },
            { body: "Replace supply lines to toilets and faucets every 10 years — those braided ones fail without warning." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long do hot water tanks last in Auburn Bay homes?",
            a: "Most Auburn Bay homes got builder-grade tanks with 6-year warranties, but they typically last 8-12 years with Calgary's hard water. If your home was built in 2005-2010, your tank is likely due for replacement. We can assess your current tank and give you an honest timeline.",
          },
          {
            q: "Why does my Auburn Bay home have low water pressure?",
            a: "Low pressure in Auburn Bay is usually from hard water buildup in faucets and showerheads, or failing pressure regulators that were installed during construction. We see this constantly in homes 15+ years old. A [water softener system](/water-softener) can prevent future buildup and protect your fixtures.",
          },
          {
            q: "What causes sewer backups in Auburn Bay?",
            a: "Auburn Bay's sewer lines were installed during the mid-2000s building boom, and some weren't properly bedded or graded. Combined with tree root intrusion and settling, main line backups are common in homes 15-20 years old. We recommend camera inspections every 5 years and preventive cleaning every 2-3 years.",
          },
          {
            q: "Should I replace or repair my Auburn Bay home's plumbing fixtures?",
            a: "If your fixtures are original to the home (2005-2015), replacement usually makes more sense than repairs. Those builder-grade faucets and toilets were designed to last just long enough to get past warranty. [Emergency repairs](/emergency-plumber-calgary) on cheap fixtures often cost more than upgrading to quality replacements.",
          },
          {
            q: "How fast can you get to my Auburn Bay home?",
            a: "Our trucks run from SE Calgary, so we're usually at Auburn Bay homes within 45 minutes. Emergency calls get priority dispatch so you're not waiting during a flood.",
          },
        ],
      },
    },
  },

  {
    slug: "bowness-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Bowness Plumbers Calgary | Priority Emergency | FlameTech",
    lead:
      "The biggest mistake we see in Bowness? Homeowners trying to connect new plumbing to their 1960s galvanized lines without calling a plumber first. FlameTech has been handling these tricky plumbing jobs across Calgary's inner-city neighborhoods for over two decades, and our [emergency plumbing team](/emergency-plumber-calgary) knows exactly how to work with both original homes and modern infills.",
    heroBody: [
      "FlameTech started right here in Calgary, and our [NW Calgary plumbers](/calgary-plumbers-nw) have been fixing pipes in Bowness since day one. Bowness is one of Calgary's most interesting neighborhoods for plumbers — you've got original wartime bungalows sitting next to brand-new $800K infills, which means we're dealing with everything from lead supply lines to modern PEX on the same block.",
      "Our crew has seen it all in this area, from [Poly-B replacement jobs](/polyb-plumbing-calgary) in 1980s renovated bungalows to fixing drainage problems caused by that new infill next door that sits three feet higher than your foundation. Pipes don't care if it's 2 AM on Christmas morning — that's why we run priority dispatch. Call 587-834-3668.",
    ],
    heroSubhead: "Trusted Bowness Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Bowness", fit: "cover" },
    intro:
      "Expert plumbers in Bowness, Calgary. From original 1950s homes to new infills — we handle galvanized lines, sewer issues, Poly-B replacement and more. Priority service. Call 587-834-3668.",
    features: [
      "Priority emergency plumbing",
      "Galvanized line replacement",
      "Sewer main camera & repair",
      "Poly-B replacement",
      "Infill plumbing & permits",
      "Drainage & sump solutions",
    ],
    bullets: [
      {
        t: "All Bowness home types",
        d: "Whether you're in an original 1950s bungalow or a brand-new infill, our crew knows what to expect and comes prepared.",
      },
      {
        t: "Honest pricing, no surprises",
        d: "We explain exactly what's wrong and what it'll cost to fix — no upselling, no hidden fees, just straight answers from local Calgary plumbers.",
      },
    ],
    seoTitle: "Bowness Plumbers Calgary | Priority Emergency | FlameTech",
    seoDescription:
      "Expert plumbers in Bowness, Calgary. From original 1950s homes to new infills — we handle galvanized lines, sewer issues & more. Priority service. Call 587-834-3668.",
    seoKeywords: [
      "Bowness plumbers",
      "plumber Bowness Calgary",
      "NW Calgary plumber",
      "galvanized pipe replacement Bowness",
      "Bowness infill plumbing",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Bowness plumbing",
    quoteFormPlaceholder:
      "e.g. galvanized line leaking in a 1960s bungalow, sewer backup near the Bow River, infill connection to city main…",
    sidebar: {
      title: "Bowness Plumbers",
      subtitle:
        "Inner-city NW Calgary specialists — original homes, modern infills, and every pipe in between.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Knows Bowness back-alley access",
        "Galvanized & Poly-B experts",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Bowness ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst galvanized line, sewer backup, or infill drainage issue in Bowness? Call 587-834-3668 — a real person will dispatch a plumber who knows Bowness.",
    richContent: {
      sections: [
        {
          heading: "Our Bowness Plumbing Services",
          intro:
            "Each home on your block might have completely different plumbing, but we've worked on them all — from lead supply lines to modern PEX on the same street.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, overflowing toilets, no hot water — we respond fast to genuine [emergencies in Bowness](/emergency-plumber-calgary)." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, main line blockages — we clear them all with professional equipment. See our [drain cleaning Calgary](/drain-cleaning-calgary) service." },
            { heading: "Water Heater Services", body: "Installation, repair, and replacement of [tank](/hot-water-tanks) and [tankless water heaters](/tankless-water-heaters). Calgary's hard water is brutal on older tanks, especially in original Bowness homes." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks behind walls, under slabs, in crawl spaces — we find them and fix them without unnecessary demolition." },
            { heading: "Sewer Line Services", body: "Main line repairs, replacements, and connections for both original homes and new construction. Many Bowness blocks still have original clay city mains from the 1950s." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Bowness Homes",
          intro:
            "Bowness homes present unique challenges because of the mix of original 1950s-70s construction and modern infill development happening side by side.",
          items: [
            { body: "Galvanized water lines in original homes that are ready to burst — especially after 60+ years of Calgary's hard water." },
            { body: "Lead supply lines in the oldest wartime bungalows that need complete replacement." },
            { body: "Drainage problems caused when new infill construction changes lot grading and water flows into older basements." },
            { body: "Sewer line failures where new construction connects to aging clay city mains from the 1950s." },
            { body: "Frozen pipes in basement renovations where old homes weren't designed for modern plumbing layouts." },
            { body: "Root intrusion in original sewer lines — mature trees in this established neighborhood love old clay pipes." },
          ],
        },
        {
          heading: "The 3 Plumbing Calls We Get Most From Bowness",
          items: [
            { heading: "Galvanized Line Failures & Low Water Pressure", body: "Original Bowness homes with 60+ year old galvanized lines experience sudden bursts and chronically low pressure. We replace these aging lines with modern PEX, often discovering multiple problem areas once we open up the walls." },
            { heading: "Sewer Backups From City Main Connections", body: "The connection points between home lines and aging city sewer mains cause frequent backups, especially during heavy rains. We use camera inspection to pinpoint the exact problem location and coordinate repairs with the city when necessary." },
            { heading: "Drainage Issues From New Construction Next Door", body: "When new infills go up with different lot grading, neighboring basements suddenly start flooding during storms. We assess the drainage impact and install solutions like improved sump systems or exterior drainage modifications." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Should I replace the galvanized water lines in my 1960s Bowness home?",
            a: "If your home still has original galvanized lines and you're seeing rust-colored water or low pressure, it's time to replace them. After 60+ years in Calgary's hard water, these lines are living on borrowed time. We typically recommend full replacement rather than piecemeal repairs because once one section fails, others will follow quickly.",
          },
          {
            q: "Why does water pool in my basement when it rains heavily, but my neighbor's new infill stays dry?",
            a: "New construction often changes lot grading, and that water has to go somewhere — usually toward the older, lower homes. The new infill might sit higher than your foundation and direct runoff your way. We can assess your drainage system and recommend solutions like improved weeping tile or sump pump upgrades.",
          },
          {
            q: "How do I know if my sewer line problems are from my home or the city's aging mains?",
            a: "We use camera inspection to determine exactly where the problem starts. Many Bowness blocks still have original clay city mains from the 1950s, and the connection point between your line and the city main is often where issues develop. If it's on the city side, we'll help you navigate the repair process with them.",
          },
          {
            q: "What should I watch for when renovating the basement in my original Bowness home?",
            a: "Original homes weren't designed for modern basement layouts, so adding bathrooms or moving plumbing often requires creative solutions. Watch for adequate venting, proper slope on new drain lines, and don't assume the existing plumbing can handle additional fixtures. Our Calgary plumbing team can assess your current system before you start renovating.",
          },
          {
            q: "How long do water heaters typically last in Bowness homes with hard water?",
            a: "With Calgary's hard water, most tank water heaters last 8-12 years, but in original Bowness homes with galvanized lines, that sediment buildup happens faster. Annual flushing helps, but if your tank is over 10 years old and you're in an original home, start planning for replacement before it floods your basement.",
          },
        ],
      },
    },
  },

  {
    slug: "bridlewood-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Bridlewood Plumbers Calgary | Priority Emergency Service",
    lead:
      "Bridlewood homeowners know that plumbing problems don't follow your schedule. When your hot water tank floods the utility room at 2 AM or your main drain backs up during Sunday dinner, you need [emergency plumbers in Calgary](/emergency-plumber-calgary) who actually answer the phone and show up fast. FlameTech Plumbing has been serving Bridlewood families for over 20 years.",
    heroBody: [
      "Having grown up fixing pipes across Calgary, our [SW Calgary plumbing team](/calgary-plumbers-sw) knows exactly what Bridlewood homes need and when they need it. Most Bridlewood houses were built between 2005 and 2015, which means your plumbing is hitting that sweet spot where things start breaking down.",
      "We've replaced dozens of [hot water tanks](/hot-water-tanks) in this community and know the common weak points in these developments. Plus, we understand how Calgary's hard water affects your pipes and fixtures. Call 587-834-3668 for priority dispatch — a real person, no phone trees.",
    ],
    heroSubhead: "Trusted Bridlewood Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Bridlewood", fit: "cover" },
    intro:
      "Expert plumbers serving Bridlewood Calgary. Emergency repairs, water heaters, drain cleaning & more. Local crew, fair pricing. 587-834-3668.",
    features: [
      "Priority emergency plumbing",
      "Hot water tank replacement",
      "Frozen pipe thawing",
      "Sump pump service",
      "Main sewer camera inspection",
      "Fixture install & repair",
    ],
    bullets: [
      {
        t: "Local SW Calgary crew",
        d: "We live and work nearby and drive past your house on the way to other jobs. No out-of-province chain — just local plumbers.",
      },
      {
        t: "Quality repairs that last",
        d: "We use professional-grade parts and guarantee our work because we want to be the plumbers Bridlewood families call for years to come.",
      },
    ],
    seoTitle: "Bridlewood Plumbers Calgary | Priority Emergency Service",
    seoDescription:
      "Expert plumbers serving Bridlewood Calgary. Emergency repairs, water heaters, drain cleaning & more. Local crew, fair pricing. 587-834-3668.",
    seoKeywords: [
      "Bridlewood plumbers",
      "plumber Bridlewood Calgary",
      "SW Calgary plumber",
      "Bridlewood emergency plumber",
      "hot water tank Bridlewood",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Bridlewood plumbing",
    quoteFormPlaceholder:
      "e.g. hot water tank flooding, frozen exterior tap, sump pump failing, low water pressure…",
    sidebar: {
      title: "Bridlewood Plumbers",
      subtitle:
        "Local SW Calgary plumbers serving Bridlewood families for 20+ years — honest pricing, fast dispatch.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "20+ years serving Bridlewood",
        "Same-day tank replacement",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Bridlewood ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Hot water tank flooding or burst pipe in Bridlewood? Call 587-834-3668 — priority dispatch, same-day tank replacement in most cases.",
    richContent: {
      sections: [
        {
          heading: "Our Bridlewood Plumbing Services",
          intro:
            "Most homes in your neighborhood have similar layouts and plumbing configurations, which means we know exactly where to look when problems develop.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, water leaks, sewer backups, and other urgent issues that can't wait until Monday morning. See our [emergency plumber Calgary](/emergency-plumber-calgary) service for details." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, floor drains, and main sewer line cleaning using professional equipment. Learn more about [drain cleaning Calgary](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Installation, repair, and replacement of [tank](/hot-water-tanks) and [tankless water heaters](/tankless-water-heaters) from all major brands." },
            { heading: "Fixture Installation & Repair", body: "Toilets, sinks, faucets, [showers](/shower-plumbing-calgary), and other [bathroom](/bathroom-plumbing-calgary) fixtures installed properly the first time." },
            { heading: "Leak Detection & Repair", body: "Finding hidden leaks behind walls, under slabs, and in crawl spaces before they cause major damage." },
            { heading: "Sewer Line Services", body: "Camera inspections, cleaning, and repair of main sewer lines and weeping tile systems." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Bridlewood Homes",
          intro:
            "Bridlewood sits on higher ground in SW Calgary, which brings its own set of plumbing challenges.",
          items: [
            { body: "Water pressure drops during peak usage times due to elevation changes." },
            { body: "Hard water buildup reducing hot water tank lifespan to 8-10 years." },
            { body: "Builder-grade fixtures from 2005-2015 construction now failing." },
            { body: "Frozen exterior taps and pipes during -30°C cold snaps." },
            { body: "Sump pump failures during rapid spring thaw." },
            { body: "Tree root intrusion in storm drains and weeping tile." },
          ],
        },
        {
          heading: "Common Plumbing Problems We Fix in Bridlewood",
          items: [
            { heading: "Hot Water Tank Failures", body: "Calgary's hard water is particularly tough on the tank water heaters installed in most Bridlewood homes. Sediment buildup causes premature failure, usually between years 8-10. We stock replacement tanks in our trucks and can typically restore hot water the same day you call." },
            { heading: "Frozen Pipes & Exterior Taps", body: "Bridlewood's elevation and exposure make it vulnerable during extreme cold snaps. We get dozens of calls every winter for frozen exterior taps and supply lines in unheated areas. When pipes do freeze, we have the equipment to thaw them safely without causing damage." },
            { heading: "Sump Pump & Drainage Issues", body: "Spring thaw hits Bridlewood hard, and many homes rely on sump pumps to keep basements dry. Builder-grade pumps from the original construction are now failing, often at the worst possible time." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long do hot water tanks typically last in Bridlewood homes?",
            a: "In Bridlewood's hard water environment, most tank water heaters last 8-10 years before needing replacement. The mineral buildup happens faster here than in communities with softer water. We recommend annual flushing to extend tank life, and if your unit is over 8 years old, it's worth having us take a look before it fails completely.",
          },
          {
            q: "Why does my water pressure drop during peak times in Bridlewood?",
            a: "Bridlewood sits at a higher elevation, and during morning or evening peak usage, the pressure naturally drops as more homes draw from the system simultaneously. This is normal for the area, but if it's gotten noticeably worse, you might have a pressure reducing valve that needs adjustment or replacement.",
          },
          {
            q: "Should I be concerned about frozen pipes in my Bridlewood home?",
            a: "Absolutely. Bridlewood gets hit hard during cold snaps, especially homes on the north-facing slopes. [Emergency calls](/emergency-plumber-calgary) for frozen pipes spike every January and February in this community. Disconnect exterior hoses, insulate any pipes in unheated areas, and keep interior temperature above 15°C even when you're away.",
          },
          {
            q: "How often should I have my main sewer line inspected in Bridlewood?",
            a: "We recommend camera inspections every 3-5 years for Bridlewood homes. The landscaping in this community includes mature trees that can cause root intrusion issues, plus the original sewer installations are now 15-20 years old and starting to show wear.",
          },
          {
            q: "What's the most common plumbing problem you see in Bridlewood?",
            a: "Hot water tank failures are definitely number one. Between the hard water and the fact that most tanks in this community were installed during original construction, we're replacing 2-3 units per week in Bridlewood during peak season. The good news is we stock the right sizes and can usually get you back up and running the same day.",
          },
        ],
      },
    },
  },

  {
    slug: "calgary-plumbers-nw",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Calgary Plumbers NW | Priority Emergency Plumbing Services",
    lead:
      "When you need dependable plumbing services in Calgary NW, Flame Tech Plumbing provides expert solutions to residential and commercial properties across Northwest Calgary. Our experienced plumbers know Northwest Calgary inside and out — from mature neighborhoods to brand-new communities — and we run priority dispatch for all your plumbing emergencies.",
    heroBody: [
      "From post-war bungalows in established areas like Thorncliffe and Brentwood to contemporary estates in [Panorama Hills](/panorama-hills-plumbers-calgary) and Kincora, we've seen it all. We understand common issues in 1960s-70s builds throughout communities like [Varsity](/varsity-plumbers-calgary) and Dalhousie, and we stay ahead of modern plumbing demands in newer developments like [Evanston](/evanston-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary).",
      "Plumbing disasters strike without warning. When crisis hits at midnight or on a long weekend, our priority emergency team is standing by. Call 587-834-3668 now for fast emergency plumbing response across Northwest Calgary.",
    ],
    heroSubhead: "Northwest Calgary Plumbing Specialists",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Northwest Calgary", fit: "cover" },
    intro:
      "Expert plumbers serving all NW Calgary communities. Priority emergency service, repairs & installations. Licensed, reliable, and affordable.",
    features: [
      "Priority emergency response",
      "Drain & sewer camera inspection",
      "Tankless & tank water heaters",
      "Poly-B retrofitting",
      "Full home re-piping",
      "Trenchless sewer rehabilitation",
    ],
    bullets: [
      {
        t: "Every NW neighborhood covered",
        d: "From Arbour Lake to Tuscany, Bowness to Panorama Hills — we serve the entire Northwest quadrant.",
      },
      {
        t: "Priority dispatch, real person",
        d: "Whether it's 3 AM Tuesday or Sunday afternoon, you reach a real person who gets a truck rolling — no phone trees.",
      },
    ],
    seoTitle: "Calgary Plumbers NW | Priority Emergency Plumbing Services",
    seoDescription:
      "Expert plumbers serving all NW Calgary communities. Priority emergency service, repairs & installations. Licensed, reliable, and affordable.",
    seoKeywords: [
      "Calgary plumbers NW",
      "Northwest Calgary plumber",
      "NW Calgary emergency plumber",
      "plumber Panorama Hills",
      "plumber Tuscany Calgary",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "NW Calgary plumbing",
    quoteFormPlaceholder:
      "e.g. burst pipe in Brentwood, Poly-B replacement in Edgemont, tankless install in Tuscany, sewer camera in Bowness…",
    sidebar: {
      title: "Calgary Plumbers NW",
      subtitle:
        "Comprehensive plumbing service across every Northwest Calgary community — priority emergency dispatch, honest pricing.",
      bullets: [
        "Licensed, insured, and bonded",
        "Every NW neighborhood covered",
        "60-90 minute typical ETA",
        "Poly-B & galvanized experts",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "NW Calgary ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Frozen pipe, burst line, or sewer backup anywhere in NW Calgary? Call 587-834-3668 for priority dispatch to your door.",
    richContent: {
      sections: [
        {
          heading: "Full-Service Plumbing for Calgary NW Homeowners",
          intro:
            "From post-war bungalows to modern estates, our NW Calgary plumbers handle every kind of plumbing system.",
          items: [
            { heading: "Drain & Sewer Solutions", body: "Professional sewer camera inspections, expert [drain cleaning](/drain-cleaning-calgary) for all fixtures, modern trenchless sewer rehabilitation, foundation drain servicing, and commercial grease interceptor maintenance." },
            { heading: "Water Heater Expertise", body: "On-demand [tankless system installations](/tankless-water-heaters), [conventional hot water tank services](/hot-water-tanks), annual maintenance and tank flushing, and emergency water heater troubleshooting." },
            { heading: "Plumbing Fixtures", body: "Toilet installation and servicing, kitchen and [bathroom faucet upgrades](/bathroom-plumbing-calgary), [shower and tub system repairs](/shower-plumbing-calgary), garbage disposal services, and utility room plumbing connections." },
            { heading: "Pipe & Line Services", body: "Complete home re-piping, winter pipe insulation and freeze protection, advanced leak detection technology, main water line replacements, and legacy [Poly-B pipe retrofitting](/polyb-plumbing-calgary) prevalent in 1980s-90s NW Calgary construction." },
          ],
        },
        {
          heading: "NW Calgary Communities We Serve",
          intro:
            "Our certified plumbers serve all Northwest Calgary communities, including:",
          items: [
            { body: "Arbour Lake, Beddington Heights, [Bowness](/bowness-plumbers-calgary), Brentwood, Cambrian Heights, Citadel." },
            { body: "Country Hills, Dalhousie, [Edgemont](/edgemont-plumbers-calgary), [Evanston](/evanston-plumbers-calgary), Hamptons, Hawkwood." },
            { body: "Hidden Valley, Kincora, MacEwan Glen, Montgomery, North Haven, [Panorama Hills](/panorama-hills-plumbers-calgary)." },
            { body: "Royal Oak, Ranchlands, Sandstone Valley, Scenic Acres, Silverspring, Thorncliffe." },
            { body: "[Varsity](/varsity-plumbers-calgary), [Tuscany](/tuscany-plumbers-calgary), Sage Hill, and every other Northwest quadrant community." },
          ],
        },
        {
          heading: "Priority Emergency Plumber Calgary NW",
          intro:
            "Plumbing disasters strike without warning. When crisis hits at midnight or on a long weekend, our [emergency plumbers in Calgary NW](/emergency-plumber-calgary) are standing by to help with:",
          items: [
            { body: "Frozen and burst pipe emergencies (critical during Calgary's harsh winters)." },
            { body: "Hot water tank breakdowns requiring urgent replacement." },
            { body: "Natural gas line emergencies demanding immediate professional response." },
            { body: "Sewer backups and main line failures during heavy rains or spring thaw." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Which NW Calgary areas do you cover?",
            a: "Flame Tech Plumbing provides comprehensive service to every Northwest Calgary community including Arbour Lake, Brentwood, Country Hills, Edgemont, Hamptons, Kincora, Panorama Hills, Royal Oak, Scenic Acres, Thorncliffe, and dozens more. Whether you're in an established neighborhood or a brand-new development, we're your local NW plumbing specialists.",
          },
          {
            q: "Are you available for emergency calls in NW Calgary?",
            a: "Absolutely — we run priority emergency service for all Northwest Calgary residents and businesses. Plumbing crises don't respect regular hours, so whether it's 3 AM on a Tuesday or Sunday afternoon during a holiday weekend, our emergency response team is ready to help. Dial 587-834-3668 any time for immediate assistance.",
          },
          {
            q: "What unique plumbing challenges exist in NW Calgary?",
            a: "Northwest Calgary encompasses everything from vintage post-war homes in Brentwood and Montgomery to cutting-edge builds in master-planned communities like Evanston and Sage Hill. This diversity means varying infrastructure ages, different pipe materials, and unique installation approaches. Our technicians specialize in navigating these differences.",
          },
          {
            q: "What's your typical response time in Northwest Calgary?",
            a: "Most Northwest Calgary locations see our trucks within 60-90 minutes of your call, though actual timing varies based on your exact address and current traffic patterns. Emergency situations receive priority dispatch to limit potential damage.",
          },
          {
            q: "What services does your NW Calgary team provide?",
            a: "We deliver complete plumbing solutions including priority emergency response, drain and sewer line services, water heater installation and repair, leak detection and remediation, comprehensive pipe services, fixture upgrades and repairs, bathroom and kitchen renovations, preventative maintenance programs, and water treatment systems.",
          },
          {
            q: "How does your pricing work?",
            a: "We offer complimentary, zero-obligation estimates for all scheduled plumbing work in NW Calgary. Our straightforward pricing philosophy means clear cost breakdowns before we start any job — no hidden fees or surprise charges. We believe customers deserve honest pricing and complete transparency throughout the entire service process.",
          },
        ],
      },
    },
  },

  // --- from nb-entries-B.ts ---
  {
    slug: "calgary-plumbers-se",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Calgary Plumbers SE | Priority Emergency Plumbing Service",
    lead:
      "Looking for skilled plumbing professionals in Calgary SE? Flame Tech Plumbing delivers exceptional service to homes and businesses throughout Southeast Calgary's diverse communities.",
    heroBody: [
      "Our team brings extensive knowledge of Southeast Calgary's neighborhoods — from historic Inglewood to the expanding communities of [Auburn Bay](/auburn-bay-plumber-calgary) and [Mahogany](/mahogany-plumbers-calgary) — with priority emergency response when plumbing problems strike.",
      "From century-old character homes in Inglewood and Ramsay to the modern lake communities of Auburn Bay and Mahogany, we've tackled every type of plumbing challenge the SE quadrant can throw at us. Call 587-834-3668 for fast, reliable plumbing service across Southeast Calgary.",
    ],
    heroSubhead: "Trusted Southeast Calgary Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Southeast Calgary", fit: "cover" },
    intro:
      "Expert plumbers serving every Southeast Calgary community. Fast [emergency response](/emergency-plumber-calgary), [drain cleaning](/drain-cleaning-calgary), [hot water tanks](/hot-water-tanks), and [Poly-B replacement](/polyb-plumbing-calgary) — licensed, insured, honest pricing.",
    features: [
      "Priority emergency plumbing repairs",
      "HD sewer camera inspections",
      "Trenchless sewer line repairs",
      "Tankless & tank water heater service",
      "Electronic leak detection",
      "Poly-B pipe replacement",
    ],
    bullets: [
      {
        t: "Every SE community covered",
        d: "From Inglewood and Ramsay to Auburn Bay, Mahogany, Seton and Walden — we know the plumbing landscape in every Southeast Calgary neighborhood.",
      },
      {
        t: "Upfront, transparent pricing",
        d: "Free estimates on scheduled work and a detailed breakdown before any tools come off the truck. No hidden charges, no surprises.",
      },
    ],
    seoTitle: "Calgary Plumbers SE | Priority Emergency Plumbing Service",
    seoDescription:
      "Need a plumber in Calgary SE? FlameTech Plumbing provides expert residential plumbing services across Southeast Calgary. Priority service available.",
    seoKeywords: [
      "Calgary plumbers SE",
      "Southeast Calgary plumber",
      "emergency plumber SE Calgary",
      "Auburn Bay plumber",
      "Mahogany plumber",
      "Inglewood plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "SE Calgary plumbing",
    quoteFormPlaceholder:
      "e.g. burst pipe in Inglewood, hot water tank failing in Copperfield, sewer backup in Lake Bonavista…",
    sidebar: {
      title: "SE Calgary Plumbers",
      subtitle:
        "Fast, reliable plumbing service across every Southeast Calgary neighbourhood — priority emergency dispatch, honest pricing.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Trucks stocked for first-visit fixes",
        "Every SE community covered",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "SE Calgary ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in Southeast Calgary? Call 587-834-3668 — a real person will dispatch a plumber right away.",
    richContent: {
      sections: [
        {
          heading: "Emergency Plumber Calgary SE – Available Day And Night",
          intro:
            "Plumbing problems rarely announce themselves in advance. When disaster hits your Southeast Calgary property at any hour, our emergency plumbing team responds swiftly to address frozen and burst pipes (especially crucial during Calgary's frigid winter months), water heater failures leaving your household without hot water, and gas line concerns requiring certified professional intervention.",
          items: [
            { heading: "Drain & Sewer Services", body: "HD sewer camera inspections for accurate diagnosis, thorough [drain clearing](/drain-cleaning-calgary) for kitchens, bathrooms and floor drains, no-dig trenchless sewer line repairs, weeping tile and foundation drainage solutions, and restaurant or commercial grease trap cleaning." },
            { heading: "Water Heater Services", body: "[Tankless water heater](/tankless-water-heaters) setup and configuration, standard [tank water heater](/hot-water-tanks) installation and repairs, routine maintenance and sediment flushing, energy-efficient upgrade consultations, and same-day water heater diagnostics." },
            { heading: "Fixture Installation & Repair", body: "Toilet replacement and troubleshooting, sink and faucet installations, [bathtub and shower valve repairs](/shower-plumbing-calgary), garburator installation, and laundry room hookups and connections." },
            { heading: "Pipe & Water Line Services", body: "Whole-home repiping projects, pipe winterization and freeze prevention, electronic leak detection, water main repair and replacement, and [Poly-B pipe replacement](/polyb-plumbing-calgary) common in 1980s-90s SE Calgary homes." },
          ],
        },
        {
          heading: "Southeast Calgary Expertise",
          intro:
            "Our Calgary Plumbing team works extensively throughout Southeast Calgary, bringing intimate knowledge of the quadrant's plumbing landscape. We recognize the specific concerns found in established communities like Lake Bonavista and Willow Park while also understanding the unique requirements of master-planned developments throughout the south end.",
          items: [
            { body: "Century-old character homes in Inglewood and Ramsay with galvanized pipes and aging drainage systems." },
            { body: "Master-planned lake communities like [Auburn Bay](/auburn-bay-plumber-calgary), [Mahogany](/mahogany-plumbers-calgary) and [McKenzie Lake](/mckenzie-lake-plumbers-calgary)." },
            { body: "2000s-boom neighborhoods including [Copperfield](/copperfield-plumbers-calgary), [Cranston](/cranston-plumber-calgary), [New Brighton](/new-brighton-plumbers-calgary), and [McKenzie Towne](/mckenzie-towne-plumbers-calgary)." },
            { body: "Newer construction in Seton, Legacy, and Walden where settling-related issues occasionally appear." },
            { body: "Established areas like [Chaparral](/chaparral-plumbers-calgary), Douglas Glen, Douglasdale, Erin Woods, Forest Lawn, and Quarry Park." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "What SE Calgary communities do you service?",
            a: "Flame Tech Plumbing delivers expert service across all Southeast Calgary neighborhoods including [Auburn Bay](/auburn-bay-plumber-calgary), [Copperfield](/copperfield-plumbers-calgary), [Cranston](/cranston-plumber-calgary), Inglewood, Lake Bonavista, Legacy, [Mahogany](/mahogany-plumbers-calgary), [McKenzie Towne](/mckenzie-towne-plumbers-calgary), [New Brighton](/new-brighton-plumbers-calgary), Quarry Park, Seton, Walden, and many more. From heritage districts to the newest lake communities, we're the SE Calgary plumbing team you can count on.",
          },
          {
            q: "Do you offer emergency plumbing in SE Calgary?",
            a: "Yes — our [emergency plumbing service](/emergency-plumber-calgary) runs with priority dispatch for all Southeast Calgary residents and businesses. Plumbing emergencies happen without warning, so whether it's the middle of the night or a holiday long weekend, our dispatch team is ready to send help. Contact us at 587-834-3668 anytime for urgent plumbing assistance.",
          },
          {
            q: "What plumbing issues are common in SE Calgary homes?",
            a: "Southeast Calgary spans everything from historic homes in Inglewood and Ramsay dating back over a century to brand-new construction in communities like Seton and Wolf Willow. This range creates diverse challenges — older properties may have galvanized pipes or outdated drainage systems, while newer subdivisions sometimes experience settling-related issues. Our plumbers are trained to handle the specific conditions found throughout SE Calgary properties.",
          },
          {
            q: "How quickly can you reach my SE Calgary location?",
            a: "We typically arrive at Southeast Calgary addresses within 60-90 minutes of your call, depending on your specific location and current road conditions. Emergency calls receive priority routing to minimize water damage and get your system functioning again quickly. Our service vehicles are stocked with commonly needed parts, allowing us to resolve most issues during the first visit.",
          },
          {
            q: "What plumbing services do you provide in SE Calgary?",
            a: "We offer comprehensive plumbing solutions: priority emergency response, [drain cleaning](/drain-cleaning-calgary) and sewer services, [water heater installation](/hot-water-tanks) and repair, leak detection and repair, full pipe services, fixture installation and upgrades, [bathroom](/bathroom-plumbing-calgary) and kitchen plumbing renovations, scheduled maintenance programs, and water quality systems. Our team handles residential and commercial projects of all sizes throughout Southeast Calgary.",
          },
          {
            q: "How do you handle pricing and estimates?",
            a: "We provide free, no-obligation quotes for all scheduled plumbing services in SE Calgary. Our transparent pricing approach means you'll receive a detailed breakdown of costs before any work begins — no hidden charges or unexpected additions. We're committed to honest communication and want you to feel confident about your investment.",
          },
        ],
      },
    },
  },

  {
    slug: "calgary-plumbers-sw",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Calgary Plumbers SW | Expert Plumbing Services",
    lead:
      "When you need a reliable plumber in Calgary SW, Flame Tech Plumbing delivers fast, professional service to homes and businesses throughout Southwest Calgary.",
    heroBody: [
      "Our licensed plumbers understand the unique plumbing challenges facing SW Calgary properties — from older homes in established communities like [Mount Royal](/mount-royal-plumbers-calgary) and [Altadore](/altadore-plumbers-calgary) to new developments in [Aspen Woods](/aspen-woods-plumbers-calgary) and [West Springs](/west-springs-plumbers-calgary) — and we're ready to help with priority emergency dispatch.",
      "We know the plumbing systems in older character homes from the 1920s through 1950s, the infrastructure challenges in 1970s and 1980s developments throughout areas like Lakeview and Haysboro, and modern plumbing in new SW Calgary communities. Call 587-834-3668 anytime.",
    ],
    heroSubhead: "Trusted Southwest Calgary Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Southwest Calgary", fit: "cover" },
    intro:
      "Expert plumbing services in Calgary SW. Priority service [emergency plumbers](/emergency-plumber-calgary) serving Southwest Calgary. Call 587-834-3668 for fast, reliable service.",
    features: [
      "Priority emergency plumbing response",
      "Sewer camera inspections & repairs",
      "Tankless & tank water heater service",
      "Leak detection & repair",
      "Re-piping for older SW homes",
      "Polybutylene pipe replacement",
    ],
    bullets: [
      {
        t: "Character-home specialists",
        d: "We understand the plumbing in 1920s-1950s character homes in Mount Royal, Elbow Park, Scarboro and Altadore, plus modern systems in Aspen Woods and West Springs.",
      },
      {
        t: "Upfront & transparent pricing",
        d: "Complimentary estimates on non-emergency work, a detailed breakdown before we start, and no hidden fees or surprise charges.",
      },
    ],
    seoTitle: "Calgary Plumbers SW | Expert Plumbing Services",
    seoDescription:
      "Expert plumbing services in Calgary SW. Priority emergency plumbers serving Southwest Calgary. Call 587-834-3668 for fast, reliable service.",
    seoKeywords: [
      "Calgary plumbers SW",
      "Southwest Calgary plumber",
      "emergency plumber SW Calgary",
      "Altadore plumber",
      "Mount Royal plumber",
      "Aspen Woods plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "SW Calgary plumbing",
    quoteFormPlaceholder:
      "e.g. burst pipe in Mount Royal, Poly-B replacement in Signal Hill, no hot water in Evergreen…",
    sidebar: {
      title: "SW Calgary Plumbers",
      subtitle:
        "Fast, reliable plumbing service across every Southwest Calgary neighbourhood — priority emergency dispatch, honest pricing.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Character homes to new builds",
        "Every SW community covered",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "SW Calgary ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe at 2 AM in Southwest Calgary? Call 587-834-3668 — a real FlameTech plumber answers the phone and dispatches a fully stocked truck to your door.",
    richContent: {
      sections: [
        {
          heading: "Emergency Plumber Calgary SW – Priority Dispatch",
          intro:
            "Plumbing emergencies don't wait for business hours. Whether it's 2 AM on a Sunday or during a holiday, our emergency plumbers in Calgary SW respond quickly to burst pipes and frozen pipe emergencies (especially common in SW Calgary winters), water heater failures leaving you without hot water, and gas line leaks requiring immediate attention.",
          items: [
            { heading: "Drain & Sewer Services", body: "Main sewer line camera inspections and repairs, kitchen and bathroom [drain cleaning](/drain-cleaning-calgary), trenchless sewer line replacement, floor drain maintenance, and grease trap cleaning for SW Calgary properties." },
            { heading: "Water Heater Services", body: "[Tankless water heater](/tankless-water-heaters) installation and repair, traditional [tank water heater](/hot-water-tanks) replacement, maintenance and flushing, energy-efficient upgrade consultations, and same-day water heater repairs." },
            { heading: "Fixture Installation & Repair", body: "Toilet repairs and replacements, faucet and sink installations, [bathtub and shower repairs](/shower-plumbing-calgary), garburator installation, and laundry room plumbing." },
            { heading: "Piping Services", body: "Re-piping for older SW Calgary homes, pipe insulation for Calgary winters, leak detection and repair, water line replacements, and [polybutylene pipe replacement](/polyb-plumbing-calgary) common in 1980s-90s SW Calgary homes." },
          ],
        },
        {
          heading: "Local SW Calgary Expertise",
          intro:
            "Our Calgary Plumbers work and live in the SW, which means we understand every era of construction in the quadrant. We know how Calgary's freeze-thaw cycles specifically affect SW Calgary properties, and we stay current on all local building codes and permit requirements.",
          items: [
            { body: "Character homes in [Mount Royal](/mount-royal-plumbers-calgary), Elbow Park, Scarboro and Parkhill from the 1920s-1950s." },
            { body: "Post-war and mid-century homes in Lakeview, Haysboro, Rutland Park, Rosscarrock and [Killarney](/killarney-plumbers-calgary)." },
            { body: "Established communities like [Altadore](/altadore-plumbers-calgary), [Marda Loop](/marda-loop-plumbers-calgary), Garrison Woods, Bayview, Britannia and Richmond." },
            { body: "Modern master-planned areas including [Evergreen](/evergreen-plumbers-calgary), [Bridlewood](/bridlewood-plumbers-calgary), [Signal Hill](/signal-hill-plumbers-calgary) and [Woodbine](/woodbine-plumber)." },
            { body: "Luxury estates and newer developments in [Aspen Woods](/aspen-woods-plumbers-calgary), [West Springs](/west-springs-plumbers-calgary), Springbank Hill, Christie Park and Strathcona Park." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Which SW Calgary communities do you serve?",
            a: "Flame Tech Plumbing proudly serves all Southwest Calgary neighborhoods including [Altadore](/altadore-plumbers-calgary), [Evergreen](/evergreen-plumbers-calgary), [Bridlewood](/bridlewood-plumbers-calgary), [Signal Hill](/signal-hill-plumbers-calgary), Springbank Hill, [Aspen Woods](/aspen-woods-plumbers-calgary), Christie Park, Westgate, Strathcona Park, and many more. If you're located in SW Calgary, we're ready to help with all your plumbing needs.",
          },
          {
            q: "Do you offer emergency plumbing services in SW Calgary?",
            a: "Yes, we provide priority emergency plumbing services throughout all SW Calgary communities. Whether you're dealing with a burst pipe at 2 AM or a sewage backup on the weekend, our licensed plumbers are available with priority dispatch. Call 587-834-3668 anytime for immediate emergency assistance.",
          },
          {
            q: "What makes SW Calgary plumbing different from other areas?",
            a: "Southwest Calgary features a diverse mix of properties — from heritage homes in established neighborhoods like Altadore to modern developments in Evergreen and luxury estates in Aspen Woods. This variety means plumbing systems range from aging infrastructure requiring specialized knowledge to brand-new installations. Our team understands these unique challenges and adapts our services accordingly.",
          },
          {
            q: "How quickly can you respond to calls in Southwest Calgary?",
            a: "We typically arrive at SW Calgary properties within 60-90 minutes of your call, depending on your specific location and current traffic conditions. For emergency situations, we prioritize rapid response to minimize water damage and get your plumbing system operational as quickly as possible. Our service vehicles are fully stocked to handle most repairs on the first visit.",
          },
          {
            q: "What plumbing services do you provide in SW Calgary?",
            a: "We offer complete plumbing services including [emergency repairs](/emergency-plumber-calgary), [drain cleaning](/drain-cleaning-calgary) and unclogging, [water heater installation](/hot-water-tanks) and repair, leak detection and repair, pipe replacement, fixture installation and upgrades, sewer line services, [bathroom](/bathroom-plumbing-calgary) and kitchen plumbing renovations, preventative maintenance programs, and water quality solutions.",
          },
          {
            q: "Do you provide free estimates for plumbing work?",
            a: "Yes, we provide complimentary, no-obligation estimates for all non-emergency plumbing projects in SW Calgary. Our transparent pricing means you'll know exactly what to expect before any work begins. We believe in honest, upfront pricing with no hidden fees or surprise charges.",
          },
        ],
      },
    },
  },

  {
    slug: "chaparral-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Chaparral Plumbers Calgary | Priority Emergency Service | FlameTech",
    lead:
      "FlameTech has been serving Chaparral plumbers Calgary needs since the community was first developed in 2004. Most homes here are 15-20 years old, which means your builder-grade plumbing is hitting that sweet spot where things start to fail.",
    heroBody: [
      "Our crew knows every street in this SE Calgary neighborhood, and we've fixed everything from [failing hot water tanks](/hot-water-tanks) to frozen pipes during those brutal February cold snaps.",
      "Plumbing problems don't wait for business hours, and neither do we. Our [emergency plumber](/emergency-plumber-calgary) is on call with priority dispatch, ready to get to your Chaparral home fast when disaster strikes. Call 587-834-3668.",
    ],
    heroSubhead: "Trusted Chaparral Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Chaparral", fit: "cover" },
    intro:
      "Expert Chaparral plumbers in SE Calgary. Priority emergency service, [drain cleaning](/drain-cleaning-calgary), [water heaters](/hot-water-tanks), [Poly-B replacement](/polyb-plumbing-calgary), and leak repairs. Licensed, insured, and local.",
    features: [
      "Priority emergency plumbing repairs",
      "Drain cleaning & unclogging",
      "Tank & tankless water heater service",
      "Toilet, faucet & fixture service",
      "Hidden leak detection & repair",
      "Sewer camera & line replacement",
    ],
    bullets: [
      {
        t: "Chaparral specialists since 2004",
        d: "We've been fixing pipes and water heaters in Chaparral since the first homes were built. Most homes share identical builder-grade plumbing, and we know exactly what's failing and why.",
      },
      {
        t: "Upfront pricing & warranty",
        d: "Clear quotes before work starts, solid warranties on every repair, and a real FlameTech plumber on the phone — not an answering service.",
      },
    ],
    seoTitle: "Chaparral Plumbers Calgary | Priority Emergency Service | FlameTech",
    seoDescription:
      "Trusted Chaparral plumbers in Calgary. Priority emergency service, drain cleaning, water heaters, leak repairs. Local SE Calgary experts. Call 587-834-3668 now!",
    seoKeywords: [
      "Chaparral plumbers Calgary",
      "plumber Chaparral",
      "emergency plumber Chaparral",
      "Chaparral hot water tank",
      "SE Calgary plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Chaparral plumbing",
    quoteFormPlaceholder:
      "e.g. original hot water tank failing, main drain backing up, toilet leaking at the base…",
    sidebar: {
      title: "Chaparral Plumbers",
      subtitle:
        "Since Chaparral's first phase in 2004 — priority emergency dispatch, upfront pricing, local warranty.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Stocked for same-day fixes",
        "Warranty on every repair",
      ],
    },
    stats: [
      { number: "2004+", label: "Serving Chaparral", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Chaparral ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Basement flooding at 2 AM or your only toilet backed up on Sunday morning? Call 587-834-3668 — a real FlameTech plumber answers and a fully equipped truck is on the way.",
    richContent: {
      sections: [
        {
          heading: "Why Chaparral Homeowners Choose FlameTech Plumbing",
          intro:
            "Our Southeast Calgary plumbing team has been fixing pipes and water heaters in Chaparral since the first homes were built. Most Chaparral homes were built with standard builder-grade plumbing that's now showing its age — we've replaced dozens of original [hot water tanks](/hot-water-tanks) that finally gave up after 15+ years of Calgary's hard water. The newer sections near Chaparral Valley Way have different challenges than the original development near 194 Avenue, and our experienced SE Calgary crew knows exactly what to expect when we pull up to your driveway.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, backed-up sewers, no hot water — we're there fast with fully stocked trucks." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, main sewer lines — we clear them all with professional equipment. Learn more about [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Tank and [tankless installation](/tankless-water-heaters), repairs, and maintenance for all major brands." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, sinks, tubs, [showers](/shower-plumbing-calgary) — professional installation and repair work." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks behind walls, under slabs, or in crawl spaces — we find and fix them." },
            { heading: "Sewer Line Services", body: "Camera inspection, cleaning, repair, and full sewer line replacement when needed." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Chaparral Homes",
          intro:
            "Living in Chaparral comes with specific plumbing challenges that our crew sees repeatedly. These aren't random problems — they're predictable issues that come with living in a 2000s-era Calgary community.",
          items: [
            { body: "Hard water buildup in 15-20 year old hot water tanks causing failure." },
            { body: "Main floor powder room toilets backing up from settling foundations." },
            { body: "Kitchen sink drains clogging from years of family use." },
            { body: "Basement bathroom rough-ins leaking behind finished walls." },
            { body: "Garage utility sink drains freezing during extreme cold snaps." },
            { body: "Second floor bathroom exhaust fans causing moisture problems." },
          ],
        },
        {
          heading: "Local Chaparral & SE Calgary Expertise",
          intro:
            "Our Calgary Plumbers work and live in the SE. Chaparral sits in a natural valley, which means basement moisture issues and foundation settling that affects plumbing connections. Most homes here have identical builder-grade plumbing systems that are now hitting their failure point simultaneously — we've replaced more hot water tanks in Chaparral in the past two years than any other SE Calgary community. We also serve neighbouring [Cranston](/cranston-plumber-calgary), [Auburn Bay](/auburn-bay-plumber-calgary), and [McKenzie Lake](/mckenzie-lake-plumbers-calgary).",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Why do so many hot water tanks fail in Chaparral at the same time?",
            a: "Most Chaparral homes were built between 2004-2008 with identical builder-grade hot water tanks that have now reached their 15-year lifespan. Calgary's extremely hard water accelerates sediment buildup, causing these tanks to fail within months of each other. We typically see a surge of [hot water tank replacements](/hot-water-tanks) every winter as the original units give up.",
          },
          {
            q: "Are Chaparral homes more prone to foundation settling that affects plumbing?",
            a: "Yes, because Chaparral sits in a natural valley with clay-heavy soil that shifts more than other Calgary areas. This settling commonly causes toilet seals to fail and main drain connections to separate after 10-15 years. We recommend having your plumbing connections inspected if you notice new cracks in your basement walls or doors that don't close properly.",
          },
          {
            q: "What's the biggest plumbing mistake Chaparral homeowners make?",
            a: "Finishing basements without upgrading the original rough-in plumbing first. Many homeowners spend thousands on renovations, then discover leaking pipes behind their new drywall within a year or two. Always have the plumbing inspected and upgraded before finishing any basement space.",
          },
          {
            q: "How often should I have my main sewer line cleaned in Chaparral?",
            a: "Every 3-4 years for most homes, or immediately if you notice slow drains throughout the house. The clay soil and settling foundations in this area can cause sewer line connections to separate, leading to backups. [Camera inspection](/drain-cleaning-calgary) during cleaning helps identify problems before they become expensive emergencies.",
          },
          {
            q: "Do I need a water softener in Chaparral?",
            a: "Absolutely — Calgary has some of the hardest water in Canada, and it's particularly brutal on plumbing fixtures and appliances. A quality [water softener system](/water-softener) will extend the life of your hot water tank, prevent mineral buildup in faucets, and reduce soap scum. Most Chaparral homeowners see the investment pay for itself within 3-4 years through reduced repairs and replacements.",
          },
        ],
      },
    },
  },

  {
    slug: "copperfield-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Copperfield Plumbers Calgary | FlameTech Plumbing & Heating",
    lead:
      "Most homes in Copperfield were built during the 2000s housing boom, which means your builder-grade plumbing fixtures are hitting that 15-20 year mark where problems start showing up.",
    heroBody: [
      "FlameTech has been fixing plumbing issues in this SE Calgary community since day one, and we know exactly what to expect when we walk into these homes — from [failing hot water tanks](/hot-water-tanks) to clogged main drains.",
      "When your pipes burst at 2 AM or your basement starts flooding, you need a plumber who answers the phone and shows up fast. We offer priority emergency dispatch and typically get to Copperfield homes within an hour of your call. Dial 587-834-3668.",
    ],
    heroSubhead: "Trusted Copperfield Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Copperfield", fit: "cover" },
    intro:
      "Expert plumbers serving Copperfield Calgary. Priority emergency service, [drain cleaning](/drain-cleaning-calgary), [water heaters](/hot-water-tanks), [Poly-B replacement](/polyb-plumbing-calgary), and leak repair. Licensed & insured.",
    features: [
      "Priority emergency repairs",
      "Kitchen, bathroom & main drain cleaning",
      "Tank & tankless water heaters",
      "Toilet, faucet, shower & tub service",
      "Electronic leak detection",
      "Sewer camera & pipe replacement",
    ],
    bullets: [
      {
        t: "Copperfield specialists",
        d: "Similar floor plans and mechanical systems across most homes means we know where the shut-offs are, what fixtures were installed, and which Poly-B runs fail first.",
      },
      {
        t: "Same-day, first-visit fixes",
        d: "Most Copperfield plumbing issues can be fixed the same day you call — our trucks are stocked with parts for homes your age.",
      },
    ],
    seoTitle: "Copperfield Plumbers Calgary | FlameTech Plumbing & Heating",
    seoDescription:
      "Expert plumbers serving Copperfield Calgary. Priority service, drain cleaning, water heaters, leak repair. Licensed & insured. Call 587-834-3668 today!",
    seoKeywords: [
      "Copperfield plumbers Calgary",
      "plumber Copperfield",
      "emergency plumber Copperfield",
      "Copperfield sump pump",
      "SE Calgary plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Copperfield plumbing",
    quoteFormPlaceholder:
      "e.g. sump pump running constantly, sewer line root intrusion, Poly-B replacement quote…",
    sidebar: {
      title: "Copperfield Plumbers",
      subtitle:
        "Since Copperfield's first phase — priority emergency dispatch, local crew, honest pricing, solid warranties.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Based in Calgary — no out-of-town contractors",
        "Warranty on every job",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "<60m", label: "Copperfield ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe dumping hundreds of gallons into your Copperfield basement? Call 587-834-3668 — a real person answers and our truck is loaded with parts for your home.",
    richContent: {
      sections: [
        {
          heading: "Why Copperfield Homeowners Choose FlameTech Plumbing",
          intro:
            "We've been serving SE Calgary for plumbing services for many years and understand the unique challenges that Copperfield properties face — from shifting clay soil to builder-grade systems now hitting their failure point.",
          items: [
            { heading: "Priority Emergency Repairs", body: "Burst pipes, gas leaks, sewer backups, and flooding — we're there fast with fully stocked trucks." },
            { heading: "Drain Cleaning", body: "Kitchen sinks, bathroom drains, main sewer lines, and storm drains. Learn more about [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Tank and [tankless water heater](/tankless-water-heaters) installation, repair, and replacement." },
            { heading: "Fixture Services", body: "Toilet, faucet, [shower and bathtub](/shower-plumbing-calgary) installation and repair." },
            { heading: "Leak Detection", body: "Hidden leaks, slab leaks, and pipe damage using electronic detection." },
            { heading: "Sewer Line Services", body: "Camera inspection, drain cleaning, and pipe replacement." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Copperfield Homes",
          intro:
            "Living in Copperfield means dealing with specific plumbing challenges that come with this area's soil conditions and home construction.",
          items: [
            { body: "Sump pump failures during spring melt and heavy rainfall." },
            { body: "Root intrusion in sewer lines from mature landscaping." },
            { body: "Foundation movement causing pipe misalignment and leaks." },
            { body: "Hard water buildup in fixtures and appliances." },
            { body: "Frozen exterior taps and underground lines during chinook cycles." },
            { body: "Main floor laundry drain backups in two-story homes." },
          ],
        },
        {
          heading: "Local Copperfield & SE Calgary Expertise",
          intro:
            "Our Calgary Plumbers work and live in the SE. The soil conditions here cause more foundation movement than most Calgary neighborhoods, which puts extra stress on your plumbing connections. These homes were built during Calgary's construction boom with similar floor plans and mechanical systems — we know where the shut-offs are, what brands of fixtures were installed, and which [Poly-B piping](/polyb-plumbing-calgary) is most likely to fail first. We also serve neighbouring [New Brighton](/new-brighton-plumbers-calgary), [McKenzie Towne](/mckenzie-towne-plumbers-calgary), [Cranston](/cranston-plumber-calgary), and [Mahogany](/mahogany-plumbers-calgary).",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Why does my sump pump run constantly during spring thaw?",
            a: "Copperfield's low elevation means your sump pump works overtime during spring melt and heavy rains. If it's running constantly, the float switch might be stuck, or you might have groundwater infiltration that requires a second pump. We can assess your setup and recommend the right solution.",
          },
          {
            q: "How often should I have my sewer line cleaned in this area?",
            a: "With the mature trees in Copperfield, we recommend [camera inspection and cleaning](/drain-cleaning-calgary) every 2-3 years. The clay soil here holds moisture that encourages root growth toward your pipes. Early detection saves you from dealing with a backed-up basement.",
          },
          {
            q: "What's causing low water pressure throughout my house?",
            a: "Calgary's hard water builds up mineral deposits in pipes and fixtures over time. In Copperfield homes, we often find the main water line has significant buildup after 15+ years. A [water softener](/water-softener) helps prevent future buildup, but existing blockages need professional cleaning or pipe replacement.",
          },
          {
            q: "Should I replace my water heater before it fails?",
            a: "Most [water heaters](/hot-water-tanks) in Copperfield homes are hitting 12-15 years old, which is past their expected lifespan with our hard water. Replacing before failure prevents water damage and lets you choose timing. We recommend upgrading when you start seeing rust-colored water or hearing rumbling sounds.",
          },
          {
            q: "Why do my drains back up after heavy rain?",
            a: "Copperfield's storm and sewer systems can get overwhelmed during heavy rainfall. If your floor drains back up, you might have a reverse flow issue or damaged weeping tile. We use camera inspection to identify whether it's a municipal problem or something on your property that needs fixing.",
          },
        ],
      },
    },
  },

  {
    slug: "cranston-plumber-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Cranston Plumber Calgary | Priority Emergency Service | Flame Tech",
    lead:
      "Searching for a trusted Cranston plumber in Calgary? FlameTech Plumbing provides dependable, professional plumbing solutions to homeowners throughout the Cranston community and surrounding Southeast Calgary neighbourhoods.",
    heroBody: [
      "From single-family homes along Cranston Boulevard to townhomes in Riverstone, our licensed plumbers are familiar with the modern construction and plumbing systems found across this master-planned community — and we're available with priority dispatch when you need us most.",
      "We also serve surrounding SE Calgary communities like [Auburn Bay](/auburn-bay-plumber-calgary), [Chaparral](/chaparral-plumbers-calgary), [McKenzie Lake](/mckenzie-lake-plumbers-calgary), and Seton. Call 587-834-3668 for urgent plumbing help in Cranston.",
    ],
    heroSubhead: "Your Neighbourhood Plumbing Professionals",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Cranston", fit: "cover" },
    intro:
      "Reliable Cranston plumbers serving SE Calgary. Priority [emergency response](/emergency-plumber-calgary), [drain cleaning](/drain-cleaning-calgary), [hot water tank](/hot-water-tanks) service, and [Poly-B replacement](/polyb-plumbing-calgary).",
    features: [
      "Priority emergency plumbing response",
      "Sewer camera inspections",
      "Trenchless sewer line replacement",
      "Tank & tankless water heater service",
      "Pinhole leak detection & repair",
      "Poly-B pipe identification & replacement",
    ],
    bullets: [
      {
        t: "Cranston & Riverstone coverage",
        d: "From the established streets near Cranston Boulevard and Cranston Drive to the newer Riverstone enclave along the Bow River — we cover every phase of the community.",
      },
      {
        t: "Free, no-obligation estimates",
        d: "Clear breakdown of what needs to be done and exactly what it will cost before we pick up a tool. No hidden charges or last-minute add-ons.",
      },
    ],
    seoTitle: "Cranston Plumber Calgary | Priority Emergency Service | Flame Tech",
    seoDescription:
      "Need a Cranston plumber in Calgary? Flame Tech provides priority emergency plumbing, drain cleaning, hot water tank repair & more.",
    seoKeywords: [
      "Cranston plumber Calgary",
      "plumber Cranston",
      "emergency plumber Cranston",
      "Riverstone plumber",
      "SE Calgary plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Cranston plumbing",
    quoteFormPlaceholder:
      "e.g. frozen pipe on Cranston Boulevard, hot water tank replacement in Riverstone, toilet leak…",
    sidebar: {
      title: "Cranston Plumbers",
      subtitle:
        "Full-service plumbing across Cranston and Riverstone — priority emergency dispatch, free estimates, honest pricing.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Trucks fully equipped for first-visit fixes",
        "Free estimates on planned work",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Cranston ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Frozen pipe during a January cold snap or sewer backup on Saturday evening in Cranston? Call 587-834-3668 — we dispatch a licensed plumber as fast as possible.",
    richContent: {
      sections: [
        {
          heading: "Priority Emergency Cranston Plumber – Always On Call",
          intro:
            "A plumbing disaster at home never happens at a convenient time. Whether it's the middle of the night, a long weekend, or during a Calgary cold snap, our emergency plumbers serving Cranston are ready to handle frozen and burst pipes during sudden temperature drops along Cranston's exposed southeast corridors, hot water tank breakdowns that leave your family without warm water, and gas line concerns that demand immediate professional attention.",
          items: [
            { heading: "Drain & Sewer Solutions", body: "Sewer line video inspections and targeted repairs, kitchen sink and bathroom [drain clearing](/drain-cleaning-calgary), no-dig trenchless sewer line replacement, basement floor drain servicing, and preventative drain maintenance for Cranston properties." },
            { heading: "Hot Water Tank & Water Heater Services", body: "[Tankless water heater](/tankless-water-heaters) setup and troubleshooting, standard [tank hot water heater](/hot-water-tanks) swaps, annual water heater flushing and tune-ups, high-efficiency water heater recommendations, and rapid same-day hot water tank repairs." },
            { heading: "Fixture Upgrades & Repairs", body: "Toilet troubleshooting and full replacements, kitchen and bathroom faucet installations, [shower valve and bathtub plumbing](/shower-plumbing-calgary) repairs, garburator setup, and washing machine hookups." },
            { heading: "Pipe & Water Line Services", body: "Whole-home repiping for aging plumbing systems, pipe winterization for Calgary's climate, pinhole leak detection and precision repair, main water line replacement, and [Poly-B pipe identification and replacement](/polyb-plumbing-calgary) found in some early Cranston-area homes." },
          ],
        },
        {
          heading: "Comprehensive Plumbing for Cranston Homeowners",
          intro:
            "Because most Cranston homes were built after 2000, you're less likely to encounter outdated piping materials. However, Calgary's hard water causes mineral buildup that can reduce water heater efficiency, clog fixtures, and shorten appliance lifespans. The rapid temperature swings from chinook winds also stress pipe joints and connections.",
          items: [
            { body: "Original fixtures and water heaters in Cranston's earliest phases now reaching 20+ years and due for proactive replacement." },
            { body: "Hard-water scale reducing [tankless](/tankless-water-heaters) and [tank](/hot-water-tanks) efficiency — regular flushing and a [water softener](/water-softener) extend equipment life." },
            { body: "Chinook-driven freeze/thaw stress on outdoor hose bibs and exposed lines along the southeast corridors." },
            { body: "Bathroom and kitchen renovation plumbing — new [shower valves](/shower-plumbing-calgary), faucets, and laundry hookups." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you serve the entire Cranston community?",
            a: "Absolutely. Flame Tech Plumbing provides full plumbing services to every part of Cranston — from the established streets near Cranston Boulevard and Cranston Drive to the newer Riverstone enclave along the Bow River. We also serve surrounding SE Calgary communities like [Auburn Bay](/auburn-bay-plumber-calgary), [Chaparral](/chaparral-plumbers-calgary), [McKenzie Lake](/mckenzie-lake-plumbers-calgary), and Seton, so no matter where you are in the southeast, we can be there quickly.",
          },
          {
            q: "Can I get an emergency plumber in Cranston at night or on weekends?",
            a: "You can. Our [emergency plumbing team](/emergency-plumber-calgary) is available with priority dispatch including holidays. Whether it's a frozen pipe that's cracked open during a January cold snap or a sewer backup on a Saturday evening, we dispatch a licensed plumber to your Cranston home as fast as possible. Reach us anytime at 587-834-3668.",
          },
          {
            q: "What plumbing issues are common in Cranston homes?",
            a: "Because most Cranston homes were built after 2000, you're less likely to encounter outdated piping materials. However, Calgary's hard water causes mineral buildup that can reduce [water heater](/hot-water-tanks) efficiency, clog fixtures, and shorten appliance lifespans. The rapid temperature swings from chinook winds also stress pipe joints. As homes in Cranston's earlier phases reach 20+ years, original fixtures and water heaters may be nearing end-of-life.",
          },
          {
            q: "How fast can a plumber reach my Cranston home?",
            a: "Cranston's location along Deerfoot Trail and Stoney Trail gives us excellent access. We generally reach Cranston properties within 60–90 minutes, though emergency calls are prioritized for the fastest possible dispatch. Our service vans come fully equipped with common parts and tools, so most repairs are completed in a single visit without the need for a return trip.",
          },
          {
            q: "What services does Flame Tech offer Cranston residents?",
            a: "We handle the full range of residential plumbing needs: priority emergency response, [drain cleaning](/drain-cleaning-calgary) and sewer camera inspections, [hot water tank](/hot-water-tanks) and [tankless water heater](/tankless-water-heaters) installation and repair, leak detection, pipe repair and repiping, fixture installation and upgrades, [bathroom](/bathroom-plumbing-calgary) and kitchen renovation plumbing, [water softener](/water-softener) installation, and seasonal maintenance programs.",
          },
          {
            q: "Is there a charge for plumbing estimates in Cranston?",
            a: "Not at all. We offer free, no-obligation estimates for all planned plumbing work in Cranston. Before we pick up a single tool, you'll receive a clear breakdown of what needs to be done and exactly what it will cost. There are no hidden charges or last-minute add-ons — just straightforward pricing from a company that values your trust.",
          },
        ],
      },
    },
  },

  {
    slug: "edgemont-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Edgemont Plumbers Calgary | Priority Emergency Service | FlameTech",
    lead:
      "The houses up in Edgemont were built mostly in the 1990s and early 2000s, which means we see a lot of original plumbing starting to show its age.",
    heroBody: [
      "When your drains back up or your [hot water tank](/hot-water-tanks) starts leaking all over your basement floor, you need Edgemont plumbers who know these homes inside and out. That's exactly what FlameTech brings to your door.",
      "We offer priority emergency dispatch for plumbing emergencies in Edgemont because burst pipes and sewer backups don't wait for business hours. A real person answers our phone, and we dispatch a licensed plumber to your Edgemont home fast. Call 587-834-3668.",
    ],
    heroSubhead: "Trusted Edgemont Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Edgemont", fit: "cover" },
    intro:
      "Professional plumbers serving Edgemont Calgary. Priority emergency repairs, [drain cleaning](/drain-cleaning-calgary), [water heaters](/hot-water-tanks), and [Poly-B replacement](/polyb-plumbing-calgary). Licensed & insured.",
    features: [
      "Priority emergency plumbing repairs",
      "Drain cleaning & main line unclogging",
      "Tank & tankless water heater service",
      "Toilet, faucet & fixture service",
      "Camera sewer inspection & root removal",
      "Poly-B pipe replacement",
    ],
    bullets: [
      {
        t: "Original Edgemont to new infills",
        d: "We service every area of Edgemont — from the original 1990s developments to the newer infill homes. Our trucks are stocked with parts for both older and newer plumbing systems.",
      },
      {
        t: "Real person answers, fast ETA",
        d: "30-60 minute ETA during regular hours and 60-90 minutes after-hours for genuine emergencies. No phone trees, no automated systems.",
      },
    ],
    seoTitle: "Edgemont Plumbers Calgary | Priority Emergency Service | FlameTech",
    seoDescription:
      "Professional plumbers serving Edgemont Calgary. Priority emergency repairs, drain cleaning, water heaters. Licensed & insured. Call 587-834-3668 today!",
    seoKeywords: [
      "Edgemont plumbers Calgary",
      "plumber Edgemont",
      "emergency plumber Edgemont",
      "Edgemont Poly-B",
      "NW Calgary plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Edgemont plumbing",
    quoteFormPlaceholder:
      "e.g. hot water tank leaking in basement, main drain backup, Poly-B replacement quote…",
    sidebar: {
      title: "Edgemont Plumbers",
      subtitle:
        "1990s original to modern infills — priority emergency dispatch, upfront pricing, local warranty.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Trucks stocked for Edgemont homes",
        "Quality repairs with warranty",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "30-60m", label: "Edgemont ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Basement flooding at 2 AM or main drain backed up in Edgemont? Call 587-834-3668 — a real person answers, takes your info, and dispatches a plumber within the hour.",
    richContent: {
      sections: [
        {
          heading: "Why Edgemont Homeowners Choose FlameTech Plumbing",
          intro:
            "As a locally owned and operated plumbing company in NW Calgary, we understand the unique challenges that Edgemont properties face. Edgemont sits on higher ground in northwest Calgary, but that doesn't mean you're immune to plumbing problems. The older homes here often have original fixtures and water lines that are due for updates, and the newer builds sometimes have builder-grade components failing earlier than expected. We also serve neighbouring [Tuscany](/tuscany-plumbers-calgary), [Varsity](/varsity-plumbers-calgary), [Evanston](/evanston-plumbers-calgary), and [Panorama Hills](/panorama-hills-plumbers-calgary).",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, sewer backups, no hot water — we handle the urgent stuff that can't wait until Monday." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, main sewer lines — see our [drain cleaning service](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Tank and [tankless water heater](/tankless-water-heaters) installation, repair, and replacement." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, sinks, [showers](/shower-plumbing-calgary) — professional installation and repairs that last." },
            { heading: "Leak Detection & Repair", body: "Finding hidden leaks before they cause major damage to your Edgemont home." },
            { heading: "Sewer Line Services", body: "Camera inspections, root removal, and sewer line repairs to keep your system flowing." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Edgemont Homes",
          intro:
            "Working in Edgemont over the years, we see the same plumbing issues pop up again and again. Sound familiar? We fix all of these problems regularly.",
          items: [
            { body: "Original 1990s fixtures and faucets wearing out and needing replacement." },
            { body: "Main floor powder room toilets clogging due to older drain line configurations." },
            { body: "Hot water tanks from the early 2000s starting to leak and flood basements." },
            { body: "Kitchen sink drains backing up from years of grease and food buildup." },
            { body: "Bathroom exhaust fans not working properly, causing moisture problems." },
            { body: "Sump pump failures during spring thaw flooding finished basements." },
          ],
        },
        {
          heading: "Local Edgemont & NW Calgary Expertise",
          intro:
            "Our Calgary Plumbers work and live in the NW, which means we understand Edgemont's unique challenges — from the original 1990s plumbing that's reaching end-of-life to the elevation changes that can cause drainage issues in some areas. Most Edgemont homes were built during Calgary's growth boom, which means we see a mix of quality levels depending on the builder and year. Whether you've got [Poly-B piping](/polyb-plumbing-calgary) that needs replacing or builder-grade fixtures that are failing early, we've seen it all. Alberta's extreme weather puts extra stress on plumbing systems, and Calgary's building codes have evolved significantly since the 1990s.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Why do my drains keep backing up in my Edgemont home?",
            a: "Edgemont homes from the 1990s often have cast iron drain lines that are starting to corrode, creating rough surfaces where debris catches and builds up. Tree roots are also common culprits, especially on properties with mature landscaping. We use [camera inspections](/drain-cleaning-calgary) to pinpoint the exact problem and recommend the most cost-effective solution.",
          },
          {
            q: "Do you service both the original Edgemont and newer Edgemont developments?",
            a: "Yes, we service all areas of Edgemont, from the original 1990s developments to the newer infill homes built in recent years. Each area has different plumbing characteristics, and our team knows what to expect in each section of the neighborhood. We keep our trucks stocked with parts for both older and newer plumbing systems.",
          },
          {
            q: "How quickly can you get to my Edgemont home for an emergency?",
            a: "For genuine plumbing emergencies in Edgemont, we typically arrive within 30-60 minutes during regular hours and 60-90 minutes for after-hours calls. Our [emergency plumbers](/emergency-plumber-calgary) are familiar with the neighborhood and keep the most common repair parts in their trucks. We understand that every minute counts when you're dealing with flooding or sewer backups.",
          },
          {
            q: "Should I replace my Poly-B plumbing if I'm selling my Edgemont home?",
            a: "[Poly-B replacement](/polyb-plumbing-calgary) isn't legally required for home sales in Calgary, but it's becoming a major negotiating point with buyers and their home inspectors. Most Edgemont homes with Poly-B are now 25-30 years old, which is when these systems typically start failing. Getting quotes for replacement gives you options during negotiations and prevents surprises down the road.",
          },
          {
            q: "Do I need a water softener in Edgemont?",
            a: "Calgary has some of the hardest water in Canada, and Edgemont is no exception. A quality [water softener](/water-softener) extends the life of your hot water tank, prevents mineral buildup in faucets, and reduces soap scum. Most Edgemont homeowners with original 1990s plumbing see meaningful reductions in fixture failures after softener installation.",
          },
        ],
      },
    },
  },

  // --- from nb-entries-C.ts ---
  {
    slug: "evanston-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Evanston Plumbers Calgary | Expert Plumbing Services",
    lead:
      "Evanston homeowners know that when your plumbing fails, you need someone who understands this northwest community's unique challenges. Our FlameTech crew has been fixing everything from frozen pipes in those exposed basement areas to replacing builder-grade [hot water tanks](/hot-water-tanks) that are hitting the 15-year mark in Evanston's older sections.",
    heroBody: [
      "When your toilet won't stop running at 2 AM or your basement starts flooding during spring thaw, we're the plumbers you call. Real person answers, real truck dispatched, real solutions that last.",
      "As a locally owned and operated [plumbing company in NW Calgary](/calgary-plumbers-nw), we understand the unique challenges that Evanston properties face — from Poly-B failures in older phases to the hard water issues that plague every home in this area.",
    ],
    heroSubhead: "Trusted Evanston Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Evanston", fit: "cover" },
    intro:
      "Expert plumbers serving Evanston, Calgary. Priority emergency dispatch, water heaters, drain cleaning, [Poly-B replacement](/polyb-plumbing-calgary), and fixture work. Licensed NW Calgary specialists with honest pricing.",
    features: [
      "Priority emergency plumbing repairs",
      "Drain cleaning & unclogging",
      "Water heater repair & replacement",
      "Fixture installation & repair",
      "Leak detection & repair",
      "Sewer line services & camera inspection",
    ],
    bullets: [
      {
        t: "Real person answers",
        d: "Call our emergency line and you talk to a real plumber — not a call center. Trucks stay stocked with the parts that fail most often in Evanston homes.",
      },
      {
        t: "Upfront pricing, no surprises",
        d: "You'll know the cost before we start work, and we guarantee our repairs for a full year.",
      },
    ],
    seoTitle: "Evanston Plumbers Calgary | Priority Emergency Service | FlameTech",
    seoDescription:
      "Expert Evanston plumbers in Calgary. Priority service, water heaters, drain cleaning & more. Local NW Calgary specialists. Call 587-834-3668 today!",
    seoKeywords: [
      "Evanston plumbers",
      "plumber Evanston Calgary",
      "emergency plumber Evanston",
      "NW Calgary plumber",
      "Evanston Poly-B replacement",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Evanston plumbing",
    quoteFormPlaceholder:
      "e.g. frozen hose bib on Evansborough Way, Poly-B leak in original Evanston, tank replacement near Evanston Drive…",
    sidebar: {
      title: "Evanston Plumbers",
      subtitle:
        "Fast, stocked-truck plumbing service across every Evanston phase — priority dispatch, honest pricing, real people on the phone.",
      bullets: [
        "Licensed, insured NW Calgary plumbers",
        "Real person answers the phone",
        "Trucks stocked for Evanston homes",
        "One-year repair guarantee",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45-60m", label: "Evanston ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in Evanston? Call 587-834-3668 — a real person will dispatch a plumber to your door right away.",
    richContent: {
      sections: [
        {
          heading: "Why Evanston Homeowners Choose Flame Tech Plumbing",
          intro:
            "We've been working in Evanston since the community started growing in the early 2000s, and we know exactly what to expect when we pull up to your driveway. The homes built during the construction boom often have identical plumbing layouts, which means we can diagnose problems faster and carry the right parts on our trucks.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, backed-up sewers, no hot water — we handle the disasters that can't wait until Monday morning. Our [emergency plumbers](/emergency-plumber-calgary) roll to Evanston addresses with fully stocked trucks." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, main lines — we clear the blockages and get your water flowing again. For persistent backups we bring hydro-jetting and camera gear. See our [drain cleaning services](/drain-cleaning-calgary) for more." },
            { heading: "Water Heater Services", body: "Repair, replacement, and maintenance for both tank and tankless systems, including warranty work on newer units. We've replaced dozens of [tankless water heaters](/tankless-water-heaters) in the newer builds." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, sinks, and showers — from quick repairs to complete bathroom updates." },
            { heading: "Sewer Line Services", body: "Camera inspections, drain cleaning, and sewer line repairs including tree root removal." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Evanston Homes",
          intro:
            "Living in Evanston means dealing with some predictable plumbing headaches that we see in almost every home. Sound familiar? We've fixed all of these problems hundreds of times in Evanston.",
          items: [
            { body: "Hard water destroying hot water tank elements and clogging faucet aerators." },
            { body: "Poly-B piping in pre-2005 homes starting to fail and leak." },
            { body: "Basement floor drains backing up during heavy spring runoff." },
            { body: "Frozen exterior hose bibs and exposed pipes during chinook temperature swings." },
            { body: "Cheap builder-grade toilets and faucets breaking down after 10-15 years." },
            { body: "Main sewer line blockages from tree roots growing into older clay pipes." },
          ],
        },
        {
          heading: "Local Evanston & NW Calgary Expertise",
          intro:
            "Our Calgary plumbers work and live in the NW, so we understand Evanston's layout — from the established areas near Evanston Drive to the newer phases being built on the north side. Each section has its own plumbing personality. We also serve neighbouring communities like [Panorama Hills](/panorama-hills-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary).",
          items: [
            { heading: "Stocked Trucks, Fast Fixes", body: "Most Evanston homes were built with similar floor plans and plumbing configurations, so we know where to look for problems and what parts to bring." },
            { heading: "Built for Alberta Weather", body: "Calgary's extreme weather puts extra stress on plumbing systems. We design our repairs to handle everything from -40°C cold snaps to rapid chinook thaws, following Calgary building codes and using materials rated for our climate." },
            { heading: "New-Construction Warranty Work", body: "We handle warranty work on new construction plumbing and know the common issues with current builder-grade fixtures and systems throughout north Evanston." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How much does it cost to replace a hot water tank in Evanston?",
            a: "A standard 40-gallon gas hot water tank replacement runs $1,800-2,400 installed, depending on venting requirements and access. Most Evanston homes have straightforward installations, but some newer builds need additional venting work. We provide upfront pricing before starting any work, and most installations are completed the same day.",
          },
          {
            q: "Should I replace the Poly-B piping in my 2003 Evanston home?",
            a: "If your home still has the original Poly-B plumbing, it's worth getting it inspected even if you haven't had leaks yet. Most Poly-B systems start failing around the 20-year mark, and replacing it proactively costs less than dealing with water damage. [Poly-B replacement](/polyb-plumbing-calgary) for a typical Evanston home runs $8,000-12,000 depending on accessibility.",
          },
          {
            q: "Why does my basement floor drain smell like sewer gas?",
            a: "Floor drains have water traps that can dry out, especially during Calgary's dry winters. Pour a bucket of water down the drain monthly to keep the trap filled. If the smell persists, you might have a cracked trap or a venting issue that needs professional diagnosis.",
          },
          {
            q: "How quickly can you respond to emergency calls in Evanston?",
            a: "We typically arrive within 45-60 minutes for emergency calls in Evanston, sometimes faster depending on traffic and our current location. We stock our trucks with the most common parts for Evanston homes, so many repairs can be completed on the first visit even during emergencies.",
          },
          {
            q: "Do you service the brand new homes being built in north Evanston?",
            a: "Absolutely. We handle warranty work on new construction plumbing and know the common issues with current builder-grade fixtures and systems. Many of the furnaces and water heaters in new Evanston homes are basic models that we service regularly throughout NW Calgary.",
          },
        ],
      },
    },
  },

  {
    slug: "evergreen-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Evergreen Plumbers Calgary | Reliable Service & Repairs",
    lead:
      "Searching for trusted plumbers in Evergreen, Calgary? Flame Tech Plumbing brings exceptional service to every home and business in this vibrant southwest community. Our certified technicians deliver prompt, professional solutions designed for Evergreen's family-friendly neighborhoods and growing businesses.",
    heroBody: [
      "As your neighborhood [SW Calgary plumbing specialists](/calgary-plumbers-sw), we bring local insight and dedicated service to every Evergreen property we visit.",
      "This growing family community features homes built primarily between 2000 and 2015, presenting modern infrastructure alongside typical wear-and-tear challenges that our team handles expertly.",
    ],
    heroSubhead: "Evergreen's Dedicated Plumbing Professionals",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Evergreen", fit: "cover" },
    intro:
      "Evergreen plumbers serving Calgary families with priority emergency repairs, water heaters, [drain cleaning](/drain-cleaning-calgary), and fixture upgrades. Honest pricing, quality workmanship, satisfaction guaranteed.",
    features: [
      "Priority emergency plumbing service",
      "Expert drain care & hydro-jetting",
      "Water heater installation & repair",
      "Fixture upgrades & bathroom renovations",
      "Precision leak detection",
      "Comprehensive sewer services",
    ],
    bullets: [
      {
        t: "Live team member answers",
        d: "Reach a live team member immediately — never an automated system — who dispatches experienced technicians to your Evergreen address within minutes.",
      },
      {
        t: "Quality workmanship assured",
        d: "We stand behind every service with a satisfaction guarantee plus manufacturer warranties on parts and equipment we install.",
      },
    ],
    seoTitle: "Evergreen Plumbers Calgary | Priority Service Available | Flame Tech",
    seoDescription:
      "Evergreen plumbers serving Calgary families with priority emergency repairs, water heaters & more. Honest pricing, quality work. Call 587-834-3668!",
    seoKeywords: [
      "Evergreen plumbers",
      "plumber Evergreen Calgary",
      "SW Calgary plumbing",
      "emergency plumber Evergreen",
      "Evergreen water heater",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Evergreen plumbing",
    quoteFormPlaceholder:
      "e.g. leak under the sink on Everridge Drive, tankless upgrade in Evergreen Estates, clogged main line near Evergreen Way…",
    sidebar: {
      title: "Evergreen Plumbers",
      subtitle:
        "Comprehensive plumbing for SW Calgary's Evergreen community — priority dispatch, modern equipment, family-friendly service.",
      bullets: [
        "Licensed, insured, certified",
        "Live team member on every call",
        "Satisfaction guaranteed",
        "All major water heater brands serviced",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Evergreen ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, major leak, or backed-up sewer in Evergreen? Call 587-834-3668 — we dispatch an experienced technician with priority service to your door.",
    richContent: {
      sections: [
        {
          heading: "Full-Service Plumbing for Evergreen Homes",
          intro:
            "Troubles appear without warning — burst pipes, major leaks, or backed-up sewers can strike anytime. Our emergency crew responds instantly to protect your Evergreen residence from water-related damage, arriving prepared to tackle urgent situations efficiently.",
          items: [
            { heading: "Priority Emergency Service", body: "Our team maintains priority emergency availability for Evergreen residents. Trucks are stocked with common parts to resolve most emergencies in one visit." },
            { heading: "Expert Drain Care", body: "Sluggish drains frustrate busy households. We deploy professional-grade equipment to eliminate blockages thoroughly — from kitchen sinks to main-line obstructions. See [drain cleaning](/drain-cleaning-calgary) for details." },
            { heading: "Water Heater Installation & Repair", body: "Whether you need [tankless efficiency](/tankless-water-heaters) or traditional [tank reliability](/hot-water-tanks), we ensure your family never runs out of hot water during Calgary's freezing winters." },
            { heading: "Fixture Upgrades & Repairs", body: "Planning bathroom or kitchen renovations? We install modern faucets, toilets, sinks, and shower systems that enhance both function and aesthetics. See [bathroom plumbing](/bathroom-plumbing-calgary)." },
            { heading: "Precision Leak Detection", body: "We use thermal imaging and acoustic technology to locate leaks behind walls and under floors quickly, then execute lasting repairs." },
            { heading: "Comprehensive Sewer Services", body: "Camera inspections reveal pipe conditions and hydro-jetting clears years of buildup. We handle repairs and full replacements when necessary." },
          ],
        },
        {
          heading: "Typical Plumbing Issues Evergreen Homeowners Face",
          intro:
            "Living in this modern family neighborhood comes with predictable maintenance needs. Our seasoned professionals have addressed these scenarios hundreds of times throughout [southwest Calgary](/calgary-plumbers-sw), including neighbouring [Signal Hill](/signal-hill-plumbers-calgary) and [Bridlewood](/bridlewood-plumbers-calgary).",
          items: [
            { body: "Builder-grade fixtures reaching end of lifespan requiring upgrades." },
            { body: "Pipe freezing risks during extreme Alberta cold waves." },
            { body: "Growing tree roots infiltrating underground sewer lines." },
            { body: "Calcium deposits from hard water affecting appliance performance." },
            { body: "Increased demand on systems as families expand." },
            { body: "Bathroom and kitchen renovations requiring code-compliant installations." },
          ],
        },
        {
          heading: "Preventative Care Plans for Evergreen Properties",
          intro:
            "Smart homeowners invest in maintenance that prevents major breakdowns. We recommend Evergreen residents schedule:",
          items: [
            { body: "Annual system inspections identifying potential problems early." },
            { body: "Fall winterization services protecting pipes from freezing temperatures." },
            { body: "Water heater flushing extending equipment lifespan significantly." },
            { body: "Periodic drain maintenance preventing stubborn clogs." },
            { body: "Sewer camera inspections every three years monitoring line condition." },
            { body: "Pressure testing to ensure optimal water force throughout your home." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you provide priority emergency plumbing services in Evergreen?",
            a: "Yes, Flame Tech Plumbing offers priority [emergency plumbing services](/emergency-plumber-calgary) throughout Evergreen, Calgary. Whether you're dealing with a burst pipe, severe leak, or backed-up sewer, our licensed plumbers are ready to respond quickly. Call us anytime at 587-834-3668 for immediate assistance.",
          },
          {
            q: "How quickly can a plumber reach my Evergreen home?",
            a: "Our plumbers typically arrive at Evergreen properties within 60-90 minutes of your call, depending on current demand and traffic. For emergency situations we prioritize rapid response to minimize water damage and get your plumbing back to normal as quickly as possible.",
          },
          {
            q: "What plumbing services do you offer in Evergreen?",
            a: "We provide comprehensive plumbing services including drain cleaning, water heater repair and installation, leak detection, pipe repair and replacement, fixture installation, sewer line services, and bathroom/kitchen plumbing renovations. Whether it's a minor repair or major installation, we handle all residential and commercial plumbing needs in Evergreen.",
          },
          {
            q: "Are your plumbers licensed and insured?",
            a: "Absolutely. All Flame Tech Plumbing technicians are fully licensed, insured, and certified to work in Calgary. We carry comprehensive liability insurance to protect both our team and your property. You can trust that you're working with qualified professionals who meet all Alberta plumbing standards.",
          },
          {
            q: "Do you guarantee your plumbing work?",
            a: "Yes, we stand behind our workmanship with a comprehensive warranty on all services. Our satisfaction guarantee ensures that if you're not completely happy with our work, we'll make it right. We also offer manufacturer warranties on parts and equipment we install.",
          },
        ],
      },
    },
  },

  {
    slug: "huntington-hills",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Huntington Hills Plumbers Calgary | Expert Plumbing Services",
    lead:
      "FlameTech has been the go-to plumbing team for Huntington Hills homeowners since this northwest Calgary community was established. Whether you're dealing with a burst pipe in one of the older bungalows or need [hot water tank replacement](/hot-water-tanks) in a newer two-story, we know exactly what plumbing challenges this area throws at you.",
    heroBody: [
      "Plumbing emergencies don't wait for business hours, and neither do we. Our Calgary-based team offers priority dispatch to handle everything from flooded basements to frozen pipes across Huntington Hills.",
      "From Huntington Green to Huntington Village, our [NW Calgary plumbers](/calgary-plumbers-nw) have been fixing pipes in this community for over two decades.",
    ],
    heroSubhead: "Trusted Huntington Hills Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Huntington Hills", fit: "cover" },
    intro:
      "Expert plumbers serving Huntington Hills Calgary. Priority emergency service, drain cleaning, water heaters, [Poly-B replacement](/polyb-plumbing-calgary) & more. Local team, fair pricing.",
    features: [
      "Priority emergency plumbing repairs",
      "Drain cleaning & unclogging",
      "Water heater installation & repair",
      "Fixture installation & repair",
      "Leak detection & repair",
      "Sewer line services & camera inspection",
    ],
    bullets: [
      {
        t: "Real person answers",
        d: "Call 587-834-3668 and you'll talk to a real plumber — not an answering service. Our emergency crews are staged across Calgary.",
      },
      {
        t: "Two decades of NW experience",
        d: "We've worked streets from Hunterville Road to Country Hills Boulevard and we know what to expect before pulling into your driveway.",
      },
    ],
    seoTitle: "Plumbers Huntington Hills Calgary | Priority Service | FlameTech",
    seoDescription:
      "Expert plumbers serving Huntington Hills Calgary. Priority emergency service, drain cleaning, water heaters & more. Local team, fair pricing. Call 587-834-3668 today!",
    seoKeywords: [
      "Huntington Hills plumbers",
      "plumber Huntington Hills Calgary",
      "emergency plumber Huntington Hills",
      "NW Calgary plumber",
      "cast iron drain replacement",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Huntington Hills plumbing",
    quoteFormPlaceholder:
      "e.g. cast iron drain failure on Hunterville Road, Poly-B leak in Huntington Green, frozen pipe near Country Hills Boulevard…",
    sidebar: {
      title: "Huntington Hills Plumbers",
      subtitle:
        "Two decades of plumbing experience across Huntington Green, Huntington Village, and all of Huntington Hills — priority dispatch, fair pricing.",
      bullets: [
        "Licensed, insured NW Calgary team",
        "Real person on the phone",
        "Crews staged across Calgary",
        "Modern cameras & hydro-jetting gear",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Huntington ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Flooded basement, burst pipe, or sewer backup in Huntington Hills? Call 587-834-3668 — a real plumber will dispatch a truck with priority service.",
    richContent: {
      sections: [
        {
          heading: "Why Huntington Hills Homeowners Choose FlameTech Plumbing",
          intro:
            "Huntington Hills homes range from the original 1970s builds to newer infill developments, and each era comes with its own plumbing personality. The older homes often have original cast iron drain lines that are finally giving up, while the 1990s builds are dealing with [Poly-B piping issues](/polyb-plumbing-calgary).",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, sewer backups, and water heater failures happen at the worst times. We offer priority dispatch to get your Huntington Hills home back to normal." },
            { heading: "Drain Cleaning & Unclogging", body: "From kitchen sinks clogged with grease to main drains blocked by tree roots, we clear them all with professional equipment. See [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Installation, repair, and replacement of traditional tanks and [tankless units](/tankless-water-heaters). We stock the brands that perform best in Calgary's hard water." },
            { heading: "Fixture Installation & Repair", body: "Leaky faucets, running toilets, and shower valve replacements. Quality fixtures installed right the first time." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks behind walls or under slabs can cause serious damage. We find them fast and fix them permanently." },
            { heading: "Sewer Line Services", body: "Camera inspections, drain cleaning, and sewer line repairs. Root intrusion is common in Huntington Hills' mature trees." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Huntington Hills Homes",
          intro:
            "After years of service calls across Huntington Hills, we see the same plumbing problems pop up again and again. Sound familiar? We fix all of these problems regularly across northwest Calgary, including [Panorama Hills](/panorama-hills-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary).",
          items: [
            { body: "Cast iron drain lines in 1970s homes finally corroding through." },
            { body: "Poly-B supply lines leaking in 1980s-90s builds." },
            { body: "Tree root intrusion in sewer lines from mature landscaping." },
            { body: "Hard water destroying hot water tanks faster than expected." },
            { body: "Frozen pipes in poorly insulated crawl spaces during chinooks." },
            { body: "Sump pump failures during spring melt flooding." },
          ],
        },
        {
          heading: "Local Huntington Hills & NW Calgary Expertise",
          intro:
            "Huntington Hills' mix of housing styles means we never know exactly what we'll find until we open up the walls, but that's what keeps the job interesting. Our Calgary plumbers work and live in the NW.",
          items: [
            { heading: "1970s Bungalows", body: "These often have original galvanized steel supply lines that are ready for replacement after 50 years in Calgary's hard water." },
            { heading: "1990s Two-Story Builds", body: "The 1990s boom homes are dealing with [aging water heaters](/hot-water-tanks) and failing bathroom fixtures." },
            { heading: "Built for Chinooks", body: "Alberta's brutal winters and rapid temperature swings during chinooks are hard on plumbing. We design our repairs to handle everything from -40°C cold snaps to sudden thaws." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long do hot water tanks last in Huntington Hills homes?",
            a: "With Calgary's hard water, most hot water tanks last 8-10 years before they start showing signs of failure. The mineral buildup is particularly hard on the heating elements and tank walls. If your [water heater](/hot-water-tanks) is over 8 years old and making rumbling noises, it's time to start planning for replacement.",
          },
          {
            q: "Why do my drains keep backing up in my older Huntington Hills home?",
            a: "Most of the original homes in Huntington Hills have cast iron drain lines that are now 40-50 years old. These pipes develop rough interiors as they corrode, which catches debris and leads to frequent clogs. The mature trees in the area also contribute to root intrusion in the main sewer lines.",
          },
          {
            q: "Should I be worried about Poly-B piping in my 1990s Huntington Hills home?",
            a: "Yes, Poly-B piping typically starts failing after 20-25 years, and many Huntington Hills homes built in the 1990s are right in that failure zone. The connections are usually the first to go, often behind walls where you can't see them. We recommend having [Poly-B systems](/polyb-plumbing-calgary) inspected annually once they hit 20 years old.",
          },
          {
            q: "How quickly can you respond to plumbing emergencies in Huntington Hills?",
            a: "We typically arrive within 60-90 minutes for true emergencies like burst pipes or sewer backups. Our trucks are staged across Calgary, and we know all the fastest routes to get to northwest communities like Huntington Hills even during rush hour or bad weather.",
          },
          {
            q: "What's the best way to prevent frozen pipes during chinooks?",
            a: "The rapid temperature swings during chinooks can actually be worse for pipes than steady cold weather. Keep your home heated to at least 15°C, especially in basements and crawl spaces. Open cabinet doors under sinks to let warm air circulate around pipes, and if you're going away during winter, leave taps dripping slightly to keep water moving.",
          },
        ],
      },
    },
  },

  {
    slug: "killarney-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Killarney Plumbers Calgary | Expert Plumbing Services",
    lead:
      "We got a call last spring from a homeowner in Killarney whose 1960s bungalow was flooding from a burst galvanized water line that finally gave out after 60 years. That's the reality in this area — you've got original homes with aging plumbing sitting right next to brand-new infills with modern [hot water systems](/hot-water-tanks). FlameTech has been handling both ends of that spectrum across Killarney for years.",
    heroBody: [
      "Whether it's 2 AM and your basement is flooding, or you need to upgrade the plumbing in your 1970s home before it fails, we offer priority emergency dispatch. Our Calgary plumbers know Killarney's mix of old and new, and we come prepared for both.",
      "FlameTech started right here in Calgary, and our [southwest Calgary plumbers](/calgary-plumbers-sw) have been working on Killarney homes since the area started its transformation.",
    ],
    heroSubhead: "Trusted Killarney Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Killarney", fit: "cover" },
    intro:
      "Expert plumbers serving Killarney, Calgary. Specializing in galvanized pipe replacement, [sewer line repairs](/drain-cleaning-calgary), [Poly-B replacement](/polyb-plumbing-calgary), and infill plumbing. Priority emergency service.",
    features: [
      "Priority emergency plumbing repairs",
      "Galvanized & lead line replacement",
      "Drain & main-line cleaning",
      "Water heater services",
      "Leak detection & repair",
      "Sewer line camera & replacement",
    ],
    bullets: [
      {
        t: "Old homes, new infills",
        d: "We regularly work on 1950s bungalows with original galvanized supply lines right next door to 2020 infills with PEX plumbing. We know how to bridge them properly.",
      },
      {
        t: "Tight alley access, no problem",
        d: "Constant construction and tight back lanes mean we know how to get our equipment where it needs to go.",
      },
    ],
    seoTitle: "Killarney Plumbers Calgary | Priority Emergency Service | FlameTech",
    seoDescription:
      "Expert plumbers serving Killarney, Calgary. Specializing in galvanized pipe replacement, sewer line repairs & infill plumbing. Priority emergency service. Call 587-834-3668",
    seoKeywords: [
      "Killarney plumbers",
      "plumber Killarney Calgary",
      "galvanized pipe replacement Calgary",
      "SW Calgary plumber",
      "Killarney infill plumbing",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Killarney plumbing",
    quoteFormPlaceholder:
      "e.g. galvanized line burst on 33rd Avenue, infill drainage issue near 26th Avenue, sewer backup in older Killarney…",
    sidebar: {
      title: "Killarney Plumbers",
      subtitle:
        "Old-home specialists and infill-savvy plumbers in SW Calgary — galvanized and lead line replacement, sewer rebuilds, honest assessments.",
      bullets: [
        "Licensed, insured SW Calgary plumbers",
        "Galvanized & lead line experts",
        "Camera inspections & hydro-jetting",
        "Stocked for old & new Killarney homes",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45-60m", label: "Killarney ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst galvanized line, infill drainage mess, or sewer backup in Killarney? Call 587-834-3668 — we'll give you a straight answer over the phone and dispatch a truck with priority service.",
    richContent: {
      sections: [
        {
          heading: "Why Killarney Homeowners Choose FlameTech Plumbing",
          intro:
            "This neighborhood presents unique challenges — we regularly work on 1950s bungalows with original galvanized supply lines right next door to 2020 infills with PEX plumbing that connects to 70-year-old city sewer mains. When your neighbor's new infill changes the lot grading and your basement floods during spring runoff, we understand exactly what happened and how to fix it. We've also helped dozens of homeowners navigate [replacing Poly-B plumbing](/polyb-plumbing-calgary) during major renovations.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, sewer backups, flooding, and urgent repairs that can't wait. Our [emergency plumbers](/emergency-plumber-calgary) know the fastest routes into Killarney." },
            { heading: "Drain Cleaning & Unclogging", body: "Main-line cleaning, kitchen sinks, bathroom drains, and stubborn blockages cleared with professional gear." },
            { heading: "Water Heater Services", body: "Tank and [tankless](/tankless-water-heaters) installation, repairs, and upgrades for any home age — from 1950s bungalows to modern infills." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, showers, and [bathroom/kitchen upgrades](/bathroom-plumbing-calgary)." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks, slab leaks, and water damage prevention — critical in homes with original galvanized supply lines." },
            { heading: "Sewer Line Services", body: "Camera inspections, cleaning, repairs, and full replacements for aging clay and cast iron mains." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Killarney Homes",
          intro:
            "Killarney's mix of 1950s-70s original homes and modern infills creates a perfect storm of plumbing problems you won't find in newer communities. Each block tells a different plumbing story, and we've learned to read them all. Neighbouring communities like [Marda Loop](/marda-loop-plumbers-calgary) and [Altadore](/altadore-plumbers-calgary) see the same issues.",
          items: [
            { body: "Galvanized supply lines in original homes failing after 50-70 years, causing low water pressure and rust-colored water." },
            { body: "Lead service connections from the street in pre-1960 homes requiring full replacement to meet current standards." },
            { body: "Sewer line problems when new infills connect modern plumbing to aging clay or cast iron city mains from the 1950s." },
            { body: "Drainage issues caused by neighboring infill construction changing lot grading and overwhelming existing weeping tile systems." },
            { body: "Mixed plumbing systems during renovations where new PEX connects to original galvanized, creating corrosion and joint failures." },
            { body: "Basement flooding during spring thaw when older drainage systems can't handle runoff from new high-density construction." },
          ],
        },
        {
          heading: "Local Killarney & SW Calgary Expertise",
          intro:
            "Our Calgary plumbers work and live in the SW, which means we understand Killarney's unique challenges — from dealing with lead service connections in 1950s homes to managing drainage problems caused by infill construction next door.",
          items: [
            { heading: "Every Era of Home", body: "We've worked on everything from original wartime bungalows with cast iron drains to brand-new infills with [tankless water heaters](/tankless-water-heaters). The experience matters when connecting a modern renovation to 70-year-old plumbing." },
            { heading: "Climate-Smart Repairs", body: "Alberta's brutal winters and chinook temperature swings are hard enough on new plumbing — they're murder on the aging galvanized and cast iron systems still serving many Killarney homes." },
            { heading: "Code & Permit Savvy", body: "We factor in Calgary's climate challenges and building code requirements for every job we do." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Should I replace the galvanized water lines in my 1960s Killarney home?",
            a: "If your galvanized lines are over 50 years old, replacement should be a priority rather than an option. We see these lines failing regularly in Killarney's original homes, often with little warning beyond gradually decreasing water pressure. The good news is that modern PEX replacement can usually be done in 1-2 days with minimal wall damage.",
          },
          {
            q: "My basement started flooding after my neighbor built an infill next door — what can I do?",
            a: "This is increasingly common in Killarney as infill construction changes lot grading and overwhelms existing drainage systems. We typically need to assess your weeping tile system and may recommend upgrading your sump pump or installing additional drainage. The solution depends on how the new construction has affected water flow around your property.",
          },
          {
            q: "What plumbing upgrades should I prioritize during a major Killarney home renovation?",
            a: "Start with the supply lines if you have galvanized — that's your biggest risk for water damage. Then address the sewer line connection, especially if you're adding fixtures or square footage. [Hot water tank replacement](/hot-water-tanks) should be part of any major reno in homes where the tank is over 10 years old. Don't mix old and new plumbing systems without proper transition fittings.",
          },
          {
            q: "How do I know if my Killarney home has lead service lines?",
            a: "Most homes built before 1960 in Killarney likely have lead service connections from the street to the house. We can test your water and inspect the connection point where your service line enters your basement. If lead is present, full replacement from the street to your home is the only permanent solution.",
          },
          {
            q: "Why does my sewer back up every spring in my original Killarney home?",
            a: "Spring thaw combined with aging clay sewer lines and root intrusion creates perfect conditions for backups in this area. Many original Killarney homes have mature trees whose roots have infiltrated deteriorating clay pipes over decades. [Emergency cleaning](/drain-cleaning-calgary) solves the immediate problem, but camera inspection usually reveals the need for partial or complete sewer line replacement.",
          },
        ],
      },
    },
  },

  {
    slug: "mahogany-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Mahogany Plumbers Calgary | Expert Plumbing Services",
    lead:
      "Most homes in Mahogany were built between 2000 and 2015, which means you're dealing with builder-grade plumbing that's starting to show its age. We've been fixing plumbing problems in this southeast Calgary community for years, from frozen pipes during those brutal chinooks to [hot water tanks](/hot-water-tanks) that gave up the ghost right when you need them most. FlameTech Plumbing knows Mahogany's homes inside and out.",
    heroBody: [
      "When your plumbing goes sideways at 2 AM on a Sunday, we're still answering the phone. Our trucks are stocked and ready to roll to Mahogany with priority emergency dispatch, because plumbing emergencies don't care about your schedule.",
      "As a locally owned and operated [plumbing company in SE Calgary](/calgary-plumbers-se), we understand the unique challenges that Mahogany properties face — including neighbouring [Cranston](/cranston-plumber-calgary) and [Auburn Bay](/auburn-bay-plumber-calgary).",
    ],
    heroSubhead: "Trusted Mahogany Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Mahogany", fit: "cover" },
    intro:
      "Expert plumbers serving Mahogany Calgary. Priority emergency repairs, drain cleaning, water heater service, sump pump replacement, and [Poly-B work](/polyb-plumbing-calgary). Local SE Calgary plumbers you can trust.",
    features: [
      "Priority emergency plumbing repairs",
      "Drain cleaning & unclogging",
      "Water heater repair & replacement",
      "Fixture installation & repair",
      "Leak detection & repair",
      "Sump pump & sewer camera service",
    ],
    bullets: [
      {
        t: "Real person, any hour",
        d: "When you call FlameTech at 3 AM, you get a real person — not a call center. We dispatch from Calgary and we're usually at your Mahogany door within 30-45 minutes.",
      },
      {
        t: "Sump pump ready",
        d: "Mahogany's low elevation and high water table stress sump pumps. We keep backup pumps in our trucks and can usually get your system running within an hour of arrival.",
      },
    ],
    seoTitle: "Mahogany Plumbers Calgary - Priority Emergency Service | FlameTech",
    seoDescription:
      "Expert plumbers serving Mahogany Calgary. Priority emergency repairs, drain cleaning, water heater service. Local Calgary plumbers you can trust. Call now!",
    seoKeywords: [
      "Mahogany plumbers",
      "plumber Mahogany Calgary",
      "SE Calgary plumber",
      "Mahogany sump pump",
      "emergency plumber Mahogany",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Mahogany plumbing",
    quoteFormPlaceholder:
      "e.g. sump pump failure on Mahogany Boulevard, Poly-B leak in original Mahogany, frozen pipe near the lake…",
    sidebar: {
      title: "Mahogany Plumbers",
      subtitle:
        "SE Calgary plumbing for every phase of Mahogany — priority dispatch, stocked trucks, upfront pricing, real people answering the phone.",
      bullets: [
        "Licensed SE Calgary plumbers",
        "Backup sump pumps on every truck",
        "30-45 minute Mahogany ETA",
        "One-year workmanship guarantee",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "30-45m", label: "Mahogany ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Sump pump failing, basement flooding, or burst pipe in Mahogany? Call 587-834-3668 — a real person answers and we dispatch a stocked truck with priority service.",
    richContent: {
      sections: [
        {
          heading: "Why Mahogany Homeowners Choose FlameTech Plumbing",
          intro:
            "Mahogany sits in a low-lying area near the Bow River, which means foundation settling and sump pump issues are more common here than in other Calgary neighborhoods. We've seen it all in this community — from the original Poly-B piping in the older sections to the cheap fixtures that builders installed in the mid-2000s boom.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, major leaks, sewer backups. Priority dispatch because emergencies don't wait for business hours." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, main sewer lines. We clear the blockage and tell you how to prevent it next time. See [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "Tank and [tankless](/tankless-water-heaters) repairs, replacements, and maintenance. Calgary's hard water is tough on water heaters." },
            { heading: "Fixture Installation & Repair", body: "Toilets, sinks, faucets, showers. We install it right the first time and fix what others messed up." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks behind walls, under slabs, in crawl spaces. We find them fast and fix them permanently." },
            { heading: "Sewer Line Services", body: "Camera inspections, root removal, line repairs. Mahogany's mature trees love to get into sewer lines." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Mahogany Homes",
          intro:
            "Living in Mahogany means dealing with specific plumbing challenges that come with this area's location and home construction. We've fixed all of these problems hundreds of times.",
          items: [
            { body: "Frozen pipes during chinook temperature swings — pipes expand and contract rapidly." },
            { body: "Sump pump failures during spring thaw and heavy rainfall events." },
            { body: "Hard water buildup reducing hot water tank lifespan to 8-10 years instead of 12." },
            { body: "Root intrusion in sewer lines from mature poplar and spruce trees." },
            { body: "Poly-B pipe failures in homes built in the late 1990s and early 2000s." },
            { body: "Cheap builder-grade fixtures failing prematurely in mid-2000s construction." },
          ],
        },
        {
          heading: "Local Mahogany & SE Calgary Expertise",
          intro:
            "Mahogany's location in southeast Calgary creates unique challenges. The community sits at a lower elevation than much of the city, which means gravity drainage issues and higher groundwater levels during heavy rains. Our Calgary plumbers work and live in the SE, also serving [McKenzie Lake](/mckenzie-lake-plumbers-calgary), [McKenzie Towne](/mckenzie-towne-plumbers-calgary), and [New Brighton](/new-brighton-plumbers-calgary).",
          items: [
            { heading: "Phase-Specific Knowledge", body: "Most of Mahogany was developed in phases from 2000 to 2015, so we know exactly what plumbing materials and methods were used in each section." },
            { heading: "Code-Change Aware", body: "Calgary's building codes changed several times during Mahogany's development, especially around water heater venting and sump pump requirements. We know which homes need upgrades and which are grandfathered." },
            { heading: "Hard Water Defense", body: "Calgary's extremely hard water builds sediment faster in Mahogany homes because the groundwater has higher mineral content. We recommend [water softeners](/water-softener) to extend fixture life." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Why do pipes freeze more often in Mahogany compared to other Calgary neighborhoods?",
            a: "Mahogany's lower elevation and proximity to the Bow River creates more moisture in the air, which makes the temperature swings during chinooks more dramatic. Pipes in crawl spaces and exterior walls expand and contract rapidly, leading to stress fractures and bursts. We recommend insulating any exposed pipes and leaving faucets dripping during extreme cold snaps.",
          },
          {
            q: "How often should I have my sump pump serviced in this area?",
            a: "In Mahogany, we recommend annual sump pump testing before spring melt, usually in March. The community's low-lying location means your sump pump works harder than most Calgary homes. During heavy rainfall years, some homes need backup pumps installed to handle the extra groundwater.",
          },
          {
            q: "Are the older homes in Mahogany at risk for Poly-B pipe failures?",
            a: "Homes built in the late 1990s and early 2000s in the original Mahogany development likely have Poly-B piping, which starts failing after 20-25 years. If you're experiencing low water pressure or small leaks behind walls, it's time for a [Poly-B inspection](/polyb-plumbing-calgary). Replacement is usually necessary once failures start.",
          },
          {
            q: "Why does my hot water tank need replacement sooner than expected?",
            a: "Calgary's extremely hard water builds up sediment faster in Mahogany homes because the groundwater here has higher mineral content. Most hot water tanks in this area last 8-10 years instead of the typical 12-15. Annual flushing helps, but [tankless systems](/tankless-water-heaters) handle hard water better long-term.",
          },
          {
            q: "What's the most common plumbing emergency you see in Mahogany?",
            a: "Sump pump failures during spring melt and heavy rains top the list. The second most common is frozen pipes during chinooks — the rapid temperature changes cause more pipe bursts here than in other Calgary areas. We stock extra sump pumps and pipe fittings specifically for Mahogany service calls.",
          },
        ],
      },
    },
  },

  {
    slug: "marda-loop-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Marda Loop Plumbers Calgary | Expert Plumbing Services",
    lead:
      "Last February's brutal -35°C stretch had us running flat out across Marda Loop — frozen pipes in 1960s bungalows and brand-new infills alike. FlameTech plumbers know this inner-city Calgary neighborhood inside and out, from the original galvanized water lines in wartime homes to the [hot water tank issues](/hot-water-tanks) that come with mixing old plumbing and new construction.",
    heroBody: [
      "When your pipes burst at 2 AM or your basement starts flooding, we're the crew Marda Loop homeowners call. Real plumbers answer our phones with priority dispatch, and we'll be at your door within the hour.",
      "FlameTech started right here in Calgary, and our [SW Calgary plumbers](/calgary-plumbers-sw) have been fixing pipes in Marda Loop for many years, including adjacent [Altadore](/altadore-plumbers-calgary) and [Killarney](/killarney-plumbers-calgary).",
    ],
    heroSubhead: "Trusted Marda Loop Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Marda Loop", fit: "cover" },
    intro:
      "Expert plumbers serving Marda Loop Calgary. From galvanized line replacement to infill construction drainage issues, [Poly-B work](/polyb-plumbing-calgary), and [drain cleaning](/drain-cleaning-calgary). Priority emergency service.",
    features: [
      "Priority emergency plumbing repairs",
      "Galvanized & lead line replacement",
      "Drain cleaning & main line work",
      "Water heater installation & repair",
      "Leak detection & repair",
      "Sewer camera & line repair",
    ],
    bullets: [
      {
        t: "Real plumbers on the phone",
        d: "A real person answers our line — not a call center in another province. We dispatch from Calgary and know the fastest route to your Marda Loop home, even when the back alleys are packed with construction equipment.",
      },
      {
        t: "Old-plus-new specialists",
        d: "We've worked on every style of home in this area — from wartime bungalows with cast iron drains to brand-new infills.",
      },
    ],
    seoTitle: "Marda Loop Plumbers Calgary | FlameTech Priority Service",
    seoDescription:
      "Expert plumbers serving Marda Loop Calgary. From galvanized line replacement to infill construction issues. Priority emergency service. Call 587-834-3668 today.",
    seoKeywords: [
      "Marda Loop plumbers",
      "plumber Marda Loop Calgary",
      "SW Calgary plumber",
      "galvanized line replacement Calgary",
      "Marda Loop infill plumbing",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Marda Loop plumbing",
    quoteFormPlaceholder:
      "e.g. galvanized line burst on 33rd Avenue, infill drainage mess off 20th Street, sewer backup in older Marda Loop home…",
    sidebar: {
      title: "Marda Loop Plumbers",
      subtitle:
        "Inner-city SW Calgary plumbing — galvanized and lead line replacement, infill drainage fixes, honest straight-answer advice.",
      bullets: [
        "Licensed, insured SW Calgary plumbers",
        "Real plumber answers the phone",
        "Camera inspections & hydro-jetting",
        "Old-home & infill experienced",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45-60m", label: "Marda Loop ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst galvanized line, infill-caused drainage issue, or frozen pipe in Marda Loop? Call 587-834-3668 — real plumbers answer and dispatch a truck with priority service.",
    richContent: {
      sections: [
        {
          heading: "Why Marda Loop Homeowners Choose FlameTech Plumbing",
          intro:
            "Marda Loop is a plumbing minefield — you've got 1950s homes with original galvanized lines sitting next to $800K infills that connect to the same aging city sewer mains. The construction boom here creates unique challenges: lot grading gets messed up, old pipes can't handle new loads, and some of the quick renovation work we see is pretty sketchy.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, flooding, no hot water — our [emergency plumbers](/emergency-plumber-calgary) offer priority dispatch for Marda Loop emergencies." },
            { heading: "Drain Cleaning & Unclogging", body: "Main-line backups, kitchen sinks, and bathroom drains cleared fast with professional gear." },
            { heading: "Water Heater Services", body: "Installation, repair, and replacement of conventional and [tankless units](/tankless-water-heaters)." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, sinks, and bathroom fixtures installed right the first time. See [bathroom plumbing](/bathroom-plumbing-calgary)." },
            { heading: "Leak Detection & Repair", body: "Finding hidden leaks in walls, under slabs, and in supply lines before they cause major damage." },
            { heading: "Sewer Line Services", body: "Camera inspections, cleaning, and replacement of damaged sewer mains and laterals." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Marda Loop Homes",
          intro:
            "Marda Loop's mix of original 1950s-70s homes and modern infills creates a perfect storm of plumbing problems. These aren't problems you can DIY — they need a plumber who knows Marda Loop.",
          items: [
            { body: "Galvanized water supply lines in original homes — corroded, restricted flow, and ready to fail." },
            { body: "Lead service connections in the oldest bungalows that need immediate replacement." },
            { body: "Sewer line overloads when new infills tie into aging city mains." },
            { body: "Drainage and grading problems caused by infill construction changing lot slopes." },
            { body: "Mixing old and new plumbing during renovations — compatibility issues and code violations." },
            { body: "Root intrusion in older sewer lines from mature trees along established streets." },
          ],
        },
        {
          heading: "Local Marda Loop & SW Calgary Expertise",
          intro:
            "You've got a 1962 bungalow that's been renovated three times sitting next to a brand-new infill that cost more than most people's retirement savings. Our crew has worked on every style of home in this area. We've replaced original [galvanized supply lines](/polyb-plumbing-calgary) in wartime homes, fixed sewer connections on new builds, and cleaned up the plumbing disasters left behind by renovation crews who didn't know what they were doing.",
          items: [
            { heading: "Freeze-Thaw Ready", body: "Alberta's temperature swings are brutal — from -35°C in February to +30°C by May, with chinooks throwing rapid thaws into the mix. We size pipes for these conditions and use materials that handle freeze-thaw cycles." },
            { heading: "Back-Alley Access", body: "We know the fastest route to your Marda Loop home, even when the back alleys are packed with construction equipment." },
            { heading: "Infill-Neighbor Repairs", body: "When your neighbor's new construction messes up your drainage, we know how to fix it right — from weeping tile upgrades to service-line replacements." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Should I replace the galvanized water lines in my 1960s Marda Loop home?",
            a: "If your home still has original galvanized supply lines, yes — replace them before they fail and flood your basement. Most galvanized lines from the 60s are already restricting water pressure and corroding from the inside. We typically recommend upgrading to PEX during any major renovation to avoid emergency replacements later.",
          },
          {
            q: "How do I know if my neighbor's new infill construction damaged my plumbing?",
            a: "Watch for changes in drainage patterns, basement moisture, or water pressure after construction starts. Excavation for new foundations often shifts soil and can crack older sewer lines or disturb water service connections. If you notice problems during or right after construction next door, call us for an inspection before damage gets worse.",
          },
          {
            q: "What annual plumbing maintenance should I schedule for a mixed-age Marda Loop home?",
            a: "Get your [hot water tank flushed](/hot-water-tanks) every 2-3 years minimum — Calgary's hard water builds up fast. Have your main sewer line camera-inspected every 5 years if you have mature trees, and check your water pressure annually if you're on galvanized supply lines. Spring and fall drain cleaning prevents most emergency calls.",
          },
          {
            q: "Can I connect new plumbing to my home's original 1950s sewer line?",
            a: "Sometimes, but it needs to be done right with proper inspections first. Original clay or cast iron sewer lines might not handle increased flows from bathroom additions or new fixtures. We'll camera the existing line first to check its condition and capacity before connecting any new plumbing to avoid backups down the road.",
          },
          {
            q: "Why does my water pressure drop when my neighbor uses their hose?",
            a: "This usually means your street's water main is undersized for all the new infills, or you're both on old galvanized service lines that restrict flow. It's common in areas like Marda Loop where the infrastructure was designed for smaller homes and lower demand. We can install a pressure tank or upgrade your service line to help, but the street main might need city work too.",
          },
        ],
      },
    },
  },

  // --- from nb-entries-D.ts ---
  {
    slug: "mckenzie-lake-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "McKenzie Lake Plumbers Calgary | Expert Plumbing Services",
    lead:
      "McKenzie Lake homeowners know their plumbing systems face unique challenges in this established SE Calgary community. FlameTech Plumbing has been serving this area for years, handling everything from emergency repairs to planned maintenance in these well-built homes from the early 2000s.",
    heroBody: [
      "When plumbing problems strike at 2 AM or during a holiday weekend, we're here. Our McKenzie Lake plumbers offer priority emergency response with real people answering the phone and fast response times throughout [SE Calgary](/calgary-plumbers-se).",
      "As a locally owned and operated plumbing team, we know McKenzie Lake's infrastructure inside and out — the original plumbing systems in these homes are now 20+ years old, and we've replaced countless [hot water tanks](/hot-water-tanks) and repaired main lines throughout the community. Call 587-834-3668 for priority dispatch.",
    ],
    heroSubhead: "Trusted McKenzie Lake Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in McKenzie Lake", fit: "cover" },
    intro:
      "Expert plumbers serving McKenzie Lake, SE Calgary. Emergency repairs, drain cleaning, water heaters, and main line service with priority emergency response. Neighbours with [McKenzie Towne](/mckenzie-towne-plumbers-calgary) and [New Brighton](/new-brighton-plumbers-calgary).",
    features: [
      "Emergency plumbing repairs",
      "Drain cleaning & root removal",
      "Hot water tank replacement",
      "Sewer line camera inspections",
      "Leak detection & pinhole leak repair",
      "Fixture installation & repair",
    ],
    bullets: [
      {
        t: "Local McKenzie Lake experts",
        d: "We've worked in McKenzie Lake since these homes were new and know which builder-grade components fail first.",
      },
      {
        t: "Parts on the truck",
        d: "We stock parts specifically for the brands common in McKenzie Lake so most problems are fixed on the first visit.",
      },
    ],
    seoTitle: "McKenzie Lake Plumbers Calgary | Priority Emergency Service",
    seoDescription:
      "Trusted McKenzie Lake plumbers in Calgary. Priority service, drain cleaning, water heaters & more. Local experts serving SE Calgary. Call 587-834-3668 now!",
    seoKeywords: [
      "McKenzie Lake plumbers",
      "plumber McKenzie Lake",
      "McKenzie Lake emergency plumber",
      "SE Calgary plumber",
      "McKenzie Lake hot water tank",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "McKenzie Lake plumbing",
    quoteFormPlaceholder:
      "e.g. failing hot water tank, tree roots in the sewer line, pinhole leak behind drywall…",
    sidebar: {
      title: "McKenzie Lake Plumbers",
      subtitle:
        "Fast, reliable plumbing service throughout McKenzie Lake — priority emergency dispatch, honest pricing, local crew.",
      bullets: [
        "Real person answers the phone",
        "60-minute typical ETA for emergencies",
        "Licensed, insured, and bonded",
        "Experts in 2000-2005 builder-grade systems",
      ],
    },
    stats: [
      { number: "20+", label: "Years in SE Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60m", label: "McKenzie Lake ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in McKenzie Lake? Call 587-834-3668 — a real person will dispatch a plumber right away with priority response.",
    richContent: {
      sections: [
        {
          heading: "Our McKenzie Lake Plumbing Services",
          intro:
            "Living in McKenzie Lake comes with specific plumbing challenges we see regularly — from original hot water tanks now failing to tree root intrusion in sewer lines. Here's what our crews handle week in, week out.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, sewer backups, major leaks, and flooding situations handled with priority response. Visit our [emergency plumber](/emergency-plumber-calgary) page for details." },
            { heading: "Drain Cleaning & Unclogging", body: "Main line blockages, root removal, kitchen and bathroom drain clearing using hydro-jetting and professional cutting equipment. See our [drain cleaning](/drain-cleaning-calgary) services." },
            { heading: "Water Heater Services", body: "Tank replacements, [tankless installations](/tankless-water-heaters), repairs, and maintenance. We've replaced dozens of heaters in this neighborhood." },
            { heading: "Sewer Line Services", body: "Camera inspections, line replacement, root cutting, and main line repairs — essential given McKenzie Lake's mature landscaping." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks, slab leaks, pipe repairs, and water damage prevention using electronic leak detection to pinpoint problems without unnecessary wall removal." },
            { heading: "Fixture Installation & Repair", body: "Toilets, faucets, sinks, showers, and full bathroom renovations. See [bathroom plumbing](/bathroom-plumbing-calgary) for more." },
          ],
        },
        {
          heading: "Common Plumbing Issues in McKenzie Lake Homes",
          intro:
            "These aren't just one-off problems — they're predictable issues we can prevent with the right maintenance.",
          items: [
            { body: "Original hot water tanks from 2000-2005 now failing and flooding basements." },
            { body: "Tree root intrusion into sewer lines from mature landscaping." },
            { body: "Aging supply lines developing pinhole leaks behind drywall." },
            { body: "Main floor laundry room drain backing up during heavy rains." },
            { body: "Original bathroom fixtures wearing out and needing replacement." },
            { body: "Hard water buildup reducing water pressure and damaging appliances." },
          ],
        },
        {
          heading: "Common Plumbing Problems We Fix in McKenzie Lake",
          items: [
            { heading: "Hot Water Tank Failures & Flooding", body: "Original tanks from 2000-2005 are now failing regularly, often flooding finished basements. We've replaced hundreds in McKenzie Lake and know exactly how to access tight utility rooms without damaging finished walls. Most replacements take 2-4 hours with minimal disruption." },
            { heading: "Root-Damaged Sewer Lines", body: "Mature trees throughout McKenzie Lake create ongoing root intrusion problems in main sewer lines. We use specialized cutting equipment to clear roots and can install root barriers to slow future growth." },
            { heading: "Supply Line Pinhole Leaks", body: "Twenty-year-old copper supply lines develop pinhole leaks that can cause major water damage behind walls. Our repairs include replacing affected sections with modern materials that won't corrode." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "How long do hot water tanks last in McKenzie Lake homes?", a: "Most original tanks installed in 2000-2005 are now 18-23 years old and well past their expected 8-12 year lifespan. Calgary's hard water accelerates sediment buildup, which reduces efficiency and shortens tank life. If your tank is over 15 years old, it's worth having us inspect it before it fails and floods your basement." },
          { q: "Why do I keep getting tree roots in my sewer line?", a: "Tree roots naturally grow toward water sources, and McKenzie Lake's mature landscaping creates ongoing challenges for sewer lines. We recommend camera inspections every 3-5 years to catch root intrusion early. Once roots break through, they grow quickly and can cause complete blockages within months." },
          { q: "Should I replace old plumbing when renovating my McKenzie Lake home?", a: "If you're opening walls for renovation, it's smart to inspect the plumbing behind them. Homes from this era often have supply lines that develop pinhole leaks after 20 years. Replacing questionable sections during renovation costs much less than emergency repairs after drywall is finished." },
          { q: "How quickly can you respond to plumbing emergencies in McKenzie Lake?", a: "We typically arrive within 60 minutes for true emergencies like burst pipes or sewer backups. Being based in Calgary and familiar with McKenzie Lake's street layout helps us navigate quickly, even during rush hour or bad weather." },
          { q: "What's the best way to prevent frozen pipes in McKenzie Lake?", a: "Keep cabinet doors open under sinks during cold snaps to let warm air circulate around pipes. Pay special attention to exterior walls and unheated areas like garages. We also recommend having us check your home's insulation around plumbing during our annual maintenance visits." },
        ],
      },
    },
  },

  {
    slug: "mckenzie-towne-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "McKenzie Towne Plumbers | Fast Local Service in SE Calgary",
    lead:
      "McKenzie Towne homeowners have relied on Flame Tech Plumbing's expertise for over 25 years to handle everything from routine maintenance to complex emergency repairs. This vibrant southeastern Calgary community, with its distinctive heritage architecture and family-focused atmosphere, deserves plumbing professionals who understand the unique challenges these homes present.",
    heroBody: [
      "Plumbing emergencies don't wait for convenient hours, which is why our certified plumbers remain available with priority dispatch. Whether it's a burst pipe during Calgary's notorious temperature swings or a backed-up drain on a busy weekend, Flame Tech delivers prompt, professional service when you need it most.",
      "Our crews work throughout [SE Calgary](/calgary-plumbers-se) including neighbouring [McKenzie Lake](/mckenzie-lake-plumbers-calgary) and [New Brighton](/new-brighton-plumbers-calgary). Call 587-834-3668 for same-day service.",
    ],
    heroSubhead: "Trusted McKenzie Towne Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in McKenzie Towne", fit: "cover" },
    intro:
      "Need a plumber in McKenzie Towne? FlameTech provides same-day plumbing repairs, [drain cleaning](/drain-cleaning-calgary), and water heater service with priority emergency response. Licensed plumbers serving SE Calgary.",
    features: [
      "Emergency plumbing repairs",
      "Hydro-jetting & camera drain cleaning",
      "Tank & tankless water heater service",
      "Fixture installation & repair",
      "Leak detection & repair",
      "Trenchless sewer line services",
    ],
    bullets: [
      {
        t: "25+ years in SE Calgary",
        d: "We've worked on everything from McKenzie Towne's original estate homes to the latest energy-efficient builds.",
      },
      {
        t: "Real person, not an answering service",
        d: "When you call Flame Tech's priority line, a real person answers and our dispatch team contacts the nearest available plumber immediately.",
      },
    ],
    seoTitle: "McKenzie Towne Plumbers | Fast Local Service in SE Calgary",
    seoDescription:
      "Need a plumber in McKenzie Towne? FlameTech provides same-day plumbing repairs, drain cleaning, and water heater service. Licensed plumbers, priority dispatch.",
    seoKeywords: [
      "McKenzie Towne plumbers",
      "plumber McKenzie Towne Calgary",
      "SE Calgary plumber",
      "McKenzie Towne water heater",
      "McKenzie Towne drain cleaning",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "McKenzie Towne plumbing",
    quoteFormPlaceholder:
      "e.g. midnight pipe burst, weekend water heater failure, slow main floor drain…",
    sidebar: {
      title: "McKenzie Towne Plumbers",
      subtitle:
        "Fully stocked trucks, priority dispatch, and 25+ years of local experience throughout McKenzie Towne.",
      bullets: [
        "45-minute typical emergency ETA",
        "Licensed, bonded & insured",
        "Hydro-jetting & camera inspection on truck",
        "Trenchless sewer repair capable",
      ],
    },
    stats: [
      { number: "25+", label: "Years in McKenzie Towne", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45m", label: "Typical emergency ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, sewer backup, or sump pump failure in McKenzie Towne? Call 587-834-3668 for priority dispatch — a real person picks up, not an answering service.",
    richContent: {
      sections: [
        {
          heading: "Our McKenzie Towne Plumbing Services",
          intro:
            "McKenzie Towne's mix of early 2000s construction and newer developments creates distinct plumbing considerations that generic service providers often miss. Here's what our crews handle.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "From midnight pipe bursts to weekend water heater failures, our priority team responds quickly throughout McKenzie Towne with fully stocked trucks. See our [emergency plumber](/emergency-plumber-calgary) services." },
            { heading: "Drain Cleaning & Unclogging", body: "Advanced hydro-jetting and camera inspection technology clears stubborn blockages in McKenzie Towne's varied plumbing systems, from main sewer lines to kitchen sink drains." },
            { heading: "Water Heater Services", body: "Complete installation, repair, and maintenance of [tank](/hot-water-tanks) and [tankless water heaters](/tankless-water-heaters), with energy-efficient options perfect for family homes." },
            { heading: "Fixture Installation & Repair", body: "Professional installation and repair of faucets, toilets, sinks, and shower systems — see our [shower plumbing](/shower-plumbing-calgary) page for bathroom upgrades." },
            { heading: "Leak Detection & Repair", body: "State-of-the-art leak detection equipment pinpoints hidden water damage before it becomes costly, protecting your McKenzie Towne investment with precision repairs." },
            { heading: "Sewer Line Services", body: "Comprehensive sewer line inspection, cleaning, and repair using trenchless technology when possible, minimizing disruption to your landscaping and driveway." },
          ],
        },
        {
          heading: "Common Plumbing Issues in McKenzie Towne Homes",
          intro:
            "McKenzie Towne's unique characteristics create specific plumbing challenges that our experienced team encounters regularly.",
          items: [
            { body: "Hard water deposits affecting fixtures and appliances, particularly common in homes near the Bow River corridor." },
            { body: "Basement foundation settling issues in homes built on the area's clay-based soil composition." },
            { body: "Main line blockages from mature tree roots, especially in established sections near McKenzie Lake." },
            { body: "Water pressure fluctuations during peak usage times in densely populated crescents and courts." },
            { body: "Pipe freeze damage during Calgary's extreme cold snaps, particularly in north-facing exterior walls." },
            { body: "Sump pump failures during spring melt periods when the nearby Bow River levels rise significantly." },
          ],
        },
        {
          heading: "Preventative Plumbing Maintenance for McKenzie Towne Homes",
          intro:
            "Preventative maintenance protects McKenzie Towne homes from unexpected breakdowns while extending your plumbing system's lifespan. Regular inspections catch small problems before they become expensive emergencies.",
          items: [
            { body: "Annual water heater flushing to prevent sediment buildup from Calgary's mineral-rich water supply." },
            { body: "Seasonal pipe insulation checks before winter temperatures threaten exposed plumbing in crawl spaces." },
            { body: "Spring sump pump testing after snowmelt season to ensure reliable basement flood protection." },
            { body: "Regular drain cleaning for homes with mature landscaping where root intrusion commonly occurs." },
            { body: "Toilet and faucet seal inspections to prevent water waste and potential floor damage." },
            { body: "Main water line pressure testing to identify developing issues before they cause service interruptions." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "How fast can you get a plumber to McKenzie Towne?", a: "Our dispatch team typically arrives at McKenzie Towne addresses within 45 minutes of an emergency call, with fully equipped trucks ready to tackle any crisis professionally and efficiently. A real person answers our priority line — never an automated system." },
          { q: "Do you handle trenchless sewer repair in McKenzie Towne?", a: "Yes. We use trenchless technology wherever possible to minimize disruption to your McKenzie Towne landscaping and driveway. We'll run a camera inspection first to confirm the best approach." },
          { q: "My basement sump pump failed during spring melt — can you help?", a: "Absolutely. Sump pump failures during spring melt are common in McKenzie Towne given the proximity to the Bow River. We stock replacement pumps on our trucks and can usually have you back up and running the same day." },
          { q: "Are you familiar with homes built during McKenzie Towne's development boom?", a: "Twenty-five years of service throughout McKenzie Towne means our technicians have worked on everything from the area's original estate homes to the latest energy-efficient builds. We know the specific pipe materials and fixtures used during each construction era." },
          { q: "Do you service both tank and tankless water heaters?", a: "Yes — we install, repair, and maintain both conventional tank water heaters and [tankless systems](/tankless-water-heaters). We'll help you choose the right option for your family's hot water demand." },
        ],
      },
    },
  },

  {
    slug: "mount-royal-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Mount Royal Plumbers Calgary | Premium Plumbing Services",
    lead:
      "Searching for exceptional plumbing service in Mount Royal, Calgary? Flame Tech Plumbing brings unmatched expertise to this distinguished community's luxury estates and heritage residences. Our master plumbers deliver meticulous service perfectly aligned with Mount Royal's elevated standards, protecting your property's value and sophistication.",
    heroBody: [
      "Mount Royal's spectacular properties — from early 1900s mansion estates to contemporary architectural masterworks — demand specialized plumbing knowledge and refined service delivery. Your premier plumbing specialists for [SW Calgary](/calgary-plumbers-sw) recognize Mount Royal's prestigious standing and tailor our services accordingly.",
      "Flame Tech maintains priority availability for emergency plumbing throughout Calgary, responding immediately to urgent Mount Royal situations. Reach our live dispatch team at 587-834-3668 — never automated systems. Neighbours with [Signal Hill](/signal-hill-plumbers-calgary) and [Marda Loop](/marda-loop-plumbers-calgary).",
    ],
    heroSubhead: "Elite Plumbing Solutions for Mount Royal's Prestigious Properties",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Mount Royal", fit: "cover" },
    intro:
      "Premium plumbing services for Mount Royal's luxury estates and heritage homes. Priority emergency response, designer fixture installation, heritage-sensitive restoration, and comprehensive sewer care.",
    features: [
      "Priority emergency plumbing",
      "Heritage property restoration",
      "Designer fixture installation",
      "Precision leak detection",
      "Premium water heater service",
      "HD video sewer inspection",
    ],
    bullets: [
      {
        t: "Master-level workmanship",
        d: "Every Flame Tech technician is fully licensed, bonded, and certified for Calgary operations with extensive liability insurance.",
      },
      {
        t: "Heritage-sensitive approach",
        d: "We understand heritage designation considerations and municipal regulations governing Mount Royal property modifications.",
      },
    ],
    seoTitle: "Mount Royal Plumbers Calgary | Highly Rated Plumbing Experts",
    seoDescription:
      "Our Mount Royal Plumbers in Calgary, Alberta are available with priority service for all of your plumbing needs. Highly rated plumbers with over 25+ years of experience.",
    seoKeywords: [
      "Mount Royal plumbers",
      "plumber Mount Royal Calgary",
      "SW Calgary plumber",
      "luxury plumbing Calgary",
      "heritage home plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Mount Royal plumbing",
    quoteFormPlaceholder:
      "e.g. heritage fixture restoration, century-old supply lines, designer faucet install, HD sewer inspection…",
    sidebar: {
      title: "Mount Royal Plumbers",
      subtitle:
        "Master-level plumbing for Mount Royal's heritage estates and luxury residences — refined service, priority dispatch.",
      bullets: [
        "Master-level workmanship",
        "Heritage-sensitive restoration",
        "Live dispatch — never automated",
        "Comprehensive liability insurance",
      ],
    },
    stats: [
      { number: "25+", label: "Years of experience", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Mount Royal ETA", icon: "schedule" },
      { number: "Master", label: "licensed plumbers", icon: "award" },
    ],
    callout:
      "Ruptured pipe, major leak, or sewage backup threatening your Mount Royal estate? Call 587-834-3668 — our licensed master plumbers mobilize with priority response any hour.",
    richContent: {
      sections: [
        {
          heading: "Comprehensive Plumbing Services for Mount Royal",
          intro:
            "Mount Royal properties demand specialized plumbing knowledge and refined service delivery. Here's what our master plumbers handle throughout the community.",
          items: [
            { heading: "Priority Emergency Plumbing Response", body: "Plumbing emergencies threaten your property at any hour — ruptured pipes, major leaks, or sewage backups require urgent professional intervention. See our [emergency plumber](/emergency-plumber-calgary) page." },
            { heading: "Expert Drain and Sewer Services", body: "Our technicians deploy sophisticated equipment to eliminate obstructions thoroughly, restoring flawless drainage throughout your estate. We service everything from powder room fixtures to primary sewer systems. See [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Premium Water Heater Solutions", body: "From advanced [tankless systems](/tankless-water-heaters) to high-capacity conventional [units](/hot-water-tanks), our specialists ensure uninterrupted hot water delivery through Calgary's coldest months." },
            { heading: "Luxury Fixture Installation", body: "We install designer faucets, statement toilets, spa-quality sinks, and premium shower systems. See our [bathroom plumbing](/bathroom-plumbing-calgary) services." },
            { heading: "Precision Leak Detection", body: "Utilizing infrared imaging and acoustic technology, we locate leaks within walls and foundation systems without destructive investigation, preserving your home's architectural beauty." },
            { heading: "Comprehensive Sewer System Care", body: "Using high-definition video inspection and industrial-grade hydro-jetting, we maintain optimal sewer performance — from routine preventive maintenance to complete line rehabilitation." },
          ],
        },
        {
          heading: "Plumbing Challenges Unique to Mount Royal Estates",
          intro:
            "Calgary's most prestigious neighborhood presents distinctive service requirements that our team has addressed throughout Mount Royal's distinguished properties.",
          items: [
            { body: "Century-old plumbing infrastructure in historic mansion properties requiring sensitive restoration." },
            { body: "Heritage designation considerations affecting renovation approaches and material selections." },
            { body: "Established tree root systems interfering with underground sewer lines." },
            { body: "Mineral deposits from Calgary's hard water affecting luxury fixtures and appliances — a [water softener](/water-softener) often helps." },
            { body: "Complex multi-level estates demanding sophisticated plumbing design and maintenance." },
            { body: "Slope and elevation variations creating unique drainage and water pressure dynamics." },
          ],
        },
        {
          heading: "Preventive Care Programs for Mount Royal Properties",
          intro:
            "Proactive maintenance protects luxury property investments. We recommend Mount Royal homeowners schedule the following services.",
          items: [
            { body: "Annual comprehensive system evaluations identifying potential issues before failures occur." },
            { body: "Pre-winter weatherization services protecting exterior plumbing from freeze damage." },
            { body: "Quarterly water heater servicing extending equipment longevity and efficiency." },
            { body: "Biannual drain maintenance preventing accumulation-related blockages." },
            { body: "Semi-annual sewer video inspections monitoring line condition and root intrusion." },
            { body: "Pressure testing and flow optimization ensuring consistent water delivery." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "Does Flame Tech provide priority emergency service to Mount Royal?", a: "Absolutely. Flame Tech Plumbing delivers priority emergency response throughout Mount Royal, Calgary. When confronting burst pipes, severe leaks, or sewage emergencies, our licensed master plumbers mobilize rapidly. Reach our priority line at 587-834-3668 any hour for immediate assistance." },
          { q: "What response time can Mount Royal homeowners expect?", a: "Our technicians typically arrive at Mount Royal properties within 60-90 minutes following your emergency call, varying with service demand and Calgary traffic conditions. We prioritize rapid response for emergency situations to minimize property damage." },
          { q: "Which plumbing services do you offer Mount Royal residents?", a: "We provide complete plumbing solutions including premium drain cleaning, luxury water heater service and installation, precision leak detection, pipe restoration and replacement, designer fixture installations, comprehensive sewer maintenance, and sophisticated bathroom/kitchen renovations." },
          { q: "Are your technicians properly licensed and insured?", a: "Definitely. Every Flame Tech Plumbing technician maintains complete licensure, bonding, and certification for Calgary operations. We carry extensive liability insurance protecting both our professionals and your valuable property." },
          { q: "Do you provide warranties on plumbing work?", a: "Absolutely, we stand behind our workmanship with comprehensive service warranties. Our satisfaction commitment ensures complete resolution if you're dissatisfied with our work. Additionally, we extend manufacturer warranties on all components and equipment we install." },
        ],
      },
    },
  },

  {
    slug: "new-brighton-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "New Brighton Plumbers Calgary | Expert Plumbing Services",
    lead:
      "FlameTech Plumbing has been the go-to plumber for New Brighton Calgary homeowners since this SE Calgary community started growing. Whether you're dealing with a burst pipe in your Brookfield home or need [hot water tank replacement](/hot-water-tanks) in your two-story family house, our crew knows exactly what New Brighton properties need. We've fixed everything from frozen outdoor taps to full basement re-pipes.",
    heroBody: [
      "Plumbing emergencies don't wait for business hours, and neither do we. Our priority line is answered by a real person, and we can have a fully-equipped truck to your New Brighton address within an hour of your call.",
      "Our [SE Calgary plumbing team](/calgary-plumbers-se) has been fixing pipes and installing water heaters in New Brighton since the first homes went up — we're neighbours with [McKenzie Towne](/mckenzie-towne-plumbers-calgary) and [Copperfield](/copperfield-plumbers-calgary). Call 587-834-3668.",
    ],
    heroSubhead: "Trusted New Brighton Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in New Brighton", fit: "cover" },
    intro:
      "Expert plumbers serving New Brighton Calgary. Fast, reliable service for all your plumbing needs with priority emergency response. Call 587-834-3668 today!",
    features: [
      "Emergency plumbing repairs",
      "Same-day water heater service",
      "Drain cleaning & main line clearing",
      "Frozen & burst pipe repair",
      "Leak detection & repair",
      "Sewer line camera inspections",
    ],
    bullets: [
      {
        t: "We know Brookfield homes",
        d: "Our trucks carry parts for everything from basic builder-grade fixtures to high-end European taps and tankless systems.",
      },
      {
        t: "Real dispatchers, no call centers",
        d: "Our priority line connects you directly to a FlameTech dispatcher — no automated menus.",
      },
    ],
    seoTitle: "New Brighton Plumbers Calgary | Priority Emergency Service",
    seoDescription:
      "Expert plumbers serving New Brighton Calgary. Fast, reliable service for all your plumbing needs. Priority emergency repairs. Call 587-834-3668 today!",
    seoKeywords: [
      "New Brighton plumbers",
      "plumber New Brighton Calgary",
      "SE Calgary plumber",
      "New Brighton emergency plumber",
      "New Brighton water heater",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "New Brighton plumbing",
    quoteFormPlaceholder:
      "e.g. burst pipe in Brookfield home, basement flooding, failing water heater, frozen outdoor tap…",
    sidebar: {
      title: "New Brighton Plumbers",
      subtitle:
        "SE Calgary plumbing team with parts on the truck for Brookfield builder-grade fixtures and modern custom builds alike.",
      bullets: [
        "45-90 minute typical emergency ETA",
        "Real dispatcher answers the phone",
        "Same-day water heater replacement",
        "Spring thaw flood response",
      ],
    },
    stats: [
      { number: "20+", label: "Years in SE Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45-90m", label: "New Brighton ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Basement flooding, burst pipe, or sewer backup in New Brighton? Call 587-834-3668 for priority dispatch — a real person answers and we'll have a truck on the way.",
    richContent: {
      sections: [
        {
          heading: "Our New Brighton Plumbing Services",
          intro:
            "New Brighton's mix of Brookfield-built homes from the early 2000s and newer custom builds means we see everything from original builder-grade fixtures failing to modern high-efficiency systems needing specialized service.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, overflowing toilets, no hot water — we're on-call with priority response and fully stocked trucks ready to fix it fast." },
            { heading: "Drain Cleaning & Unclogging", body: "Kitchen sinks, bathroom drains, floor drains, and main line blockages cleared with professional equipment. See [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "[Tank](/hot-water-tanks) and [tankless water heater](/tankless-water-heaters) installation, repair, and replacement with same-day service available." },
            { heading: "Fixture Installation & Repair", body: "Toilets, sinks, faucets, showers, and bathtubs installed or repaired to manufacturer specifications." },
            { heading: "Leak Detection & Repair", body: "Hidden leaks behind walls, under slabs, and in crawl spaces found and fixed before they cause major damage." },
            { heading: "Sewer Line Services", body: "Main line cleaning, camera inspections, and full sewer line replacement when tree roots or pipe collapse cause backups." },
          ],
        },
        {
          heading: "Common Plumbing Issues in New Brighton Homes",
          intro:
            "New Brighton's mix of established homes and newer construction creates specific plumbing challenges our crew sees regularly.",
          items: [
            { body: "Original Brookfield-installed fixtures from 2001-2005 reaching end of life." },
            { body: "Tree root intrusion in main sewer lines along mature street trees." },
            { body: "Frozen pipes in north-facing exterior walls during -30°C cold snaps." },
            { body: "Hard water buildup in hot water tanks reducing lifespan to 8-10 years." },
            { body: "Basement flooding from overwhelmed weeping tile during rapid spring thaw." },
            { body: "Water pressure drops in upper floors due to neighbourhood elevation changes." },
          ],
        },
        {
          heading: "Common Plumbing Problems We Fix in New Brighton",
          items: [
            { heading: "Frozen Pipes & Burst Lines", body: "New Brighton's exposed north-facing walls and unheated garages make pipes vulnerable during Calgary's -30°C cold snaps. We thaw frozen pipes safely and replace burst sections with proper insulation to prevent repeat problems." },
            { heading: "Sewer Line Root Intrusion", body: "The mature street trees throughout New Brighton create beautiful canopy coverage, but their roots seek out moisture in older sewer lines. Our camera inspection pinpoints exactly where roots have invaded, and we clear them with professional cutting equipment." },
            { heading: "Hot Water Tank Failures", body: "Calgary's hard water is especially tough on the original builder-grade water heaters installed in early 2000s New Brighton homes. When tanks start leaking or lose heating capacity, we handle same-day replacement with proper-sized, high-efficiency units." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "How long do hot water tanks typically last in New Brighton homes?", a: "Most hot water tanks in New Brighton last 8-12 years, but Calgary's hard water can shorten that to 8-10 years if you don't have a [water softener](/water-softener). The original tanks in early 2000s Brookfield homes are definitely due for replacement. We can assess your tank and give you an honest timeline before it fails." },
          { q: "Why do tree roots keep getting into my sewer line?", a: "Tree roots are attracted to the joints in older sewer lines, especially the clay pipes common in New Brighton's original infrastructure. We recommend camera inspections every 3-5 years if you have mature trees, and root cutting when roots start causing slow drains. Full line replacement is sometimes necessary when roots have completely invaded the pipe." },
          { q: "What should I do if my basement floods during spring thaw?", a: "Turn off your water main immediately, then call us for priority service. Spring flooding in New Brighton often overwhelms sump pumps or causes backup through floor drains when the city storm system can't handle rapid runoff. We'll pump out the water, identify the source, and get your basement dry again." },
          { q: "How quickly can you get to New Brighton for an emergency call?", a: "Our dispatch typically gets a plumber to New Brighton within 45-90 minutes, depending on traffic and weather conditions. We keep trucks stationed across Calgary, and SE Calgary is one of our primary service areas. Priority calls jump the queue over scheduled maintenance work." },
          { q: "Should I replace my plumbing fixtures before they break?", a: "If your fixtures are original to early 2000s construction, it's smart to start planning replacements. Toilet internals typically need replacement every 7-10 years, and faucet cartridges start failing around the same time. We can do a plumbing assessment and prioritize what needs attention first to avoid emergency calls later." },
        ],
      },
    },
  },

  {
    slug: "panorama-hills-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Panorama Hills Plumbers Calgary | Expert Plumbing Services",
    lead:
      "Panorama Hills homeowners know the importance of reliable plumbing in their growing northwest Calgary community. Flame Tech Plumbing has proudly served this vibrant neighborhood for over 25 years, understanding the unique needs of homes built from the late 1990s onward.",
    heroBody: [
      "Plumbing emergencies don't follow business hours, especially during Calgary's unpredictable weather patterns. That's why our experienced team provides priority emergency response throughout Panorama Hills, ensuring you're never left dealing with frozen pipes or flooding alone.",
      "As a locally owned and operated [plumbing company in NW Calgary](/calgary-plumbers-nw), we understand the challenges Panorama Hills properties face. Call 587-834-3668 or see our [emergency plumber](/emergency-plumber-calgary) services.",
    ],
    heroSubhead: "Trusted Panorama Hills Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Panorama Hills", fit: "cover" },
    intro:
      "Expert plumbers serving Panorama Hills Calgary. 25+ years experience with local homes. Priority emergency repairs, [drain cleaning](/drain-cleaning-calgary), water heaters. Neighbours with [Evanston](/evanston-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary).",
    features: [
      "Emergency plumbing repairs",
      "Drain cleaning & main line service",
      "Tank & tankless water heater service",
      "Leak detection & repair",
      "Sewer line inspection & repair",
      "Preventative maintenance programs",
    ],
    bullets: [
      {
        t: "25+ years in NW Calgary",
        d: "We've worked extensively in Panorama Hills Estates and understand how proximity to Country Hills Boulevard affects water main pressure.",
      },
      {
        t: "Real person answers priority line",
        d: "Not an answering service or voicemail system — we dispatch the closest available plumber immediately.",
      },
    ],
    seoTitle: "Panorama Hills Plumbers Calgary | Priority Emergency Service",
    seoDescription:
      "Expert plumbers serving Panorama Hills Calgary. 25+ years experience with local homes. Priority emergency repairs, drain cleaning, water heaters. Call now!",
    seoKeywords: [
      "Panorama Hills plumbers",
      "plumber Panorama Hills Calgary",
      "NW Calgary plumber",
      "Panorama Hills emergency plumber",
      "Panorama Hills water heater",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Panorama Hills plumbing",
    quoteFormPlaceholder:
      "e.g. frozen supply line, main floor toilet backup, chinook-related pipe burst, hard water damage…",
    sidebar: {
      title: "Panorama Hills Plumbers",
      subtitle:
        "NW Calgary plumbing specialists with 25+ years in Panorama Hills — priority dispatch, honest pricing, licensed crew.",
      bullets: [
        "60-minute typical emergency ETA",
        "Licensed, bonded & insured",
        "Journeyman & master certified",
        "Detached homes, duplexes, townhouses",
      ],
    },
    stats: [
      { number: "25+", label: "Years in NW Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60m", label: "Panorama Hills ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Main water line burst at 2 AM or basement flooding during a chinook in Panorama Hills? Call 587-834-3668 — we dispatch the closest plumber with priority response.",
    richContent: {
      sections: [
        {
          heading: "Our Panorama Hills Plumbing Services",
          intro:
            "Panorama Hills presents distinct plumbing challenges that require local expertise. The community's newer construction features modern plumbing systems, but Calgary's extreme temperature swings and the area's elevation can still create issues.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Burst pipes, severe leaks, and backed-up sewers require immediate attention to prevent costly water damage to your Panorama Hills home." },
            { heading: "Drain Cleaning & Unclogging", body: "From kitchen sink blockages to main sewer line clogs, we clear drains quickly using professional-grade equipment and techniques." },
            { heading: "Water Heater Services", body: "Installation, repair, and maintenance of conventional [tank](/hot-water-tanks) and [tankless water heaters](/tankless-water-heaters), ensuring reliable hot water through Calgary's harsh winters." },
            { heading: "Fixture Installation & Repair", body: "Professional installation and repair of toilets, faucets, sinks, and shower systems — see [shower plumbing](/shower-plumbing-calgary)." },
            { heading: "Leak Detection & Repair", body: "Advanced leak detection technology helps us locate hidden leaks behind walls and under slabs before they cause extensive damage." },
            { heading: "Sewer Line Services", body: "Complete sewer line inspection, cleaning, and repair services to keep your home's waste system flowing properly." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Panorama Hills Homes",
          intro:
            "Living in Panorama Hills means dealing with specific plumbing challenges that come with northwest Calgary's climate and geography.",
          items: [
            { body: "Frozen supply lines during extreme cold snaps, particularly in homes with north-facing utility rooms." },
            { body: "Main floor toilet backups caused by tree root intrusion into older sewer connections near Nose Hill Park." },
            { body: "Water heater strain from Calgary's hard water, requiring more frequent maintenance and earlier replacement — a [water softener](/water-softener) helps significantly." },
            { body: "Basement floor drain issues during rapid snow melt and spring runoff periods." },
            { body: "Kitchen disposal problems from the area's higher-than-average entertaining and large family households." },
            { body: "Pressure-assisted toilet malfunctions common in the neighborhood's two-story home designs." },
          ],
        },
        {
          heading: "Preventative Plumbing Maintenance for Panorama Hills Homes",
          intro:
            "Preventative maintenance protects your Panorama Hills home from costly plumbing failures while extending the life of your fixtures and appliances.",
          items: [
            { body: "Annual water heater flushing removes sediment buildup from Calgary's mineral-rich water supply." },
            { body: "Seasonal pipe insulation checks prevent freeze damage during temperature drops below -25°C." },
            { body: "Spring sewer line inspections catch root intrusion before it blocks your main drain." },
            { body: "Toilet seal replacements every few years prevent water damage to subflooring." },
            { body: "Faucet aerator cleaning maintains proper water pressure throughout your home." },
            { body: "Garbage disposal blade sharpening and cleaning extends equipment life significantly." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "How quickly can you get to Panorama Hills for a plumbing emergency?", a: "Our plumbers are strategically located throughout NW Calgary. For Panorama Hills emergencies, we typically arrive within 60 minutes of your call. Our priority dispatch ensures someone is always available, even during holidays and severe weather events." },
          { q: "What does a typical plumbing service call in Panorama Hills cost?", a: "We provide free estimates for all non-emergency work. Our pricing is transparent and upfront — you'll know the cost before we begin any repairs. We never charge hidden fees or surprise you with unexpected costs. Call us at 587-834-3668 for a detailed quote specific to your situation." },
          { q: "Do you service both detached homes and townhouses in Panorama Hills?", a: "Absolutely. We service every type of residential property in Panorama Hills, from single-family detached homes and duplexes to townhouses and condominiums. Each property type has unique plumbing considerations, and our team is experienced with all of them." },
          { q: "How can I prevent frozen pipes in my Panorama Hills home during winter?", a: "Keep cabinet doors under sinks open during extreme cold snaps to allow warm air to circulate around pipes. Ensure exterior hose bibs are shut off and drained before winter. Consider adding pipe insulation to any exposed pipes in your garage or unheated spaces. We also offer winterization services — call us before the first deep freeze for a full inspection." },
          { q: "Are your plumbers licensed and insured to work in Calgary?", a: "Yes, every Flame Tech plumber is fully licensed, bonded, and insured in accordance with Alberta regulations. Our team holds current journeyman and master plumber certifications, and we carry comprehensive liability insurance to protect your property during every service call." },
        ],
      },
    },
  },

  {
    slug: "signal-hill-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Signal Hill Plumbers Calgary | Expert Plumbing Services",
    lead:
      "When you need a reliable plumber in Signal Hill, Calgary, Flame Tech Plumbing is your trusted solution for all residential and commercial plumbing needs. Our experienced team serves the Signal Hill community with fast, professional plumbing services that you can count on with priority dispatch.",
    heroBody: [
      "Signal Hill's distinctive hillside location and mix of luxury homes built from the 1980s onward present specific plumbing considerations that our experienced team handles with expertise. As a locally owned [plumbing company in SW Calgary](/calgary-plumbers-sw), we understand the unique challenges Signal Hill properties face.",
      "Our team is experienced with hillside drainage systems and the premium construction standards expected in this community. Neighbours with [Mount Royal](/mount-royal-plumbers-calgary) and [West Springs](/west-springs-plumbers-calgary). Call 587-834-3668.",
    ],
    heroSubhead: "Trusted Signal Hill Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Signal Hill", fit: "cover" },
    intro:
      "Signal Hill plumbers for SW Calgary. Priority emergency response, hillside drainage expertise, luxury fixture installation, [drain cleaning](/drain-cleaning-calgary), and water heater service.",
    features: [
      "Priority emergency plumbing",
      "Hillside drainage expertise",
      "Luxury fixture installation & repair",
      "Tank & tankless water heater service",
      "Modern leak detection",
      "Sewer line inspection & repair",
    ],
    bullets: [
      {
        t: "Hillside specialists",
        d: "We understand the specific requirements of Signal Hill's elevated topography and how it affects drainage and water pressure.",
      },
      {
        t: "Real person picks up",
        d: "When you call us, you'll speak with a real person — not an answering service — who can dispatch a skilled plumber quickly.",
      },
    ],
    seoTitle: "Signal Hill Plumbers Calgary | Priority Plumbing Services",
    seoDescription:
      "Expert Signal Hill plumbers serving SW Calgary. Priority emergency service, hillside drainage expertise, luxury fixture installation & water heater service. Call 587-834-3668.",
    seoKeywords: [
      "Signal Hill plumbers",
      "plumber Signal Hill Calgary",
      "SW Calgary plumber",
      "hillside plumbing Calgary",
      "Signal Hill emergency plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Signal Hill plumbing",
    quoteFormPlaceholder:
      "e.g. hillside drainage issue, luxury fixture repair, water pressure variation, frozen pipe on exposed wall…",
    sidebar: {
      title: "Signal Hill Plumbers",
      subtitle:
        "SW Calgary hillside plumbing specialists — priority dispatch, luxury fixture experts, licensed journeyman crew.",
      bullets: [
        "Specialized hillside drainage knowledge",
        "Licensed, bonded & insured",
        "Priority emergency response",
        "Real person answers the phone",
      ],
    },
    stats: [
      { number: "25+", label: "Years in SW Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Signal Hill ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, major leak, or sewer backup on your Signal Hill hillside property? Call 587-834-3668 — priority dispatch from a real person, specialized hillside expertise on the truck.",
    richContent: {
      sections: [
        {
          heading: "Our Signal Hill Plumbing Services",
          intro:
            "Signal Hill's unique hillside location and upscale construction mean homeowners face specific plumbing challenges. Here's what our team handles throughout the community.",
          items: [
            { heading: "Emergency Plumbing Repairs", body: "Whether you're dealing with a burst pipe, severe leak, or backed-up sewer line, our priority plumbers respond quickly to protect your Signal Hill home. Our team understands hillside drainage urgency. See [emergency plumber](/emergency-plumber-calgary)." },
            { heading: "Drain Cleaning & Unclogging", body: "Our professional drain cleaning services use advanced equipment to clear blockages and restore proper flow — we're experienced with the specific challenges of hillside drainage systems. See [drain cleaning](/drain-cleaning-calgary)." },
            { heading: "Water Heater Services", body: "From [tankless installations](/tankless-water-heaters) to traditional [tank repairs](/hot-water-tanks) and replacements, we keep your hot water flowing through Calgary's cold winters." },
            { heading: "Luxury Fixture Installation & Repair", body: "Our plumbers expertly install and repair high-end faucets, toilets, sinks, and other fixtures to maintain your Signal Hill home's premium quality. See [bathroom plumbing](/bathroom-plumbing-calgary)." },
            { heading: "Leak Detection & Repair", body: "We use modern leak detection technology to quickly locate and repair leaks before they become costly — particularly important in hillside properties where water damage can affect structural stability." },
            { heading: "Sewer Line Services", body: "Comprehensive sewer line inspections, cleaning, repairs, and replacements. Signal Hill's hillside topography requires specialized expertise for proper maintenance and repair." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Signal Hill Homes",
          intro:
            "Signal Hill's unique hillside location and upscale construction mean homeowners face specific plumbing challenges we've solved countless times.",
          items: [
            { body: "Hillside drainage complexities requiring specialized expertise." },
            { body: "Water pressure variations due to elevation changes." },
            { body: "Frozen pipes during Calgary's harsh winters, especially on exposed hillside areas." },
            { body: "High-end fixture maintenance and specialized repairs." },
            { body: "Sewer line issues related to hillside topography." },
            { body: "Hard water buildup affecting premium appliances and fixtures — a [water softener](/water-softener) often helps." },
          ],
        },
        {
          heading: "Preventative Plumbing Maintenance for Signal Hill Homes",
          intro:
            "Regular maintenance can help you avoid costly emergency repairs. We recommend Signal Hill homeowners consider the following.",
          items: [
            { body: "Annual plumbing inspections to catch hillside drainage issues early." },
            { body: "Seasonal pipe winterization to prevent freezing in exposed areas." },
            { body: "Water heater flushing to extend equipment life and maintain efficiency." },
            { body: "Drain cleaning to prevent stubborn clogs in hillside drainage systems." },
            { body: "Sewer line camera inspections every few years to monitor hillside pipe conditions." },
            { body: "Water pressure regulation checks for properties with elevation variations." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          { q: "Do you offer priority emergency plumbing in Signal Hill?", a: "Yes. Flame Tech Plumbing offers priority emergency plumbing services to Signal Hill residents. When you call, you'll speak with a real person — not an answering service — who can dispatch a skilled plumber to your hillside location quickly." },
          { q: "Are you familiar with hillside drainage systems?", a: "Absolutely. We're experienced with Signal Hill's infrastructure specific to 1980s through modern luxury homes, familiar with hillside drainage systems, and understand the unique requirements of Signal Hill's elevated topography." },
          { q: "How do elevation changes affect water pressure in Signal Hill?", a: "Signal Hill's hillside topography creates water pressure variations across different elevations. We install and service pressure regulators as needed and can run a full pressure test to diagnose inconsistent flow throughout your home." },
          { q: "Can you handle high-end luxury fixture installations?", a: "Yes — our plumbers expertly install and repair high-end faucets, toilets, sinks, and other fixtures to maintain your Signal Hill home's premium quality and value. We handle everything from powder room upgrades to full spa bathroom builds." },
          { q: "Are your plumbers licensed and insured?", a: "Every Flame Tech plumber is fully licensed, bonded, and insured in accordance with Alberta regulations. We stay current on all local building codes and permit requirements for Signal Hill installations and repairs." },
        ],
      },
    },
  },

  // --- from nb-entries-E.ts ---
  {
    slug: "tuscany-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Tuscany Plumbers Calgary | Expert Plumbing Services",
    lead:
      "Tuscany homeowners trust Flame Tech Plumbing for reliable plumbing solutions that withstand Calgary's demanding climate. Since establishing our reputation across northwest Calgary over 25 years ago, we've become the go-to team for everything from emergency pipe repairs to complete system upgrades in this prestigious community.",
    heroBody: [
      "Living in one of Calgary's most desirable neighborhoods means protecting your investment with quality workmanship. Plumbing emergencies don't wait for convenient hours, which is why Flame Tech provides priority emergency response throughout Tuscany.",
      "Whether it's a burst pipe threatening your hardwood floors or a failing water heater on a frigid January morning, our certified technicians respond quickly to minimize damage and restore comfort. Call us today at 587-834-3668.",
    ],
    heroSubhead: "Trusted Tuscany Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Tuscany", fit: "cover" },
    intro:
      "Expert plumbers serving Tuscany and [NW Calgary](/calgary-plumbers-nw). Priority emergency dispatch, [Poly-B replacement](/polyb-plumbing-calgary), water heaters, drain cleaning — 25+ years of local experience.",
    features: [
      "Priority emergency repairs",
      "Poly-B replacement",
      "Water heater services",
      "Advanced leak detection",
      "Sewer camera inspections",
      "Sump pump service",
    ],
    bullets: [
      {
        t: "Local NW Calgary crew",
        d: "Our plumbers live and work in northwest Calgary — we know Tuscany's elevation quirks, Bow River proximity issues, and the typical home layouts built during the 1990s boom.",
      },
      {
        t: "Upfront, honest pricing",
        d: "Clear estimates before any work begins. No hidden fees, no pressure tactics — just satisfaction guarantees and manufacturer warranties.",
      },
    ],
    seoTitle: "Tuscany Plumbers Calgary | Priority Emergency Service | Flame Tech",
    seoDescription:
      "Professional plumbers serving Tuscany Calgary. 25+ years experience with local homes. Emergency repairs, heating, water heaters & priority service.",
    seoKeywords: [
      "Tuscany plumbers Calgary",
      "plumber Tuscany",
      "emergency plumber Tuscany",
      "NW Calgary plumber",
      "Poly-B replacement Tuscany",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Tuscany plumbing",
    quoteFormPlaceholder:
      "e.g. Poly-B leak in a 1990s Tuscany home, low water pressure up on Tuscany Hills, sump pump not cycling…",
    sidebar: {
      title: "Tuscany Plumbers",
      subtitle:
        "Fast, local plumbing service across Tuscany and the NW — priority emergency dispatch, upfront pricing, 25+ years of Calgary experience.",
      bullets: [
        "Licensed, insured, and bonded",
        "A real person answers the phone",
        "Modern camera & hydro-jet equipment",
        "Stocked for 1990s-era Tuscany homes",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "45-60m", label: "Tuscany ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or failed sump pump in Tuscany? Call 587-834-3668 — a real person will dispatch a plumber right away.",
    richContent: {
      sections: [
        {
          heading: "Our Tuscany Plumbing Services",
          intro:
            "Tuscany's unique position near the Bow River and its mix of custom-built luxury homes from the 1990s onward creates specific plumbing challenges that generic contractors often miss. Our crew understands how elevated terrain affects water pressure, why certain streets experience more [Poly-B pipe failures](/polyb-plumbing-calgary), and how mature trees can impact underground sewer lines.",
          items: [
            { heading: "Priority emergency repairs", body: "Round-the-clock response for burst pipes, sewer backups, and heating failures that can't wait until morning." },
            { heading: "Professional drain cleaning", body: "Advanced [hydro-jetting and camera equipment](/drain-cleaning-calgary) clears stubborn blockages without damaging your pipes." },
            { heading: "Water heater services", body: "Routine maintenance through full replacements, including [tankless](/tankless-water-heaters) and traditional units sized for larger Tuscany homes." },
            { heading: "Fixture installation & repair", body: "Expert installation and repair of toilets, faucets, showers, and high-end bathroom fixtures common in luxury Tuscany homes." },
            { heading: "Advanced leak detection", body: "Thermal and acoustic technology to locate hidden problems before they cause expensive damage to hardwood floors and finished basements." },
            { heading: "Sewer line inspections", body: "Comprehensive camera inspections, cleaning, and trenchless repairs that preserve your landscaping investment." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Tuscany Homes",
          intro:
            "Tuscany's combination of mature infrastructure and Calgary's extreme weather patterns creates predictable plumbing challenges that require targeted solutions.",
          items: [
            { body: "Frozen pipes in homes built before current insulation standards, particularly in north-facing walls." },
            { body: "Tree root intrusion into sewer lines from established landscaping and proximity to natural areas." },
            { body: "Water pressure fluctuations due to elevation changes and the community's location on higher ground." },
            { body: "Aging Poly-B plumbing in homes built during the 1990s construction boom." },
            { body: "Sump pump failures during spring melt and heavy rainfall periods." },
            { body: "Hard water issues affecting expensive appliances and fixture finishes in luxury homes." },
          ],
        },
        {
          heading: "Local Tuscany & NW Calgary Expertise",
          intro:
            "Our plumbers work and live in the NW. We've worked on hundreds of homes throughout Tuscany, and our technicians recognize the common layouts and plumbing configurations found in different phases of development — from the original custom homes near Tuscany Hills to newer constructions closer to Crowchild Trail. Similar experience across [Varsity](/varsity-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary) means we know what to expect before we even open the van doors.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How much does it cost to replace a water heater in Tuscany?",
            a: "Water heater replacement in Tuscany typically ranges from $1,200 to $3,500, depending on the unit type and installation complexity. Many Tuscany homes have custom utility rooms or unique venting requirements that can affect pricing. We provide upfront estimates and discuss all options, including [tankless water heaters](/tankless-water-heaters) that work well in larger homes. Most installations are completed within 4-6 hours.",
          },
          {
            q: "Why do Tuscany homes have low water pressure issues?",
            a: "Several Tuscany streets experience pressure drops due to the community's elevated location and distance from main water lines. Older homes may have undersized supply lines or corroded pipes that restrict flow. Our technicians can diagnose whether the issue stems from municipal supply, your home's plumbing, or fixtures themselves. Pressure booster systems often provide an effective solution.",
          },
          {
            q: "How quickly can you respond to emergency calls in Tuscany?",
            a: "Emergency response time to Tuscany averages 45-60 minutes, depending on traffic and weather. Our northwest Calgary dispatch gives us quick access via Crowchild Trail or Bow Trail. We stock our service vehicles with common repair parts for Tuscany's typical home configurations.",
          },
          {
            q: "Should I be concerned about Poly-B pipes in my Tuscany home?",
            a: "Many Tuscany homes built in the 1990s contain Poly-B plumbing that becomes brittle over time, especially with Calgary's temperature extremes. We recommend professional inspection if you notice discolored water, frequent leaks, or haven't had the system evaluated recently. [Poly-B replacement](/polyb-plumbing-calgary) prevents costly flood damage and increases home value.",
          },
          {
            q: "What's the best way to prevent frozen pipes in Tuscany winters?",
            a: "Tuscany's exposed location makes homes vulnerable to wind chill and rapid temperature drops during Alberta clippers. Keep garage doors closed, maintain consistent indoor temperatures, and open cabinet doors under sinks during extreme cold snaps. Many Tuscany homes benefit from pipe insulation upgrades in crawl spaces and exterior walls.",
          },
        ],
      },
    },
  },

  {
    slug: "varsity-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Varsity Plumbers Calgary | Expert Plumbing Services",
    lead:
      "The homes in Varsity were built mostly in the 1980s and early 90s, which means we're seeing a lot of original plumbing that's hitting its expiration date. FlameTech Plumbing has been fixing pipes, clearing drains, and replacing water heaters in this northwest Calgary community for years, and we know exactly what to expect when we walk through your front door.",
    heroBody: [
      "When your basement starts flooding at 2 AM or your furnace quits during a -30 cold snap, you need someone who answers the phone and shows up fast. That's exactly what we do — every day of the year with priority emergency dispatch.",
      "Call 587-834-3668 for fast, reliable plumbing service in Varsity and the rest of NW Calgary.",
    ],
    heroSubhead: "Trusted Varsity Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Varsity", fit: "cover" },
    intro:
      "Expert plumbers serving Varsity and [NW Calgary](/calgary-plumbers-nw). Priority emergency service, cast-iron drain replacement, [Poly-B replacement](/polyb-plumbing-calgary), [water heaters](/hot-water-tanks).",
    features: [
      "Priority emergency repairs",
      "Cast-iron drain replacement",
      "Poly-B replacement",
      "Water heater service",
      "Sewer line camera & repair",
      "Leak detection",
    ],
    bullets: [
      {
        t: "30+ years of Varsity know-how",
        d: "We've crawled through enough Varsity basements to know where the main shutoff is before we even ask, and we stock the parts these 1980s homes actually need.",
      },
      {
        t: "Real people on the phone",
        d: "Calls get answered by real people who live in Calgary — not a call center. Dispatch from the NW means typical arrival within 30-45 minutes.",
      },
    ],
    seoTitle: "Varsity Plumbers Calgary | Priority Emergency & Repair Services",
    seoDescription:
      "Expert plumbers in Varsity Calgary. Priority service, drain cleaning, water heaters, leak repairs. Local experts serving NW Calgary. Call 587-834-3668 now!",
    seoKeywords: [
      "Varsity plumbers Calgary",
      "plumber Varsity",
      "emergency plumber Varsity",
      "NW Calgary plumber",
      "Poly-B Varsity",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Varsity plumbing",
    quoteFormPlaceholder:
      "e.g. cast iron drain backing up in a 1980s Varsity home, Poly-B leak, hot water tank rusted through…",
    sidebar: {
      title: "Varsity Plumbers",
      subtitle:
        "NW Calgary plumbers who know 1980s-era Varsity homes inside out — priority dispatch, upfront pricing, quality work.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Trucks stocked for Varsity homes",
        "Camera inspections & hydro-jetting",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "30-45m", label: "Varsity ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Cast iron drain backing up, Poly-B leak, or no hot water in Varsity? Call 587-834-3668 — we'll dispatch a plumber from NW Calgary right away.",
    richContent: {
      sections: [
        {
          heading: "Our Varsity Plumbing Services",
          intro:
            "Varsity's mature neighborhood means we deal with a lot of cast iron drain lines backing up, original copper supply lines showing their age, and builder-grade fixtures finally giving out after 30+ years. Our crew has also worked extensively in nearby communities like [Panorama Hills](/panorama-hills-plumbers-calgary) and [Edgemont](/edgemont-plumbers-calgary), so we understand the common issues that plague homes built during Calgary's growth boom.",
          items: [
            { heading: "Emergency plumbing repairs", body: "Burst pipes, sewer backups, no hot water — priority dispatch because disasters don't wait for business hours." },
            { heading: "Drain cleaning & unclogging", body: "Kitchen sinks, main lines, floor drains — [professional drain cleaning](/drain-cleaning-calgary) to get water flowing again." },
            { heading: "Water heater services", body: "Installation, repair, and replacement of tank and [tankless units](/tankless-water-heaters). Most Varsity water heaters are overdue for replacement." },
            { heading: "Fixture installation & repair", body: "Toilets, faucets, sinks, tubs — we fix what's broken and upgrade what needs replacing with modern, efficient fixtures." },
            { heading: "Leak detection & repair", body: "From dripping taps to hidden pipe leaks behind walls, we find them with thermal and acoustic tools and fix them right." },
            { heading: "Sewer line services", body: "Camera inspections, root removal, and line repairs for aging sewer systems common in established NW neighborhoods." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Varsity Homes",
          intro:
            "After servicing hundreds of homes in Varsity, we see the same problems over and over:",
          items: [
            { body: "Original cast iron drain lines from the 1980s backing up due to buildup and deterioration." },
            { body: "Water heaters installed in the early 2000s finally giving out after 15-20 years." },
            { body: "Root intrusion in sewer lines from mature trees along the streets." },
            { body: "Frozen pipes during chinook temperature swings that crack supply lines." },
            { body: "Original bathroom fixtures leaking and wasting water." },
            { body: "Hard Calgary water destroying faucet aerators and showerheads." },
          ],
        },
        {
          heading: "Preventative Maintenance for Varsity Homes",
          intro:
            "Most expensive plumbing disasters are preventable if you catch them early. A little maintenance goes a long way in these older Varsity homes.",
          items: [
            { body: "Get your water heater flushed annually — Calgary's hard water builds up sediment fast." },
            { body: "Have your main sewer line camera inspected every 3-5 years to catch root problems early." },
            { body: "Replace rubber supply lines under sinks and toilets every 10 years before they burst." },
            { body: "Clean aerators and showerheads quarterly to prevent hard water buildup." },
            { body: "Test your main water shutoff valve annually — you'll need it to work during an emergency." },
            { body: "Insulate pipes in unheated areas like garages and crawl spaces before winter." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "How long do water heaters typically last in Varsity homes?",
            a: "Most water heaters in Varsity homes last 8-12 years, but Calgary's hard water can shorten that lifespan significantly. If your tank is over 10 years old and you're seeing rust-colored water or hearing rumbling noises, it's time for a replacement. We can assess your current unit and recommend whether repair or [replacement with a tankless system](/tankless-water-heaters) makes more sense.",
          },
          {
            q: "Why do my drains keep backing up even after I snake them?",
            a: "In older Varsity homes, cast iron drain lines often have buildup, corrosion, or root intrusion that a basic snake can't fix. The main sewer line may need professional hydro-jetting or even partial replacement. We use camera inspection to see exactly what's causing the problem and recommend the right solution.",
          },
          {
            q: "Should I be concerned about poly-b piping in my 1980s Varsity home?",
            a: "Yes, polybutylene piping was commonly used in Varsity homes built in the 1980s and early 90s, and it's known to fail without warning. If you still have poly-b supply lines, we recommend having them inspected and potentially replaced before they cause water damage. The good news is we've done dozens of [poly-b replacements](/polyb-plumbing-calgary) in your neighborhood.",
          },
          {
            q: "How quickly can you respond to emergency calls in Varsity?",
            a: "We typically arrive at Varsity homes within 30-45 minutes of your call, even during winter storms. Our emergency trucks are stocked with common parts for homes in your neighborhood, so we can often fix the problem on the first visit rather than making you wait for a return trip.",
          },
          {
            q: "What's the best way to prevent frozen pipes during Calgary winters?",
            a: "Keep your heat on even when you're away, open cabinet doors under sinks during extreme cold to let warm air circulate, and know where your main water shutoff is located. For Varsity homes with pipes in unheated garages or crawl spaces, we recommend adding insulation before the first cold snap hits in late October.",
          },
        ],
      },
    },
  },

  {
    slug: "west-springs-plumbers-calgary",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "West Springs Calgary Plumbers | Reliable Community Service",
    lead:
      "Looking for dependable plumbing service in West Springs, Calgary? Flame Tech Plumbing delivers trusted expertise to this vibrant family community's modern homes and established neighborhoods. Our experienced plumbers understand West Springs' unique plumbing needs, providing prompt, professional service that keeps your family comfortable year-round.",
    heroBody: [
      "Your trusted [plumbing experts in SW Calgary](/calgary-plumbers-sw) understand West Springs' growing community needs — from starter townhomes to executive properties — and provide reliable service tailored to this dynamic neighborhood.",
      "Call 587-834-3668 for priority dispatch, honest pricing, and master-level workmanship on every job.",
    ],
    heroSubhead: "Professional Plumbing Excellence for West Springs Families",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in West Springs", fit: "cover" },
    intro:
      "Expert plumbers serving West Springs and [SW Calgary](/calgary-plumbers-sw). Priority emergency response, [drain cleaning](/drain-cleaning-calgary), water heaters, and modern fixture installs for family homes.",
    features: [
      "Priority emergency plumbing",
      "Drain & sewer solutions",
      "Water heater services",
      "Leak detection",
      "Fixture installation & repair",
      "Sewer line maintenance",
    ],
    bullets: [
      {
        t: "Family-focused service",
        d: "Modern West Springs homes with high hot water demand need responsive care. We schedule around busy families and deliver first-visit repairs whenever possible.",
      },
      {
        t: "Honest, transparent pricing",
        d: "Complimentary quotes, clear pricing guaranteed, and no surprises — just master-level workmanship with comprehensive warranties.",
      },
    ],
    seoTitle: "West Springs Plumbers Calgary | Residential & Priority Emergency Service",
    seoDescription:
      "FlameTech offers highly rated plumbing services for the community of West Springs Calgary. Priority service, honest pricing — we have service guarantees and are available now!",
    seoKeywords: [
      "West Springs plumbers Calgary",
      "plumber West Springs",
      "emergency plumber West Springs",
      "SW Calgary plumber",
      "West Springs plumbing",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "West Springs plumbing",
    quoteFormPlaceholder:
      "e.g. hot water tank leaking in a West Springs executive home, slow kitchen drain, fixture upgrade in the ensuite…",
    sidebar: {
      title: "West Springs Plumbers",
      subtitle:
        "SW Calgary plumbers for West Springs families — priority dispatch, transparent pricing, and modern service vehicles stocked for first-visit fixes.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real dispatch team — never automated",
        "Thermal & acoustic leak detection",
        "Comprehensive service warranties",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "West Springs ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, severe leak, or sewage emergency in West Springs? Call 587-834-3668 — licensed professionals respond quickly with priority dispatch.",
    richContent: {
      sections: [
        {
          heading: "Complete Plumbing Services for West Springs",
          intro:
            "West Springs' modern family homes and established residences require responsive plumbing care that fits busy lifestyles and family budgets. Our team understands the needs of the community and delivers solutions that work.",
          items: [
            { heading: "Priority emergency plumbing", body: "Burst pipes, flooding, or sewer backups demand immediate attention. Our technicians respond quickly to West Springs homes with the tools to resolve urgent situations." },
            { heading: "Professional drain & sewer solutions", body: "[Advanced drain cleaning](/drain-cleaning-calgary) clears stubborn blockages completely — from kitchen sink clogs to main sewer line issues." },
            { heading: "Reliable water heater services", body: "Energy-efficient [tankless systems](/tankless-water-heaters) through high-capacity traditional units, sized for your family's hot water needs." },
            { heading: "Quality fixture installation", body: "Modern faucets, efficient toilets, stylish sinks, and upgraded shower systems — every installation meets current building codes." },
            { heading: "Advanced leak detection", body: "Thermal imaging and acoustic equipment locate leaks behind walls and under floors without destructive investigation." },
            { heading: "Complete sewer line maintenance", body: "Video camera inspection and high-pressure hydro-jetting to prevent costly backups and system failures." },
          ],
        },
        {
          heading: "Plumbing Considerations Specific to West Springs Homes",
          intro:
            "This thriving Southwest Calgary community presents unique service considerations that shape how we approach every job.",
          items: [
            { body: "Modern home construction with contemporary plumbing systems requiring specialized knowledge." },
            { body: "Family-oriented households with high hot water demand and frequent drain usage." },
            { body: "Mixed housing density requiring flexible service approaches for different property types." },
            { body: "Calgary's mineral-rich water creating scale buildup in fixtures and appliances." },
            { body: "Busy professional families needing convenient scheduling and efficient service." },
            { body: "New development areas with evolving infrastructure and utility connections." },
          ],
        },
        {
          heading: "Serving Nearby Communities",
          intro:
            "In addition to West Springs, FlameTech Plumbing proudly serves homeowners throughout Calgary's west end, including Cougar Ridge, [Aspen Woods](/aspen-woods-plumbers-calgary), Coach Hill, Wentworth, and [Signal Hill](/signal-hill-plumbers-calgary). Whether you need [emergency repairs](/emergency-plumber-calgary), drain cleaning, or routine maintenance, our licensed plumbers are just minutes away from your neighbourhood.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Does Flame Tech offer priority emergency service in West Springs?",
            a: "Yes. Flame Tech Plumbing provides priority emergency response throughout West Springs, Calgary. When facing burst pipes, severe leaks, or sewage emergencies, our licensed professionals respond quickly. Call our emergency line at 587-834-3668 anytime for immediate assistance.",
          },
          {
            q: "How quickly can you reach West Springs homes?",
            a: "Our technicians typically arrive at West Springs properties within 60-90 minutes of your emergency call, depending on current service demand and Calgary traffic conditions. We prioritize quick response for emergencies to minimize damage and restore your plumbing function promptly.",
          },
          {
            q: "What plumbing services do you provide to West Springs families?",
            a: "We provide comprehensive plumbing solutions including professional drain cleaning, water heater service and installation, reliable leak detection, pipe repair and replacement, modern fixture installations, complete sewer maintenance, and family-friendly [bathroom](/bathroom-plumbing-calgary) and kitchen upgrades.",
          },
          {
            q: "Are your plumbers licensed and insured?",
            a: "Absolutely. Every Flame Tech Plumbing technician maintains full licensure, bonding, and certification for Calgary operations. We carry comprehensive liability insurance protecting both our team and your home. You're hiring qualified professionals who meet all Alberta plumbing regulatory standards.",
          },
          {
            q: "Do you guarantee your work?",
            a: "Yes, we back our craftsmanship with comprehensive service warranties. Our satisfaction guarantee ensures complete resolution if you're not happy with our work. We also provide manufacturer warranties on all parts and equipment we install.",
          },
        ],
      },
    },
  },

  {
    slug: "woodbine-plumber",
    category: "Plumbing",
    location: "Calgary",
    icon: "plumbing",
    title: "Woodbine Plumbers Calgary | Expert Plumbing",
    lead:
      "When you need a reliable plumber in Woodbine, Calgary, Flame Tech Plumbing is your go-to solution for all residential and commercial plumbing needs. Our experienced team serves the Woodbine community with fast, professional plumbing services you can count on — with priority emergency dispatch whenever you need us.",
    heroBody: [
      "As a locally owned and operated [plumbing company in SW Calgary](/calgary-plumbers-sw), we understand the unique challenges that Woodbine properties face — from older homes with aging plumbing systems to newer builds requiring modern installations.",
      "Call 587-834-3668 for fast, reliable plumbing service across Woodbine and the rest of southwest Calgary.",
    ],
    heroSubhead: "Trusted Calgary Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Woodbine", fit: "cover" },
    intro:
      "Expert plumbers serving Woodbine and [SW Calgary](/calgary-plumbers-sw). Priority emergency service, [drain cleaning](/drain-cleaning-calgary), water heaters, fixture installs, sewer line repair.",
    features: [
      "Priority emergency repairs",
      "Drain cleaning & unclogging",
      "Water heater services",
      "Fixture installation & repair",
      "Leak detection & repair",
      "Sewer line services",
    ],
    bullets: [
      {
        t: "Local SW Calgary crew",
        d: "Our plumbers work and live in the southwest, so we know the mix of older and newer Woodbine homes and the freeze-thaw patterns that affect them.",
      },
      {
        t: "Real person on the phone",
        d: "When you call us, you speak with a real person — not an answering service — who can dispatch a skilled plumber to your Woodbine home quickly.",
      },
    ],
    seoTitle: "Woodbine Calgary Plumbers | Priority Emergency Service Available",
    seoDescription:
      "Expert plumbers serving Woodbine, Calgary. Fast, reliable plumbing repairs, installations & priority emergency service. Call 587-834-3668 today!",
    seoKeywords: [
      "Woodbine plumbers Calgary",
      "plumber Woodbine",
      "emergency plumber Woodbine",
      "SW Calgary plumber",
      "Woodbine plumbing",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Woodbine plumbing",
    quoteFormPlaceholder:
      "e.g. hidden leak in a Woodbine bungalow, tree roots in the sewer line, tankless install quote…",
    sidebar: {
      title: "Woodbine Plumbers",
      subtitle:
        "SW Calgary plumbers serving Woodbine — priority dispatch, upfront pricing, and real people on the phone.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real person answers the phone",
        "Modern leak detection equipment",
        "Satisfaction guarantee on every job",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Calgary", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Woodbine ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, severe leak, or backed-up sewer line in Woodbine? Call 587-834-3668 — our emergency plumbers are available around the clock to protect your home from water damage.",
    richContent: {
      sections: [
        {
          heading: "Our Woodbine Plumbing Services",
          intro:
            "Whether you're dealing with a burst pipe, severe leak, or backed-up sewer line, our emergency plumbers are available around the clock to protect your Woodbine home from water damage. From older homes with aging plumbing systems to newer builds requiring modern installations, our team has the expertise to handle it all.",
          items: [
            { heading: "Emergency plumbing repairs", body: "Priority dispatch for burst pipes, severe leaks, or backed-up sewer lines — we'll protect your Woodbine home from water damage." },
            { heading: "Drain cleaning & unclogging", body: "[Professional drain cleaning](/drain-cleaning-calgary) with advanced equipment clears stubborn blockages and restores proper flow." },
            { heading: "Water heater services", body: "[Tankless installations](/tankless-water-heaters) through traditional [tank repairs](/hot-water-tanks) — Calgary's cold winters make a functioning water heater essential." },
            { heading: "Fixture installation & repair", body: "Faucets, toilets, sinks, and other fixtures installed to enhance your home's functionality and value." },
            { heading: "Leak detection & repair", body: "Modern leak detection technology quickly locates and repairs hidden leaks before they become costly problems." },
            { heading: "Sewer line services", body: "Inspections, cleaning, repairs, and replacements to keep your wastewater system functioning properly." },
          ],
        },
        {
          heading: "Common Plumbing Issues in Woodbine Homes",
          intro:
            "Woodbine's mix of established and newer properties means homeowners face a variety of plumbing challenges:",
          items: [
            { body: "Aging pipes in older homes requiring replacement or repair." },
            { body: "Frozen pipes during Calgary's harsh winters." },
            { body: "Tree root intrusion into sewer lines." },
            { body: "Hard water buildup affecting fixtures and appliances." },
            { body: "Outdated plumbing systems that need modernization." },
          ],
        },
        {
          heading: "Local SW Calgary Expertise",
          intro:
            "Our plumbers work and live in the SW, which means we understand the plumbing systems in older character homes common to areas like [Mount Royal](/mount-royal-plumbers-calgary) and Elbow Park, the infrastructure challenges in 1970s and 1980s developments throughout nearby areas, and modern plumbing in new SW Calgary communities. We know how Calgary's freeze-thaw cycles specifically affect SW properties, and we stay current on all local building codes and permit requirements. Similar experience across [Signal Hill](/signal-hill-plumbers-calgary) and [Evergreen](/evergreen-plumbers-calgary) helps us diagnose faster.",
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you offer priority emergency plumbing in Woodbine?",
            a: "Yes — we provide priority emergency response to Woodbine homes for burst pipes, severe leaks, and sewer backups. A real person answers the phone and dispatches a skilled plumber to your location quickly. Call 587-834-3668 anytime.",
          },
          {
            q: "How do I prevent frozen pipes in my Woodbine home?",
            a: "Seasonal pipe winterization is key — insulate exposed pipes in garages and crawl spaces, keep cabinet doors open during extreme cold to let warm air circulate, and maintain consistent indoor heat. We can identify vulnerable areas during a routine inspection.",
          },
          {
            q: "What preventative maintenance do you recommend for Woodbine homes?",
            a: "We recommend annual plumbing inspections to catch issues early, seasonal pipe winterization, water heater flushing to extend equipment life, [drain cleaning](/drain-cleaning-calgary) to prevent stubborn clogs, and sewer line camera inspections every few years.",
          },
          {
            q: "Can tree roots really damage my sewer line?",
            a: "Yes — mature trees common in Woodbine send roots toward underground sewer lines seeking moisture, and they eventually break through joints causing backups. Camera inspection shows us exactly where the damage is, and we offer root removal and trenchless repair options.",
          },
          {
            q: "Is my hard water damaging my appliances?",
            a: "Calgary's mineral-rich water builds scale in water heaters, dishwashers, and fixtures, shortening their lifespan. A [water softener](/water-softener) can dramatically extend appliance life and improve fixture performance. We can assess your water quality during a service visit.",
          },
        ],
      },
    },
  },

  {
    slug: "coopers-crossing-plumbers",
    category: "Plumbing",
    location: "Airdrie",
    icon: "plumbing",
    title: "Coopers Crossing Plumber | Expert Plumbing Services",
    lead:
      "Facing plumbing issues in your Coopers Crossing property? You deserve experienced professionals who deliver prompt, dependable service every time. At Flame Tech Plumbing, we're proud to serve Coopers Crossing with [Airdrie plumbing](/airdrie-plumbers) experts that are trusted and backed by integrity and clear communication.",
    heroBody: [
      "Our locally-based team understands the specific demands of Alberta's climate on Coopers Crossing homes. Whether it's preventing frozen pipes in winter or handling urgent water heater breakdowns, we bring proven solutions to every challenge.",
      "Call us today at 587-834-3668 for fast, reliable plumbing service in Airdrie.",
    ],
    heroSubhead: "Trusted Coopers Crossing Plumbing Experts",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech plumbing service van in Coopers Crossing", fit: "cover" },
    intro:
      "Expert plumbers serving Coopers Crossing and the rest of [Airdrie](/airdrie-plumbers). Priority emergency response, [drain cleaning](/drain-cleaning-calgary), water heaters, and transparent pricing.",
    features: [
      "Priority emergency repairs",
      "Drain cleaning & repair",
      "Water heater services",
      "Fixture installation & repair",
      "Leak detection",
      "Sump pump service",
    ],
    bullets: [
      {
        t: "Licensed & insured",
        d: "Our crew includes fully certified and insured experts with extensive practical experience supporting Coopers Crossing homes and commercial properties.",
      },
      {
        t: "Upfront, honest pricing",
        d: "Transparent, comprehensive quotes before starting any project. Zero hidden charges or unexpected costs — only straightforward pricing you can count on.",
      },
    ],
    seoTitle: "Coopers Crossing Plumbers Airdrie | Priority Emergency Service",
    seoDescription:
      "Expert plumbers serving Coopers Crossing, Airdrie. Priority emergency service, water heaters, drain cleaning, leak repairs. Call 587-834-3668 today!",
    seoKeywords: [
      "Coopers Crossing plumber",
      "plumber Coopers Crossing",
      "Coopers Crossing Airdrie plumbing",
      "emergency plumber Airdrie",
      "Airdrie plumber",
      "FlameTech Plumbing",
    ],
    quoteFormLabel: "Coopers Crossing plumbing",
    quoteFormPlaceholder:
      "e.g. frozen pipe in a Coopers Crossing home, sump pump failure, tankless water heater quote…",
    sidebar: {
      title: "Coopers Crossing Plumbers",
      subtitle:
        "Airdrie plumbers serving Coopers Crossing — priority dispatch, upfront pricing, and a real person on the phone.",
      bullets: [
        "Licensed, insured, and bonded",
        "Real dispatch — no automated systems",
        "Modern camera & hydro-jet equipment",
        "Every Airdrie neighbourhood covered",
      ],
    },
    stats: [
      { number: "25+", label: "Years in Alberta", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "60-90m", label: "Airdrie ETA", icon: "schedule" },
      { number: "Licensed", label: "& insured", icon: "award" },
    ],
    callout:
      "Burst pipe, flooded basement, or sewer backup in Coopers Crossing? Call 587-834-3668 — a real person will dispatch a plumber right away.",
    richContent: {
      sections: [
        {
          heading: "Comprehensive Plumbing Services in Coopers Crossing",
          intro:
            "Plumbing crises happen without warning. From midnight pipe bursts to weekend sewer backups, our emergency team stands ready to help with priority dispatch that protects your property and restores functionality fast.",
          items: [
            { heading: "Drain cleaning & repair", body: "Our Coopers Crossing specialists employ cutting-edge tools like [hydro-jetting and camera diagnostics](/drain-cleaning-calgary) to eliminate blockages and detect problems before they escalate." },
            { heading: "Water heater services", body: "Whether you need [tankless system installation](/tankless-water-heaters) or conventional [tank service](/hot-water-tanks-airdrie), we've got your hot water requirements covered across all leading brands." },
            { heading: "Fixture installation & repair", body: "We install and repair all types of plumbing fixtures including faucets, toilets, sinks, garbage disposals, and more — with attention to detail for proper installation." },
            { heading: "Leak detection", body: "Thermal and acoustic equipment to locate hidden leaks behind walls and under floors before they cause damage." },
            { heading: "Sump pump service", body: "Installation, testing, and repair of sump pumps to prevent basement flooding during spring melt and heavy rainfall." },
            { heading: "Priority emergency response", body: "A real person answers your call and dispatches a plumber from nearby. No automated systems or overseas call centers." },
          ],
        },
        {
          heading: "Why Choose Flame Tech Plumbing for Your Coopers Crossing Property",
          items: [
            { heading: "Experienced, licensed plumbers", body: "Our crew includes fully certified and insured experts with extensive practical experience supporting Coopers Crossing homes and commercial properties." },
            { heading: "Upfront pricing", body: "Transparent, comprehensive quotes before starting any project. Zero hidden charges or unexpected costs." },
            { heading: "Quality workmanship", body: "We guarantee our workmanship with thorough warranties. When we finish a project, it's executed correctly from the start." },
            { heading: "Modern equipment", body: "State-of-the-art plumbing equipment to pinpoint issues precisely and execute repairs effectively." },
            { heading: "Local knowledge", body: "Serving the Airdrie region, we're well-versed in municipal codes, typical local plumbing concerns, and strategies for Alberta's distinct weather conditions." },
            { heading: "Customer service excellence", body: "From initial contact through project finish, we emphasize transparent communication, property care, and your total satisfaction." },
          ],
        },
        {
          heading: "Serving All of Airdrie",
          intro:
            "We're honored to serve all Coopers Crossing residents and surrounding Airdrie neighborhoods, including Kings Heights, Williamstown, Edwards Landing, [Reunion](/reunion-plumbers-airdrie), Chinook Gate, [Ravenswood](/ravenswood-plumbers-airdrie), Big Springs, and Hillcrest. Need broader coverage? See our main [Airdrie plumbers](/airdrie-plumbers) page.",
        },
        {
          heading: "Common Coopers Crossing Plumbing Issues We Solve",
          intro:
            "Coopers Crossing properties face unique plumbing demands. Our technicians excel at resolving:",
          items: [
            { body: "Winter pipe freezing in Alberta's harsh climate." },
            { body: "Mineral-heavy water damaging fixtures and appliances — solved with a [water softener](/water-softener-airdrie)." },
            { body: "Older plumbing infrastructure throughout Coopers Crossing and adjacent Airdrie areas." },
            { body: "Insufficient water pressure concerns." },
            { body: "Sump pump malfunctions leading to basement flooding." },
            { body: "Continuously running toilets wasting water and raising utility costs." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions",
        items: [
          {
            q: "Do you offer priority emergency plumbing in Coopers Crossing?",
            a: "Yes — Flame Tech Plumbing offers priority emergency response to Coopers Crossing residents. Your call connects you directly with our team (no automated systems or call centers) and we'll quickly dispatch an experienced plumber to your location.",
          },
          {
            q: "How quickly can you reach Coopers Crossing?",
            a: "Our technicians typically arrive within 60-90 minutes of your emergency call, depending on traffic and weather. We dispatch from nearby and stock our trucks with common parts for Airdrie-area homes so most issues get fixed on the first visit.",
          },
          {
            q: "Can you handle hard water problems in Coopers Crossing?",
            a: "Yes — Airdrie's mineral-heavy water damages fixtures, appliances, and water heaters over time. A [water softener](/water-softener-airdrie) dramatically extends equipment life and improves fixture performance. We can assess your water during any service visit.",
          },
          {
            q: "Do you service other Airdrie neighborhoods?",
            a: "Absolutely — we serve every Airdrie community, including [Ravenswood](/ravenswood-plumbers-airdrie), [Reunion](/reunion-plumbers-airdrie), Kings Heights, Williamstown, Edwards Landing, Chinook Gate, Big Springs, and Hillcrest. See our main [Airdrie plumbers](/airdrie-plumbers) page for the full list.",
          },
          {
            q: "Are your plumbers licensed and insured?",
            a: "Yes — every Flame Tech technician is fully licensed, bonded, and insured for Alberta plumbing work. We carry comprehensive liability coverage that protects both our team and your home, and we stand behind our work with thorough warranties.",
          },
          {
            q: "What should I do if a pipe bursts in the middle of the night?",
            a: "Shut off the main water valve immediately (we recommend knowing its location before an emergency), then call 587-834-3668. A real person will answer, take the details, and dispatch a plumber with priority response. Move valuables away from water and start clean-up while you wait.",
          },
        ],
      },
    },
  },

  // ────────────────────────────────────────────────────────────
  // ADDITIONAL SERVICE LANDING PAGES — boilers overview, water
  // heater installation, AirEase brand page
  // ────────────────────────────────────────────────────────────

  {
    slug: "boilers",
    category: "Heating",
    icon: "local_fire_department",
    title: "Calgary Boilers — Expert Installation, Repair & Service",
    lead:
      "When the Calgary chill sets in, a reliable and efficient boiler is essential for keeping your home or business comfortable. FlameTech provides comprehensive boiler services from new installation through annual maintenance.",
    heroBody: [
      "Whether you're upgrading an aging cast iron boiler in a Mount Royal heritage home or specifying a new condensing system for a Cranston build, we handle every part of the job — heat-loss calc, gas + venting + condensate, install, commissioning, and warranty registration.",
      "Locally owned and operated. Every technician is licensed gas fitter and Red Seal certified. Manufacturer-trained on Navien, IBC, Viessmann, and Triangle Tube.",
    ],
    heroSubhead: "Calgary's Boiler Specialists",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/navine-boiler.png", alt: "Navien high-efficiency wall-hung boiler installed by FlameTech" },
    intro:
      "Calgary boilers — install, repair, and annual service. High-efficiency condensing, conventional, and combi boilers from Navien, IBC, Viessmann, and Triangle Tube. Licensed, insured, manufacturer-trained.",
    features: [
      "Boiler installation & replacement",
      "Boiler repair & diagnostics",
      "Annual maintenance & tune-ups",
      "Priority emergency response",
      "High-efficiency, conventional, combi",
      "Hydronic + radiant floor systems",
    ],
    bullets: [
      {
        t: "Calgary-climate sized",
        d: "Heat-loss calcs against −35°C design temp on every install — sized correctly the first time, not matched to the old unit.",
      },
      {
        t: "Top-brand certified",
        d: "Manufacturer training on Navien, IBC, Viessmann, Triangle Tube, Crown, and Weil-McLain — we install what we know.",
      },
    ],
    seoTitle: "Calgary Boilers | Installation, Repair & Service | FlameTech",
    seoDescription:
      "Expert Calgary boiler installation, repair, and annual service. High-efficiency Navien, IBC, Viessmann, Triangle Tube. Priority emergency response. Free quotes.",
    seoKeywords: [
      "Calgary boilers",
      "boiler install Calgary",
      "boiler repair Calgary",
      "Navien boiler Calgary",
      "IBC boiler Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "boiler",
    quoteFormPlaceholder:
      "e.g. boiler losing pressure, kettling noises, planning a high-efficiency upgrade, hydronic radiant install…",
    sidebar: {
      title: "Calgary Boiler Services",
      subtitle:
        "Install, repair, and maintain every major boiler type — high-efficiency, conventional, and combi.",
      bullets: [
        "Navien · IBC · Viessmann · Triangle Tube",
        "AFUE up to 98%",
        "Hydronic + radiant floor systems",
        "Priority emergency dispatch",
      ],
    },
    stats: [
      { number: "15-25yr", label: "Boiler lifespan", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "98%", label: "Max AFUE", icon: "award" },
      { number: "B2", label: "Gas fitting licensed", icon: "check_circle" },
    ],
    financing: {
      detail:
        "Spread the cost of a new boiler into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Boiler down in a cold snap, kettling, or losing pressure? Call 587-834-3668 — priority dispatch with parts on the truck.",
    richContent: {
      sections: [
        {
          heading: "Why Choose FlameTech for Calgary Boilers",
          intro:
            "Boilers aren't a swap-and-go appliance — sized wrong or vented wrong, they cost you for the next 20 years. Our team has installed and serviced thousands of boilers across Calgary, from old cast iron units in heritage homes to modern condensing combis in new builds.",
          items: [
            { heading: "Local Calgary Experts", body: "Our technicians live and work in Calgary. We know how Alberta's climate, hard water, and freeze-thaw cycles affect boiler systems — and we install accordingly." },
            { heading: "Licensed & Insured", body: "Every technician carries B2 gas fitting and Red Seal plumbing certifications, plus current insurance. Permits pulled, inspections passed, work warrantied." },
            { heading: "Manufacturer-Trained", body: "Factory training on Navien, IBC, Viessmann, Triangle Tube, Crown, and Weil-McLain — so install, troubleshooting, and warranty work are all done to spec." },
            { heading: "Emergency Response", body: "Real person answers the phone, priority dispatch for no-heat calls, and common parts stocked on every truck so most repairs finish in a single visit." },
          ],
        },
        {
          heading: "Types of Boilers We Install & Service",
          items: [
            { heading: "High-Efficiency Condensing Boilers", body: "Modern condensing technology recovers heat from exhaust gases that conventional boilers waste, achieving up to 98% AFUE. Big savings during Calgary's seven-month heating season." },
            { heading: "Conventional Boilers", body: "Traditional atmospheric and power-vent boilers remain a practical choice for many Calgary homes — proven, simple, and cost-effective when condensing isn't a fit." },
            { heading: "Combi Boilers", body: "Combination units deliver radiant heating and endless domestic hot water from a single compact appliance. Space-efficient — no separate water heater needed." },
            { heading: "Hydronic + Radiant Floor", body: "We design and install hydronic systems including in-floor radiant — the most comfortable heat available, and quiet enough you forget it's running." },
          ],
        },
        {
          heading: "Trusted Boiler Brands We Install",
          items: [
            { heading: "Navien", body: "Industry-leading efficiency — Navien condensing boilers reach 95%+ AFUE with stainless steel heat exchangers that resist Calgary's mineral-heavy water. Wall-hung designs save mechanical room space and start dependably even at −35°C." },
            { heading: "IBC Technologies", body: "Canadian-engineered boilers built specifically for prairie climates. Premium-grade materials selected to handle Alberta's challenging water chemistry and seasonal temperature swings. Properly maintained IBC systems routinely deliver 20-25 years." },
            { heading: "Viessmann", body: "Premium German engineering with stainless steel heat exchangers and modulating burners. The systems we recommend when budget allows for the best long-term efficiency and longevity." },
            { heading: "Triangle Tube", body: "American-made stainless steel construction with industry-leading warranties. Particularly strong on combi and indirect-tank pairings for whole-home heating + DHW." },
          ],
        },
        {
          heading: "Why Boilers Are a Smart Choice for Calgary Homes",
          items: [
            { body: "Energy efficiency — high-efficiency models can save 20-40% on heating bills compared to old atmospheric units." },
            { body: "Reliable, even heat through Calgary's coldest cold snaps with no temperature stratification or cold spots." },
            { body: "Whisper-quiet operation — no blower noise, no air rush. Most homeowners forget the system is running." },
            { body: "Better for allergies — no forced air means no recirculating dust, dander, or pollen." },
            { body: "Excellent for zoning — heat only the rooms you're using, with multi-zone valves and individual thermostats." },
            { body: "Long lifespan with proper maintenance — 20-25 years on premium units vs. 15-20 for forced-air furnaces." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Calgary Boilers",
        items: [
          { q: "How much does a new boiler cost in Calgary?", a: "Installation typically ranges from $8,000 to $15,000 depending on unit size, efficiency rating, and any required gas line, venting, or condensate work. Combi boilers and hydronic conversions sit at the higher end. Financing is available through Financeit with flexible monthly payments — we provide a written quote with all-in pricing before any work starts." },
          { q: "What size boiler do I need for my Calgary home?", a: "Sizing depends on square footage, insulation quality, window quality, ceiling heights, and Calgary's −35°C design temperature. We perform a Manual J heat-loss calculation on every install instead of matching the old unit's BTU — old units were often oversized and cost you in efficiency for decades." },
          { q: "How do I know if my boiler needs repair?", a: "Watch for kettling, whistling, or gurgling noises (limescale + air), pressure dropping below 12 PSI, visible water seepage near components, inconsistent room-to-room heating, frequent cycling, climbing gas bills, or display error codes. Yellow burner flames instead of blue indicate dangerous combustion issues — shut the unit down and call us." },
          { q: "When is it time to replace rather than repair?", a: "Replacement makes sense once a boiler reaches 15-20+ years, when repair costs exceed half the replacement value, when AFUE is below 80% (modern units run 95%+), or when visible rust, corrosion, or heat exchanger cracks are present. We'll give you an honest comparison with the numbers — not a sales pitch." },
          { q: "How often should I schedule boiler maintenance?", a: "Once a year, in late summer or early fall before heating season. A real annual service includes heat exchanger inspection + flush, combustion analysis with a calibrated analyzer, safety control checks (pressure relief, low-water cutoff, flame sensor), and gas leak testing on connections." },
          { q: "Are there rebates for high-efficiency boilers in Alberta?", a: "Federal and provincial programs periodically offer incentives — the Canada Greener Homes Grant has historically provided up to $5,000 for qualifying heating upgrades. Eligibility usually requires 95%+ AFUE and professional installation with documentation. Our team stays current on what's available and helps with applications." },
          { q: "What's the difference between a boiler and a water heater?", a: "Boilers heat water that circulates through radiators, baseboards, or in-floor tubing to warm your living spaces — a closed loop. Water heaters provide potable hot water for showers, dishes, and laundry. Combi boilers do both functions from one unit." },
          { q: "Why is my boiler losing pressure?", a: "Persistent pressure loss usually means small leaks at pipe joints, radiator valves, or connections that may not be visible. Other causes: defective pressure relief valves, failed expansion tanks, malfunctioning automatic fill valves, or excessive bleeding from radiators. Rapid pressure drops or pooling water needs immediate professional attention." },
          { q: "Can I convert from forced air to a boiler system?", a: "Yes, but it's a substantial investment — typically $15,000-$30,000 depending on home size and chosen heat distribution (radiators, baseboards, or in-floor radiant). Most Calgary homeowners pursue conversions during major renovations to gain zone control, eliminate allergen circulation, and enjoy quieter, more luxurious heat." },
        ],
      },
    },
  },

  {
    slug: "water-heater-installation-calgary",
    category: "Water",
    icon: "propane_tank",
    title: "Water Heater Installation Calgary | Expert Hot Water Tank Setup",
    lead:
      "Calgary's hard water and temperature swings are tough on water heaters, which is why proper installation matters. FlameTech has been installing hot water tanks throughout Calgary for over a decade — and we still answer our phones with priority dispatch, no call centres.",
    heroBody: [
      "Our service trucks carry the popular tank sizes stocked and ready, so most installations happen the same day we get the call. Every job includes proper venting, gas line connections, and an expansion tank to handle Calgary's hard water pressure spikes.",
      "Licensed gas fitters, Red Seal plumbers, certified to install Bradford White, Rheem, Giant, AO Smith, and Navien.",
    ],
    heroSubhead: "Calgary's Water Heater Installation Specialists",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2026/02/bradford-white-hot-water-tank.png", alt: "Bradford White hot water tank installed by FlameTech in Calgary", fit: "contain" },
    intro:
      "Water heater installation in Calgary by licensed gas fitters. Tank, tankless, and replacement services — Bradford White, Rheem, AO Smith, and Navien. Same-day install when stock allows.",
    features: [
      "Traditional tank installation",
      "Tankless water heater setup",
      "Hot water tank replacement",
      "Expansion tank installation",
      "Gas line & venting work",
      "Priority emergency response",
    ],
    bullets: [
      {
        t: "3,000+ tanks installed",
        d: "Over a decade of installation experience across Calgary, with a 2-year workmanship warranty on every install.",
      },
      {
        t: "Stocked & ready",
        d: "Common 40 and 50-gallon tanks live on our service trucks, so most replacements finish the same day we get the call.",
      },
    ],
    seoTitle: "Water Heater Installation Calgary | Expert Hot Water Tank Setup",
    seoDescription:
      "Professional water heater installation in Calgary. Tank, tankless, and replacement services. Licensed gas fitters, same-day install, priority emergency response.",
    seoKeywords: [
      "water heater installation Calgary",
      "hot water tank installation Calgary",
      "tankless installation Calgary",
      "water heater replacement Calgary",
      "Bradford White Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "water heater installation",
    quoteFormPlaceholder:
      "e.g. installing a new 50-gal gas tank, considering a switch to tankless, replacing a 12-year-old leaking tank…",
    sidebar: {
      title: "Calgary Water Heater Install",
      subtitle:
        "Tank, tankless, and replacement work — installed properly the first time with all gas, venting, and code requirements handled.",
      bullets: [
        "Bradford White · Rheem · AO Smith · Navien",
        "Expansion tank on every install",
        "Permits + inspections handled",
        "2-year workmanship warranty",
      ],
    },
    stats: [
      { number: "3,000+", label: "Tanks installed", icon: "verified" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "2-4h", label: "Typical install", icon: "schedule" },
      { number: "2-yr", label: "Workmanship warranty", icon: "award" },
    ],
    financing: {
      detail:
        "Spread the cost of a new water heater install into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Tank leaking or no hot water? Call 587-834-3668 — most emergency installs done within 4-6 hours of the call.",
    richContent: {
      sections: [
        {
          heading: "Why Calgary Homeowners Choose FlameTech for Water Heater Installation",
          intro:
            "As a locally owned and operated company, we specialize in water heater installation for homes and businesses across Calgary. Our technicians are fully licensed gas fitters and Red Seal plumbers who have completed thousands of installations across Calgary neighborhoods. Every installation includes proper venting, gas line connections, and an expansion tank to protect against hard water pressure spikes.",
          items: [
            { heading: "Traditional Tank Installation", body: "Complete setup of gas or electric hot water tanks from 30 to 80 gallons, including proper venting, gas connections, and code-compliant installation." },
            { heading: "Tankless Water Heater Setup", body: "Professional installation of on-demand water heaters — including gas line upgrades, venting modifications, and electrical connections needed for high-output condensing units." },
            { heading: "Hot Water Tank Replacement", body: "Full removal of old units and installation of new tanks, including disposal of the old equipment and a clean walk-out from your mechanical room." },
            { heading: "Expansion Tank Installation", body: "Mandatory in modern code — protects equipment from hard water pressure fluctuations. Installed on every replacement we do." },
            { heading: "Gas Line & Venting Work", body: "Professional gas line connections and proper venting installation meeting Alberta safety codes. Many older Calgary homes need gas line upgrades for modern high-efficiency tanks." },
            { heading: "Priority Emergency Installation", body: "When a tank fails outside business hours, we dispatch fast with the right tank already on the truck." },
          ],
        },
        {
          heading: "Common Water Heater Installation Issues in Calgary Homes",
          intro:
            "Calgary homeowners face specific challenges affecting installation requirements. We see these every week and quote upfront so there are no surprises.",
          items: [
            { body: "Hard water buildup requiring larger anode rods and full expansion tanks to handle pressure swings." },
            { body: "Inadequate gas line sizing for high-efficiency units in homes built before 2000." },
            { body: "Improper venting in basement installations causing dangerous backdrafting." },
            { body: "Undersized water heaters in growing families — 40 gal is rarely enough for a household of four with multiple bathrooms." },
            { body: "Failed poly-b connections requiring complete re-piping during the installation." },
            { body: "Basement flooding damage requiring emergency replacement and platform-mount waterproofing." },
          ],
        },
        {
          heading: "Calgary Water Heater Installation Best Practices",
          intro:
            "Proper installation is the foundation of long-lasting equipment. Here's what we do on every job — and what cheaper installers often skip.",
          items: [
            { body: "Install expansion tanks on all water heater installations to handle hard water pressure variations." },
            { body: "Size gas lines properly — many Calgary homes need upgrades for modern high-efficiency units." },
            { body: "Use quality brass fittings instead of plastic for connections." },
            { body: "Install proper condensate drains for high-efficiency units to prevent basement flooding." },
            { body: "Position water heaters away from basement flood zones, on platforms or pedestals where appropriate." },
            { body: "Verify adequate clearances for service access — saves you on every future visit." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions About Water Heater Installation in Calgary",
        items: [
          { q: "How long does water heater installation take in Calgary?", a: "Most standard tank installations take 2-4 hours depending on your home's setup and whether gas lines need upgrading. Tankless installations can take 4-6 hours since they often require gas line modifications and new venting." },
          { q: "Do I need permits for water heater installation in Calgary?", a: "Yes — Calgary requires permits for water heater installations. We handle all permit paperwork; our licensed gas fitters pull proper permits and arrange inspections to meet Alberta safety codes. The permit process typically adds one day to the timeline." },
          { q: "What size water heater do I need for my Calgary home?", a: "Most Calgary families need a 40-50 gallon tank, depending on household size and usage patterns. We calculate peak hour demand and factor in Calgary's cold incoming water temperatures, which affect recovery time. Tankless units are sized differently based on simultaneous flow rates." },
          { q: "Can you install water heaters in Calgary basements that flood?", a: "Yes — water heaters can be installed on platforms or pedestals to protect from basement flooding, common in many Calgary communities. The platform raises the unit above potential flood levels with properly sealed electrical connections." },
          { q: "Will my old water heater connections work with a new unit?", a: "Older Calgary homes often have poly-b plumbing or undersized gas lines requiring upgrade during installation. We inspect all existing connections and replace anything not meeting current codes or manufacturer specifications — included in the upfront quote, no surprise add-ons." },
        ],
      },
    },
  },

  {
    slug: "air-ease-furnaces-calgary",
    category: "Heating",
    icon: "local_fire_department",
    title: "Air Ease Furnaces Calgary — Expert Installation & Service",
    lead:
      "Trust Calgary's certified AirEase furnace specialists for professional installation, maintenance, and repair. As an authorized AirEase Pro Team dealer, FlameTech delivers superior comfort engineered for Alberta's demanding climate.",
    heroBody: [
      "We specialize in AirEase's complete residential lineup — from high-efficiency modulating units reaching 98% AFUE to dependable single-stage models for budget-conscious homeowners.",
      "Every install is sized to AirEase specifications and to Calgary's actual conditions: extreme temperature swings, dry winter air, and a heating season that runs nearly seven months.",
    ],
    heroSubhead: "Authorized AirEase Pro Team Dealer",
    heroBadgeImage: { src: "/images/REVIEWS1.png", alt: "5-star Google rated" },
    heroImage: { src: "/images/2025/11/air-ease-furnace.png", alt: "AirEase high-efficiency furnace installed by FlameTech", fit: "contain" },
    intro:
      "Authorized AirEase furnace dealer in Calgary. Installation, replacement, maintenance, and repair on the full residential lineup — modulating, two-stage, and single-stage with AFUE up to 98%.",
    features: [
      "AirEase furnace installation",
      "AirEase replacement & retrofit",
      "Preventive maintenance",
      "Emergency furnace repair",
      "Efficiency upgrades & retrofits",
      "Smart home integration",
    ],
    bullets: [
      {
        t: "AirEase Pro Team certified",
        d: "Authorized dealer status — factory-trained on installation, parts access, and warranty support across the entire AirEase residential lineup.",
      },
      {
        t: "Calgary-tuned installs",
        d: "Every unit installed accounts for our temperature swings, dry air, and seven-month heating season — not just generic specs.",
      },
    ],
    seoTitle: "Air Ease Furnaces Calgary | Authorized Dealer & Service | FlameTech",
    seoDescription:
      "Authorized AirEase furnace dealer in Calgary. Installation, repair, and maintenance on the full lineup. AFUE up to 98%, manufacturer warranty support, free quotes.",
    seoKeywords: [
      "AirEase furnace Calgary",
      "Air Ease furnace install Calgary",
      "AirEase Pro Team dealer Calgary",
      "modulating furnace Calgary",
      "high-efficiency furnace Calgary",
      "FlameTech Plumbing Heating",
    ],
    quoteFormLabel: "AirEase furnace",
    quoteFormPlaceholder:
      "e.g. replacing a 20-year-old furnace with an AirEase modulating unit, planning a high-efficiency upgrade, AirEase warranty service…",
    sidebar: {
      title: "Calgary AirEase Furnaces",
      subtitle:
        "Authorized AirEase Pro Team dealer — installation, retrofit, and warranty service on the complete residential lineup.",
      bullets: [
        "Modulating · two-stage · single-stage",
        "AFUE up to 98%",
        "Manufacturer warranty support",
        "Free written quotes, no pressure",
      ],
    },
    stats: [
      { number: "98%", label: "Max AFUE", icon: "award" },
      { number: "5.0★", label: "Google rated", icon: "star" },
      { number: "6-10h", label: "Typical install", icon: "schedule" },
      { number: "Pro Team", label: "AirEase certified", icon: "verified" },
    ],
    financing: {
      detail:
        "Spread the cost of a new AirEase furnace install into flexible monthly payments via our Financeit partner.",
    },
    callout:
      "Old furnace running you ragged? Call 587-834-3668 for a free AirEase upgrade quote — heat-loss calc included.",
    richContent: {
      sections: [
        {
          heading: "Calgary's Trusted AirEase Furnace Professionals",
          intro:
            "As an authorized AirEase dealer, FlameTech brings expertise to every furnace installation, replacement, and service call throughout Calgary. We specialize in AirEase's complete residential furnace lineup, from high-efficiency modulating models achieving 98% AFUE to dependable single-stage units for budget-conscious homeowners. From initial consultation through warranty support, we provide comprehensive service that protects your investment and guarantees optimal performance year after year.",
          items: [
            { heading: "Certified Technicians", body: "Factory-trained on AirEase installation, controls, and warranty work — so install, troubleshooting, and warranty are all done to spec." },
            { heading: "5-Star Rated", body: "Hundreds of Calgary homeowners rate our work 5 stars across Google reviews. Same standard on a $200 service call as a $15,000 install." },
            { heading: "Furnace Specialists", body: "Heating is a core specialty. We install and service every major brand in Calgary, with a particular depth on AirEase, Carrier, and Lennox high-efficiency lineups." },
            { heading: "Warranty Support", body: "AirEase Pro Team membership gives us direct access to factory warranty claims, parts, and technical support — meaning faster resolution if anything ever goes sideways." },
          ],
        },
        {
          heading: "Complete AirEase Furnace Services for Calgary Homes",
          items: [
            { heading: "New Furnace Installations", body: "Every install begins with proper load calculations and ductwork assessment to ensure correct sizing and efficiency for Calgary's climate demands." },
            { heading: "System Replacements", body: "Safe removal of outdated equipment and seamless integration with existing ductwork and thermostat controls — no surprise compatibility issues mid-install." },
            { heading: "Preventive Maintenance", body: "Comprehensive seasonal tune-ups including filter changes, blower motor inspection, heat exchanger examination, and combustion analysis to extend the unit's lifespan." },
            { heading: "Emergency Repairs", body: "Rapid diagnosis with genuine AirEase replacement components on the truck. Most repairs finish in a single visit." },
            { heading: "Efficiency Upgrades", body: "Retrofitting variable-speed blowers, programmable thermostats, and smart home connectivity to existing systems that aren't yet ready for replacement." },
          ],
        },
        {
          heading: "AirEase Furnace Service Across Calgary & Surrounding Areas",
          intro:
            "Our mobile service fleet brings trained expertise directly to homes in all four Calgary quadrants plus Airdrie, Chestermere, Okotoks, and Cochrane. Whether you need emergency furnace repair during a January cold snap, scheduled maintenance before winter, or consultation on a replacement, FlameTech's AirEase specialists deliver prompt, professional service backed by manufacturer support.",
          items: [
            { body: "Calgary NE · NW · SE · SW — every quadrant covered with same-day priority dispatch." },
            { body: "Airdrie, Chestermere, Cochrane, and Okotoks — service trucks dispatched daily." },
            { body: "AirEase parts and warranty support direct from the manufacturer through our Pro Team membership." },
          ],
        },
      ],
      faq: {
        heading: "Frequently Asked Questions — AirEase Furnaces Calgary",
        items: [
          { q: "What makes AirEase furnaces ideal for Calgary winters?", a: "AirEase furnaces are engineered for extreme cold operation and extended heating seasons. Their two-stage and modulating models maintain consistent temperatures during swings from −30°C to mild chinook conditions. Heavy-duty heat exchangers withstand thermal stress from prolonged operation, and sealed combustion designs prevent the frozen venting issues common in Alberta winters. High-efficiency models reach up to 98% AFUE — critical for managing winter energy costs." },
          { q: "How long does an AirEase furnace installation take?", a: "Most standard AirEase furnace installations in Calgary homes complete within one full day (6-10 hours). Straightforward replacements where existing ductwork, venting, and electrical connections remain compatible finish faster. More complex projects requiring ductwork modifications, new thermostat wiring, humidifier integration, or venting upgrades may extend into a second day. We perform comprehensive load calculations before installation, inspect all existing components for compatibility, and complete thorough testing of safety systems, combustion efficiency, and airflow balance." },
          { q: "What AirEase furnace models do you recommend for Calgary homes?", a: "We recommend AirEase modulating furnaces for maximum efficiency and comfort in Calgary's variable climate — their infinite heat adjustments eliminate temperature swings during chinooks and provide whisper-quiet operation. Budget-conscious homeowners appreciate AirEase's single-stage models offering reliable performance and straightforward maintenance at accessible pricing. For balanced performance and value, two-stage models provide substantial efficiency improvements over basic units while costing less than premium modulating systems." },
          { q: "Do you service older AirEase furnace models?", a: "Yes — our trained technicians service AirEase furnaces across all model years and efficiency levels. We maintain relationships with parts suppliers, ensuring access to components for legacy systems, though availability becomes limited for units exceeding 20 years of age. For older furnaces, we provide honest assessments comparing repair costs against replacement benefits." },
          { q: "What kind of warranty comes with an AirEase install?", a: "AirEase furnaces come with strong manufacturer warranties on both heat exchangers (often 10-20 years) and parts (5-10 years depending on model and registration). As Pro Team members, we register the warranty for you and handle any claims directly with AirEase — no homeowner paperwork chasing. We also back our installation work with our own workmanship warranty." },
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
  const currentLocation = current.location ?? "Calgary";
  return services
    .filter((s) => {
      if (s.slug === slug) return false;
      if (s.category !== current.category) return false;
      return (s.location ?? "Calgary") === currentLocation;
    })
    .slice(0, limit);
}
