"use client"
import { createContext } from "react"

export const MealsContext = createContext({
  meals: [],
  updateMeal: () => {},
})
