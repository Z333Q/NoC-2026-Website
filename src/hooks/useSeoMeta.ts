import { useEffect } from 'react';

interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
}

const BASE_URL = 'https://natureofcommerce.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/nature-of-commerce-vis.png`;
const defaultTitle = 'Nature of Commerce | Zeshan Ahmad — Builder, Researcher & Web3 Infrastructure Architect';
const defaultDescription = 'Zeshan Ahmad is a technical founder, researcher, and educator building the infrastructure layer for the autonomous agent economy. Creator of P402 (x402 agentic payments), co-founder of ReFi Trading (algorithmic portfolio management), and professor of Blockchain & AI.';
const defaultCanonical = `${BASE_URL}/`;

export function useSeoMeta({ title, description, canonical, ogTitle, ogDescription, ogImage, ogType, keywords }: SeoMeta) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    const resolvedOgTitle = ogTitle ?? title;
    const resolvedOgDesc = ogDescription ?? description;
    const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;
    const resolvedOgType = ogType ?? 'website';

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', resolvedOgTitle);
    setMeta('meta[property="og:description"]', 'content', resolvedOgDesc);
    setMeta('meta[property="og:url"]', 'content', canonical);
    setMeta('meta[property="og:image"]', 'content', resolvedOgImage);
    setMeta('meta[property="og:type"]', 'content', resolvedOgType);
    setMeta('meta[name="twitter:title"]', 'content', resolvedOgTitle);
    setMeta('meta[name="twitter:description"]', 'content', resolvedOgDesc);
    setMeta('meta[name="twitter:url"]', 'content', canonical);
    setMeta('meta[name="twitter:image"]', 'content', resolvedOgImage);
    setMeta('link[rel="canonical"]', 'href', canonical);

    if (keywords) {
      setMeta('meta[name="keywords"]', 'content', keywords);
    }

    return () => {
      document.title = defaultTitle;
      setMeta('meta[name="description"]', 'content', defaultDescription);
      setMeta('meta[property="og:title"]', 'content', defaultTitle);
      setMeta('meta[property="og:description"]', 'content', defaultDescription);
      setMeta('meta[property="og:url"]', 'content', defaultCanonical);
      setMeta('meta[property="og:image"]', 'content', DEFAULT_OG_IMAGE);
      setMeta('meta[property="og:type"]', 'content', 'website');
      setMeta('meta[name="twitter:title"]', 'content', defaultTitle);
      setMeta('meta[name="twitter:description"]', 'content', defaultDescription);
      setMeta('meta[name="twitter:url"]', 'content', defaultCanonical);
      setMeta('meta[name="twitter:image"]', 'content', DEFAULT_OG_IMAGE);
      setMeta('link[rel="canonical"]', 'href', defaultCanonical);
    };
  }, [title, description, ogTitle, ogDescription, canonical, ogImage, ogType, keywords]);
}
