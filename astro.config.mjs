// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import rehypeExternalLinks from './src/lib/rehype-external-links.mjs';

export default defineConfig({
  site: 'https://blog.radarf5.com.br',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  markdown: {
    // Links externos no corpo dos artigos recebem rel="sponsored noopener".
    rehypePlugins: [[rehypeExternalLinks, { siteHost: 'blog.radarf5.com.br' }]],
  },
});
