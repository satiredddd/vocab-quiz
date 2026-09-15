import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: this must match your GitHub repo name exactly,
  // e.g. if your repo is github.com/you/vocab-quiz, keep it as '/vocab-quiz/'.
  // If you name the repo something else, change this to '/your-repo-name/'.
  base: '/vocab-quiz/',
})
