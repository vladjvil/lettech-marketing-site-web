import { defineConfig } from 'vite';
import path from "node:path";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.resolve('src')
      }
    ]
  }
});
