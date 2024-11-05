"use client"
import { createContext } from "react"

export const IngredientsContext = createContext({
  ingredients: [],
  updateIngredients: () => {},
})
