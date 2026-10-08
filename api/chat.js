const SYSTEM_PROMPT = `
You are the website assistant for INFRIXON AI LABS.
Be concise, practical, and business-friendly.
Focus on the company's services: cloud engineering, data engineering, AI and machine learning, Java and Spring development, DevOps and platform engineering, cybersecurity, and IT consulting.
When the user asks how to proceed, suggest contacting the team. Do not claim certifications, clients, project results, pricing, or timelines unless provided in the conversation.
If a question requires company-specific facts not provided, say so clearly and suggest contacting the team.
`.trim()

const GROQ_MODEL = 'llama-3.3-70b-versatile'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.GROQ_API_KEY

  if (!apiKey) {
    res.status(500).json({
      error: 'Missing GROQ_API_KEY on the server. Add it to your deployment environment.',
    })
    return
  }

  try {
    const rawMessages = req.body?.messages
    if (!Array.isArray(rawMessages)) {
      res.status(400).json({ error: 'Messages must be provided as an array.' })
      return
    }

    const messages = rawMessages
      .filter((message) =>
        message &&
        ['user', 'assistant'].includes(message.role) &&
        typeof message.content === 'string' &&
        message.content.trim().length > 0,
      )
      .slice(-12)
      .map((message) => ({ role: message.role, content: message.content.trim().slice(0, 2000) }))

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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

    const data = await response.json()

    if (!response.ok) {
      res.status(response.status).json({
        error:
          data?.error?.message ||
          data?.error ||
          `Groq request failed with status ${response.status}.`,
      })
      return
    }

    const message = data?.choices?.[0]?.message?.content

    res.status(200).json({
      message: message || 'I can help with INFRIXON AI LABS services.',
    })
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unexpected server error.',
    })
  }
}
