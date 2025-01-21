"use client"

import { Button } from "@/components/ui/button"
import { domain } from "@/utils/constants"
import { Meal } from "@prisma/client"
import Image from "next/image"

export default function CreateMealView({ meal }: { meal: Meal }) {
  console.log(meal, "well what is the meal?")
  const createMeal = () =>
    fetch(`${domain}/api/create`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(meal),
    })
      .then((result) => result.json())
      .then((res) => console.log(res))
      .catch((e) => console.error(`There was an error, most likely: ${e}`))

  return (
    <div className="border-2 p-4 flex flex-col">
      <div className="flex flex-col">
        <div>{meal.name}</div>
        <div className="flex flex-col mb-4">
          {meal.ingredients?.map((ingredient) => (
            <div className="flex items-center">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  alt="Product image"
                  className="rounded-lg margin-auto"
                  height={150}
                  objectFit="contain"
                  src={`/food_products/${ingredient.slug}.jpg`}
                  width={150}
                />
              </div>
              <span className="text-sm">
                {ingredient.quantity} {ingredient.unit}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Button size="sm" className="self-end" onClick={createMeal}>
        Add Meal
      </Button>
    </div>
  )
}
