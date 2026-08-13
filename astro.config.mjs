// @ts-check
import { defineConfig } from 'astro/config';

const site = process.env.PUBLIC_SITE_URL || 'https://www.chattysparrow.com';
const base = process.env.PUBLIC_SITE_BASE || '';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static'
});
