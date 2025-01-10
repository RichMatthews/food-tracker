import {
  addFoodItemsToDatabase,
  displayListOfUserIngredients,
  requestFoodNutritionalInformation,
} from "@/ai/tools"
import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"
import { streamUI } from "ai/rsc"

export async function POST(request: Request) {
  const { messages } = await request.json()
  const openai = createOpenAI({
    apiKey: process.env.OPEN_AI_API_KEY,
  })

  const result = await streamText({
    model: openai("gpt-4o"),
    system: "You are a friendly assistant!",
    messages,
    maxSteps: 10,
    tools: {
      addFoodItemsToDatabase,
      displayListOfUserIngredients,
      requestFoodNutritionalInformation,
    },
  })
  return result.toDataStreamResponse()
}
