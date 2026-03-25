import AnimatedSection from "./AnimatedSection";

const testimonials = [
  { text: "Before UPYA, I had no direction. The skills training gave me not just a trade — it gave me confidence and a sustainable income. I now employ two others.", name: "Mary Njeri", role: "Tailoring Graduate, 2022 · Nairobi", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=70" },
  { text: "The She Leads program showed me that my background doesn't define my ceiling. I am now studying on a full scholarship at a university in Kisumu.", name: "Grace Achieng", role: "She Leads Beneficiary · Kisumu", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=70" },
  { text: "UPYA's digital literacy course opened doors I didn't know existed. Within 3 months of graduating I was freelancing on Upwork making real money.", name: "Kevin Mungai", role: "ICT Program Graduate · Nakuru", img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&q=70" },
];

const TestimonialsSection = () => (
  <section className="py-[100px] px-6 md:px-[60px] bg-charcoal">
    <div className="max-w-[1200px] mx-auto">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <AnimatedSection>
          <div className="inline-flex items-center gap-2 text-accent text-xs font-bold tracking-[2px] uppercase mb-4 justify-center">
            <span className="w-5 h-0.5 bg-accent" />Alumni Voices
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-primary-foreground tracking-[-1.5px]">
            Lives Transformed<br />Through UPYA
          </h2>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="bg-primary-foreground/[0.04] border border-primary-foreground/[0.07] rounded-[20px] p-8 transition-all duration-300 hover:bg-primary-foreground/[0.07] hover:border-primary/30 hover:-translate-y-1">
              <div className="text-accent text-sm mb-4 tracking-widest">★★★★★</div>
              <p className="text-[15px] text-primary-foreground/70 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <strong className="block text-sm font-semibold text-primary-foreground">{t.name}</strong>
                  <span className="text-xs text-primary-foreground/40">{t.role}</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
