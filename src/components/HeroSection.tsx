import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as const },
});

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="home">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[linear-gradient(160deg,#0d1810_0%,#111a14_50%,#0a1a10_100%)]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(26,140,78,0.22) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 90% 80%, rgba(26,140,78,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-[60px] pt-[120px] pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center w-full">
        {/* Left */}
        <div>
          <motion.div
            {...fadeUp(0.2)}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-[#5ede96] px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-7"
          >
            <span className="w-1.5 h-1.5 bg-[#5ede96] rounded-full animate-pulse-dot" />
            🌱 Nairobi, Kenya
          </motion.div>

          <motion.h1
            {...fadeUp(0.35)}
            className="font-head text-[clamp(42px,5.5vw,72px)] font-extrabold leading-[1.05] text-primary-foreground tracking-[-2px] mb-6"
          >
            Empowering
            <br />
            <span className="text-accent relative">
              Youth
              <motion.span
                className="absolute left-0 right-0 bottom-[8px] h-[3px] bg-accent rounded-sm origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              />
            </span>{" "}
            to
            <br />
            Lead Change
          </motion.h1>

          <motion.p {...fadeUp(0.5)} className="text-[17px] leading-relaxed text-primary-foreground/60 mb-10 max-w-[480px]">
            UPYA — Uwezo Pamoja Youths Association — builds resilient young leaders through skills, mentorship, and community action across Kenya.
          </motion.p>

          <motion.div {...fadeUp(0.65)} className="flex gap-3.5 flex-wrap">
            <button
              onClick={() => scrollTo("#programs")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(26,140,78,0.35)] cursor-pointer group"
            >
              <span className="group-hover:animate-bounce">Explore Programs</span> ↓
            </button>
            <button
              onClick={() => scrollTo("#about")}
              className="bg-transparent text-primary-foreground px-8 py-4 rounded-full font-semibold text-[15px] inline-flex items-center gap-2 border-[1.5px] border-primary-foreground/25 transition-all duration-300 hover:border-primary-foreground hover:bg-primary-foreground/[0.07] cursor-pointer"
            >
              ▶ Our Story
            </button>
          </motion.div>
        </div>

        {/* Right - Image Stack */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="relative h-[520px]">
            <div className="absolute top-0 right-0 w-[82%] h-[430px] rounded-[20px] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[#0d5a30]" />
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                alt="Youth empowerment"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 h-[220px] rounded-2xl overflow-hidden border-4 border-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent-dark" />
              <img
                src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&q=80"
                alt="Community"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute top-[30px] left-[-20px] bg-card rounded-[14px] p-3.5 px-[18px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-3 z-10">
              <div className="w-11 h-11 rounded-xl bg-green-light flex items-center justify-center text-xl">
                🏆
              </div>
              <div>
                <strong className="block font-head text-xl font-extrabold text-charcoal">2,400+</strong>
                <span className="text-xs text-muted-foreground">Youth Empowered</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        // className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        className="absolute -bottom-40 md:-bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] tracking-[2px] uppercase text-primary-foreground/40 font-medium">
          Scroll
        </span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-primary-foreground/50 to-transparent animate-scroll-line" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
