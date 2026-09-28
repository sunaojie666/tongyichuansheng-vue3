import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '/download-api': {
        target: 'https://www.vicastcam.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/download-api/, ''),
      },
      '/download-file': {
        target: 'https://cdn.vicastcam.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/download-file/, ''),
      },
    },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
})
