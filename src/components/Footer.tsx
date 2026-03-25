const Footer = () => (
  <footer className="bg-charcoal pt-20 pb-10 px-6 md:px-[60px]">
    <div className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-[60px] pb-[60px] border-b border-primary-foreground/[0.07]">
        {/* Brand */}
        <div>
          <a href="#" className="font-head font-extrabold text-[22px] text-primary-foreground flex items-center gap-2.5 mb-[18px]">
            <div className="w-9 h-9 bg-primary rounded-[10px] flex items-center justify-center text-primary-foreground text-sm font-extrabold font-head">U</div>
            UPYA
          </a>
          <p className="text-[14.5px] text-primary-foreground/45 leading-relaxed max-w-[280px] mb-6">
            Uwezo Pamoja Youths Association — empowering Kenya's youth since 2012 through skills, mentorship, and community action.
          </p>
          <div className="flex gap-2.5">
            {["𝕏", "f", "in", "▶", "📷"].map((icon) => (
              <a key={icon} href="#" className="w-[38px] h-[38px] rounded-full bg-primary-foreground/[0.06] border border-primary-foreground/10 flex items-center justify-center text-primary-foreground/50 text-sm transition-all duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-head text-sm font-bold text-primary-foreground tracking-wider uppercase mb-5">Programs</h4>
          <ul className="flex flex-col gap-2.5">
            {["Vocational Training", "Leadership Academy", "She Leads", "Digital Literacy", "Sports for Dev", "Green Youth"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-primary-foreground/45 transition-colors duration-200 hover:text-primary flex items-center gap-1.5 group">
                  <span className="text-[11px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Organisation */}
        <div>
          <h4 className="font-head text-sm font-bold text-primary-foreground tracking-wider uppercase mb-5">Organisation</h4>
          <ul className="flex flex-col gap-2.5">
            {["About UPYA", "Our Team", "Annual Reports", "News & Stories", "Volunteer", "Careers"].map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-primary-foreground/45 transition-colors duration-200 hover:text-primary flex items-center gap-1.5 group">
                  <span className="text-[11px] opacity-0 transition-opacity duration-200 group-hover:opacity-100">→</span>
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-head text-sm font-bold text-primary-foreground tracking-wider uppercase mb-5">Contact</h4>
          <div className="flex flex-col gap-3.5">
            {[
              { icon: "📍", text: "Ngara, Nairobi\nP.O. Box 12345-00100" },
              { icon: "📞", text: "+254 700 000 000" },
              { icon: "✉️", text: "info@upyakenya.org" },
            ].map((c) => (
              <div key={c.icon} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center text-sm flex-shrink-0">{c.icon}</div>
                <span className="text-[13.5px] text-primary-foreground/45 leading-snug whitespace-pre-line">{c.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-5">
        <p className="text-[13.5px] text-primary-foreground/30">
          © 2025 UPYA — Uwezo Pamoja Youths Association. All rights reserved.{" "}
          <a href="#" className="text-primary">Privacy Policy</a>
        </p>
        <div className="bg-accent/10 border border-accent/20 text-accent px-3.5 py-1.5 rounded-full text-xs font-semibold">
          🌿 Proudly Made in Kenya
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
