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
    // Links externos no corpo dos artigos recebem rel="sponsored noopener",
    // exceto os de fontes não comerciais listadas abaixo (apenas "noopener").
    // Para citar uma fonte oficial sem rótulo de patrocinado, inclua o domínio.
    rehypePlugins: [[rehypeExternalLinks, {
      siteHost: 'blog.radarf5.com.br',
      nonCommercialHosts: ['gov.br', 'wikipedia.org'],
    }]],
  },
});
