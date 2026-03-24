import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Agregamos esto para obligar a Vite a leer la librería cruda
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})