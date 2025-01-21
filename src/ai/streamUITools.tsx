import { type FoodProduct } from "@prisma/client"
import { z } from "zod"

import FoodProductSearch from "@/components/Chatbot/FoodProductSearch"
import { domain } from "@/utils/constants"
import AddProductsView from "@/views/AddProductsView"
import InitialStateOptions from "@/app/kitchen/_components/InitialStateOptions"
import { generateText, tool, generateObject } from "ai"
import InitializeCreateMealView from "@/views/InitializeCreateMealView"
import { openaiModel } from "./modal"
import CreateMealView from "@/views/CreateMealView"

export const addFoodProductToUserKitchen = {
  description: "Adds the food items to my database",

  parameters: z.object({
    items: z.array(
      z.object({
        brand: z.string(),
        calories: z.string(),
        carbohydrate: z.string(),
        cost: z.string(),
        fat: z.string(),
        food_group: z.string(),
        name: z.string(),
        protein: z.string(),
        quantity: z.string(),
        salt: z.string(),
        slug: z.string(),
        unit: z.string(),
      }),
    ),
  }),
  generate: async function* ({
    items,
  }: {
    items: Array<Omit<FoodProduct, "id">>
  }) {
    yield `Adding ${items.length} products to the database`
    const products = await fetch(`${domain}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(items),
    })
      .then((result) => result.json())
      .catch((e) => console.error(`There was an error, most likely: ${e}`))

    return (
      <div>
        <div className="mb-4">
          Successfully added {products.length} product to your kitchen!
        </div>
        <InitialStateOptions message="Would you like to do anything else?" />
      </div>
    )
  },
}

export const searchForFoodProduct = {
  description: "Searches for food product",
  parameters: z.object({}),
  generate: async function* () {
    return <FoodProductSearch />
  },
}

export const displayUserFoodProducts = {
  description:
    "Shows a list of ingredients from the database that the user already has inserted",
  parameters: z.object({}),
  generate: async function* () {
    yield `Fetching products ƒrom your database`

    const items = await fetch(`${domain}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((result) => result.json())

    return <div>These are the items in your kitchen</div>
  },
}

const findMatchingFoodProducts = async (keywords: Array<string>) => {
  return (
    externalFoodSource.filter((product) =>
      keywords.some((keyword) => product.name.toLowerCase().includes(keyword)),
    ) ?? []
  )
}

export const requestFoodNutritionalInformation = {
  description: "Return the nutritional content for the given food product",
  parameters: z.object({
    keywords: z
      .array(z.string())
      .describe(
        "An array of comma separated strings, and correct spelling for misspelt food products",
      ),
  }),
  generate: async function* (x) {
    yield `Searching for food product information...`
    const foundProducts = await findMatchingFoodProducts(x.keywords)

    return <AddProductsView products={foundProducts} />
  },
}

export const createUserMeal = {
  description: "Create a meal",
  parameters: z.object({
    search: z.string(),
  }),
  generate: async function* ({ search }) {
    yield `Our top chefs are creating you a meal, sit tight...`
    const userFoodProducts = await fetch(`${domain}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }).then((result) => result.json())
    console.log(userFoodProducts.data, "userFoodProducts::")
    const { object } = await generateObject({
      model: openaiModel("gpt-4o"),
      schema: z.object({
        meal: z.object({
          name: z.string(),
          ingredients: z.array(
            z.object({
              name: z.string(),
              quantity: z.string(),
              unit: z.string(),
            }),
          ),
        }),
      }),
      prompt: `For this input: ${search}, return me the data in the structured format`,
    })

    const ingredients = getUserKitchenIngredients(
      object.meal,
      userFoodProducts.data,
    )
    const meal = {
      name: object.meal.name,
      ingredients,
    }

    return <CreateMealView meal={meal} />
  },
}

function getUserKitchenIngredients(meal, foodProducts) {
  console.log(meal, "meal::")
  let ingredients = []
  for (let index = 0; index < meal.ingredients.length; index++) {
    const mealIngredient = meal.ingredients[index]
    const foundProduct = foodProducts.find((prod) =>
      prod.name.toLowerCase().includes(mealIngredient.name.toLowerCase()),
    )
    ingredients.push({ ...foundProduct, quantity: mealIngredient.quantity })
  }

  return ingredients
}

export const initializeMealCreation = {
  description: "Initialize creating a meal",
  parameters: z.object({}),
  generate: async function* () {
    console.log("initializing meal...")

    return <InitializeCreateMealView />
  },
}

const externalFoodSource = [
  {
    brand: "Tesco",
    calories: "209",
    carbohydrate: "0.0",
    cost: "5.5",
    fat: "9.2",
    food_group: "protein",
    name: "Chicken Thighs",
    protein: "19.0",
    quantity: "100",
    salt: "0.1",
    slug: "chicken-thighs",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "81",
    carbohydrate: "14.0",
    cost: "2.0",
    fat: "0.4",
    food_group: "protein",
    name: "Garden Peas",
    protein: "5.4",
    quantity: "100",
    salt: "0.02",
    slug: "garden-peas",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "130",
    carbohydrate: "28.0",
    cost: "0.8",
    fat: "0.3",
    food_group: "protein",
    name: "White Rice",
    protein: "2.7",
    quantity: "100",
    salt: "0.01",
    slug: "white-rice",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "155",
    carbohydrate: "1.1",
    cost: "0.2",
    fat: "10.0",
    food_group: "protein",
    name: "Eggs",
    protein: "13.0",
    quantity: "100",
    salt: "0.3",
    slug: "eggs",
    unit: "unit",
  },
  {
    brand: "Tesco",
    calories: "155",
    carbohydrate: "1.1",
    cost: "0.2",
    fat: "12.0",
    food_group: "protein",
    name: "Brown Eggs",
    protein: "15.0",
    quantity: "100",
    salt: "0.3",
    slug: "brown-eggs",
    unit: "unit",
  },
  {
    brand: "Tesco",
    calories: "576",
    carbohydrate: "22.0",
    cost: "15.0",
    fat: "50.0",
    food_group: "protein",
    name: "Almonds",
    protein: "21.0",
    quantity: "100",
    salt: "0.0",
    slug: "almonds",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "64",
    carbohydrate: "4.8",
    cost: "0.6",
    fat: "3.5",
    food_group: "protein",
    name: "Whole Milk",
    protein: "3.3",
    quantity: "100",
    salt: "0.1",
    slug: "whole-milk",
    unit: "liter",
  },
  {
    brand: "Tesco",
    calories: "116",
    carbohydrate: "0.0",
    cost: "1.5",
    fat: "1.0",
    food_group: "protein",
    name: "Canned Tuna",
    protein: "24.0",
    quantity: "100",
    salt: "1.0",
    slug: "canned-tuna",
    unit: "can",
  },
  {
    brand: "Tesco",
    calories: "41",
    carbohydrate: "9.6",
    cost: "1.0",
    fat: "0.1",
    food_group: "protein",
    name: "Carrots",
    protein: "0.9",
    quantity: "100",
    salt: "0.1",
    slug: "carrots",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "77",
    carbohydrate: "17.0",
    cost: "0.4",
    fat: "0.1",
    food_group: "protein",
    name: "Potatoes",
    protein: "2.0",
    quantity: "100",
    salt: "0.01",
    slug: "potatoes",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "717",
    carbohydrate: "0.6",
    cost: "5.0",
    fat: "81.0",
    food_group: "protein",
    name: "Butter",
    protein: "0.8",
    quantity: "100",
    salt: "0.1",
    slug: "butter",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "402",
    carbohydrate: "1.3",
    cost: "9.0",
    fat: "33.0",
    food_group: "protein",
    name: "Cheddar Cheese",
    protein: "25.0",
    quantity: "100",
    salt: "1.8",
    slug: "cheddar-cheese",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "52",
    carbohydrate: "14.0",
    cost: "3.0",
    fat: "0.2",
    food_group: "protein",
    name: "Apples",
    protein: "0.3",
    quantity: "100",
    salt: "0.01",
    slug: "apples",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "96",
    carbohydrate: "23.0",
    cost: "1.5",
    fat: "0.3",
    food_group: "protein",
    name: "Bananas",
    protein: "1.1",
    quantity: "100",
    salt: "0.01",
    slug: "bananas",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "884",
    carbohydrate: "0.0",
    cost: "10.0",
    fat: "100.0",
    food_group: "protein",
    name: "Olive Oil",
    protein: "0.0",
    quantity: "100",
    salt: "0.0",
    slug: "olive-oil",
    unit: "liter",
  },
  {
    brand: "Tesco",
    calories: "252",
    carbohydrate: "49.0",
    cost: "2.5",
    fat: "3.3",
    food_group: "protein",
    name: "Brown Bread",
    protein: "9.0",
    quantity: "100",
    salt: "1.0",
    slug: "brown-bread",
    unit: "loaf",
  },
  {
    brand: "Tesco",
    calories: "18",
    carbohydrate: "3.9",
    cost: "2.0",
    fat: "0.2",
    food_group: "protein",
    name: "Tomatoes",
    protein: "0.9",
    quantity: "100",
    salt: "0.01",
    slug: "tomatoes",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "59",
    carbohydrate: "6.0",
    cost: "1.0",
    fat: "3.0",
    food_group: "protein",
    name: "Yogurt",
    protein: "5.0",
    quantity: "100",
    salt: "0.1",
    slug: "yoghurt",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "208",
    carbohydrate: "0.0",
    cost: "20.0",
    fat: "13.0",
    food_group: "protein",
    name: "Salmon Fillet",
    protein: "20.0",
    quantity: "100",
    salt: "0.1",
    slug: "salmon-fillet",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "34",
    carbohydrate: "6.6",
    cost: "1.5",
    fat: "0.3",
    food_group: "protein",
    name: "Broccoli",
    protein: "2.8",
    quantity: "100",
    salt: "0.01",
    slug: "broccoli",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "546",
    carbohydrate: "46.0",
    cost: "2.0",
    fat: "32.0",
    food_group: "protein",
    name: "Dark Chocolate",
    protein: "5.0",
    quantity: "100",
    salt: "0.02",
    slug: "dark-chocolate",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "300",
    carbohydrate: "6.0",
    cost: "8.0",
    fat: "12.0",
    food_group: "protein",
    name: "Sirloin Steak",
    protein: "25.0",
    quantity: "100",
    salt: "0.6",
    slug: "sirloin-steak",
    unit: "g",
  },
  {
    brand: "Tesco",
    calories: "300",
    carbohydrate: "5.0",
    cost: "6.0",
    fat: "12.0",
    food_group: "protein",
    name: "Rump Steak",
    protein: "22.0",
    quantity: "100",
    salt: "0.5",
    slug: "rump-steak",
    unit: "g",
  },
]
