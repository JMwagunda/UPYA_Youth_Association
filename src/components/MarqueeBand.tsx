const items = [
  "Youth Empowerment", "Skills Training", "Community Leadership", "Entrepreneurship",
  "Mentorship Programs", "Environmental Action", "Girls Education", "Sports & Arts",
];

const MarqueeBand = () => (
  <div className="bg-accent py-4 overflow-hidden flex" aria-hidden="true">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="px-8 font-head font-bold text-sm text-charcoal tracking-wider uppercase flex items-center gap-4"
        >
          {item}
          <span className="text-xs text-primary">✦</span>
        </span>
      ))}
    </div>
  </div>
);

export default MarqueeBand;
