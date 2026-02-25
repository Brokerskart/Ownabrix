import { Search, Landmark, FileText, Lock, TrendingUp, Users, Settings, Wallet, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  { icon: Search, title: "Property Sourcing", desc: "Ownabrix identifies Grade A commercial office spaces through global partners like JLL.", color: "from-gold to-gold-light" },
  { icon: Landmark, title: "SPV Formation", desc: "A dedicated Private Limited Company is created for each property, ring-fencing the asset from other risks." },
  { icon: FileText, title: "Private Placement", desc: "Investors contribute via a 1:99 ratio of Equity to Compulsory Convertible Debentures (CCDs)." },
  { icon: Lock, title: "Escrow & Purchase", desc: "All funds are held in a secure Escrow Account; released only for property acquisition." },
  { icon: TrendingUp, title: "Passive Income", desc: "After rent collection and management fee deduction, surplus is distributed to investors proportionally." },
];

const roles = [
  { icon: Users, title: "Sponsor", desc: "Lead arranger who identifies the target property and aggregates private capital." },
  { icon: Settings, title: "Operations & Compliance", desc: "Manages the SPV lifecycle including statutory filings, audits, and regulatory compliance under the Companies Act." },
  { icon: Landmark, title: "Property & Tenant Management", desc: "Handles tenant acquisition, lease negotiations, rent collection, and physical maintenance." },
  { icon: Wallet, title: "Payouts", desc: "Distributes surplus rent to investors after deducting management fees." },
];

const flowSteps = [
  { Icon: Search, label: "Source" },
  { Icon: Landmark, label: "SPV" },
  { Icon: Lock, label: "Escrow" },
  { Icon: FileText, label: "Placement" },
  { Icon: TrendingUp, label: "Returns" },
];

const HowItWorks = () => {
  return (
    <div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            How <span className="text-gold-gradient">Ownabrix</span> Works
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Ownabrix operates as an Asset Management Company (AMC) and Sponsor, bridging institutional-grade real estate and individual investors. Each property is isolated into its own legal structure (SPV) to ensure transparency and security.
          </p>

          {/* Inline workflow diagram */}
          <div className="mb-16 rounded-2xl border border-border bg-card p-6 md:p-10 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-8 text-center">The Investment Journey</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {flowSteps.map(({ Icon, label }, i) => (
                <div key={label} className="flex flex-col md:flex-row items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center shadow-md">
                      <Icon size={24} className="text-accent-foreground" />
                    </div>
                    <span className="text-xs font-semibold text-foreground text-center">{label}</span>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <ArrowRight
                      size={20}
                      className="text-gold/40 mx-4 rotate-90 md:rotate-0 my-2 md:my-0 shrink-0"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((s, i) => (
              <div key={s.title} className="flex gap-6 items-start">
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-accent-foreground font-bold">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className="w-px h-16 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role of Ownabrix */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-10">
            Role of Ownabrix as AMC/Sponsor
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {roles.map((r) => (
              <div key={r.title} className="p-6 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center mb-4">
                  <r.icon size={18} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <Link to="/properties" className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity">
            Explore Current Opportunity
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
