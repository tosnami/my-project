import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-project/', // علشان المسار يكون صح على GitHub Pagesekdhbekdcedfkwdb
})