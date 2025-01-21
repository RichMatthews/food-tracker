"use client"

import { submitUserMessage } from "@/ai/actions"
import { Button } from "@/components/ui/button"
import { useUIState } from "ai/rsc"
import { ReactNode, useState } from "react"

export default function InitializeCreateMealView() {
  const [search, setSearch] = useState("")
  const [_, setMessages] = useUIState()

  return (
    <div className="flex flex-row border-2 w-3/4 mb-4 p-1 rounded-md">
      <input
        className="w-full outline-none p-0"
        placeholder="Describe the meal you want to create"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        size="sm"
        variant="default"
        onClick={async () => {
          const display = await submitUserMessage(`createUserMeal ${search}`)

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Create
      </Button>
    </div>
  )
}
