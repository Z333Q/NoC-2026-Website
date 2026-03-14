import { useEffect } from 'react';

interface SeoMeta {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical: string;
}

const defaultTitle = 'Nature of Commerce | Early-Stage VC Fund & Startup Launchpad';
const defaultDescription = 'Nature of Commerce is an early-stage venture capital fund, startup launchpad, and strategic consulting firm. We invest in founders building the future of digital commerce, Web3, DeFi, and tokenized economies. Apply for funding or join our accelerator program.';
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
      setMeta('meta[property="og:description"]', 'content', 'Early-stage venture capital fund investing in founders building the future of digital commerce, Web3, and tokenized economies. Apply for funding today.');
      setMeta('meta[name="twitter:title"]', 'content', 'Nature of Commerce | Early-Stage VC Fund');
      setMeta('meta[name="twitter:description"]', 'content', 'Early-stage VC fund and startup launchpad for Web3, DeFi, and digital commerce founders.');
      setMeta('meta[property="og:url"]', 'content', defaultCanonical);
      setMeta('meta[name="twitter:url"]', 'content', defaultCanonical);
      setMeta('link[rel="canonical"]', 'href', defaultCanonical);
    };
  }, [title, description, ogTitle, ogDescription, canonical]);
}
