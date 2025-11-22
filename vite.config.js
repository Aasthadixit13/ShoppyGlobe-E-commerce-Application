import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // THIS IS THE ONLY THING YOU NEED TO ADD
  ssr: {
    // Prevent Vite from bundling these big packages into serverless functions
    external: ['react-redux', '@reduxjs/toolkit', 'redux', 'reselect'],
  },

  // Extra safety net (optional but harmless – keeps the same rule for client build too)
  build: {
    rollupOptions: {
      external: ['react-redux', '@reduxjs/toolkit', 'redux', 'reselect'],
    },
  },
});
