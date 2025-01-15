"use client"

import { useActions, useUIState } from "ai/rsc"
import { ReactNode, useState } from "react"

export default function FoodProductSearch() {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()
  const [search, setSearch] = useState("")
  console.log("user searched::", search)
  return (
    <div className="flex flex-row border-2 w-3/4 mb-4 p-1">
      <input
        className="w-full outline-none"
        placeholder="Search for any products you would like to add"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="bg-black text-white p-1 rounded-sm flex self-end"
        onClick={async () => {
          const display = await submitUserMessage(
            `requestFoodNutritionalInformation ${JSON.stringify(search)}`,
          )
          console.log(display, "disp")

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Search
      </button>
    </div>
  )
}
