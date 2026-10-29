import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  root: 'src',
  base: './', // CRITICAL for Android WebView
  publicDir: path.resolve('public'),
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: path.resolve('www'),
    emptyOutDir: true,
    target: 'es2020',
  }
});
