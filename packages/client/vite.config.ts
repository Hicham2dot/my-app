import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Port pour Vite
    proxy: {
      '/api': {
        target: 'http://localhost:4000',  // Redirige vers le backend sur port 4000
        changeOrigin: true
      }
    }
  }
})