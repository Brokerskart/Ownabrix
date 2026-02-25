import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is my money safe?", a: "All funds are held in an Escrow account managed by a bank and only released when property registration is initiated. Your capital is protected at every stage of the investment process." },
  { q: "Who manages the tenant?", a: "Ownabrix (Brokerskart) handles all facility management, property taxes, and tenant relations. You receive passive monthly income without any operational burden." },
  { q: "Is this RERA compliant?", a: "Ownabrix operates within the RERA framework for brokerage and the Companies Act (Section 42) for private placements, ensuring full regulatory compliance." },
  { q: "What is an SPV?", a: "A Special Purpose Vehicle is a Private Limited Company set up specifically for each property. It legally owns the asset and ring-fences it from other business risks. Investors hold equity and CCDs in this company." },
  { q: "How do I earn returns?", a: "Returns come from monthly rental income distributed proportionally to your investment stake, plus potential capital appreciation at exit." },
  { q: "What is the minimum investment?", a: "The minimum investment is approximately ₹25 Lakhs, subject to property-specific terms." },
  { q: "How is the exit structured?", a: "Post the lock-in period, investors can exit through resale of their SPV stake or participate in a full building exit, typically targeted at 5–7 years." },
  { q: "What documents will I receive?", a: "You'll receive share certificates, CCD certificates, SPV incorporation documents, lease agreements, and regular financial statements." },
];

const FAQ = () => {
  return (
    <div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h1>
          <p className="text-muted-foreground mb-12">
            Everything you need to know about investing with Ownabrix.
          </p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
