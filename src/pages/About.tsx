import { Users, Award, Handshake } from "lucide-react";

const About = () => {
  return (
    <div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="text-gold">Ownabrix</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Ownabrix is a specialized fractional ownership product by <strong className="text-foreground">VP Brokerskart Pvt. Ltd.</strong>, a firm with deep roots in Bengaluru's real estate ecosystem.
          </p>

          {/* Leadership */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4">
                <Users size={22} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Pavan D</h3>
              <p className="text-sm text-gold font-medium mb-3">Founder & CEO</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A finance-focused leader and RERA-approved expert dedicated to regulatory compliance and building a transparent "Sponsor" model for fractional real estate ownership.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mb-4">
                <Award size={22} className="text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Karthik D S</h3>
              <p className="text-sm text-gold font-medium mb-3">Co-Founder & COO</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A specialist in channel sales and operations, ensuring seamless asset acquisition, leasing, and facility management.
              </p>
            </div>
          </div>

          {/* Partners */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Strategic Partners</h2>
          <div className="p-8 rounded-xl border border-gold/30 bg-cream">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <div className="shrink-0 p-3 bg-white rounded-lg shadow-sm border border-border/50">
                <img
                  src="/jll-logo.png"
                  alt="JLL Logo"
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 text-gold">JLL (Jones Lang LaSalle)</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Global real estate services firm with 25+ years in the Bangalore market, 29 million sft transacted (2020–2025), and 25% market share — Ownabrix's property sourcing partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
