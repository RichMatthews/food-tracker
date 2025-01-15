"use server"

import { domain } from "@/utils/constants"
import KitchenChatbot from "./_components/KitchenChatbot"
import KitchenFoodProducts from "./_components/KitchenFoodProducts"

export default async function Kitchen() {
  const foodProducts = await fetch(`${domain}/api/ingredients`)
    .then((data) => data.json())
    .then((res) => res.data)
    .catch((x) => console.error(`There was an error, possibly: ${x}`))

  return (
    <div className="p-8 bg-slate-100 h-screen">
      <h1 className="text-4xl font-bold mb-8">Kitchen</h1>
      <div className="flex justify-between items-start">
        <KitchenFoodProducts foodProducts={foodProducts} />
        <KitchenChatbot />
      </div>
    </div>
  )
}

const createSlug = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-")
}
