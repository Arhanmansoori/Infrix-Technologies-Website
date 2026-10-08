const SYSTEM_PROMPT = `
You are the website assistant for INFRIXON AI LABS.
Be concise, practical, and business-friendly.
Focus on the company's services: cloud engineering, data engineering, AI and machine learning, Java and Spring development, DevOps and platform engineering, cybersecurity, and IT consulting.
When the user asks how to proceed, suggest contacting the team. Do not claim certifications, clients, project results, pricing, or timelines unless provided in the conversation.
If a question requires company-specific facts not provided, say so clearly and suggest contacting the team.
`.trim()

const GROQ_MODEL = 'llama-3.3-70b-versatile'

const MAX_BODY_BYTES = 32 * 1024
const unavailable = 'The assistant is unavailable right now. Please contact our team.'

function reply(res, status, payload) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 'no-store')
  res.end(JSON.stringify(payload))
}

export async function handleChat(req, res, { apiKey = process.env.GROQ_API_KEY, fetchImpl = fetch } = {}) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return reply(res, 405, { error: 'Method not allowed' })
  }
  try {
    let body = req.body
    if (body === undefined) {
      const chunks = []
      let size = 0
      for await (const chunk of req) {
        size += Buffer.byteLength(chunk)
        if (size > MAX_BODY_BYTES) return reply(res, 413, { error: 'Message history is too large.' })
        chunks.push(Buffer.from(chunk))
      }
      body = Buffer.concat(chunks).toString('utf8')
    }
    if (typeof body === 'string' || Buffer.isBuffer(body)) {
      if (Buffer.byteLength(body) > MAX_BODY_BYTES) return reply(res, 413, { error: 'Message history is too large.' })
      try { body = JSON.parse(body.toString()) } catch {
        return reply(res, 400, { error: 'Invalid JSON request.' })
      }
    } else if (Buffer.byteLength(JSON.stringify(body ?? {})) > MAX_BODY_BYTES) {
      return reply(res, 413, { error: 'Message history is too large.' })
    }
    if (!Array.isArray(body?.messages)) return reply(res, 400, { error: 'Messages must be provided as an array.' })
    const messages = body.messages.filter((message) => message && ['user', 'assistant'].includes(message.role) && typeof message.content === 'string' && message.content.trim())
      .slice(-12).map(({ role, content }) => ({ role, content: content.trim().slice(0, 2000) }))
    if (!messages.length || messages.at(-1).role !== 'user') return reply(res, 400, { error: 'Please provide a user message.' })
    if (!apiKey) return reply(res, 503, { error: unavailable })
    const response = await fetchImpl('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      signal: AbortSignal.timeout(20000),
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({ model: GROQ_MODEL, temperature: 0.4, max_tokens: 1024, messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages] }),
    })
    if (!response.ok) return reply(res, 502, { error: unavailable })
    const data = await response.json()
    const message = data?.choices?.[0]?.message?.content
    if (typeof message !== 'string' || !message.trim()) return reply(res, 502, { error: unavailable })
    return reply(res, 200, { message })
  } catch {
    return reply(res, 502, { error: unavailable })
  }
}

export default handleChat
