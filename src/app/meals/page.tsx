import BoxContainer from "@/components/BoxContainer"
import { meals } from "@/data"
import Link from "next/link"

export default function Meals() {
  return (
    <div className="m-12 ">
      <h2 className="text-2xl">Your meals</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {meals.map((meal) => (
          <Link href={`meals/${meal.slug}`}>
            <BoxContainer>
              <h3>{meal.name}</h3>
            </BoxContainer>
          </Link>
        ))}
      </div>
    </div>
  )
}
