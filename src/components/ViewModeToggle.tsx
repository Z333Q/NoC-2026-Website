import { motion } from 'framer-motion';
import { User, Cpu } from 'lucide-react';

export type ViewMode = 'human' | 'machine';

const OPTIONS = [
  { value: 'human', label: 'Human', icon: User },
  { value: 'machine', label: 'Machine', icon: Cpu },
] as const;

interface ViewModeToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
  compact?: boolean;
}

export default function ViewModeToggle({ mode, onChange, compact = false }: ViewModeToggleProps) {
  return (
    <div
      role="group"
      aria-label="View the site as"
      className="flex items-center p-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/70 backdrop-blur-md"
    >
      {OPTIONS.map(({ value, label, icon: Icon }) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            aria-pressed={active}
            title={`View as ${label.toLowerCase()}`}
            className={`relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 ${
              active ? 'text-white' : 'text-[var(--color-text-secondary)] hover:text-white'
            } ${value === 'machine' ? 'font-mono' : ''}`}
          >
            {active && (
              <motion.span
                layoutId={compact ? 'view-mode-pill-mobile' : 'view-mode-pill'}
                className="absolute inset-0 -z-10 rounded-full bg-[var(--color-primary)]/20 border border-[var(--color-primary)]/50"
                transition={{ type: 'spring', stiffness: 420, damping: 34 }}
              />
            )}
            <Icon className="w-3.5 h-3.5" />
            <span className={compact ? 'sr-only sm:not-sr-only' : ''}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}
