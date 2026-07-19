import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or your framework plugin

export default defineConfig({
  plugins: [react()],
  server: {
    // Allows any ngrok-free.app subdomain to access your dev server
    allowedHosts: ['.ngrok-free.app'], 
    
    // Alternatively, set to true to allow all external hosts:
    // allowedHosts: true
  }
})