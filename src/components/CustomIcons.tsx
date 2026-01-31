import { motion } from 'framer-motion';

export function FinTechIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M24 4L44 14V34L24 44L4 34V14L24 4Z"
        stroke="url(#fintech-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="8"
        stroke="url(#fintech-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.path
        d="M24 16V12M24 36V32M16 24H12M36 24H32"
        stroke="url(#fintech-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="fintech-gradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CommerceIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M8 8H40V40H8V8Z"
        stroke="url(#commerce-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M16 16L32 32M32 16L16 32"
        stroke="url(#commerce-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="4"
        stroke="url(#commerce-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="commerce-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function AIIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M24 8L32 16L24 24L32 32L24 40L16 32L24 24L16 16L24 8Z"
        stroke="url(#ai-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M8 24H16M32 24H40"
        stroke="url(#ai-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="3"
        fill="url(#ai-gradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <defs>
        <linearGradient id="ai-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function TokenIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24"
        cy="24"
        r="16"
        stroke="url(#token-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M24 8V24L32 28"
        stroke="url(#token-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="8"
        stroke="url(#token-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <motion.path
        d="M12 18L24 24L36 18M12 30L24 24L36 30"
        stroke="url(#token-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <defs>
        <linearGradient id="token-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SystemsIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24"
        cy="24"
        r="4"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.circle
        cx="12"
        cy="12"
        r="3"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.circle
        cx="36"
        cy="12"
        r="3"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.circle
        cx="36"
        cy="36"
        r="3"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      <motion.circle
        cx="12"
        cy="36"
        r="3"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <motion.path
        d="M15 15L20 20M28 20L33 15M33 33L28 28M20 28L15 33"
        stroke="url(#systems-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
      <defs>
        <linearGradient id="systems-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PrinciplesIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24"
        cy="24"
        r="16"
        stroke="url(#principles-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="11"
        stroke="url(#principles-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="6"
        stroke="url(#principles-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="2"
        fill="url(#principles-gradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      />
      <defs>
        <linearGradient id="principles-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BalanceIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M24 8V40"
        stroke="url(#balance-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M10 16L24 8L38 16L24 24L10 16Z"
        stroke="url(#balance-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      <motion.path
        d="M10 32L24 24L38 32L24 40L10 32Z"
        stroke="url(#balance-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="balance-gradient" x1="10" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FortressIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M8 40V28L16 20L24 28L32 20L40 28V40H8Z"
        stroke="url(#fortress-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M16 20V12L24 8L32 12V20"
        stroke="url(#fortress-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      />
      <motion.rect
        x="20"
        y="32"
        width="8"
        height="8"
        stroke="url(#fortress-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      />
      <defs>
        <linearGradient id="fortress-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function GrowthIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M8 40L16 32L24 36L32 24L40 8"
        stroke="url(#growth-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.path
        d="M32 8H40V16"
        stroke="url(#growth-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="growth-gradient" x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NetworkIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24"
        cy="12"
        r="4"
        stroke="url(#network-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.circle
        cx="12"
        cy="28"
        r="4"
        stroke="url(#network-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      <motion.circle
        cx="36"
        cy="28"
        r="4"
        stroke="url(#network-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      />
      <motion.path
        d="M22 15L14 25M26 15L34 25M12 32V40M36 32V40M24 16V40"
        stroke="url(#network-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="network-gradient" x1="12" y1="12" x2="36" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function CodeIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M16 16L8 24L16 32"
        stroke="url(#code-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.path
        d="M32 16L40 24L32 32"
        stroke="url(#code-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.path
        d="M28 12L20 36"
        stroke="url(#code-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <defs>
        <linearGradient id="code-gradient" x1="8" y1="12" x2="40" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function StrategyIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.circle
        cx="24"
        cy="24"
        r="16"
        stroke="url(#strategy-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <motion.path
        d="M24 8V24L32 16"
        stroke="url(#strategy-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="3"
        fill="url(#strategy-gradient)"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      />
      <defs>
        <linearGradient id="strategy-gradient" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function InnovationIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path
        d="M24 8L28 16L36 18L30 26L32 34L24 30L16 34L18 26L12 18L20 16L24 8Z"
        stroke="url(#innovation-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.circle
        cx="24"
        cy="22"
        r="4"
        stroke="url(#innovation-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      />
      <defs>
        <linearGradient id="innovation-gradient" x1="12" y1="8" x2="36" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
