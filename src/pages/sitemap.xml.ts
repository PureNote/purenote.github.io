import type { APIRoute } from 'astro';
import { localeList, getLocalizedPath } from '../i18n/ui';

const SITE_ORIGIN = 'https://purenote.github.io';

export const GET: APIRoute = async () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const xhtmlLinks = [
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}/" />`,
    ...localeList.map((loc) => {
      const href = new URL(getLocalizedPath(loc, ''), SITE_ORIGIN).toString();
      return `    <xhtml:link rel="alternate" hreflang="${loc}" href="${href}" />`;
    }),
  ].join('\n');

  const urlEntries = localeList
    .map((loc) => {
      const locUrl = new URL(getLocalizedPath(loc, ''), SITE_ORIGIN).toString();
      return `  <url>
    <loc>${locUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
${xhtmlLinks}
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
