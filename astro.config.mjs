import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://satriyo.pages.dev",
  experimental: {
    fonts: [
      {
        name: "Geist Sans",
        provider: fontProviders.fontsource(),
        cssVariable: "--font-geist-sans",
      },
      {
        name: "Geist Mono",
        provider: fontProviders.fontsource(),
        cssVariable: "--font-geist-mono",
      }
    ],
  },
  integrations: [
    sitemap(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
