"use server"
import { Ingredient } from "@prisma/client"
import Link from "next/link"

import NutritionalInfoContent from "./NutritionalInfoContent"

export default async function KitchenIngredients({
  ingredients,
}: {
  ingredients: Array<Ingredient>
}) {
  console.log(ingredients, "ingreds down here")
  return (
    <div className="flex flex-wrap">
      {ingredients?.map((ingredient) => (
        <Link href={`/kitchen/${ingredient.slug}`}>
          <NutritionalInfoContent ingredient={ingredient} />
        </Link>
      ))}
    </div>
  )
}
