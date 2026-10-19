import { Link } from "react-router-dom";
import { BarChart3, Wallet, Building2, ShieldCheck, Search, Landmark, FileText, Lock, TrendingUp, ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import birlaImg from "@/assets/birla-evara-main.jpg";

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
              Own institutional-grade assets in Bengaluru's most iconic corridors. Fully managed. Exceptional capital appreciation. Zero hassle.
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
              Institutional-grade commercial &amp; residential landmarks, now accessible to individual investors.
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img src={birlaImg} alt="Birla Evara Sarjapur Road" className="w-full h-80 lg:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider gold-gradient text-accent-foreground shadow-lg flex items-center gap-1.5">
                <Sparkles size={12} /> Live Opportunity
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs">
                <p className="font-semibold text-gold">Birla Evara by Birla Estates</p>
                <p className="text-white/70">Sarjapur Road, Kodathi Village | RERA Registered</p>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Featured Investment Landmark</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
                Birla Evara, Sarjapur Road
              </h2>
              <p className="text-base text-foreground/80 font-medium mb-3">
                Anchor Your Portfolio in Bengaluru’s Primary Tech Corridor
              </p>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                A 25+ acre integrated residential township featuring an iconic 4 BHK + SQ Unit with asymmetrical 10:10:80 milestone payment terms and a planned 3.10-Acre in-township Birla Mandir.
              </p>
              <p className="text-xs text-gold font-medium mb-8 bg-amber-50/60 dark:bg-amber-950/20 p-3 rounded-lg border border-gold/30">
                ⭐ Prime micro-market: Minutes from Wipro Main Campus, RGA Tech Park, RMZ Ecospace, and walkable to DPS &amp; NPS Sarjapur.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Target Appreciation", value: "16–18% CAGR", sub: "* Base Case" },
                  { label: "Minimum Investment", value: "₹25 Lakhs", sub: "Fractional Unit" },
                  { label: "Asset Class", value: "4 BHK + SQ", sub: "~1,622 sft Carpet" },
                  { label: "Payment Plan", value: "10 : 10 : 80", sub: "Milestone-Based" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-xl bg-card border border-border shadow-sm">
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-semibold mb-1">{stat.label}</p>
                    <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-[10px] text-gold font-medium mt-0.5">{stat.sub}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity shadow-lg shadow-gold/20"
              >
                View Full Details &amp; Unlock Plans <ArrowRight size={18} />
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
