"use server"
import { FoodProduct } from "@prisma/client"
import Image from "next/image"

export default async function NutritionalInfoContent({
  foodProduct,
}: {
  foodProduct: FoodProduct
}) {
  return (
    <div className="flex flex-col items-center mr-10 mb-10 shadow w-36">
      <div className="relative w-36 h-24 bg-white w-full">
        <Image
          alt="The product image"
          className="rounded-lg"
          fill
          objectFit="contain"
          src={`/food_products/${foodProduct.slug}.jpg`}
          style={{ viewTransitionName: foodProduct.slug }}
        />
      </div>
      <span className="font-semibold bg-white w-full text-sm px-2 py-4">
        {foodProduct.name}
      </span>
    </div>
  )
}
