import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://fmarketcz-production.up.railway.app/',
  server: {
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000,
  },
  integrations: [
    tailwind(),
    image({ serviceEntryPoint: '@astrojs/image/sharp' }),
  ],
});
