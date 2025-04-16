import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alx-shop-project/shop-clothes/', // علشان المسار يكون صح على GitHub Pages
})