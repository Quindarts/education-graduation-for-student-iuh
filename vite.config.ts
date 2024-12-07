import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import removeConsole from 'vite-plugin-remove-console';
import sitemap from 'vite-plugin-sitemap'
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [
    react(),
    removeConsole(),
    sitemap({
      hostname: "https://stu.iuh.io.vn:5000",
    }),
    imagemin({
      pngquant: {
        quality: [0.6, 0.8],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, "./src") }
  },
  server: {
    port: 5174,
    host: true,
  },
  preview: {
    port: 5174,
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
  }
})