import { useState } from "react";
import {
  MapPin, Building2, TrendingUp, Train, Star, Shield, Phone,
  MessageCircle, CheckCircle2, Lock, ChevronDown, ChevronUp,
  Landmark, Layers, FileText, BadgeCheck, Eye, Download, Calendar,
  Sparkles, Compass, Check, ArrowRight, X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";

// High-resolution renders
import facadeImg from "@/assets/birla-evara-main.jpg";
import poolImg from "@/assets/birla-evara-pool.jpg";
import masterplanImg from "@/assets/birla-evara-masterplan.jpg";
import floorplanImg from "@/assets/birla-evara-4bhk-floorplan.jpg";
import courtyardImg from "@/assets/birla-evara-courtyard.jpg";
import walkwayImg from "@/assets/birla-evara-walkway.jpg";

/* ─── Hero Renders Data ─────────────────────────────────────────────────── */
const heroRenders = [
  {
    id: "facade",
    title: "Project Facade & Elevation",
    subtitle: "Iconic contemporary high-rise towers crafted by Birla Estates",
    src: facadeImg,
    tag: "High-Rise Elevation",
  },
  {
    id: "pool",
    title: "Swimming Pool & Leisure Deck",
    subtitle: "Resort-style infinity edge pool with sun deck & private cabanas",
    src: poolImg,
    tag: "Luxury Amenity",
  },
  {
    id: "masterplan",
    title: "Landscaped Masterplan",
    subtitle: "25+ Acres integrated township with 80% open lush greenery & Birla Mandir",
    src: masterplanImg,
    tag: "25-Acre Township",
  },
  {
    id: "courtyard",
    title: "Central Green Courtyard",
    subtitle: "Step-free pedestrian boulevards and manicured landscape gardens",
    src: courtyardImg,
    tag: "Green Realm",
  },
  {
    id: "walkway",
    title: "Clubhouse Walkway Spine",
    subtitle: "Grand canopy walkways linking social, sports & wellness zones",
    src: walkwayImg,
    tag: "Club Spine",
  },
];

/* ─── Key Metrics Data ──────────────────────────────────────────────────── */
const keyMetrics = [
  {
    label: "Target Appreciation",
    value: "16–18% CAGR",
    subtext: "* Base Case (1.8x–2.0x Multiple)",
    highlight: true,
  },
  {
    label: "Minimum Investment",
    value: "₹25 Lakhs",
    subtext: "Fractional SPV Unit Stake",
    highlight: true,
  },
  {
    label: "Holding Period",
    value: "4–5 Years",
    subtext: "Exit targeted at OC / Possession",
    highlight: false,
  },
  {
    label: "Payment Structure",
    value: "10 : 10 : 80",
    subtext: "Milestone-Linked Plan",
    highlight: false,
  },
];

/* ─── Asset Summary Table ───────────────────────────────────────────────── */
const assetSummaryRows = [
  { label: "Asset Name", value: "Birla Evara" },
  { label: "Developer", value: "Birla Estates (Aditya Birla Group / Century Textiles)" },
  { label: "Asset Class", value: "Premium Residential Landmark (4 BHK + SQ Unit)" },
  { label: "Unit Configuration", value: "4 BHK + Staff Quarter (SQ / Maid's Room) + Private Balcony" },
  { label: "Unit Carpet Area", value: "~1,622 Sq. Ft. (Super Built-up ~2,600+ Sq. Ft.)" },
  { label: "Location", value: "Sarjapur Road, Bengaluru East (Kodathi Village / Varthur Hobli)" },
  { label: "RERA Registration", value: "PRM/KA/RERA/1251/446/PR/060225/007487" },
  { label: "Land Parcel", value: "~25 to 30 Acres Integrated Masterplanned Township" },
  { label: "Township Scale", value: "13 High-Rise Towers (2 Basements + Ground + 27 Floors) | ~1,600 Units" },
  { label: "Open Space Ratio", value: "80% Dedicated Lush Greenery & Active Sports Amenities" },
  { label: "Investment Structure", value: "Special Purpose Vehicle (SPV) Private Placement (Sec 42)" },
  { label: "Target Exit Window", value: "2029–2030 (Slated at Occupancy Certificate / Handover)" },
];

/* ─── Structured Payment Plan ───────────────────────────────────────────── */
const paymentPlan = [
  {
    step: "01",
    milestone: "10% on Booking / Allotment",
    title: "Initial Allotment",
    desc: "Commit minimal upfront capital to lock in your fractional SPV share and institutional pre-launch entry valuation.",
    badge: "Booking Phase",
  },
  {
    step: "02",
    milestone: "10% Within 1 Year",
    title: "Foundation Milestone",
    desc: "Second structured installment due 12 months after allotment, aligned with substructure and podium milestones.",
    badge: "Month 12",
  },
  {
    step: "03",
    milestone: "80% at OC / Possession",
    title: "Completion & Handover",
    desc: "No interim construction interest or pre-EMI drag. 80% balance due strictly upon Occupancy Certificate (OC) / possession handover.",
    badge: "Exit / OC Window",
  },
];

/* ─── Neighborhood Highlights ───────────────────────────────────────────── */
const neighborhoodHighlights = [
  {
    category: "Work Hubs",
    icon: Building2,
    tag: "Minutes to Tech Corridor",
    points: [
      "Wipro Main Campus (Sarjapur) — 3.5 km (~7 mins)",
      "RGA Tech Park — 4.2 km (~9 mins)",
      "RMZ Ecospace & Bellandur ORR — 7.8 km",
      "Embassy TechVillage & Prestige Tech Park — 8.5 km",
      "Quick arterial link to Whitefield IT Hub & Electronic City",
    ],
  },
  {
    category: "Social Infrastructure",
    icon: Shield,
    tag: "Premier Education & Healthcare",
    points: [
      "Walkable distance to Delhi Public School (DPS) Sarjapur",
      "Minutes to National Public School (NPS) East & Greenwood High",
      "Inventure Academy & Primus Public School in immediate radius",
      "Top-tier healthcare: Manipal Hospital Sarjapur (4.5 km)",
      "Motherhood Hospital & Sakra World Hospital nearby",
    ],
  },
  {
    category: "Connectivity",
    icon: Train,
    tag: "Direct Arterial Arteries",
    points: [
      "Direct frontage to Sarjapur Road & Gattahalli link",
      "Seamless connectivity to Outer Ring Road (ORR), Bellandur & Koramangala",
      "Dual transit access toward Whitefield and Electronic City via NICE Road",
      "Upcoming Namma Metro Phase 3 planned along Sarjapur–Hebbal corridor",
      "Carmelaram Railway Station — 5.8 km",
    ],
  },
  {
    category: "Masterplan Landmark",
    icon: Landmark,
    tag: "Unique Cultural Icon",
    points: [
      "Planned 3.10-Acre iconic Birla Mandir inside the township grounds",
      "Architectural temple sanctum offering serene spiritual ambiance",
      "Drives immense brand prestige and perpetual secondary market appeal",
      "Surrounded by meditation groves, lotus ponds & quiet water bodies",
      "Exclusively master-planned by Birla Estates",
    ],
  },
];

/* ─── SPV & Investor Protection ─────────────────────────────────────────── */
const spvFeatures = [
  {
    Icon: Layers,
    title: "SPV Private Placement (1% Equity : 99% CCDs)",
    desc: "Direct ownership of legal securities in a dedicated Special Purpose Vehicle (Private Limited Company) incorporated specifically for this Birla Evara asset under Section 42 of the Companies Act.",
  },
  {
    Icon: Landmark,
    title: "Escrow-Protected Banking Oversight",
    desc: "100% of pooled fractional investor capital sits in a dedicated, bank-monitored Escrow Account with an authorized trustee, released strictly upon institutional builder milestone clearance.",
  },
  {
    Icon: TrendingUp,
    title: "Capital Gains at OC / Possession",
    desc: "Structured specifically to capture the massive under-construction capital delta. The 10:10:80 payment model amplifies return on equity upon final block exit or secondary resale at OC.",
  },
  {
    Icon: FileText,
    title: "Institutional Due Diligence & RERA Assurance",
    desc: "Fully vetted title deeds, encumbrance certificates, development clearances, and RERA compliance (PRM/KA/RERA/1251/446/PR/060225/007487) audited by independent legal counsel.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
const Properties = () => {
  const [activeRenderIndex, setActiveRenderIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isFloorPlanZoomed, setIsFloorPlanZoomed] = useState(false);
  const [spvOpen, setSpvOpen] = useState<number | null>(0);

  // Form fields
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter your full name.",
        variant: "destructive",
      });
      return;
    }
    const cleanPhone = formData.mobileNumber.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      toast({
        title: "Valid mobile number required",
        description: "Please enter a valid 10-digit mobile number.",
        variant: "destructive",
      });
      return;
    }
    if (!formData.emailAddress.includes("@")) {
      toast({
        title: "Valid email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsUnlocked(true);
    setIsModalOpen(false);
    toast({
      title: "Project Details Unlocked!",
      description: "Full floor plans and SPV terms are now accessible below.",
    });

    // Scroll to the unlocked section
    setTimeout(() => {
      const el = document.getElementById("gated-content-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  const activeRender = heroRenders[activeRenderIndex];

  return (
    <div className="bg-background text-foreground">

      {/* ── Hero Gallery & Main Showcase ──────────────────────────────────── */}
      <section className="relative min-h-[82vh] lg:min-h-[90vh] flex flex-col justify-end overflow-hidden pb-12 pt-28">
        {/* Background Image with smooth transition */}
        <img
          key={activeRender.id}
          src={activeRender.src}
          alt={activeRender.title}
          className="absolute inset-0 w-full h-full object-cover animate-fade-in transition-all duration-700"
        />

        {/* Sophisticated dual overlays for maximum readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,50%,7%)] via-[hsla(220,50%,7%,0.65)] to-[hsla(220,50%,7%,0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsla(220,50%,7%,0.85)] via-[hsla(220,50%,7%,0.4)] to-transparent" />

        <div className="relative container z-10 w-full">
          {/* Top Badge */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider gold-gradient text-accent-foreground shadow-lg">
              <Star size={13} fill="currentColor" /> RERA Approved Opportunity
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white/90 backdrop-blur-md border border-white/20">
              Sarjapur Road, Bengaluru East
            </span>
            <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-gold-light backdrop-blur-md border border-gold/30">
              {activeRender.tag}
            </span>
          </div>

          {/* Section Headline & Sub-headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight max-w-4xl mb-4">
            Anchor Your Portfolio in Bengaluru’s{" "}
            <span className="text-gold-gradient">Primary Tech Corridor</span>
          </h1>

          <p className="text-white/85 text-base sm:text-lg md:text-xl font-medium max-w-2xl mb-8 leading-relaxed">
            Invest in Birla Evara by Birla Estates | Sarjapur, Bengaluru
          </p>

          {/* Quick Hero Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            {/* GATED LEAD GENERATION TRIGGER */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl gold-gradient text-accent-foreground font-bold text-sm sm:text-base hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-gold/25 cursor-pointer">
                  <Sparkles size={18} />
                  Enquire Today / Unlock Project Details
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md bg-card border-border shadow-2xl p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-3 shadow-md">
                    <Lock size={22} className="text-accent-foreground" />
                  </div>
                  <DialogTitle className="text-2xl font-heading font-bold text-foreground">
                    Unlock Birla Evara SPV Documents
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground pt-1 leading-relaxed">
                    Provide your details below to access full 4&nbsp;BHK floor plan schematics, financial valuation model, and SPV terms.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleFormSubmit} className="space-y-4 mt-2">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/60 tracking-wider"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                      Work / Personal Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@company.com"
                      value={formData.emailAddress}
                      onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/60"
                    />
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-snug">
                    🔒 Protected under strict NDA terms. Your credentials are never shared.
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg gold-gradient text-accent-foreground font-bold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md shadow-gold/20"
                  >
                    Unlock Floor Plans &amp; SPV Terms →
                  </button>
                </form>
              </DialogContent>
            </Dialog>

            <a
              href="https://wa.me/919900456607?text=Hi%2C%20I%20would%20like%20more%20details%20on%20Birla%20Evara%20Sarjapur."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all"
            >
              <MessageCircle size={17} className="text-emerald-400" />
              WhatsApp Investment Desk
            </a>
          </div>

          {/* Render Switcher Thumbnails (Developer Note: Project Facade, Swimming Pool, Landscaped Masterplan) */}
          <div className="border-t border-white/15 pt-5">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold flex items-center gap-1.5">
                <Eye size={13} className="text-gold" /> Architectural Renders
              </span>
              <span className="text-xs text-white/50 hidden sm:inline-block">
                Click to explore renders
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {heroRenders.map((r, idx) => {
                const isSelected = activeRenderIndex === idx;
                return (
                  <button
                    key={r.id}
                    onClick={() => setActiveRenderIndex(idx)}
                    className={`group relative flex items-center gap-2.5 p-2 rounded-xl text-left transition-all backdrop-blur-md border overflow-hidden ${isSelected
                      ? "border-gold bg-white/20 shadow-lg ring-2 ring-gold/40"
                      : "border-white/10 bg-black/40 hover:bg-white/15 hover:border-white/30"
                      }`}
                  >
                    <img
                      src={r.src}
                      alt={r.title}
                      className="w-11 h-11 rounded-lg object-cover shrink-0 border border-white/20"
                    />
                    <div className="min-w-0 pr-1">
                      <p className={`text-xs font-semibold truncate ${isSelected ? "text-gold" : "text-white"}`}>
                        {r.title.split("&")[0].trim()}
                      </p>
                      <p className="text-[10px] text-white/60 truncate">{r.tag}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Investment Metrics (Clean Card Cards) ──────────────────────── */}
      <section className="py-12 bg-card border-b border-border relative z-20">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-bold">Deal Snapshot</p>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Key Investment Metrics
              </h2>
            </div>
            <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-muted border border-border">
              Institutional Tier
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyMetrics.map((metric) => (
              <div
                key={metric.label}
                className={`p-6 rounded-2xl border transition-all duration-300 ${metric.highlight
                  ? "border-gold/40 bg-amber-50/40 dark:bg-amber-950/20 shadow-sm"
                  : "border-border bg-background hover:border-gold/20"
                  }`}
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                  {metric.label}
                </p>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-1">
                  {metric.value}
                </p>
                <p className={`text-xs ${metric.highlight ? "text-gold font-medium" : "text-muted-foreground"}`}>
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Structured Payment Plan (Milestone Based) ──────────────────────── */}
      <section className="py-16 md:py-24 bg-cream/70 dark:bg-muted/10">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Investor-Centric Cash Flow</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mt-1 mb-3">
              Structured Payment Plan (Milestone Based)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Designed with asymmetrical developer-linked terms. Enjoy maximum capital efficiency with zero monthly pre-EMI burdens and 80% capital retention until handover.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {paymentPlan.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-sm hover:border-gold/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-heading font-extrabold text-gold">
                      {step.step}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider gold-gradient text-accent-foreground">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                    {step.milestone}
                  </h3>
                  <p className="text-xs font-semibold text-gold mb-3 uppercase tracking-wider">
                    {step.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-2 text-xs text-muted-foreground">
                  <Check size={14} className="text-emerald-500 shrink-0" />
                  <span>Legally bound under SPV contract</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Asset Summary & Location ───────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-bold">Regulatory &amp; Specifications</p>
              <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mt-1">
                Asset Summary &amp; Location
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/20">
              <BadgeCheck size={16} /> RERA Registered PRM/KA/RERA/1251/446/PR/060225/007487
            </div>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <tbody>
                  {assetSummaryRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-b border-border last:border-0 transition-colors hover:bg-muted/40 ${i % 2 === 0 ? "bg-card" : "bg-muted/15"
                        }`}
                    >
                      <td className="py-3.5 px-5 md:px-8 text-muted-foreground font-medium w-[38%] md:w-[28%] align-top">
                        {row.label}
                      </td>
                      <td className="py-3.5 px-5 md:px-8 text-foreground font-semibold">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── GATED LEAD GENERATION SECTION ─────────────────────────────────── */}
      <section id="gated-content-section" className="py-16 md:py-24 bg-cream/50 dark:bg-muted/15 border-y border-border">
        <div className="container max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Private Placement Dossier</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mt-1 mb-3">
              Confidential Floor Plans &amp; SPV Terms
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Institutional investors gain complete access to unit schematics, financial valuation cascades, and SPV subscription agreements.
            </p>
          </div>

          {!isUnlocked ? (
            /* Gated State Card with trigger button */
            <div className="relative rounded-3xl border border-border bg-card overflow-hidden shadow-xl p-8 sm:p-12 text-center">
              {/* Blurred background preview */}
              <div className="absolute inset-0 opacity-15 filter blur-md pointer-events-none">
                <img src={floorplanImg} alt="Schematic preview" className="w-full h-full object-cover" />
              </div>

              <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
                <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center shadow-lg mb-6">
                  <Lock size={26} className="text-accent-foreground" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-3">
                  Unlock Birla Evara 4 BHK Floor Plan &amp; SPV Model
                </h3>

                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Enter your contact details to review the official <strong>4 BHK + SQ Unit layout (~1,622 sft carpet)</strong>, SPV capitalization table, and projected capital gains model.
                </p>

                {/* Gated Lead Gen Trigger Button */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <button className="px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-bold text-base hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-gold/25 flex items-center gap-2 cursor-pointer">
                      <Sparkles size={18} />
                      Enquire Today / Unlock Project Details
                    </button>
                  </DialogTrigger>
                </Dialog>

                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
                  <Shield size={13} className="text-gold" />
                  Instant access unlocked upon verification
                </p>
              </div>
            </div>
          ) : (
            /* Unlocked State View */
            <div className="rounded-3xl border border-gold/40 bg-card p-6 sm:p-10 shadow-xl space-y-10 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">
                      Access Granted: Birla Evara Investor Dossier
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Unlocked for {formData.fullName} ({formData.mobileNumber})
                    </p>
                  </div>
                </div>

                <a
                  href={floorplanImg}
                  download="Birla_Evara_4BHK_SQ_FloorPlan.jpg"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted text-xs font-semibold transition-colors"
                >
                  <Download size={15} /> Download High-Res Blueprint
                </a>
              </div>

              {/* 4 BHK Floor Plan Preview */}
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden border border-border bg-black/5 group">
                    <img
                      src={floorplanImg}
                      alt="Birla Evara 4 BHK + SQ Unit Floor Plan"
                      className="w-full h-auto object-contain cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                      onClick={() => setIsFloorPlanZoomed(true)}
                    />
                    <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-md bg-black/70 text-white text-xs font-medium backdrop-blur-md">
                      Click to Expand Plan
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-xl bg-muted/30 border border-border">
                    <p className="text-xs uppercase tracking-wider text-gold font-bold mb-1">Unit Architecture</p>
                    <h4 className="font-heading text-lg font-bold text-foreground">4 BHK + Maid's Room (SQ)</h4>
                    <p className="text-xs text-muted-foreground mt-1">Carpet Area: ~1,622 Sq. Ft. | Super Area: ~2,600+ Sq. Ft.</p>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>Expansive living and dining hall extending to a panoramic sunset balcony deck.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>Dedicated Maid's / Staff Quarter (SQ) with separate service entry &amp; private washroom.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>Master bedroom suite with walk-in closet space and en-suite luxury bathroom.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-gold shrink-0 mt-0.5" />
                      <span>Double-glazed acoustic windows and cross-ventilation designed across all 4 bedrooms.</span>
                    </li>
                  </ul>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/919900456607?text=Hi%2C%20I%20have%20reviewed%20the%20Birla%20Evara%20floorplan%20and%20would%20like%20to%20reserve%20an%20SPV%20fraction."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl gold-gradient text-accent-foreground font-semibold text-sm hover:opacity-90 shadow-md"
                    >
                      <Phone size={15} /> Talk to Investment Manager
                    </a>
                  </div>
                </div>
              </div>

              {/* Detailed SPV Terms Breakdown */}
              <div className="pt-6 border-t border-border">
                <h4 className="font-heading text-lg font-bold text-foreground mb-4">
                  Confidential SPV Terms &amp; Investment Waterfall
                </h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { title: "Securities Ratio", value: "1% Equity : 99% CCDs", desc: "Private Limited SPV compliance under Sec 42" },
                    { title: "Escrow Manager", value: "Tier-1 Scheduled Bank", desc: "Monitored release tied to RERA builder phases" },
                    { title: "Exit Target", value: "Occupancy Certificate (OC)", desc: "Projected 2029–2030 block sale / secondary trade" },
                    { title: "Target IRR", value: "16–18% CAGR (Base)", desc: "1.8x to 2.0x capital multiple on deployed equity" },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl border border-border bg-background">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">{item.title}</p>
                      <p className="text-base font-heading font-bold text-foreground mt-0.5">{item.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Neighborhood Highlights & Map ──────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Strategic Macro Location</span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground mt-1 mb-3">
              Neighborhood Highlights
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Situated in Bengaluru East's highest-growth micro-market, Sarjapur Road bridges the city's largest employment corridors with high-income social infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {neighborhoodHighlights.map((n) => (
              <div
                key={n.category}
                className="p-6 rounded-2xl border border-border bg-card hover:border-gold/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 shadow-md">
                    <n.icon size={22} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                    {n.category}
                  </h3>
                  <p className="text-xs font-semibold text-gold mb-4 uppercase tracking-wider">
                    {n.tag}
                  </p>
                  <ul className="space-y-2">
                    {n.points.map((pt, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Google Map Embed */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <iframe
              title="Birla Evara Sarjapur Road Location"
              src="https://maps.google.com/maps?q=Birla+Evara+Sarjapur+Road+Kodathi+Bengaluru&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Micro-Market Distance Chips */}
          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              "Wipro Main Campus – 3.5 km",
              "RGA Tech Park – 4.2 km",
              "DPS & NPS Sarjapur – <2 km",
              "RMZ Ecospace – 7.8 km",
              "Manipal Hospital – 4.5 km",
              "Planned Phase 3 Metro – 1.8 km",
              "In-Township 3.10-Acre Birla Mandir",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground shadow-sm"
              >
                <MapPin size={12} className="text-gold shrink-0" />
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPV & Legal Protection Structure ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream/70 dark:bg-muted/10">
        <div className="container max-w-5xl">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-widest text-gold font-bold">Risk Management</p>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-foreground">
              SPV &amp; Legal Structure
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed text-sm sm:text-base">
            Every investment is ring-fenced inside a dedicated <strong>Special Purpose Vehicle (SPV)</strong> — a Private Limited Company incorporated solely for Birla Evara, giving fractional co-owners complete title transparency and statutory protection.
          </p>

          <div className="space-y-3">
            {spvFeatures.map((item, idx) => {
              const open = spvOpen === idx;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-300 ${open ? "border-gold/40 shadow-md bg-card" : "border-border bg-card hover:border-gold/20"
                    }`}
                >
                  <button
                    onClick={() => setSpvOpen(open ? null : idx)}
                    className="w-full flex items-center gap-4 p-5 text-left cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-sm">
                      <item.Icon size={18} className="text-accent-foreground" />
                    </div>
                    <span className="flex-1 font-heading font-semibold text-foreground text-sm sm:text-base">
                      {item.title}
                    </span>
                    {open ? (
                      <ChevronUp size={18} className="text-gold shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-muted-foreground shrink-0" />
                    )}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pl-[70px] text-xs sm:text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Call to Action Banner ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 navy-gradient relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative container max-w-3xl text-center">
          <span className="text-xs uppercase tracking-widest text-gold/80 font-bold mb-3 inline-block">
            Limited Fractional Allocation
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Participate in Birla Evara Today
          </h2>
          <p className="text-white/70 text-sm sm:text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Connect with the Ownabrix institutional desk to inspect SPV governance documents, schedule an on-site visit to Kodathi Village, or download the full Expression of Interest (EOI).
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-bold text-base hover:opacity-95 active:scale-[0.98] transition-all shadow-xl shadow-gold/25 w-full sm:w-auto justify-center cursor-pointer"
            >
              <Sparkles size={18} />
              Enquire Today / Unlock Project Details
            </button>
            <a
              href="https://wa.me/919900456607?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit%20for%20Birla%20Evara."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base active:scale-[0.98] transition-all shadow-lg shadow-emerald-900/30 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={18} />
              Schedule a Site Visit
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-white/50">
            <a href="tel:+919900456607" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <Phone size={14} /> +91 99004 56607
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://wa.me/919900456607"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp Support
            </a>
          </div>
        </div>
      </section>

      {/* ── Fullscreen Floor Plan Modal ────────────────────────────────────── */}
      {isFloorPlanZoomed && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setIsFloorPlanZoomed(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl max-h-[90vh] overflow-auto rounded-2xl bg-card p-4">
            <img
              src={floorplanImg}
              alt="Birla Evara 4 BHK + SQ Unit Full Layout"
              className="w-full h-auto object-contain rounded-lg"
            />
            <div className="p-4 text-center">
              <h4 className="font-heading font-bold text-foreground">Birla Evara 4 BHK + SQ Unit Blueprint</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Sarjapur Road, Bengaluru East | RERA: PRM/KA/RERA/1251/446/PR/060225/007487
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Properties;
