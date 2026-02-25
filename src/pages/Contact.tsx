import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", budget: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="py-20 md:py-28 bg-background">
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Contact <span className="text-gold">Us</span>
          </h1>
          <p className="text-muted-foreground mb-12">Get in touch with our team to explore investment opportunities.</p>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-heading font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:connect@brokerskart.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Mail size={18} className="text-gold" /> connect@brokerskart.com
                  </a>
                  <a href="tel:+919900456607" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Phone size={18} className="text-gold" /> +91 99004 56607
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin size={18} className="text-gold" /> Bengaluru, Karnataka, India
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="tel:+919900456607"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Phone size={16} /> Call Us
                </a>
                <a
                  href="https://wa.me/919900456607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-emerald-600 text-primary-foreground text-sm font-medium hover:bg-emerald-700 transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="p-6 rounded-xl border border-border bg-card space-y-5">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Request a Callback</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                      <input
                        type="text" required maxLength={100}
                        value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number *</label>
                      <input
                        type="tel" required minLength={10} maxLength={15}
                        value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 99004 56607"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <input
                      type="email" required maxLength={255}
                      value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Investment Budget Range</label>
                    <select
                      value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select range</option>
                      <option value="25L-50L">₹25L – ₹50L</option>
                      <option value="50L-1Cr">₹50L – ₹1Cr</option>
                      <option value="1Cr+">₹1Cr+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Message (Optional)</label>
                    <textarea
                      maxLength={1000} rows={3}
                      value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Any specific questions?"
                    />
                  </div>
                  <button type="submit" className="w-full px-6 py-3 rounded-md gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
                    Request a Callback
                  </button>
                </form>
              ) : (
                <div className="p-8 rounded-xl border border-gold/30 bg-card text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-4">
                    <Phone size={28} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">Our team will reach out to you within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
