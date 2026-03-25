import AnimatedSection from "./AnimatedSection";

const pillars = [
  { icon: "🎯", title: "Our Mission", desc: "To empower youth with skills, knowledge, and platforms to drive sustainable change in their communities." },
  { icon: "🔭", title: "Our Vision", desc: "A generation of resilient, self-reliant African youth shaping the future of their nation." },
  { icon: "💚", title: "Our Values", desc: "Ubuntu, Integrity, Inclusion, Innovation, and Community-first action." },
];

const AboutSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-[100px] px-6 md:px-[60px] bg-surface" id="about">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <AnimatedSection>
          <div className="relative">
            <div className="w-full h-[460px] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0d5a30]" />
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80"
                alt="Youth group"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
              />
            </div>
            <div className="absolute -bottom-7 -right-7 bg-charcoal rounded-[18px] p-5 px-7 text-primary-foreground min-w-[180px] shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <strong className="block font-head text-[40px] font-extrabold text-accent leading-none">12+</strong>
              <span className="text-[13px] text-primary-foreground/60">Years of Impact</span>
            </div>
          </div>
        </AnimatedSection>

        <div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-primary" />
              Who We Are
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">
              Uwezo Pamoja —<br />Power of Unity
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[16.5px] text-muted-foreground leading-relaxed mb-8">
              UPYA is a youth-led, community-based organization that unlocks the potential of young Kenyans through transformative programs in leadership, vocational skills, civic participation, and entrepreneurship.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col gap-3.5 mb-9">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-start gap-3.5 p-4 px-5 bg-card rounded-xl border border-border transition-all duration-300 hover:border-primary hover:shadow-[0_8px_24px_rgba(26,140,78,0.08)] hover:translate-x-1"
                >
                  <div className="w-10 h-10 flex-shrink-0 bg-green-light rounded-[10px] flex items-center justify-center text-lg">
                    {p.icon}
                  </div>
                  <div>
                    <strong className="block text-[14.5px] font-semibold text-charcoal mb-0.5">{p.title}</strong>
                    <span className="text-[13.5px] text-muted-foreground">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <button
              onClick={() => scrollTo("#programs")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(26,140,78,0.35)]"
            >
              Discover Our Programs →
            </button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
