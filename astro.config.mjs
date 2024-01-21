import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/renderer-react';
import tailwind from "@astrojs/tailwind";
import remarkParse from 'remark-parse'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://backoffice.nearfuturelaboratory.com",
  integrations: [preact(), tailwind(), mdx()],
  server: {
    port: 3000
  },
  build: {
    inlineStylesheets: `auto`,
    assetsPrefix: 'https://backoffice.nearfuturelaboratory.com'
  },
  renderers: [react],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'abyss-color-theme',
      // Alternatively, provide multiple themes
      // https://shikiji.netlify.app/guide/dual-themes#light-dark-dual-themes
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shikiji.netlify.app/guide/transformers
      // Find common transformers: https://shikiji.netlify.app/packages/transformers
      transformers: [],
    },
  },
  // markdown: {
  //   remarkPlugins: [[remarkCustomPlugin, {/* plugin options here */}]],
  // },
});