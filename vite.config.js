import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

export default defineConfig({
  base: '/', // ✅ DO NOT use '/protfolio/' unless deploying to a subfolder
  plugins: [react(), svgr()],
  server: {
    port: 3000,
  }
})
