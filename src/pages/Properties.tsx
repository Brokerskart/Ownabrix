import { useState } from "react";
import {
  MapPin, Building2, TrendingUp, Train, Star, Shield, Phone,
  MessageCircle, CheckCircle, Lock, ChevronDown, ChevronUp,
  Landmark, Layers, FileText, BadgeCheck
} from "lucide-react";
import vaswaniImg from "@/assets/vaswani-centropolis.jpg";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const overviewRows = [
  { label: "Asset Name", value: "Vaswani Centropolis" },
  { label: "Asset Type", value: "Grade A Commercial Office Space – Ground Floor" },
  { label: "Location", value: "No. 21, Langford Road, Bheemanna Garden, Shanti Nagar, Bengaluru – CBD" },
  { label: "Micro-market", value: "Central Business District (CBD)" },
  { label: "Developer", value: "Vaswani Group (est. 1985, 39+ years in real estate)" },
  { label: "Year of Construction", value: "2009" },
  { label: "Total Built-up Area", value: "~1,90,000 sft (entire building)" },
  { label: "Building Configuration", value: "2 Basements + Ground + 7 Floors" },
  { label: "Typical Floor Area", value: "~26,000 sft" },
  { label: "Area Offered for Sale", value: "Ground Floor: 8,874 sft (via fractional ownership)" },
  { label: "Quoted Price", value: "INR 23,000 per sft" },
  { label: "Target Rental Yield", value: "7.5% per annum" },
  { label: "Lock-in Period", value: "3 Years (MNC Tenant)" },
  { label: "Current Status", value: "Pre-Leased" },
];

const highlights = [
  { value: "7.5%", label: "Target Yield p.a." },
  { value: "8,874", label: "sft Offered" },
  { value: "₹23K", label: "per sft" },
  { value: "3 Yrs", label: "MNC Lock-in" },
];

const whyReasons = [
  {
    Icon: MapPin,
    title: "Prime CBD Location",
    desc: "Langford Road sits in Bengaluru's Central Business District, commanding ₹175–275/sft/month rentals with a city-low vacancy of just 3.30%.",
  },
  {
    Icon: Shield,
    title: "Institutional Validation",
    desc: "2 floors in this very building are already held by hBits — a leading fractional ownership platform — validating the asset's long-term institutional value.",
  },
  {
    Icon: Building2,
    title: "Grade A Specifications",
    desc: "In-house parking, 24×7 security, terrace cafeteria, business centre, and premium glass-facade architecture.",
  },
  {
    Icon: Train,
    title: "Excellent Connectivity",
    desc: "0.5 km from Richmond Road · 1.2 km from The Ritz-Carlton · 1.5 km from UB City Mall · 1.9 km from Cubbon Park Metro.",
  },
  {
    Icon: TrendingUp,
    title: "Upcoming Metro Boost",
    desc: "Pink Line (Nagawara → Kalena Agrahara) going operational in 2026–2027 will further enhance connectivity and capital values.",
  },
];

const publicStructure = [
  { label: "Target Yield", value: "7.5% p.a.", highlight: true },
  { label: "Asset Size", value: "8,873 sft", highlight: false },
  { label: "Minimum Investment", value: "₹25 Lakhs (indicative)", highlight: true },
  { label: "Structure", value: "SPV via Private Placement", highlight: false },
];

const lockedItems = [
  "Detailed financial model with IRR projections",
  "MNC tenant name and full lease terms",
  "Monthly income breakdown per investment slab",
  "Exit strategy timeline (5–7 year horizon)",
  "SPV legal documentation summary",
];

const unlockedItems = [
  { label: "MNC Tenant", value: "Leading multinational corporation (details shared on call)" },
  { label: "IRR Projection", value: "14–16% over a 5-year horizon" },
  { label: "Monthly Income", value: "~₹1.38L per ₹25L invested (indicative)" },
  { label: "Exit Strategy", value: "Post lock-in resale or full building exit in 5–7 years" },
  { label: "SPV Documentation", value: "Available on request via signed EOI" },
];

