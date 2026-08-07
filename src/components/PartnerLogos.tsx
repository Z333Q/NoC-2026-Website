const logos = [
  {
    name: 'AMII',
    href: 'https://www.amii.ca',
    render: () => (
      <span className="font-bold tracking-wide text-[15px]">
        A<span className="text-emerald-400">M</span>II
      </span>
    ),
  },
  {
    name: 'NEXT AI',
    href: 'https://www.nextai.com',
    render: () => (
      <span className="font-black tracking-tight text-[14px]">
        NEXT <span className="font-light">AI</span>
      </span>
    ),
  },
  {
    name: 'VentureLabs',
    href: 'https://www.venturelabs.ca',
    render: () => (
      <span className="text-[13px]">
        <span className="font-bold">venture</span>
        <span className="font-light">labs</span>
      </span>
    ),
  },
  {
    name: 'Outlier Ventures',
    href: 'https://outlierventures.io',
    render: () => (
      <span className="font-semibold tracking-wide text-[12px] uppercase">
        Outlier Ventures
      </span>
    ),
  },
  {
    name: 'Chainlink Labs',
    href: 'https://chain.link',
    render: () => (
      <span className="text-[13px] flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M12 0L3 5v14l9 5 9-5V5l-9-5zm0 2.18l6.75 3.75v7.5L12 17.18l-6.75-3.75v-7.5L12 2.18z" />
        </svg>
        <span className="font-semibold">Chainlink</span>
      </span>
    ),
  },
  {
    name: 'Google for Startups',
    href: 'https://startup.google.com',
    render: () => (
      <span className="text-[12px]">
        <span className="font-normal">Google for </span>
        <span className="font-bold">Startups</span>
      </span>
    ),
  },
];

export function PartnerLogoStrip({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-x-10 gap-y-6 ${className}`}>
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/50 hover:text-white/90 transition-colors duration-300"
        >
          {logo.render()}
        </a>
      ))}
    </div>
  );
}

export function PartnerLogoGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-2 ${className}`}>
      {logos.map((logo) => (
        <a
          key={logo.name}
          href={logo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition-colors p-2.5 h-12 text-white/60 hover:text-white/90"
        >
          {logo.render()}
        </a>
      ))}
    </div>
  );
}
