import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind({
      // Configure the Tailwind integration
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    ssr: {
      noExternal: ['@fontsource/*']
    }
  }
});
