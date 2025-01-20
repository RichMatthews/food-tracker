"use client"

import { PropsWithChildren, ReactNode } from "react"
import { useActions, useUIState } from "ai/rsc"
import { Button } from "@/components/ui/button"

export default function InitialStateOptions({
  message = "Hello, welcome to your kitchen, what would you like to do today?",
}) {
  return (
    <div className="mb-4">
      <div className="mb-2 text-base">{message}</div>
      <div className="flex flex-wrap">
        <Option messageTool="searchForFoodProduct">Add a product</Option>
        <Option messageTool="removeFoodProduct">Remove a product</Option>
        <Option messageTool="editFoodProduct">Edit a product</Option>
        <Option messageTool="createMeal">Create a meal</Option>
      </div>
    </div>
  )
}

const Option = ({
  children,
  messageTool,
}: PropsWithChildren<{ messageTool: string }>) => {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()

  return (
    <Button
      className="mr-2"
      onClick={async () => {
        const display = await submitUserMessage(`${messageTool}`)

        setMessages((messages: ReactNode[]) => [...messages, display])
      }}
      variant="default"
    >
      {children}
    </Button>
  )
}
