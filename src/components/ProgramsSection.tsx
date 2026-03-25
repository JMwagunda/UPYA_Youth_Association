import { useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const programs = [
  { tag: "Flagship", title: "Vocational Skills Training", desc: "Hands-on training in tailoring, carpentry, technology, and beauty therapy for unemployed youth aged 18–30.", raised: "KES 1.2M", goal: "KES 1.54M", pct: 78, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75" },
  { tag: "Education", title: "Youth Leadership Academy", desc: "A 6-month mentorship and leadership curriculum building the next generation of community champions.", raised: "KES 940K", goal: "KES 1.5M", pct: 62, img: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=500&q=75" },
  { tag: "Tech", title: "Digital Literacy & ICT", desc: "Computer skills, coding basics, digital marketing, and freelancing for youth in underserved counties.", raised: "KES 550K", goal: "KES 1M", pct: 55, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=75" },
  { tag: "Girls", title: "She Leads Initiative", desc: "Empowering young women through scholarship support, mentorship, and sexual and reproductive health education.", raised: "KES 450K", goal: "KES 1M", pct: 45, img: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=500&q=75" },
  { tag: "Sports", title: "Sports for Development", desc: "Using football, volleyball, and athletics as vehicles for discipline, teamwork, and mental wellness.", raised: "KES 380K", goal: "KES 1M", pct: 38, img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=75" },
  { tag: "Environment", title: "Green Youth Initiative", desc: "Tree planting, waste management campaigns, and climate education driving environmental stewardship.", raised: "KES 900K", goal: "KES 1M", pct: 90, img: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?w=500&q=75" },
];

const ProgressBar = ({ pct }: { pct: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.width = pct + "%"; obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);

  return (
    <div className="h-1 bg-border rounded-full mb-3">
      <div ref={ref} className="h-full rounded-full bg-primary transition-all duration-[1.5s] ease-out" style={{ width: 0 }} />
    </div>
  );
};

const ProgramsSection = () => (
  <section className="py-[100px] px-6 md:px-[60px]" id="programs">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
        <div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-primary" />
              What We Do
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">Our Core Programs</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[16.5px] text-muted-foreground leading-relaxed max-w-[520px]">From skills bootcamps to community action, every program is designed to unlock real potential.</p>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(26,140,78,0.35)] shrink-0">
            View All Programs →
          </a>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <AnimatedSection key={p.title} delay={(i % 3) * 0.1}>
            <div className="group rounded-[20px] overflow-hidden border border-border bg-card transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_32px_60px_rgba(26,140,78,0.12)] hover:border-primary">
              <div className="h-[220px] relative overflow-hidden">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[1]" />
                <span className="absolute top-4 left-4 z-[2] bg-accent text-charcoal px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-head text-[19px] font-bold text-charcoal mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <ProgressBar pct={p.pct} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Raised: <strong className="text-charcoal">{p.raised}</strong></span>
                  <span>Goal: <strong className="text-charcoal">{p.goal}</strong></span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProgramsSection;
