import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repositoryBase = '/print-canvas-examples/'
const isGitHubPagesBuild = process.env.BUILD_TARGET === 'github'

export default defineConfig({
  base: isGitHubPagesBuild ? repositoryBase : '/',
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900
  },
  server: {
    host: '127.0.0.1',
    port: 5173
  },
  preview: {
    host: '127.0.0.1',
    port: 4173
  }
})
