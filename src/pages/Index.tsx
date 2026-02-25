import { Link } from "react-router-dom";
import { BarChart3, Wallet, Building2, ShieldCheck, Search, Landmark, FileText, Lock, TrendingUp, ArrowRight, Phone, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import vaswaniImg from "@/assets/vaswani-centropolis.jpg";

const features = [
  { icon: BarChart3, title: "Low Entry, High Yield", desc: "Start owning Grade A commercial office space for a fraction of the total cost." },
  { icon: Wallet, title: "Passive Monthly Income", desc: "Rent is distributed directly to your account every month—no tenant management required." },
  { icon: Building2, title: "Data-Backed Selection", desc: "We don't \"guess\" locations. We use institutional data from JLL to pick properties with the highest capital appreciation potential." },
  { icon: ShieldCheck, title: "Full Transparency", desc: "Every asset is owned by a dedicated SPV where you hold a legal stake." },
];

const steps = [
  { icon: Search, title: "Selection", desc: "Explore JLL-vetted opportunities" },
  { icon: Landmark, title: "Commitment", desc: "Sign the EOI and complete your KYC" },
  { icon: Lock, title: "Escrow", desc: "Funds held in a secure, bank-monitored Escrow account" },
  { icon: FileText, title: "Ownership", desc: "Receive Equity shares and CCDs in the property-specific SPV" },
  { icon: TrendingUp, title: "Earn", desc: "Receive monthly rental distributions" },
];

const marketStats = [
  { value: "231.95 Mn", label: "Total Office Stock (sft)" },
  { value: "₹99.88", label: "Avg Rent / sft / month" },
  { value: "24.14 Mn", label: "Gross Leasing Volume (sft)" },
  { value: "10.5%", label: "Vacancy Rate" },
  { value: "₹175–275", label: "CBD Rentals / sft / month" },
  { value: "3.30%", label: "CBD Vacancy Rate" },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <img src={heroBg} alt="Premium commercial skyscraper at twilight" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative container py-20 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight">
              The Future of Real Estate Ownership is{" "}
              <span className="text-gold-gradient">Fractional.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Own institutional-grade commercial assets in Bengaluru's most iconic corridors. Fully managed. Monthly yields. Zero Hassle.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity"
              >
                Explore Current Opportunity <ArrowRight size={18} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                How It Works
              </a>
            </div>
            <p className="mt-8 text-sm text-primary-foreground/50">
              A Product of VP Brokerskart Pvt. Ltd. | Sourcing Partner: JLL
            </p>
          </div>
        </div>
      </section>

      {/* Why Ownabrix */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Why <span className="text-gold">Ownabrix</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Institutional-grade commercial real estate, now accessible to individual investors.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-gold/30 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <f.icon size={22} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Property */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src={vaswaniImg} alt="Vaswani Centropolis" className="w-full h-80 lg:h-[450px] object-cover" />
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider gold-gradient text-accent-foreground">
                Live Opportunity
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Vaswani Centropolis
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Anchor your portfolio in the heart of Bengaluru's CBD. A Grade A commercial office space on Langford Road.
              </p>
              <p className="text-sm text-gold font-medium mb-8">
                "Join a community of institutional owners — 2 floors in this building are already held by major fractional platforms (hBits), validating the asset's long-term value."
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Target Rental Yield", value: "7.5% p.a." },
                  { label: "Asset Size", value: "8,873 Sq. Ft." },
                  { label: "Location", value: "Langford Road, CBD" },
                  { label: "Lock-in", value: "3 Years (MNC)" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-lg bg-card border border-border">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{stat.label}</p>
                    <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity"
              >
                View Full Details <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 md:py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              How It <span className="text-gold">Works</span>
            </h2>
            <p className="mt-4 text-muted-foreground">Five simple steps to owning premium real estate.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center p-6">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-accent-foreground" />
                </div>
                <div className="absolute top-4 left-4 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Snapshot */}
      <section className="py-20 md:py-28 navy-gradient">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
              Bengaluru Market <span className="text-gold-gradient">Snapshot</span>
            </h2>
             <p className="mt-4 text-primary-foreground/70">
               India's strongest office leasing market — Highest stock & highest leasing. India's tech & R&D hub, GCC Capital, and Unicorn Capital.
             </p>
          </div>
           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketStats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-primary-foreground/40">Source: JLL Research, Bengaluru Office Market</p>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to Own a Piece of Bengaluru's Best Real Estate?
          </h2>
          <p className="text-muted-foreground mb-8">
            Schedule a call with our team to learn more about the current opportunity.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919900456607"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity"
            >
              <Phone size={18} /> Schedule a Call
            </a>
            <a
              href="https://wa.me/919900456607"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md bg-emerald-600 text-primary-foreground hover:bg-emerald-700 transition-colors"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
