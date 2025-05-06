import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

export default defineConfig({
  base: '/', // ✅ Important for Vercel
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  }
})
