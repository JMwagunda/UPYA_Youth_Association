import AnimatedSection from "./AnimatedSection";

const steps = [
  { num: "01", title: "Community Identification", desc: "We work directly with community leaders to identify and recruit the most vulnerable youth who need support." },
  { num: "02", title: "Needs Assessment & Enrolment", desc: "Each youth undergoes a life skills and aptitude assessment to match them with the right program track." },
  { num: "03", title: "Training & Mentorship", desc: "Certified trainers and experienced mentors guide participants through structured, practical curricula." },
  { num: "04", title: "Placement & Alumni Support", desc: "Graduates are connected to jobs, internships, or seed funding — and remain in our alumni network." },
];

const ImpactSection = () => (
  <section className="py-[100px] px-6 md:px-[60px] bg-charcoal relative overflow-hidden" id="impact">
    <div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(26,140,78,0.15),transparent_70%)] pointer-events-none" />
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div>
        <div className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[2px] uppercase mb-4">
          <span className="w-5 h-0.5 bg-accent" />
          How We Work
        </div>
        <AnimatedSection>
          <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-primary-foreground tracking-[-1.5px] mb-4">
            From Grassroots<br />to Lasting Change
          </h2>
        </AnimatedSection>
        <AnimatedSection>
          <p className="text-[16.5px] text-primary-foreground/55 leading-relaxed max-w-[520px] mb-10">
            Our four-step model ensures every young person receives relevant, high-quality support that translates into real opportunity.
          </p>
        </AnimatedSection>
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 0.1}>
              <div className="group flex gap-6 py-7 border-b border-primary-foreground/[0.07] last:border-b-0">
                <div className="font-head text-[40px] font-extrabold text-primary-foreground/[0.08] leading-none min-w-[48px] transition-colors duration-300 group-hover:text-accent">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-head text-lg font-bold text-primary-foreground mb-1.5">{s.title}</h3>
                  <p className="text-[14.5px] text-primary-foreground/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatedSection>
        <div className="relative">
          <div className="w-full h-[500px] rounded-3xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-mid to-[#0d5a30]" />
            <img
              src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80"
              alt="Impact"
              className="absolute inset-0 w-full h-full object-cover opacity-65"
            />
          </div>
          <div className="absolute -bottom-[30px] -left-[30px] bg-accent rounded-[18px] p-6 max-w-[280px] shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            <p className="text-[14.5px] font-semibold text-charcoal leading-snug italic">
              "UPYA changed everything for me. I went from nothing to running my own tailoring business in 18 months."
            </p>
            <cite className="block text-xs font-bold mt-2 text-primary not-italic">— Amina W., Program Graduate 2023</cite>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ImpactSection;
