
const About = () => {
  return (
    <div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="text-gold">Ownabrix</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Ownabrix is a specialized fractional ownership product by <strong className="text-foreground">VP Brokerskart Pvt. Ltd.</strong>, a firm with deep roots in Bengaluru's real estate ecosystem.
          </p>

          {/* Leadership */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-xl border border-border bg-card">
              <img
                src={`${import.meta.env.BASE_URL}pavan.jpg`}
                alt="Pavan D"
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gold/40 shadow-sm"
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Pavan D</h3>
              <p className="text-sm text-gold font-medium mb-3">Founder & CEO</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A finance-focused leader and RERA-approved expert dedicated to regulatory compliance and building a transparent "Sponsor" model for fractional real estate ownership.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <img
                src={`${import.meta.env.BASE_URL}karthik.jpg`}
                alt="Karthik D S"
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gold/40 shadow-sm"
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Karthik D S</h3>
              <p className="text-sm text-gold font-medium mb-3">Co-Founder & COO</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A specialist in channel sales and operations, ensuring seamless asset acquisition, leasing, and facility management.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <img
                src={`${import.meta.env.BASE_URL}Nanda.jpg`}
                alt="Nanda Kumar"
                className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gold/40 shadow-sm"
              />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-1">Nanda Kumar</h3>
              <p className="text-sm text-gold font-medium mb-3">CTO</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nanda Kumar brings 23+ years of experience across Cisco, HPE and SaaviGenAI. He has led teams and contributed to product development across enterprise technology.
              </p>
            </div>
          </div>

                   {/* Partners */}
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8">Strategic Partners</h2>
          <div className="space-y-6">
            {/* JLL Card */}
            <div className="p-8 rounded-xl border border-gold/30 bg-cream">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center min-w-[120px]">
                  <img
                    src={`${import.meta.env.BASE_URL}jll-logo.png`}
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

            {/* Brokerskart Card */}
            <div className="p-8 rounded-xl border border-gold/30 bg-cream">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center min-w-[120px]">
                  <img
                    src={`${import.meta.env.BASE_URL}brokerscart.jpg`}
                    alt="VP Brokerskart Logo"
                    className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground text-gold">VP Brokerskart</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-medium">Founding Partner & Advisory</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ownabrix is a specialized fractional real estate investment brand built by VP Brokerskart Pvt. Ltd., a premier Bengaluru real estate advisory firm.
                  </p>
                </div>
              </div>
            </div>

            {/* SaaviGenAI Card */}
            <div className="p-8 rounded-xl border border-gold/30 bg-cream">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="shrink-0 flex items-center justify-center min-w-[120px]">
                  <img
                    src={`${import.meta.env.BASE_URL}saavi.jpg`}
                    alt="SaaviGenAI Logo"
                    className="h-10 md:h-12 w-auto object-contain rounded"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground text-gold">SaaviGenAI</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-gold/15 text-gold font-medium">Technology Partner</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    SaaviGenAI | AI-Native Technology & Digital Transformation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
