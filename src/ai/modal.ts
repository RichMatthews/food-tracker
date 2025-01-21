import { createOpenAI } from "@ai-sdk/openai"

export const openaiModel = createOpenAI({
  apiKey: process.env.OPEN_AI_API_KEY,
})
