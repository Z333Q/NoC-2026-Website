import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Gamepad2, FileText } from 'lucide-react';
import ConsoleMarkdown from './ConsoleMarkdown';

const PAGES = [
  { name: 'home', path: '/', file: '/index.md' },
  { name: 'thesis', path: '/thesis', file: '/thesis.md' },
  { name: 'work', path: '/work', file: '/work.md' },
  { name: 'stack', path: '/stack', file: '/stack.md' },
  { name: 'insights', path: '/insights', file: '/insights.md' },
  { name: 'contact', path: '/contact', file: '/contact.md' },
  { name: 'privacy', path: '/privacy', file: '/privacy.md' },
  { name: 'terms', path: '/terms', file: '/terms.md' },
] as const;

const GAME_URL = 'https://game.refi.trading';

type Status = 'loading' | 'ready' | 'error' | 'missing';

interface LogEntry {
  id: number;
  input: string;
  output: ReactNode;
}

const HELP = (
  <div className="space-y-0.5 text-[var(--color-text-secondary)]">
    <p><span className="text-white">ls</span>              list pages</p>
    <p><span className="text-white">open &lt;page&gt;</span>     read a page (or just type its name)</p>
    <p><span className="text-white">play</span>            Man vs Machine, by ReFi Trading</p>
    <p><span className="text-white">clear</span>           clear the screen</p>
    <p><span className="text-white">human</span>           switch back to the human view</p>
  </div>
);

const PAGE_LIST = (
  <p className="text-[var(--color-text-secondary)]">
    {PAGES.map((p) => (
      <span key={p.name} className="inline-block mr-5">
        <span className="text-[var(--color-primary-light)]">{p.name}</span>
        <span className="text-[var(--color-text-muted)]">{p.file}</span>
      </span>
    ))}
  </p>
);

export default function MachineConsole({ onExit }: { onExit: () => void }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const page = PAGES.find((p) => p.path === pathname);
  const [status, setStatus] = useState<Status>('loading');
  const [text, setText] = useState('');
  const [log, setLog] = useState<LogEntry[]>([]);
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!page) {
      setStatus('missing');
      return;
    }
    const controller = new AbortController();
    setStatus('loading');
    fetch(page.file, { signal: controller.signal })
      .then(async (res) => {
        const body = await res.text();
        if (!res.ok || body.trimStart().startsWith('<')) throw new Error('Not found');
        setText(body);
        setStatus('ready');
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus('error');
      });
    return () => controller.abort();
  }, [page]);

  useEffect(() => {
    setLog([]);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  useEffect(() => {
    if (log.length) inputRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [log]);

  const run = (raw: string) => {
    const entry = raw.trim();
    if (!entry) return;
    const [cmd, arg] = entry.toLowerCase().split(/\s+/);
    const target = PAGES.find((p) => p.name === (arg ?? cmd));
    let output: ReactNode;

    if (cmd === 'human' || cmd === 'exit') return onExit();
    if (cmd === 'clear') return setLog([]);
    if (target && (!arg || ['open', 'cd', 'cat'].includes(cmd))) return navigate(target.path);

    if (cmd === 'help') output = HELP;
    else if (cmd === 'ls') output = PAGE_LIST;
    else if (cmd === 'play') {
      window.open(GAME_URL, '_blank', 'noopener,noreferrer');
      output = <p className="text-[var(--color-warning)]">Launching Man vs Machine at game.refi.trading. Good luck, human.</p>;
    } else {
      output = (
        <p className="text-[var(--color-error)]">
          command not found: {entry}. Type <span className="text-white">help</span>.
        </p>
      );
    }
    setLog((prev) => [...prev, { id: Date.now(), input: entry, output }]);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    run(input);
    setInput('');
  };

  const file = page?.file ?? pathname;
  const statusLine: Record<Status, ReactNode> = {
    loading: <span className="text-[var(--color-text-muted)]">fetching...</span>,
    ready: <span className="text-[var(--color-success)]">200 OK  text/markdown</span>,
    error: <span className="text-[var(--color-error)]">503 could not load this page. Try again or type "human".</span>,
    missing: <span className="text-[var(--color-error)]">404 no machine-readable version here. Type "ls".</span>,
  };

  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div className="rounded-xl border border-[var(--color-border-hover)] bg-[#06080c]/95 shadow-[0_0_60px_rgba(74,144,217,0.08)] overflow-hidden">
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg-tertiary)]/70">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[var(--color-error)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-warning)]/70" />
              <span className="w-3 h-3 rounded-full bg-[var(--color-success)]/70" />
            </div>
            <p className="flex-1 truncate font-mono text-xs text-[var(--color-text-secondary)]">
              agent@natureofcommerce:~{file}
            </p>
            {page && (
              <a
                href={page.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 font-mono text-xs text-[var(--color-text-muted)] hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                raw
              </a>
            )}
          </div>

          <div className="p-5 sm:p-8 font-mono text-[13px] sm:text-sm leading-relaxed" onClick={() => inputRef.current?.focus({ preventScroll: true })}>
            <div className="space-y-1 mb-6">
              <p className="text-[var(--color-text-muted)]">
                <span className="text-[var(--color-primary)]">$</span> curl -H "Accept: text/markdown" natureofcommerce.com{file}
              </p>
              <p>{statusLine[status]}</p>
            </div>

            <a
              href={GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="group flex items-start gap-3 mb-8 px-4 py-3 rounded-lg border border-dashed border-[var(--color-warning)]/35 bg-[var(--color-warning)]/[0.04] hover:border-[var(--color-warning)]/70 hover:bg-[var(--color-warning)]/[0.08] transition-colors"
            >
              <Gamepad2 className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-warning)] transition-transform group-hover:-rotate-12" />
              <span className="text-xs sm:text-[13px] text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-warning)]">// side quest: Man vs Machine.</span> Think you can out-trade a ReFi Trading
                algorithm? Type <span className="text-white">play</span> or click here.
              </span>
            </a>

            {status === 'ready' && <ConsoleMarkdown source={text} />}
            {status === 'loading' && <p className="text-[var(--color-text-muted)] animate-pulse">reading {file}</p>}

            <div className="mt-10 pt-6 border-t border-[var(--color-border)] space-y-4">
              <p className="text-[var(--color-text-muted)]">
                Type <span className="text-white">help</span> for commands. Full site for agents: {' '}
                <a href="/llms-full.txt" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-light)] hover:text-white transition-colors">/llms-full.txt</a>
              </p>

              {log.map((item) => (
                <div key={item.id} className="space-y-1">
                  <p className="text-white">
                    <span className="text-[var(--color-primary)]">&gt;</span> {item.input}
                  </p>
                  {item.output}
                </div>
              ))}

              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <label htmlFor="console-input" className="text-[var(--color-primary)] select-none">&gt;</label>
                <input
                  id="console-input"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder="help"
                  aria-label="Console command"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-[var(--color-text-muted)] caret-[var(--color-primary-light)]"
                />
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
