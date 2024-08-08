import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // base
  base: "l/despierta_claves_del_marketing_antes_de_iniciar_tu_propio_negocio",
  // output dir
  outDir: "despierta_claves_del_marketing_antes_de_iniciar_tu_propio_negocio",
});