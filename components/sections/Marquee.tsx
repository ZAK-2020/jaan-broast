const ITEMS = [
  'BROAST',
  'BIRYANI',
  'BBQ',
  'BURGERS',
  'PIZZA',
  'SHAWARMA',
  'CHINESE',
  'HANDI',
  'NASHTA',
];

export function Marquee() {
  // Render the list twice so the -50% translate seamlessly loops
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden border-y border-ink bg-ink text-cream"
      aria-hidden="true"
    >
      <div className="font-display flex gap-12 whitespace-nowrap py-4 text-[22px] uppercase tracking-[0.02em] animate-marquee max-[480px]:gap-8 max-[480px]:text-lg">
        {loop.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-12 max-[480px]:gap-8">
            ★ {item}
            <span className="text-saffron">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
