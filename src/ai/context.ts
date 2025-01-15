"use server"

import { createAI } from "ai/rsc"
import {
  ClientMessage,
  initializeChatInteraction,
  ServerMessage,
  submitUserMessage,
} from "./actions"

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  initialUIState: [],
  initialAIState: [],
  actions: {
    initializeChatInteraction,
    submitUserMessage,
  },
})
