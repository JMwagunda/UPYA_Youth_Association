const partners = ["UNICEF Kenya", "Kenya Red Cross", "USAID", "UN Women", "AfriYAN", "GIZ Kenya"];

const PartnersSection = () => (
  <div className="py-[60px] px-6 md:px-[60px] bg-card border-t border-border">
    <div className="max-w-[1200px] mx-auto">
      <p className="text-[13px] text-muted-foreground tracking-[2px] uppercase font-semibold mb-9 text-center">
        Trusted Partners & Funders
      </p>
      <div className="flex items-center justify-center gap-8 md:gap-[60px] flex-wrap">
        {partners.map((p) => (
          <span key={p} className="font-head text-base font-bold text-border tracking-tight transition-colors duration-300 hover:text-muted-foreground">
            {p}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PartnersSection;
