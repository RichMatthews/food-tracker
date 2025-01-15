"use server"
import { FoodProduct } from "@prisma/client"
import Link from "next/link"

import NutritionalInfoContent from "./NutritionalInfoContent"

export default async function KitchenFoodProducts({
  foodProducts,
}: {
  foodProducts: Array<FoodProduct>
}) {
  return (
    <div className="flex flex-wrap">
      {foodProducts?.map((ingredient) => (
        <Link href={`/kitchen/${ingredient.slug}`}>
          <NutritionalInfoContent foodProduct={ingredient} />
        </Link>
      ))}
    </div>
  )
}
