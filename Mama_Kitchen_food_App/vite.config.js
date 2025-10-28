import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
  root: '.', // current folder
  build: {
    outDir: 'dist'
  },
  server: {
    open: true, // auto-open browser
  },
})
