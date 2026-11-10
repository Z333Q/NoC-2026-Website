import { readFile, writeFile, mkdir } from 'node:fs/promises';

const origin = 'https://natureofcommerce.com';
const pages = ['index', 'thesis', 'work', 'stack', 'insights', 'contact', 'privacy', 'terms'];
const template = await readFile('dist/index.html', 'utf8');
const escape = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
const inline = (value) => escape(value).replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
const documents = [];

for (const name of pages) {
  const source = await readFile(`public/${name}.md`, 'utf8');
  documents.push(source.trim());
  const path = name === 'index' ? '/' : `/${name}`;
  const url = `${origin}${path}`;
  const title = source.match(/^# (.+)$/m)?.[1];
  const description = source.match(/^> (.+)$/m)?.[1];
  if (!title || !description) throw new Error(`Missing discovery metadata for ${name}`);
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(title)}</title>`);
  for (const [attribute, key, value] of [
    ['name', 'title', title], ['name', 'description', description],
    ['property', 'og:title', title], ['property', 'og:description', description], ['property', 'og:url', url],
    ['name', 'twitter:title', title], ['name', 'twitter:description', description], ['name', 'twitter:url', url],
  ]) {
    html = html.replace(new RegExp(`<meta ${attribute}="${key}" content="[^"]*"\\s*/>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  }
  html = html.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  if (name !== 'index') html = html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');
  const structured = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description,
    inLanguage: 'en', isPartOf: { '@id': `${origin}/#website` },
    mainEntity: { '@id': `${origin}/#organization` },
  };
  const navigation = pages.map((page) => `<a href="${page === 'index' ? '/' : `/${page}`}" style="margin-right:16px">${page === 'index' ? 'Home' : page}</a>`).join('');
  const body = source.split('\n').filter((line) => !line.startsWith('Canonical URL:')).map((line) => {
    const heading = /^(#{1,3}) (.*)$/.exec(line);
    if (heading) return `<h${heading[1].length}>${inline(heading[2])}</h${heading[1].length}>`;
    if (!line.trim() || line.trim() === '---') return '';
    return `<p>${inline(line.replace(/^> /, '').replace(/^- /, '• '))}</p>`;
  }).join('\n');
  html = html.replace('</head>', `<link rel="alternate" type="text/markdown" href="/${name}.md" title="Plain-text version" /><script type="application/ld+json">${JSON.stringify(structured).replace(/</g, '\\u003c')}</script></head>`);
  html = html.replace('<div id="root"></div>', `<div id="root"><div style="max-width:960px;margin:auto;padding:32px;line-height:1.6"><nav aria-label="Site navigation">${navigation}</nav><main>${body}</main></div></div>`);
  const directory = name === 'index' ? 'dist' : `dist/${name}`;
  await mkdir(directory, { recursive: true });
  await writeFile(`${directory}/index.html`, html);
}
await writeFile('dist/llms-full.txt', `# Nature of Commerce — Full Site Content\n> Published page text from ${origin}. Use each page's canonical URL when citing it.\n\n${documents.join('\n\n---\n\n')}\n`);
console.log(`Generated ${pages.length} crawlable pages and synchronized the complete AI-readable text.`);
