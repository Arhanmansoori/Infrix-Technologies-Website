const SYSTEM_PROMPT = `
You are the website assistant for Infrix Technologies.
Be concise, helpful, and business-friendly.
Focus on Infrix services: AI, agentic AI, generative AI, machine learning, deep learning, data engineering, analytics, BI, cloud, automation, APIs, and custom software.
Encourage consultation bookings when the user asks about starting a project, pricing, scope, or timelines.
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
    const { messages = [] } = req.body || {}

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
      message: message || 'I am here to help with Infrix Technologies services.',
    })
  } catch (error) {
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unexpected server error.',
    })
  }
}
