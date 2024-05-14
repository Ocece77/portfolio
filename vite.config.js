import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolio/', // Définir la base sur /portfolio/
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
  plugins: [react()],
});
