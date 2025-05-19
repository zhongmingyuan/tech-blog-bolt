import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [
    react(),
    NodeGlobalsPolyfillPlugin({
      buffer: true
    })
  ],
  base: '/tech-blog-bolt/',
  optimizeDeps: {
    exclude: ['lucide-react', 'gray-matter'],
  },
  define: {
    'Buffer': ['Buffer', null]
  }
});