import AnimatedSection from "./AnimatedSection";

const CTABanner = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary py-20 px-6 md:px-[60px] relative overflow-hidden">
      <div className="absolute -top-[100px] -right-[100px] w-[400px] h-[400px] rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-20 left-[20%] w-[300px] h-[300px] rounded-full bg-black/[0.06]" />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-[1]">
        <AnimatedSection>
          <h2 className="font-head text-[clamp(28px,3.5vw,46px)] font-extrabold text-primary-foreground tracking-[-1.5px] mb-2.5">
            Join Us in<br />Building Kenya's Future
          </h2>
          <p className="text-base text-primary-foreground/75">Volunteer, partner, or donate — every action matters. Let's move together.</p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col md:flex-row gap-3.5 shrink-0">
            <button
              onClick={() => scrollTo("#donate")}
              className="bg-card text-primary px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-charcoal hover:text-primary-foreground hover:-translate-y-[3px]"
            >
              Donate Today
            </button>
            <a href="#" className="bg-transparent text-primary-foreground px-8 py-4 rounded-full font-semibold text-[15px] inline-flex items-center gap-2 border-[1.5px] border-primary-foreground/40 transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/10">
              Become a Volunteer
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CTABanner;
