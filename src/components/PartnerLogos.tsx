const logos = [
  {
    name: 'AMII',
    href: 'https://app-na1.hubspotdocuments.com/documents/4771956/view/1672146498?accessId=c22707',
    render: () => (
      <span className="font-bold tracking-wide text-[15px]">AMII</span>
    ),
  },
  {
    name: 'NEXT AI',
    href: 'https://directory.nextcanada.com/directory/ventures/?program=next-ai-montreal',
    render: () => (
      <span className="font-black tracking-tight text-[14px]">
        NEXT <span className="font-light">AI</span>
      </span>
    ),
  },
  {
    name: 'VentureLab',
    href: 'https://www.venturelab.ca/portfolio/refi-trading',
    render: () => (
      <span className="text-[13px]">
        <span className="font-bold">venture</span>
        <span className="font-light">lab</span>
      </span>
    ),
  },
  {
    name: 'Chainlink Labs',
    href: 'https://chainlinklabs.com/',
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
    href: 'https://startup.google.com/programs/accelerator/canada/',
    render: () => (
      <span className="text-[12px]">
        <span className="font-normal">Google for </span>
        <span className="font-bold">Startups</span>
      </span>
    ),
  },
  {
    name: 'Outlier Ventures',
    href: 'https://outlierventures.io',
    render: () => (
      <span className="font-semibold tracking-wide text-[12px] uppercase">Outlier Ventures</span>
    ),
  },
  {
    name: 'Web Summit',
    href: 'https://qatar.websummit.com/',
    render: () => (
      <span className="font-black tracking-tight text-[13px] uppercase">Web Summit</span>
    ),
  },
  {
    name: 'Edmonton Unlimited',
    href: 'https://edmontonunlimited.com/alumni-companies/',
    render: () => (
      <span className="text-[12px]">
        <span className="font-bold">Edmonton</span>
        <span className="font-light"> Unlimited</span>
      </span>
    ),
  },
  {
    name: 'Summit',
    href: 'https://summit.co/community',
    render: () => (
      <span className="font-black tracking-widest text-[13px] uppercase">Summit</span>
    ),
  },
  {
    name: 'Anthropic',
    href: 'https://www.anthropic.com/news/canadian-ai-research',
    render: () => (
      <span className="font-semibold tracking-wide text-[14px]">Anthropic</span>
    ),
  },
  {
    name: 'NVIDIA',
    href: 'https://www.nvidia.com/en-us/startups/',
    render: () => (
      <span className="font-bold tracking-wider text-[14px] uppercase">NVIDIA</span>
    ),
  },
  {
    name: 'Base',
    href: 'https://www.base.org/',
    render: () => (
      <span className="font-bold tracking-wide text-[14px]">Base</span>
    ),
  },
  {
    name: 'Cloudflare',
    href: 'https://www.cloudflare.com/startups/',
    render: () => (
      <span className="font-semibold tracking-wide text-[13px]">Cloudflare</span>
    ),
  },
  {
    name: 'Stripe',
    href: 'https://stripe.com/en-ca/startups',
    render: () => (
      <span className="font-bold tracking-wider text-[14px] italic">Stripe</span>
    ),
  },
  {
    name: 'Startup Grind',
    href: 'https://pitchbattleroyale.com/competition-winners/refi-trading',
    render: () => (
      <span className="text-[12px] flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        <span className="font-bold uppercase tracking-wide">Startup Grind</span>
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
          className="group text-white/50 hover:text-white transition-all duration-300 hover:scale-110"
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
          className="group relative flex items-center justify-center rounded-lg bg-white/5 border border-white/[0.06] hover:bg-white/10 hover:border-white/20 transition-all duration-300 p-2.5 h-12 text-white/60 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-white/5"
        >
          {logo.render()}
        </a>
      ))}
    </div>
  );
}
