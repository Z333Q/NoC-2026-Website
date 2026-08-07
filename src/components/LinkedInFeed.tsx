import { useEffect, useRef } from 'react';

export function LinkedInFeed({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = '';
    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'sk-ww-linkedin-page-post';
    widgetDiv.setAttribute('data-embed-id', '25703650');
    containerRef.current.appendChild(widgetDiv);

    const existingScript = document.querySelector(
      'script[src="https://widgets.sociablekit.com/linkedin-page-posts/widget.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className={className} />;
}
