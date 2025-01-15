"use client"

import { PropsWithChildren, ReactNode } from "react"
import { useActions, useUIState } from "ai/rsc"

export default function InitialStateOptions() {
  return (
    <div>
      <div className="mb-4">
        Hello, welcome to your kitchen, what would you like to do today?
      </div>
      <div className="flex flex-wrap">
        <Option messageTool="searchForFoodProduct">
          Search for a product to add to your kitchen
        </Option>

        <Option messageTool="removeFoodProduct">
          Remove a product from your kitchen
        </Option>

        <Option messageTool="editFoodProduct">
          Edit a product in your kitchen
        </Option>
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
    <div
      className="bg-black rounded-3xl cursor-pointer p-2 text-white mr-4 mb-4 text-sm hover:bg-gray-800"
      onClick={async () => {
        const display = await submitUserMessage(`${messageTool}`)

        setMessages((messages: ReactNode[]) => [...messages, display])
      }}
    >
      {children}
    </div>
  )
}
