"use server"
import { Ingredient } from "@prisma/client"
import Image from "next/image"

export default async function NutritionalInfoContent({
  ingredient,
}: {
  ingredient: Ingredient
}) {
  return (
    <div className="flex flex-col items-center mr-10 mb-10 shadow w-36">
      <div className="relative w-36 h-24 bg-white w-full">
        <Image
          src={`/ingredients/${ingredient.slug}.jpg`}
          alt="The product image"
          objectFit="contain"
          className="rounded-lg"
          fill
          style={{ viewTransitionName: ingredient.slug }}
        />
      </div>
      <span className="font-semibold bg-white w-full text-sm px-2 py-4">
        {ingredient.name}
      </span>
    </div>
  )
}
