"use client"
import BoxContainer from "@/components/BoxContainer"
import { IngredientsContext } from "@/context/IngredientsContext"
import { useContext, useState } from "react"
import Select from "react-select/creatable"

export default function Create() {
  const [name, setName] = useState("")
  const { ingredients } = useContext(IngredientsContext)
  const [ingredientsIds, setIngredientsIds] = useState([])

  const options = ingredients.map((ingredient) => ({
    label: ingredient.name,
    value: ingredient.id,
  }))
  const slug = createSlug(name)

  const onChange = (x) => {
    setIngredientsIds(x.map((y) => y.value))
  }

  const onSubmit = async () => {
    const mealBody = { name, slug }

    const details = {
      name,
      slug,
      ingredients: ingredientsIds,
    }
    await fetch("/api/post", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ meal: mealBody, mealIngredients: ingredientsIds }),
    })
  }

  return (
    <div className="m-12">
      <div className="text-3xl mb-8">Create Meal</div>
      <BoxContainer className={"flex flex-col w-1/2"}>
        <input
          className="border-b-4 p-4 mb-4"
          placeholder="slug"
          disabled
          value={slug}
        />
        <input
          className="border-b-4 p-4 mb-4"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* <input
          className="border-b-4 p-4 mb-4"
          placeholder="breakfast/lunch/dinner"
          onChange={(e) => setName(e.target.value)}
        /> */}
        <Select
          className="border-b-4 p-4 mb-4"
          options={options}
          isMulti
          // onCreateOption={onCreate}
          placeholder="Select ingredients"
          onChange={onChange}
        />
        <input type="file" />
        <button
          className="flex self-end bg-blue-500 p-2 rounded-sm text-white"
          onClick={onSubmit}
        >
          Submit Meal
        </button>
      </BoxContainer>
    </div>
  )
}

const createSlug = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-")
}
