import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // base
  base: "l/despierta_de_novato_a_estratega_para_posicionar_tu_marca",
  // output dir
  outDir: "l/despierta_de_novato_a_estratega_para_posicionar_tu_marca",
});