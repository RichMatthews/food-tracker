import { type FoodProduct, Prisma } from "@prisma/client"
import { z } from "zod"

import FoodProductSearch from "@/components/Chatbot/FoodProductSearch"
import { domain } from "@/utils/constants"
import AddProductsView from "@/views/AddProductsView"
import { Decimal } from "@prisma/client/runtime/library"

export const addFoodProductToUserKitchen = {
  description: "Adds the food items to my database",

  parameters: z.object({
    items: z.array(
      z.object({
        carbohydrate: z.string(),
        costPerUnit: z.string(),
        fat: z.string(),
        // id: z.number(),
        name: z.string(),
        protein: z.string(),
        salt: z.string(),
        slug: z.string(),
        unit: z.string(),
      }),
    ),
  }),
  generate: async function* ({ items }: { items: Array<FoodProduct> }) {
    const products = await fetch(`${domain}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(items),
    }).then((result) => result.json())

    return (
      <div>Successfully added {products.length} product to the database</div>
    )
  },
}

export const searchForFoodProduct = {
  description: "Searches for food product",
  parameters: z.object({
    // items: z.array(
    //   z.object({
    //     name: z.string(),
    //     protein: z.number(),
    //     slug: z.string(),
    //     fat: z.number(),
    //     carbohydrate: z.number(),
    //     salt: z.number(),
    //     costPerUnit: z.number(),
    //     unit: z.string(),
    //   }),
    // ),
  }),
  generate: async function* () {
    // try {
    //   await fetch(`${domain}/api/ingredients`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "POST",
    //     body: JSON.stringify(items),
    //   }).then((result) => result.json())
    // } catch (e) {
    //   console.log("An error occurred -->", e)
    // }
    return <FoodProductSearch />
  },
}

export const displayUserFoodProducts = {
  description:
    "Shows a list of ingredients from the database that the user already has inserted",
  parameters: z.object({}),
  generate: async function* () {
    console.log("::in display::")
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
    console.log(x, "keywords:::")
    yield `Searching for food product information...`
    const foundProducts = await findMatchingFoodProducts(x.keywords)

    return <AddProductsView products={foundProducts} />
  },
}

const externalFoodSource = [
  {
    name: "Chicken Thighs",
    slug: "chicken-thighs",
    fat: "9.2",
    salt: "0.1",
    protein: "19.0",
    carbohydrate: "0.0",
    // calories: 209,
    costPerUnit: "5.5",
    unit: "g",
  },
  {
    name: "Garden Peas",
    slug: "garden-peas",
    fat: "0.4",
    salt: "0.02",
    protein: "5.4",
    carbohydrate: "14.0",
    // calories: 81,
    costPerUnit: "2.0",
    unit: "g",
  },
  {
    name: "White Rice",
    slug: "white-rice",
    fat: "0.3",
    salt: "0.01",
    protein: "2.7",
    carbohydrate: "28.0",
    // calories: 130,
    costPerUnit: "0.8",
    unit: "g",
  },
  {
    name: "Eggs",
    slug: "eggs",
    fat: "10.0",
    salt: "0.3",
    protein: "13.0",
    carbohydrate: "1.1",
    // calories: 155,
    costPerUnit: "0.2",
    unit: "unit",
  },
  {
    name: "Brown Eggs",
    slug: "brown-eggs",
    fat: "12.0",
    salt: "0.3",
    protein: "15.0",
    carbohydrate: "1.1",
    // calories: 155,
    costPerUnit: "0.2",
    unit: "unit",
  },
  {
    name: "Almonds",
    slug: "almonds",
    fat: "50.0",
    salt: "0.0",
    protein: "21.0",
    carbohydrate: "22.0",
    // calories: 576,
    costPerUnit: "15.0",
    unit: "g",
  },
  {
    name: "Whole Milk",
    slug: "whole-milk",
    fat: "3.5",
    salt: "0.1",
    protein: "3.3",
    carbohydrate: "4.8",
    // calories: 64,
    costPerUnit: "0.6",
    unit: "liter",
  },
  {
    name: "Canned Tuna",
    slug: "canned-tuna",
    fat: "1.0",
    salt: "1.0",
    protein: "24.0",
    carbohydrate: "0.0",
    // calories: 116,
    costPerUnit: "1.5",
    unit: "can",
  },
  {
    name: "Carrots",
    slug: "carrots",
    fat: "0.1",
    salt: "0.1",
    protein: "0.9",
    carbohydrate: "9.6",
    // calories: 41,
    costPerUnit: "1.0",
    unit: "g",
  },
  {
    name: "Potatoes",
    slug: "potatoes",
    fat: "0.1",
    salt: "0.01",
    protein: "2.0",
    carbohydrate: "17.0",
    // calories: 77,
    costPerUnit: "0.4",
    unit: "g",
  },
  {
    name: "Butter",
    slug: "butter",
    fat: "81.0",
    salt: "0.1",
    protein: "0.8",
    carbohydrate: "0.6",
    // calories: 717,
    costPerUnit: "5.0",
    unit: "g",
  },
  {
    name: "Cheddar Cheese",
    slug: "cheddar-cheese",
    fat: "33.0",
    salt: "1.8",
    protein: "25.0",
    carbohydrate: "1.3",
    // calories: 402,
    costPerUnit: "9.0",
    unit: "g",
  },
  {
    name: "Apples",
    slug: "apples",
    fat: "0.2",
    salt: "0.01",
    protein: "0.3",
    carbohydrate: "14.0",
    // calories: 52,
    costPerUnit: "3.0",
    unit: "g",
  },
  {
    name: "Bananas",
    slug: "bananas",
    fat: "0.3",
    salt: "0.01",
    protein: "1.1",
    carbohydrate: "23.0",
    // calories: 96,
    costPerUnit: "1.5",
    unit: "g",
  },
  {
    name: "Olive Oil",
    slug: "olive-oil",
    fat: "100.0",
    salt: "0.0",
    protein: "0.0",
    carbohydrate: "0.0",
    // calories: 884,
    costPerUnit: "10.0",
    unit: "liter",
  },
  {
    name: "Brown Bread",
    slug: "brown-bread",
    fat: "3.3",
    salt: "1.0",
    protein: "9.0",
    carbohydrate: "49.0",
    // calories: 252,
    costPerUnit: "2.5",
    unit: "loaf",
  },
  {
    name: "Tomatoes",
    slug: "tomatoes",
    fat: "0.2",
    salt: "0.01",
    protein: "0.9",
    carbohydrate: "3.9",
    // calories: 18,
    costPerUnit: "2.0",
    unit: "g",
  },
  {
    name: "Yogurt",
    slug: "yoghurt",
    fat: "3.0",
    salt: "0.1",
    protein: "5.0",
    carbohydrate: "6.0",
    // calories: 59,
    costPerUnit: "1.0",
    unit: "g",
  },
  {
    name: "Salmon Fillet",
    slug: "salmon-fillet",
    fat: "13.0",
    salt: "0.1",
    protein: "20.0",
    carbohydrate: "0.0",
    // calories: 208,
    costPerUnit: "20.0",
    unit: "g",
  },
  {
    name: "Broccoli",
    slug: "broccoli",
    fat: "0.3",
    salt: "0.01",
    protein: "2.8",
    carbohydrate: "6.6",
    // calories: 34,
    costPerUnit: "2.5",
    unit: "g",
  },
  {
    name: "Dark Chocolate",
    slug: "dark-chocolate",
    fat: "32.0",
    salt: "0.02",
    protein: "5.0",
    carbohydrate: "46.0",
    // calories: 546,
    costPerUnit: "8.0",
    unit: "g",
  },
]
