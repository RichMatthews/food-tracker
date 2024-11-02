"use client"
import { usePathname } from "next/navigation"
import { meals } from "@/data"

export default function Meal() {
  const searchParams = usePathname()
  const slug = searchParams.split("/")[2]
  const data = meals.find((meal) => meal.slug === slug)
  console.log(data)

  return (
    <div className="m-12">
      <div className="font-semibold text-3xl">{data?.name}</div>
      <div className="flex justify-between">
        <div className="">
          {data?.ingredients.map((ingredient) => <div>{ingredient.name}</div>)}
        </div>
        <div className="border border-gray-300 p-12 w-48"></div>
      </div>
    </div>
  )
}
