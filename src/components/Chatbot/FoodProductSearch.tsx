"use client"

import { useActions, useUIState } from "ai/rsc"
import { ReactNode, useState } from "react"
import { Button } from "../ui/button"

export default function FoodProductSearch() {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()
  const [search, setSearch] = useState("")

  return (
    <div className="flex flex-row border-2 w-3/4 mb-4 p-1">
      <input
        className="w-full outline-none"
        placeholder="Search for any products you would like to add"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="default"
        onClick={async () => {
          const display = await submitUserMessage(
            `requestFoodNutritionalInformation ${JSON.stringify(search)}`,
          )

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Search
      </Button>
    </div>
  )
}
