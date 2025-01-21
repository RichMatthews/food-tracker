"use server"

import { createOpenAI } from "@ai-sdk/openai"
import { getAIState, streamUI } from "ai/rsc"
import { z } from "zod"
import { v4 as uuid } from "uuid"

import InitialStateOptions from "@/app/kitchen/_components/InitialStateOptions"

import {
  addFoodProductToUserKitchen,
  createUserMeal,
  initializeMealCreation,
  displayUserFoodProducts,
  requestFoodNutritionalInformation,
  searchForFoodProduct,
} from "./streamUITools"
import { ReactNode } from "react"
import { openaiModel } from "./modal"

export interface ClientMessage {
  id: string
  role: "user" | "assistant"
  display: ReactNode
}

export interface ServerMessage {
  role: "user" | "assistant"
  content: string
}

export async function submitUserMessage(input: string): Promise<ClientMessage> {
  const result = await streamUI({
    model: openaiModel("gpt-4o"),
    system:
      "You are a friendly assistant helping a user manage their kitchen ingredients and helping them create different meals",
    prompt: input,
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      addFoodProductToUserKitchen,
      createUserMeal,
      initializeMealCreation,
      displayUserFoodProducts,
      requestFoodNutritionalInformation,
      searchForFoodProduct,
    },
  })

  return {
    id: uuid(),
    role: "assistant",
    display: result.value,
  }
}

export async function initializeChatInteraction() {
  const result = await streamUI({
    model: openaiModel("gpt-4o"),
    prompt: "",
    system:
      "You are asking the user what they would like to do in the app today",
    text: async ({ content }) => <div>{content}</div>,
    tools: {
      askTheUserWhatTheyWantToDo: {
        description:
          "Return the nutritional content for the given food product",
        parameters: z.object({}),
        generate: async function* () {
          yield `Initializing the app`

          return <InitialStateOptions />
        },
      },
    },
  })

  return {
    id: uuid(),
    role: "assistant",
    display: result.value,
  }
}
