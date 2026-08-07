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
      <span className="text-[13px] flex items-center gap-1.5">
        <svg viewBox="0 0 256 176" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M153.1 0H191l-65 176h-37.9L153.1 0zM0 176l65-176h37.9L37.9 176H0z" />
        </svg>
        <span className="font-medium tracking-wide">Anthropic</span>
      </span>
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
      <svg viewBox="0 0 60 25" className="h-6 fill-current" aria-label="Stripe">
        <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a10.2 10.2 0 0 1-4.56 1.02c-4.01 0-6.83-2.5-6.83-7.08 0-3.87 2.27-7.12 6.07-7.12 3.68 0 6.13 2.92 6.13 7.1v1.16zm-4.14-5.12c-1.06 0-2.03.73-2.22 2.33h4.24c-.07-1.42-.78-2.33-2.02-2.33zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V6.25h3.57l.18 1.03a4.7 4.7 0 0 1 3.5-1.42c3.04 0 5.3 2.85 5.3 7.08 0 4.76-2.47 7.36-5.51 7.36zm-.67-10.44c-1 0-1.67.46-2.11 1.04l.04 5.6c.42.5 1.06.99 2.07.99 1.6 0 2.7-1.57 2.7-3.84 0-2.19-1.08-3.79-2.7-3.79zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V6.25h3.58l.17 1.36c.98-1.74 2.93-1.7 3.46-1.56v3.85c-.54-.16-2.13-.34-3.09.93zM14.54 20.01h-2.2c-3.44 0-5.02-1.67-5.02-4.47V9.6H5.13V6.25h2.19L7.7 2.88l4.1-.87v4.24h2.73V9.6h-2.73v5.37c0 1.03.53 1.47 1.4 1.47l1.34-.01v3.58zM4.47 14.98l-4.1.86C.09 14.47 0 12.9 0 12.36c0-.76.13-1.47.37-2.13.23-.66.58-1.22 1.03-1.7a4.8 4.8 0 0 1 1.68-1.13A5.68 5.68 0 0 1 5.32 7c1.6 0 2.78.42 3.56 1.26.42.45.73.97.93 1.56l-3.83 1.1a1.33 1.33 0 0 0-1.36-.86c-.81 0-1.34.58-1.34 1.52 0 .51.05 1.65.14 2.3.06.4.42 1.1 1.05 1.1z" />
      </svg>
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
