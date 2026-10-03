import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const SYSTEM_PROMPT = `
You are the website assistant for Infrixon AI Technologies.
Be concise, practical, and business-friendly.
Focus on the company's services: cloud engineering, data engineering, AI and machine learning, Java and Spring development, DevOps and platform engineering, cybersecurity, and IT consulting.
When the user asks how to proceed, suggest contacting the team. Do not claim certifications, clients, project results, pricing, or timelines unless provided in the conversation.
If a question requires company-specific facts not provided, say so clearly and suggest contacting the team.
`.trim()

const GROQ_MODEL = 'llama-3.3-70b-versatile'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'infrix-chat-api',
        configureServer(server) {
          server.middlewares.use('/api/chat', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            const apiKey = env.GROQ_API_KEY

            if (!apiKey) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Missing GROQ_API_KEY in your .env file.' }))
              return
            }

            try {
              let rawBody = ''

              for await (const chunk of req) {
                rawBody += chunk
              }

              const parsedBody = rawBody ? JSON.parse(rawBody) : {}
              if (!Array.isArray(parsedBody.messages)) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Messages must be provided as an array.' }))
                return
              }
              const messages = parsedBody.messages
                .filter((message) =>
                  message &&
                  ['user', 'assistant'].includes(message.role) &&
                  typeof message.content === 'string' &&
                  message.content.trim().length > 0,
                )
                .slice(-12)
                .map((message) => ({ role: message.role, content: message.content.trim().slice(0, 2000) }))

              const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${apiKey}`,
                },
                body: JSON.stringify({
                  model: GROQ_MODEL,
                  temperature: 0.4,
                  max_tokens: 1024,
                  messages: [
                    { role: 'system', content: SYSTEM_PROMPT },
                    ...messages.map((message) => ({
                      role: message.role,
                      content: message.content,
                    })),
                  ],
                }),
              })

              const data = await groqResponse.json()

              res.setHeader('Content-Type', 'application/json')

              if (!groqResponse.ok) {
                res.statusCode = groqResponse.status
                res.end(
                  JSON.stringify({
                    error:
                      data?.error?.message ||
                      data?.error ||
                      `Groq request failed with status ${groqResponse.status}.`,
                  }),
                )
                return
              }

              res.statusCode = 200
              res.end(
                JSON.stringify({
                  message:
                    data?.choices?.[0]?.message?.content ||
                    'I can help with Infrixon AI Technologies services.',
                }),
              )
            } catch (error) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(
                JSON.stringify({
                  error: error instanceof Error ? error.message : 'Unexpected server error.',
                }),
              )
            }
          })
        },
      },
    ],
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  }
})
