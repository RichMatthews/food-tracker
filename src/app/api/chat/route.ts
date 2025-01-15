import {
  addFoodItemsToDatabase,
  displayUserFoodProducts,
  requestFoodNutritionalInformation,
} from "@/ai/streamTextTools"
import { createOpenAI } from "@ai-sdk/openai"
import { streamText } from "ai"
import { streamUI } from "ai/rsc"

export async function POST(request: Request) {
  // const { messages } = await request.json()
  // const openai = createOpenAI({
  //   apiKey: process.env.OPEN_AI_API_KEY,
  // })
  // const result = await streamUI({
  //   model: openai("gpt-4o"),
  //   system: "You are a friendly assistant helping a user manage their kitchen ingredients and helping them create different meals",
  //   messages,
  //   // maxSteps: 10,
  //   tools: {
  //     addFoodItemsToDatabase,
  //     displayUserFoodProducts,
  //     requestFoodNutritionalInformation,
  //   },
  // })
  // return result.value
}
