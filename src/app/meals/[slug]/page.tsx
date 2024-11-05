"use client"
import { usePathname } from "next/navigation"
import { meals } from "@/data"
import { useEffect, useState } from "react"

export default function Meal() {
  const searchParams = usePathname()
  const slug = searchParams.split("/")[2]
  const data = meals.find((meal) => meal.slug === slug)
  const [mealIngredients, setMealIngredients] = useState([])

  useEffect(() => {
    async function fetchData() {
      await fetch(`/api/meals/ingredients`)
        .then((data) => data.json())
        .then((x) => setMealIngredients(x.data))
        .catch((x) => console.error(`There was an error, possibly: ${x}`))
    }
    fetchData()
  })

  return (
    <div className="m-12">
      <div className="font-semibold text-3xl">{data?.name}</div>
      <div className="flex justify-between">
        <div className="">
          {mealIngredients?.map((ingredient) => (
            <div>{ingredient.ingredient_name}</div>
          ))}
        </div>
        <div className="border border-gray-300 p-12 w-48"></div>
      </div>
    </div>
  )
}
