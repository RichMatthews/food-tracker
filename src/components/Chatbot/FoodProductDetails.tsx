"use client"

import { type FoodProduct } from "@prisma/client"
import Image from "next/image"

export default function FoodProductDetails({
  foodProduct,
}: {
  foodProduct: Omit<FoodProduct, "id">
}) {
  return (
    <>
      <div className="relative w-28 h-28 m-auto">
        <Image
          alt="Product image"
          className="rounded-lg margin-auto"
          height={150}
          objectFit="contain"
          src={`/food_products/${foodProduct.slug}.jpg`}
          width={150}
        />
      </div>

      <div className="flex flex-col items-center mb-2">
        <div className="font-bold mb-2">{foodProduct.name}</div>
        <span className="text-xs text-neutral-500">
          £ {foodProduct.cost} / per{" "}
          {foodProduct.unit === "unit" ? "unit" : "100g"}
        </span>
      </div>

      <div className="text-xs">
        <span>Fat {foodProduct.fat}g</span>
        <span> | </span>
        <span>Carbs {foodProduct.carbohydrate}g</span>
        <span> | </span>
        <span>Protein {foodProduct.protein}g</span>
      </div>
    </>
  )
}
