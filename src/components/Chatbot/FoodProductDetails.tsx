"use client"

import { type FoodProduct } from "@prisma/client"
import Image from "next/image"

export default function FoodProductDetails({
  foodProduct,
}: {
  foodProduct: FoodProduct
}) {
  return (
    <>
      <div className="relative w-28 h-28 m-auto">
        <Image
          alt="Product image"
          className="rounded-lg margin-auto"
          // fill
          height={150}
          width={150}
          objectFit="contain"
          src={`/food_products/${foodProduct.slug}.jpg`}
        />
      </div>

      <div className="flex items-center mb-2">
        <div className="font-bold mr-1">{foodProduct.name}</div>
        <span className="text-xs text-neutral-500">
          (£ {foodProduct.costPerUnit}) / per {foodProduct.unit}
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
