// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'F:/TOUS MES PROJETS/vententsika/front/public', // Chemin vers le dossier public Laravel
    emptyOutDir: true,
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Changez ceci pour correspondre à votre API
        changeOrigin: true,
        secure: false,
      },
    },
  },
})