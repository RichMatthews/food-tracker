"use server"

import KitchenChatbot from "./_components/KitchenChatbot"
import KitchenFoodProducts from "./_components/KitchenFoodProducts"

export default async function Kitchen() {
  return (
    <div className="p-8 bg-slate-100 h-screen">
      <h1 className="text-4xl font-bold mb-8">Kitchen</h1>
      <div className="flex justify-between items-start">
        <KitchenFoodProducts />
        <KitchenChatbot />
      </div>
    </div>
  )
}
