import AnimatedSection from "./AnimatedSection";

const team = [
  { name: "Wanjiku Kamau", role: "Executive Director", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=75" },
  { name: "Brian Otieno", role: "Programs Manager", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=75" },
  { name: "Fatuma Ali", role: "Community Liaison", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=75" },
  { name: "David Mwangi", role: "Finance & Operations", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=75" },
];

const TeamSection = () => (
  <section className="py-[100px] px-6 md:px-[60px] bg-card" id="team">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4 justify-center">
            <span className="w-5 h-0.5 bg-primary" />Our People
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">
            Meet the Team<br />Behind UPYA
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="text-[16.5px] text-muted-foreground leading-relaxed">
            Passionate youth advocates, educators, and community builders driving change every day.
          </p>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {team.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="group rounded-[18px] overflow-hidden bg-surface transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <div className="h-[240px] relative overflow-hidden bg-gradient-to-br from-primary to-primary-mid">
                <img src={t.img} alt={t.name} className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-0 left-0 right-0 flex justify-end gap-2 p-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[2]">
                  <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-xs text-primary-foreground">𝕏</a>
                  <a href="#" className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-xs text-primary-foreground">in</a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-head text-base font-bold text-charcoal">{t.name}</h3>
                <span className="text-[13px] text-primary font-medium">{t.role}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
