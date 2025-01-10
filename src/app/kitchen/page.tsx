"use server"

import { domain } from "@/utils/constants"
import KitchenChatbot from "./_components/KitchenChatbot"
import KitchenIngredients from "./_components/KitchenIngredients"

export default async function Ingredients() {
  const ingredients = await fetch(`${domain}/api/ingredients`)
    .then((data) => data.json())
    .then((res) => res.data)
    .catch((x) => console.error(`There was an error, possibly: ${x}`))

  return (
    <div className="p-8 bg-slate-100 h-screen">
      <h1 className="text-4xl font-bold mb-8">Kitchen</h1>
      <div className="flex justify-between items-start">
        <KitchenIngredients ingredients={ingredients} />
        <KitchenChatbot />
      </div>
    </div>
  )
}

const createSlug = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-")
}
