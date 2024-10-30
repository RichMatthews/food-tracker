import BoxContainer from "@/components/BoxContainer"

export default function Meals() {
  return (
    <div className="m-12 ">
      <h2 className="text-2xl">Your meals</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-4">
        {meals.map((meal) => (
          <BoxContainer>
            <h3>{meal.name}</h3>
          </BoxContainer>
        ))}
      </div>
    </div>
  )
}

const meals = [
  {
    id: "1",
    name: "Beef mince with pasta",
    ingredients: [
      { id: "1", name: "beef mince" },
      { id: "2", name: "pasta" },
      { id: "3", name: "chopped tomatoes" },
      { id: "4", name: "onion" },
      { id: "5", name: "garlic" },
    ],
  },
  {
    id: "2",
    name: "Chicken with mexican rice",
    ingredients: [
      { id: "1", name: "chicken breast" },
      { id: "2", name: "mexican rice" },
      { id: "3", name: "broccoli" },
    ],
  },
  {
    id: "3",
    name: "Sausage and egg breakfast muffin",
    ingredients: [
      { id: "1", name: "sausage" },
      { id: "2", name: "muffin" },
      { id: "3", name: "egg" },
    ],
  },
  {
    id: "4",
    name: "Chuck steak",
    ingredients: [
      { id: "1", name: "chuck steak" },
      { id: "2", name: "rice" },
      { id: "3", name: "carrots" },
      { id: "4", name: "onion" },
    ],
  },
]
