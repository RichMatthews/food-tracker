"use server"
import { domain } from "@/utils/constants"
import { type Meal as IMeal } from "@prisma/client"

export default async function Meal() {
  const meals = await fetch(`${domain}/api/meals`)
    .then((x) => x.json())
    .then((res) => res.data)

  return (
    <div className="p-8 bg-slate-100 h-screen">
      <h1 className="text-4xl font-bold mb-8">Your Meals</h1>
      <div className="flex justify-between items-start">
        {meals.map((meal: IMeal) => (
          <div>{meal.name}</div>
        ))}
      </div>
    </div>
  )
}
