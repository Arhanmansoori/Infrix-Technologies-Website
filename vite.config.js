import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { handleChat } from './api/chat.js'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), {
      name: 'infrix-chat-api',
      configureServer(server) {
        server.middlewares.use('/api/chat', (req, res) => {
          if (req.url.split('?')[0] !== '/') {
            res.statusCode = 404
            res.end()
            return
          }
          return handleChat(req, res, { apiKey: env.GROQ_API_KEY })
        })
      },
    }],
    server: { allowedHosts: ['.ngrok-free.app'] },
  }
})
