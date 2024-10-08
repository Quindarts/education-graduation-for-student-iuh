import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, "./src") }
  },
  define: {
    'process.env': {}
  },
  server: {
    port: 5001,
    host: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5001,
    },
  }
})