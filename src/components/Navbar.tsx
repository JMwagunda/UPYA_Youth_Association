import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Impact", href: "#impact" },
  { label: "Team", href: "#team" },
  { label: "Stories", href: "#blog" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[76px] px-6 md:px-[60px] transition-all duration-400 ${
        scrolled
          ? "bg-card/95 backdrop-blur-xl border-b border-border shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
          : ""
      }`}
    >
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        className={`font-head font-extrabold text-[22px] tracking-tight flex items-center gap-2.5 transition-colors duration-400 ${
          scrolled ? "text-charcoal" : "text-primary-foreground"
        }`}
      >
        <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-primary-foreground text-sm font-extrabold font-head">
          U
        </div>
        UPYA
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex items-center gap-9">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className={`text-[14.5px] font-medium tracking-wide transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-muted-foreground" : "text-primary-foreground/85"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#donate"
            onClick={(e) => { e.preventDefault(); scrollTo("#donate"); }}
            className="bg-accent text-charcoal px-[22px] py-2.5 rounded-full font-bold text-sm transition-all duration-300 hover:bg-charcoal hover:text-primary-foreground hover:-translate-y-0.5"
          >
            Donate Now
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block w-[22px] h-[2px] transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-primary-foreground"
            }`}
          />
        ))}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[76px] left-0 right-0 bg-card border-b border-border p-6 flex flex-col gap-4 md:hidden shadow-lg"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="text-muted-foreground font-medium text-base hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={(e) => { e.preventDefault(); scrollTo("#donate"); }}
              className="bg-accent text-charcoal px-6 py-3 rounded-full font-bold text-sm text-center"
            >
              Donate Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
