"use client"
import { FoodProduct } from "@prisma/client"
import Image from "next/image"

export default function NutritionalInfoContent({
  foodProduct,
}: {
  foodProduct: FoodProduct
}) {
  return (
    <div className="flex flex-col bg-white items-center mr-4 mb-4 rounded-md w-36">
      <div className="relative w-36 h-24 w-full">
        <Image
          alt="The product image"
          fill
          objectFit="contain"
          src={`/food_products/${foodProduct.slug}.jpg`}
          style={{ viewTransitionName: foodProduct.slug }}
        />
      </div>
      <span className="font-semibold bg-white w-full text-sm text-center p-2">
        {foodProduct.name}
      </span>
    </div>
  )
}
