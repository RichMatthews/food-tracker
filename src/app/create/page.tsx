"use client"
import BoxContainer from "@/components/BoxContainer"
import { useState } from "react"

export default function Create() {
  const [name, setName] = useState("")

  return (
    <div className="m-12">
      <div className="text-3xl">Create Meal</div>
      <BoxContainer className={"flex flex-col"}>
        <input placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input placeholder="slug" disabled value={createSlug(name)} />
        <div>Select</div>
        <button className="flex self-end bg-blue-500 p-2 rounded-sm text-white">
          Submit Meal
        </button>
      </BoxContainer>
    </div>
  )
}

const createSlug = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-")
}
