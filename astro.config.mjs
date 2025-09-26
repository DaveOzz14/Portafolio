// @ts-check
import { defineConfig } from 'astro/config';
<<<<<<< HEAD

// https://astro.build/config
export default defineConfig({});
=======
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [react()]
});
>>>>>>> 8724680a3fe62d5deef229693a6591b116c6f12b
