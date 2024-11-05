"use client"
import SquareContainer from "@/components/SquareContainer"
import { IngredientsContext } from "@/context/IngredientsContext"
import Link from "next/link"
import { useContext } from "react"

export default function Ingredients() {
  const { ingredients } = useContext(IngredientsContext)

  return (
    <div className="m-12">
      <h3 className="text-4xl">Ingredients List Page</h3>

      <input placeholder="Search for an ingredient" />
      <div className="flex flex-wrap">
        {ingredients.map((ingredient) => (
          <SquareContainer className={`m-4 rounded-sm`} key={ingredient.id}>
            <Link href={`ingredients/${ingredient.slug}`}>
              {ingredient.name}
            </Link>
          </SquareContainer>
        ))}
      </div>
    </div>
  )
}
