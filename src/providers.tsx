import { useEffect, useState } from "react"
import { MealsContext } from "./context/MealsContext"
import { IngredientsContext } from "./context/IngredientsContext"

export const Providers = ({ children }) => {
  const [ingredients, setIngredients] = useState([])
  const [meals, setMeals] = useState([])

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await fetch(`/api/ingredients`)
        .then((data) => data.json())
        .catch((x) => console.error(`There was an error, possibly: ${x}`))

      setIngredients(response.data)
    }
    fetchData()
  }, [])

  return (
    <IngredientsContext.Provider
      value={{
        userLoggedIngredients: ingredients,
        updateIngredients: setIngredients,
      }}
    >
      <MealsContext.Provider value={{ meals }}>
        {children}
      </MealsContext.Provider>
    </IngredientsContext.Provider>
  )
}
