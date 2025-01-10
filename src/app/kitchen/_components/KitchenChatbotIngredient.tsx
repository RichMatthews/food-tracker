import { type Ingredient } from "@prisma/client"
import Image from "next/image"

export default function KitchenChatbotIngredient({
  ingredient,
}: {
  ingredient: Ingredient
}) {
  return (
    <div className="border-2 p-2 rounded-md">
      <div className="overflow-hidden relative w-24 h-24">
        <Image
          src={`/ingredients/${ingredient.slug}.jpg`}
          alt="Product image"
          objectFit="contain"
          className="rounded-lg"
          fill
          style={{ viewTransitionName: ingredient.slug }}
        />
      </div>
      <div className="font-bold">{ingredient.name}</div>
      <div className="text-xs">
        <span>Fat {ingredient.fat}g</span>
        <span> | </span>
        <span>Carbs {ingredient.carbohydrate}g</span>
        <span> | </span>
        <span>Protein {ingredient.protein}g</span>
      </div>
    </div>
  )
}
