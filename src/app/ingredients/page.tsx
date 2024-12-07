"use client"
import SquareContainer from "@/components/SquareContainer"

import Link from "next/link"
import { useEffect, useState } from "react"
import AddNewIngredient from "./_components/AddNewIngredient"

export default function Ingredients() {
  const [name, setName] = useState("")
  const [fat, setFat] = useState(0)
  const [protein, setProtein] = useState(0)
  const [carbohydrate, setCarbohydrate] = useState(0)
  const [costPerUnit, setCostPerUnit] = useState(0)
  const [unit, setUnit] = useState("")
  const [salt, setSalt] = useState(0)

  const [userLoggedIngredients, setUserLoggedIngredients] = useState([])

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

  const onSubmit = async () => {
    const mealBody = {
      name,
      // slug: createSlug(name),
      fat,
      carbohydrate,
      protein,
      costPerUnit,
      unit,
      salt,
    }

    await fetch("/api/ingredients", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ mealBody }),
    }).then(() => getIngredients())
  }

  return (
    <div className="m-12">
      <h3 className="text-4xl mb-4">Your Kitchen</h3>
      <div className="flex flex-wrap">
        {userLoggedIngredients.map((ingredient) => (
          <SquareContainer className={`rounded-sm`} key={ingredient.id}>
            <Link href={`ingredients/${ingredient.id}`}>{ingredient.name}</Link>
          </SquareContainer>
        ))}
      </div>

      <AddNewIngredient
        onSubmit={onSubmit}
        setCarbohydrate={setCarbohydrate}
        setCostPerUnit={setCostPerUnit}
        setFat={setFat}
        setName={setName}
        setProtein={setProtein}
        setUnit={setUnit}
      />
    </div>
  )
}

const createSlug = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-")
}
