import { type FoodProduct } from "@prisma/client"

export function IngredientNutritionalInfo({
  calories,
  carbohydrate,
  fat,
  protein,
  salt,
}: FoodProduct) {
  return (
    <div className="flex">
      <IndividualComponent name="Fat" value={fat} />
      <IndividualComponent name="Carbohydrate" value={carbohydrate} />
      <IndividualComponent name="Protein" value={protein} />
      <IndividualComponent name="Salt" value={salt} />
    </div>
  )
}

const IndividualComponent = ({ name, value }) => (
  <div className="text-center mr-12">
    <p className="font-semibold">{name}</p>
    <p>{value}g</p>
  </div>
)
