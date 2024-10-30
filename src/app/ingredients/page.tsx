export default function Ingredients() {
  return (
    <div>
      <h3>Ingredients List Page</h3>

      <input placeholder='Search for an ingredient' />
      <div>{ingredients.map((ingredient) => <div>{ingredient.name}</div>)}</div>
    </div>
  )
}

const ingredients = [
  { id: "1", name: "beef mince" },
  { id: "2", name: "pasta" },
  { id: "3", name: "chopped tomatoes" },
  { id: "4", name: "onion" },
  { id: "5", name: "garlic" },
  { id: "6", name: "olive oil" },
  { id: "7", name: "carrot" },
  { id: "8", name: "bell pepper" },
  { id: "9", name: "salt" },
  { id: "10", name: "black pepper" },
  { id: "11", name: "chicken breast" },
  { id: "12", name: "rice" },
  { id: "13", name: "potato" },
  { id: "14", name: "broccoli" },
  { id: "15", name: "spinach" },
  { id: "16", name: "cheddar cheese" },
  { id: "17", name: "butter" },
  { id: "18", name: "milk" },
  { id: "19", name: "flour" },
  { id: "20", name: "bacon" }
]