"use client"

import { IngredientsContext } from "@/context/IngredientsContext"
import { useParams, usePathname } from "next/navigation"
import { useContext, useEffect, useState } from "react"

export default function Slug() {
  const { userLoggedIngredients } = useContext(IngredientsContext)
  const searchParams = usePathname()
  // const slug = searchParams.split("/")[2]
  const [ingredient, setIngredient] = useState({})
  const x = useParams()

  console.log(x)
  useEffect(() => {
    getIngredient()
  }, [])

  const getIngredient = async () => {
    const ingredient = await fetch("/api/ingredient", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((x) => x.json())
    console.log(ingredient)
    setIngredient(ingredient.data)
  }

  return (
    <div>
      <h3>{ingredient.name} | per 100g</h3>
      <div>
        fat {ingredient.fat} (g) | carbs {ingredient.carbohydrate} (g) | protein{" "}
        {ingredient.protein} (g)
      </div>
      <div>£{ingredient.costPerUnit}</div>
    </div>
  )
}