const spvItems = [
  {
    Icon: Layers,
    title: "Equity (1%)",
    desc: "Provides direct ownership and voting rights in the Special Purpose Vehicle — making you a legal co-owner of the property.",
  },
  {
    Icon: TrendingUp,
    title: "CCDs (99%)",
    desc: "Compulsory Convertible Debentures pay regular interest (sourced from rent) and convert to equity at a pre-defined milestone.",
  },
  {
    Icon: Landmark,
    title: "Escrow Protection",
    desc: "All pooled investor funds sit in a bank-monitored Escrow Account and are released exclusively for property acquisition.",
  },
  {
    Icon: FileText,
    title: "Compliance",
    desc: "Statutory filings, audits, and regulatory compliance under the Companies Act, Section 42 — fully transparent and legally sound.",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

const Properties = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [phone, setPhone] = useState("");
  const [spvOpen, setSpvOpen] = useState<number | null>(null);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.replace(/\D/g, "").length >= 10) setUnlocked(true);
  };

  return (
    <div className="bg-background">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <img
          src={vaswaniImg}
          alt="Vaswani Centropolis exterior"
          className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[8s] hover:scale-100"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,50%,8%)] via-[hsla(220,50%,8%,0.55)] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsla(220,50%,8%,0.7)] to-transparent" />

        <div className="relative container pb-14 md:pb-20 w-full">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest gold-gradient text-accent-foreground mb-5 shadow-lg">
            <Star size={12} fill="currentColor" /> Open for Investment
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight max-w-3xl mb-6">
            Anchor Your Portfolio in the{" "}
            <span className="text-gold-gradient">Heart of Bengaluru</span>
          </h1>

          <p className="text-white/75 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
            Vaswani Centropolis — Grade&nbsp;A commercial office, Langford Road CBD.
            Fractional ownership starts at ₹25&nbsp;Lakhs.
          </p>

          {/* Quick-stat pills */}
          <div className="flex flex-wrap gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center px-5 py-3 rounded-xl glass-card min-w-[90px]"
              >
                <span className="text-xl md:text-2xl font-heading font-bold text-gold">{h.value}</span>
                <span className="text-[11px] text-white/65 uppercase tracking-wide mt-0.5">{h.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Property Overview ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="flex items-end gap-4 mb-10">
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Asset Details</p>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">Property Overview</h2>
            </div>
            <div className="flex-1 h-px bg-border mb-2 hidden sm:block" />
          </div>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {overviewRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={`border-b border-border last:border-0 transition-colors hover:bg-muted/50 ${i % 2 === 0 ? "bg-card" : "bg-background"
                      }`}
                  >
                    <td className="py-3.5 px-5 md:px-8 text-muted-foreground font-medium w-[42%] md:w-[32%] align-top">
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
      </section>

      {/* ── Why This Property ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Investment Rationale</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">Why This Property?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyReasons.map((r, idx) => (
              <div
                key={r.title}
                className="group relative flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300"
              >
                {/* step number */}
                <span className="absolute top-4 right-5 text-5xl font-heading font-bold text-muted/40 select-none leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="w-11 h-11 rounded-xl gold-gradient flex items-center justify-center shadow-md shrink-0">
                  <r.Icon size={20} className="text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-base mb-1.5">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}

            {/* hBits validation callout */}
            <div className="sm:col-span-2 lg:col-span-3 flex items-start gap-4 p-5 rounded-2xl border border-gold/30 bg-amber-50/50 dark:bg-amber-900/10">
              <BadgeCheck size={22} className="text-gold shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">Already institutionally validated:</span> hBits — one of India's largest fractional ownership platforms — holds 2 full floors in this exact building,
                independently confirming its investment-grade credentials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Investment Structure (Gated) ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Deal Metrics</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">Investment Structure</h2>
          </div>

          {/* Public stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {publicStructure.map((s) => (
              <div
                key={s.label}
                className={`flex flex-col p-5 rounded-2xl border ${s.highlight
                  ? "border-gold/40 bg-amber-50/60 dark:bg-amber-900/10"
                  : "border-border bg-card"
                  }`}
              >
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-2">{s.label}</p>
                <p className={`text-xl md:text-2xl font-heading font-bold ${s.highlight ? "text-gold-dark dark:text-gold" : "text-foreground"}`}>
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Gated section */}
          {!unlocked ? (
            <div className="relative rounded-2xl border border-border overflow-hidden min-h-[480px]">
              {/* blurred preview rows */}
              <div className="p-8 space-y-4 select-none pointer-events-none">
                {lockedItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 blur-[6px] opacity-50">
                    <div className="w-2 h-2 rounded-full bg-gold shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* gate overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/85 backdrop-blur-md px-6 py-10">

                {/* icon with glow ring */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl scale-150" />
                  <div className="relative w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-xl">
                    <Lock size={26} className="text-accent-foreground" />
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-2 text-center">
                  Unlock Full Details
                </h3>
                <p className="text-sm text-muted-foreground mb-8 text-center max-w-md leading-relaxed">
                  Share your phone number to instantly access the <strong>financial model</strong>, tenant name,
                  IRR projections, and SPV documentation.
                </p>

                {/* Phone form */}
                <div className="w-full max-w-md space-y-3">
                  <form onSubmit={handleUnlock} className="flex flex-col gap-3">
                    <input
                      type="tel"
                      placeholder="Enter your 10-digit phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm text-center tracking-wider"
                      required
                      minLength={10}
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl gold-gradient text-accent-foreground font-semibold hover:opacity-90 active:scale-[0.98] transition-all text-sm shadow-lg shadow-gold/20"
                    >
                      Get Instant Access →
                    </button>
                  </form>

                  {/* divider */}
                  <div className="flex items-center gap-3 py-1">
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-xs text-muted-foreground">or</span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* WhatsApp alternative */}
                  <a
                    href="https://wa.me/919900456607?text=Hi%2C%20I%27m%20interested%20in%20Vaswani%20Centropolis.%20Please%20share%20the%20full%20investment%20details."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all active:scale-[0.98] shadow-md"
                  >
                    <MessageCircle size={17} />
                    Request Details via WhatsApp
                  </a>

                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    🔒 Your details are kept private and never shared.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-gold/30 bg-card p-6 md:p-8 animate-fade-in shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-6">
                <CheckCircle size={20} />
                <span className="font-semibold text-sm">Details Unlocked — Our team will reach out shortly</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {unlockedItems.map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-muted/60 border border-border">
                    <p className="text-[11px] uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── SPV & Legal Structure ────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container max-w-5xl">
          <div className="mb-4">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Investor Protection</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">SPV &amp; Legal Structure</h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Each investment is structured through a dedicated <strong>Special Purpose Vehicle (SPV)</strong> — a Private Limited
            Company that becomes the legal owner of the property, ensuring complete transparency and legal protection.
          </p>

          <div className="space-y-3">
            {spvItems.map((item, idx) => {
              const open = spvOpen === idx;
              return (
                <div
                  key={item.title}
                  className={`rounded-2xl border transition-all duration-300 ${open ? "border-gold/40 shadow-md bg-card" : "border-border bg-card"}`}
                >
                  <button
                    onClick={() => setSpvOpen(open ? null : idx)}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                      <item.Icon size={18} className="text-accent-foreground" />
                    </div>
                    <span className="flex-1 font-heading font-semibold text-foreground">{item.title}</span>
                    {open ? <ChevronUp size={18} className="text-gold shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                  </button>
                  {open && (
                    <div className="px-5 pb-5 pl-[74px] text-sm text-muted-foreground leading-relaxed animate-fade-in">
                      {item.desc}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Neighbourhood Map ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-1">Location</p>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">Neighbourhood Map</h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              title="Vaswani Centropolis Location"
              src="https://maps.google.com/maps?q=Vaswani+Centropolis,+21+Langford+Road,+Shanti+Nagar,+Bengaluru,+Karnataka+560025&z=17&output=embed"
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Landmark chips */}
          <div className="flex flex-wrap gap-2 mt-5">
            {[
              "Richmond Road – 0.5 km",
              "The Ritz-Carlton – 1.2 km",
              "UB City Mall – 1.5 km",
              "Cubbon Park Metro – 1.9 km",
              "MG Road – 2.5 km",
              "Nearest Metro – 3 km",
            ].map((lm) => (
              <span
                key={lm}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card text-xs text-muted-foreground"
              >
                <MapPin size={11} className="text-gold shrink-0" />
                {lm}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 navy-gradient relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative container max-w-3xl text-center">
          <p className="text-xs uppercase tracking-widest text-gold/80 font-semibold mb-3">Take the Next Step</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Interested in This Opportunity?
          </h2>
          <p className="text-white/65 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Reach out to our team to download the EOI, schedule a physical site visit, or get answers to your investment questions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="tel:+919900456607"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl gold-gradient text-accent-foreground font-semibold text-base hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-gold/20 w-full sm:w-auto justify-center"
            >
              <Phone size={18} />
              Express Interest – Download EOI
            </a>
            <a
              href="https://wa.me/919900456607"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-base active:scale-[0.98] transition-all shadow-lg shadow-emerald-900/30 w-full sm:w-auto justify-center"
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
            <a href="https://wa.me/919900456607" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-white/80 transition-colors">
              <MessageCircle size={14} /> WhatsApp us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
