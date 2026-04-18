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
};

export const services: ServicePage[] = [
  // PLUMBING
  {
    slug: "bathroom-plumbing-calgary",
    category: "Plumbing",
    icon: "bathroom",
    title: "Bathroom Plumbing Calgary | Professional Bathroom Services",
    lead:
      "Calgary's hard water and extreme temperature swings wreak havoc on bathroom plumbing — we see it every day. FlameTech's bathroom plumbing specialists handle everything from emergency burst pipes in older Mount Royal homes to complete bathroom renovations in new Evergreen developments.",
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
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech service van — garage heater installation in Calgary", fit: "cover" },
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
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech service van — Calgary hot water tank replacement", fit: "cover" },
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
    heroImage: { src: "/images/FTVAN1.jpg", alt: "FlameTech service van — Calgary tankless water heater installs", fit: "cover" },
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
