import SquareContainer from "@/components/SquareContainer"
import { ingredients } from "@/data"
import Link from "next/link"

export default function Ingredients() {
  return (
    <div className="m-12">
      <h3 className="text-4xl">Ingredients List Page</h3>

      <input placeholder="Search for an ingredient" />
      <div className="flex flex-wrap">
        {ingredients.map((ingredient) => (
          <SquareContainer className={`m-4 rounded-sm`}>
            <Link href={`ingredients/${ingredient.slug}`}>
              {ingredient.name}
            </Link>
          </SquareContainer>
        ))}
      </div>
    </div>
  )
}
