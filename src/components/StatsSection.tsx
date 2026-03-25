import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { target: 2400, label: "Youth Empowered" },
  { target: 18, label: "Active Programs" },
  { target: 47, label: "Partner Organizations" },
  { target: 12, label: "Counties Reached" },
];

const Counter = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!inView || animated.current) return;
    animated.current = true;
    const dur = 1800;
    const start = performance.now();
    const step = (ts: number) => {
      const prog = Math.min((ts - start) / dur, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      setCount(Math.round(ease * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <>{count}+</>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="bg-charcoal py-20 px-6 md:px-[60px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-[2px]">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group py-12 px-6 md:px-10 md:border-r border-b md:border-b-0 border-primary-foreground/[0.07] last:border-r-0 relative overflow-hidden transition-colors duration-300 hover:bg-primary/[0.08]"
          >
            <div className="absolute top-0 left-0 w-[3px] h-0 bg-primary transition-all duration-500 group-hover:h-full" />
            <div className="font-head text-[clamp(36px,5vw,60px)] font-extrabold text-accent leading-none tracking-[-2px] mb-2">
              <Counter target={s.target} inView={inView} />
            </div>
            <div className="text-[15px] text-primary-foreground/50">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
