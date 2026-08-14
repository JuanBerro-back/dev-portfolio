import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ajuste de base para GitHub Pages (nombre del repositorio dev-portfolio)
  base: process.env.NODE_ENV === 'production' ? '/dev-portfolio/' : '/',
  server: {
    port: 3000,
    open: true
  }
});
