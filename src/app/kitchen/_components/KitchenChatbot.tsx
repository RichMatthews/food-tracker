"use client"

import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

import { useActions, useUIState } from "ai/rsc"
import { ClientMessage } from "@/ai/actions"

export default function KitchenChatbot() {
  const [conversation, setConversation] = useUIState()
  const { initializeChatInteraction } = useActions()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const message = await initializeChatInteraction()

    setConversation((currentConversation: ClientMessage) => [
      ...currentConversation,
      message,
    ])
  }

  return (
    <div className="flex items-center w-1/2">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Kitchen Chatbot</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[60vh] pr-4">
            {conversation.map((message, i) => (
              <div key={i}>
                <div>
                  <span className="capitalize font-bold text-lg">
                    {message.role}
                  </span>
                  {message.display}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
