import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js'
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://59s62w99-5174.inc1.devtunnels.ms',
        changeOrigin: true
      }
    }
  }
})
