import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://flowhouse.cloud",
  base: "/",
  integrations: [react(), mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
