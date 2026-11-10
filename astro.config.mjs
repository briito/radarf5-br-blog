// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://blog.radarf5.com.br',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
});