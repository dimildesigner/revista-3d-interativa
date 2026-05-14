import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600, // Aumenta o limite para não dar erro com o Three.js
  },
  base: './', // Garante que os caminhos das imagens funcionem em qualquer subdiretório
})