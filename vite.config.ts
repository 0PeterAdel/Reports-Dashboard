import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      // Enable HMR over HTTPS
      protocol: 'wss',
      // Host defaults to 'localhost'
      host: 'localhost',
      // Explicitly set client port to match the dev server
      clientPort: 5173,
      // Ensure overlay is enabled for error reporting
      overlay: true
    }
  }
})