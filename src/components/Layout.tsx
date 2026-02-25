import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact Us" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-card/95 backdrop-blur-md">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="/ownabrix-logo.png"
              alt="Ownabrix"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to
                  ? "text-accent-foreground bg-accent/20"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/properties"
              className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-md gold-gradient text-accent-foreground hover:opacity-90 transition-opacity"
            >
              Explore Opportunity →
            </Link>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-card animate-fade-in">
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${location.pathname === link.to
                    ? "text-accent-foreground bg-accent/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/properties"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center px-5 py-3 text-sm font-semibold rounded-md gold-gradient text-accent-foreground"
              >
                Explore Opportunity →
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="navy-gradient text-primary-foreground">
        <div className="container py-12 md:py-16">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="mb-1">
                <img
                  src="/ownabrix-logo.png"
                  alt="Ownabrix"
                  className="h-7 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
                A product of VP Brokerskart Pvt. Ltd. Institutional-grade fractional real estate ownership in Bengaluru.
              </p>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-gold transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact</h4>
              <p className="text-sm text-primary-foreground/70 mb-2">connect@brokerskart.com</p>
              <p className="text-sm text-primary-foreground/70 mb-4">+91 99004 56607</p>
              <div className="flex gap-3">
                <a
                  href="tel:+919900456607"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
                >
                  <Phone size={16} /> Call Us
                </a>
                <a
                  href="https://wa.me/919900456607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-[hsl(145,60%,40%)]/80 hover:bg-[hsl(145,60%,40%)] transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-primary-foreground/10">
            <p className="text-xs text-primary-foreground/50 leading-relaxed">
              Disclaimer: Ownabrix is a brand of VP Brokerskart Private Limited. Real estate investments are subject to market risks. All yields are projected based on existing lease agreements. Past performance does not guarantee future results.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-primary-foreground/40">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Disclaimer</span>
              <span>© {new Date().getFullYear()} VP Brokerskart Pvt. Ltd.</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+919900456607"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone size={20} />
        </a>
        <a
          href="https://wa.me/919900456607"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[hsl(145,60%,40%)] text-primary-foreground shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle size={20} />
        </a>
      </div>
    </div>
  );
};

export default Layout;
