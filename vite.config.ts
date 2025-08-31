import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages user/organization site (tharindushakya.github.io) keep base '/'
  // If deploying to a project page repository, set base to '/repo-name/' instead.
  base: '/',
})
