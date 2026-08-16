import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const nonBlockingStylesheet = {
  name: 'non-blocking-stylesheet',
  enforce: 'post',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+)">/,
      '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
    );
  },
};

export default defineConfig({
  plugins: [react(), nonBlockingStylesheet],
  server: { port: 5173 },
});
