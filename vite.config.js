import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Sets the base path for your assets
  build: {
    outDir: 'dist', // Your preferred output directory
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Custom chunking logic
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});