// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

const site = process.env.PUBLIC_SITE_URL || 'https://www.chattysparrow.com';
const base = process.env.PUBLIC_SITE_BASE || '';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('https://www.chattysparrow.com/audiorouter/release-notes') })],
});