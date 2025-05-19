import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/tech-blog-bolt/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});