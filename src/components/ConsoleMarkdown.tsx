import { Fragment, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

const SITE_ORIGIN = 'https://natureofcommerce.com';
const LINK_CLASS =
  'text-[var(--color-primary-light)] underline decoration-[var(--color-primary)]/40 underline-offset-4 hover:decoration-[var(--color-primary-light)] hover:text-white transition-colors';

function renderLink(text: string, href: string, key: number): ReactNode {
  if (href.startsWith(SITE_ORIGIN)) {
    const path = href.slice(SITE_ORIGIN.length).split('#')[0] || '/';
    const isFile = /\.[a-z0-9]+$/i.test(path);
    if (!isFile) {
      return (
        <Link key={key} to={path} className={LINK_CLASS}>
          {text}
        </Link>
      );
    }
  }
  if (/^(https?:|mailto:)/i.test(href)) {
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
        {text}
      </a>
    );
  }
  return <Fragment key={key}>{text}</Fragment>;
}

function renderInline(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    if (match.index > last) out.push(text.slice(last, match.index));
    if (match[1]) {
      out.push(renderLink(match[1], match[2], key++));
    } else {
      out.push(
        <strong key={key++} className="text-white font-semibold">
          {match[3]}
        </strong>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

const HEADING_STYLES: Record<number, string> = {
  1: 'text-lg sm:text-xl text-white font-semibold mt-2',
  2: 'text-base sm:text-lg text-[var(--color-primary-light)] font-semibold mt-6',
  3: 'text-white font-semibold mt-4',
};

function ConsoleLine({ line }: { line: string }) {
  const heading = /^(#{1,3})\s+(.*)$/.exec(line);
  if (heading) {
    return (
      <p className={HEADING_STYLES[heading[1].length]}>
        <span className="text-[var(--color-text-muted)]">{heading[1]} </span>
        {renderInline(heading[2])}
      </p>
    );
  }
  if (line.startsWith('> ')) {
    return (
      <p className="border-l-2 border-[var(--color-primary)]/60 pl-3 text-[var(--color-text-primary)]/90 italic">
        {renderInline(line.slice(2))}
      </p>
    );
  }
  const item = /^(\s*)- (.*)$/.exec(line);
  if (item) {
    return (
      <p className="flex gap-2 text-[var(--color-text-secondary)]" style={{ paddingLeft: `${item[1].length * 0.5}rem` }}>
        <span className="text-[var(--color-primary)] select-none">-</span>
        <span>{renderInline(item[2])}</span>
      </p>
    );
  }
  if (line.trim() === '---') {
    return <p className="text-[var(--color-text-muted)] select-none overflow-hidden whitespace-nowrap">{'-'.repeat(120)}</p>;
  }
  if (!line.trim()) return <div className="h-2" aria-hidden="true" />;
  return <p className="text-[var(--color-text-secondary)]">{renderInline(line)}</p>;
}

export default function ConsoleMarkdown({ source }: { source: string }) {
  return (
    <div className="space-y-1 break-words">
      {source.split('\n').map((line, i) => (
        <ConsoleLine key={i} line={line} />
      ))}
    </div>
  );
}
