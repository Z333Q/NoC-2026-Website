import { useEffect } from 'react';

interface SeoMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical: string;
}

const defaultTitle = 'Nature of Commerce | Zeshan Ahmad — Builder, Researcher & Web3 Infrastructure Architect';
const defaultDescription = 'Zeshan Ahmad is a technical founder, researcher, and educator building the infrastructure layer for the autonomous agent economy. Creator of P402 (x402 agentic payments), co-founder of ReFi Trading (algorithmic portfolio management), and professor of Blockchain & AI at Kutaisi International University.';
const defaultCanonical = 'https://natureofcommerce.com/';

export function useSeoMeta({ title, description, ogTitle, ogDescription, canonical }: SeoMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', ogTitle ?? title);
    setMeta('meta[property="og:description"]', 'content', ogDescription ?? description);
    setMeta('meta[name="twitter:title"]', 'content', ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', 'content', ogDescription ?? description);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[name="twitter:url"]', 'content', canonical);
    setMeta('link[rel="canonical"]', 'href', canonical);

    return () => {
      document.title = defaultTitle;
      setMeta('meta[name="description"]', 'content', defaultDescription);
      setMeta('meta[property="og:title"]', 'content', defaultTitle);
      setMeta('meta[property="og:description"]', 'content', 'Technical founder building P402 agentic payment infrastructure and ReFi Trading algorithmic strategies. NVIDIA DLI certified educator and researcher at Kutaisi International University.');
      setMeta('meta[name="twitter:title"]', 'content', 'Nature of Commerce | Zeshan Ahmad — Builder & Web3 Infrastructure Architect');
      setMeta('meta[name="twitter:description"]', 'content', 'Technical founder building P402 agentic payments (x402), ReFi Trading algorithmic strategies, and ZK compliance infrastructure. Educator, researcher, 20+ years in financial systems.');
      setMeta('meta[property="og:url"]', 'content', defaultCanonical);
      setMeta('meta[name="twitter:url"]', 'content', defaultCanonical);
      setMeta('link[rel="canonical"]', 'href', defaultCanonical);
    };
  }, [title, description, ogTitle, ogDescription, canonical]);
}
