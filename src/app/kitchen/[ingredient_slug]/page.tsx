"use server"
import Image from "next/image"
import { IngredientNutritionalInfo } from "./_components/IngredientNutritionalInfo"
import { domain } from "@/utils/constants"

export default async function IngredientPage({ params }) {
  const { ingredient_slug } = await params

  const ingredient = await fetch(
    `${domain}/api/ingredient/${ingredient_slug}`,
    {},
  )
    .then((res) => res.json())
    .then((res) => res.data)

  if (!ingredient) {
    return null
  }

  return (
    <div className="flex space-between p-12">
      <div className="flex flex-row space-between">
        <div className="overflow-hidden relative w-64 h-64 mr-4">
          <Image
            src={`/ingredients/${ingredient.slug}.jpg`}
            alt="Product image"
            objectFit="contain"
            className="rounded-lg"
            fill
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{ingredient.name}</h1>
          <span className="border-2 p-1 mr-2">Tesco</span>
          <span className="border-2 p-1">Protein</span>
          <IngredientNutritionalInfo {...ingredient} />
          <div className="flex flex-col">
            <span className="font-bold text-xl">£2.00</span>
            <span className="">£0.85 (per 100g)</span>
          </div>
        </div>
      </div>
      <div>
        <h1>Your meals</h1>
        <div>You've used this product in 3 meals</div>
        <div>This is the most expensive protein you use!</div>
      </div>
    </div>
  )
}

// add as client example
// const [ingredient, setIngredient] = useState<Ingredient>()

// useEffect(() => {
//   getIngredient()
// }, [])

// const getIngredient = async () => {
//   const slug = window.location.pathname.split("/")[2]

// }
