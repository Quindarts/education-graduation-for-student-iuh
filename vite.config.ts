import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import removeConsole from 'vite-plugin-remove-console';

export default defineConfig({
  plugins: [react(), removeConsole(),],
  resolve: {
    alias: { '@': path.resolve(__dirname, "./src") }
  },
  define: {
    'process.env': {}
  },
  server: {
    port: 5173,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173,
    },
  }
})