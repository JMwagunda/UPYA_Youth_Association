import AnimatedSection from "./AnimatedSection";

const posts = [
  { cat: "Impact", date: "Mar 12, 2025", read: "4 min read", title: "How 50 Youth Turned a Nairobi Dump into a Business", desc: "UPYA's Green Youth Initiative cohort transformed waste into compost, earning KES 200K in their first quarter.", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&q=75" },
  { cat: "Program", date: "Feb 28, 2025", read: "3 min read", title: "She Leads 2025 Cohort Applications Are Now Open", desc: "We're welcoming 60 young women aged 16–24 into our transformative leadership and scholarship program.", img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&q=75" },
  { cat: "Community", date: "Jan 15, 2025", read: "5 min read", title: "UPYA Receives UN Youth Empowerment Recognition Award", desc: "We were honored at the East Africa Youth Innovation Summit for our model community approach.", img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&q=75" },
];

const BlogSection = () => (
  <section className="py-[100px] px-6 md:px-[60px] bg-surface" id="blog">
    <div className="max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-14 gap-6">
        <div>
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 text-primary text-xs font-bold tracking-[2px] uppercase mb-4">
              <span className="w-5 h-0.5 bg-primary" />Stories & Updates
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-head text-[clamp(32px,4vw,52px)] font-extrabold leading-[1.1] text-charcoal tracking-[-1.5px] mb-4">Latest from UPYA</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-[16.5px] text-muted-foreground leading-relaxed max-w-[520px]">News, impact stories, and insights from our programs and communities.</p>
          </AnimatedSection>
        </div>
        <AnimatedSection>
          <a href="#" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-[15px] inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary-mid hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(26,140,78,0.35)] shrink-0">
            View All Stories →
          </a>
        </AnimatedSection>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <div className="group rounded-[18px] overflow-hidden bg-card border border-border transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
              <div className="h-[200px] relative overflow-hidden">
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <span className="absolute bottom-3.5 left-3.5 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider z-[2]">{p.cat}</span>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground mb-2.5 flex gap-4">
                  <span>{p.date}</span><span>{p.read}</span>
                </div>
                <h3 className="font-head text-lg font-bold text-charcoal leading-tight mb-2.5 transition-colors duration-200 group-hover:text-primary">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                <a href="#" className="text-[13px] font-bold text-primary flex items-center gap-1.5 transition-all duration-200 group-hover:gap-2.5">
                  Read Story →
                </a>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
