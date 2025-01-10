"use client"

import { Ingredient } from "@prisma/client"
import { useEffect, useState } from "react"
import Select from "react-select"

export default function Create() {
  const [userLoggedIngredients, setUserLoggedIngredients] = useState<
    Array<Ingredient>
  >([])
  const [mealName, setMealName] = useState("")
  const [tempId, setTempId] = useState(null)
  const [tempQuantity, setTempQuantity] = useState("")
  const [mealIngredients, setMealIngredients] = useState([])

  useEffect(() => {
    getIngredients()
  }, [])

  const getIngredients = async () => {
    const ingredients = await fetch("/api/ingredients", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((x) => x.json())
    setUserLoggedIngredients(ingredients.data)
  }

  const addToMeal = () => {
    setMealIngredients([
      ...mealIngredients,
      { id: tempId, quantity: tempQuantity },
    ])
  }

  const meal = {
    name: mealName,
    ingredients: mealIngredients,
  }
  const createMeal = async () => {
    console.log(mealIngredients)
    await fetch("/api/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(meal),
    })
  }
  console.log(meal)

  const selectOptions = userLoggedIngredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.id,
  }))

  return (
    <div>
      <h1>Create a Meal</h1>
      <input
        placeholder="meal name"
        onChange={(e) => setMealName(e.target.value)}
      />
      <Select options={selectOptions} onChange={(e) => setTempId(e.value)} />
      <input
        className="mb-4"
        placeholder="unit"
        onChange={(e) => setTempQuantity(e.target.value)}
      />
      <br />
      <button className="border-2 p-2" onClick={addToMeal}>
        Add to meal
      </button>
      <br />
      <br />
      <div>Meal, thus far</div>
      {mealIngredients.map((ingredient) => (
        <div>
          <div>{ingredient.id}</div>
          <div>{ingredient.quantity}</div>
        </div>
      ))}
      <br />
      <button className="border-2 p-2" onClick={createMeal}>
        Create Meal
      </button>
    </div>
  )
}
