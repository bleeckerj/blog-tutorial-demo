import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from '@astrojs/renderer-react';
import tailwind from "@astrojs/tailwind";
import remarkParse from 'remark-parse'

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact(), tailwind(), mdx()],
  server: {
    port: 3000
  },
  renderers: [react],
  // markdown: {
  //   remarkPlugins: [[remarkCustomPlugin, {/* plugin options here */}]],
  // },
});