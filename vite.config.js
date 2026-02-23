import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// For GitHub Pages: use repo name as base (e.g. '/itzel-portfolio/')
// For username.github.io use base: '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
