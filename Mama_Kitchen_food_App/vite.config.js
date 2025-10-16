import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // your current folder
  build: {
    outDir: 'dist'
  },
  server: {
    open: true, // auto-open browser
  },
})
