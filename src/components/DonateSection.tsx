import { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const amounts = [500, 1000, 2500, 5000];
const causes = [
  { icon: "🎓", title: "School Scholarship Fund", desc: "Supporting 80 secondary school students to stay in school.", pct: 72, goal: "KES 800K" },
  { icon: "💻", title: "Tech Lab Equipment", desc: "Building a digital learning lab for 120 youth in Kibra.", pct: 48, goal: "KES 1.2M" },
  { icon: "🌱", title: "Green Youth Camp 2025", desc: "Annual environmental camp for 200 young climate ambassadors.", pct: 91, goal: "KES 500K" },
];

const MiniFill = ({ pct }: { pct: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.style.width = pct + "%"; obs.unobserve(el); } }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [pct]);
  return <div ref={ref} className="h-full rounded-md bg-primary transition-all duration-1500" style={{ width: 0 }} />;
};

const DonateSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);

  return (
    <section className="py-[100px] px-6 md:px-[60px] bg-surface" id="donate">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-[60px] items-start">
        <div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-primary" />Make a Difference
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">
              Your Donation<br />Changes Lives
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-[16.5px] text-muted-foreground leading-relaxed max-w-[520px] mb-9">
              Every shilling you give directly funds a young Kenyan's education, skill, or future. Pick an amount and give today.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-wrap gap-2.5 mb-5">
              {amounts.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedAmount(a)}
                  className={`px-5 py-3 rounded-full border-[1.5px] font-semibold text-[15px] transition-all duration-200 ${
                    selectedAmount === a
                      ? "bg-primary border-primary text-primary-foreground"
                      : "bg-card border-border text-charcoal hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  }`}
                >
                  KES {a.toLocaleString()}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-muted-foreground tracking-wide">Full Name</label>
                <input type="text" placeholder="Your full name" className="px-4 py-3 rounded-[10px] border-[1.5px] border-border text-[15px] text-charcoal bg-card outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-muted-foreground tracking-wide">Email Address</label>
                <input type="email" placeholder="your@email.com" className="px-4 py-3 rounded-[10px] border-[1.5px] border-border text-[15px] text-charcoal bg-card outline-none focus:border-primary transition-colors" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-muted-foreground tracking-wide">Donate To (Program)</label>
                <select className="px-4 py-3 rounded-[10px] border-[1.5px] border-border text-[15px] text-charcoal bg-card outline-none focus:border-primary transition-colors">
                  <option>General Fund — Where Most Needed</option>
                  <option>Vocational Skills Training</option>
                  <option>Youth Leadership Academy</option>
                  <option>She Leads Initiative</option>
                  <option>Digital Literacy & ICT</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] font-semibold text-muted-foreground tracking-wide">Amount (KES)</label>
                <input type="number" value={selectedAmount} onChange={(e) => setSelectedAmount(Number(e.target.value))} className="px-4 py-3 rounded-[10px] border-[1.5px] border-border text-[15px] text-charcoal bg-card outline-none focus:border-primary transition-colors" />
              </div>
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-[15px] flex items-center justify-center gap-2 transition-all duration-300 hover:bg-[#0f6b3a] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(26,140,78,0.3)] mt-1.5">
                💚 Donate Now
              </button>
              <p className="text-xs text-muted-foreground text-center">Secure payment via M-Pesa & Card. All donations are tax-deductible.</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <div>
            <h3 className="font-head text-[28px] font-extrabold text-charcoal mb-4">Current Fundraising<br />Campaigns</h3>
            <p className="text-sm text-muted-foreground mb-0">Help us hit our targets and change more lives this year.</p>
          </div>
          <div className="flex flex-col gap-[18px] mt-8">
            {causes.map((c, i) => (
              <AnimatedSection key={c.title} delay={i * 0.1}>
                <div className="p-5 bg-card rounded-[14px] border border-border">
                  <h4 className="font-head text-[15px] font-bold mb-1.5">{c.icon} {c.title}</h4>
                  <p className="text-[13px] text-muted-foreground">{c.desc}</p>
                  <div className="h-1.5 bg-border rounded-md mt-2.5">
                    <MiniFill pct={c.pct} />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
                    <span><strong className="text-primary">{c.pct}%</strong> Funded</span>
                    <span>Goal: <strong className="text-charcoal">{c.goal}</strong></span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default DonateSection;
