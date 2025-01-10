import { tool } from "ai"
import { Ingredient, Prisma } from "@prisma/client"
import { z } from "zod"
import { domain } from "@/utils/constants"

export const addFoodItemsToDatabase = tool({
  description: "Adds the food items to my database",
  parameters: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        protein: z.number(),
        slug: z.string(),
        fat: z.number(),
        carbohydrate: z.number(),
        salt: z.number(),
        costPerUnit: z.number(),
        unit: z.string(),
      }),
    ),
  }),
  execute: async function ({ items }: { items: Array<Ingredient> }) {
    console.log(items, "hte items")
    try {
      await fetch(`${domain}/api/ingredients`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(items),
      }).then((result) => result.json())
    } catch (e) {
      console.log("An error occurred -->", e)
    }
    return items
  },
})

export const displayListOfUserIngredients = tool({
  description:
    "Shows a list of ingredients from the database that the user already has inserted",
  parameters: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        protein: z.number(),
        slug: z.string(),
        fat: z.number(),
        carbohydrate: z.number(),
        salt: z.number(),
        costPerUnit: z.number(),
        unit: z.string(),
      }),
    ),
  }),
  execute: async function ({ items }: { items: Array<Ingredient> }) {
    let suitableItems = []
    console.log("in the display tool correctly")
    try {
      await fetch(`${domain}/api/ingredients`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
        .then((result) => result.json())
        .then((x) => suitableItems.push(x))

      // await apiRequest("http://localhost:3000/api/ingredients", "GET").then(
      //   (x) => {
      //     console.log(x, "should be ingredients list")
      //   },
      // )
    } catch (e) {
      console.log("An error occurred -->", e)
    }
    return suitableItems
  },
})

export const requestFoodNutritionalInformation = tool({
  description: "Return the food content for an item",
  parameters: z.object({
    name: z.string().describe("The item to return food for"),
  }),
  execute: async function ({ name }: { name: string }) {
    const product =
      foodProducts.find((prod) =>
        prod.name.toLowerCase().includes(name.toLowerCase()),
      ) ?? foodProducts[0]

    await new Promise((resolve) => setTimeout(resolve, 2000))
    return product
  },
})

const foodProducts: Array<Omit<Ingredient, "id">> = [
  {
    name: "Chicken Thighs",
    slug: "chicken-thighs",
    fat: new Prisma.Decimal(new Prisma.Decimal(9.2)),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(19.0),
    carbohydrate: new Prisma.Decimal(0.0),
    // calories: 209,
    costPerUnit: new Prisma.Decimal(5.5),
    unit: "g",
  },
  {
    name: "Garden Peas",
    slug: "garden-peas",
    fat: new Prisma.Decimal(new Prisma.Decimal(0.4)),
    salt: new Prisma.Decimal(0.02),
    protein: new Prisma.Decimal(5.4),
    carbohydrate: new Prisma.Decimal(14.0),
    // calories: 81,
    costPerUnit: new Prisma.Decimal(2.0),
    unit: "g",
  },
  {
    name: "White Rice",
    slug: "white-rice",
    fat: new Prisma.Decimal(0.3),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(2.7),
    carbohydrate: new Prisma.Decimal(28.0),
    // calories: 130,
    costPerUnit: new Prisma.Decimal(0.8),
    unit: "g",
  },
  {
    name: "Eggs",
    slug: "eggs",
    fat: new Prisma.Decimal(10.0),
    salt: new Prisma.Decimal(0.3),
    protein: new Prisma.Decimal(13.0),
    carbohydrate: new Prisma.Decimal(1.1),
    // calories: 155,
    costPerUnit: new Prisma.Decimal(0.2),
    unit: "unit",
  },
  {
    name: "Almonds",
    slug: "almonds",
    fat: new Prisma.Decimal(50.0),
    salt: new Prisma.Decimal(0.0),
    protein: new Prisma.Decimal(21.0),
    carbohydrate: new Prisma.Decimal(22.0),
    // calories: 576,
    costPerUnit: new Prisma.Decimal(15.0),
    unit: "g",
  },
  {
    name: "Whole Milk",
    slug: "whole-milk",
    fat: new Prisma.Decimal(3.5),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(3.3),
    carbohydrate: new Prisma.Decimal(4.8),
    // calories: 64,
    costPerUnit: new Prisma.Decimal(0.6),
    unit: "liter",
  },
  {
    name: "Canned Tuna",
    slug: "canned-tuna",
    fat: new Prisma.Decimal(1.0),
    salt: new Prisma.Decimal(1.0),
    protein: new Prisma.Decimal(24.0),
    carbohydrate: new Prisma.Decimal(0.0),
    // calories: 116,
    costPerUnit: new Prisma.Decimal(1.5),
    unit: "can",
  },
  {
    name: "Carrots",
    slug: "carrots",
    fat: new Prisma.Decimal(0.1),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(0.9),
    carbohydrate: new Prisma.Decimal(9.6),
    // calories: 41,
    costPerUnit: new Prisma.Decimal(1.0),
    unit: "g",
  },
  {
    name: "Potatoes",
    slug: "potatoes",
    fat: new Prisma.Decimal(0.1),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(2.0),
    carbohydrate: new Prisma.Decimal(17.0),
    // calories: 77,
    costPerUnit: new Prisma.Decimal(0.4),
    unit: "g",
  },
  {
    name: "Butter",
    slug: "butter",
    fat: new Prisma.Decimal(81.0),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(0.8),
    carbohydrate: new Prisma.Decimal(0.6),
    // calories: 717,
    costPerUnit: new Prisma.Decimal(5.0),
    unit: "g",
  },
  {
    name: "Cheddar Cheese",
    slug: "cheddar-cheese",
    fat: new Prisma.Decimal(33.0),
    salt: new Prisma.Decimal(1.8),
    protein: new Prisma.Decimal(25.0),
    carbohydrate: new Prisma.Decimal(1.3),
    // calories: 402,
    costPerUnit: new Prisma.Decimal(9.0),
    unit: "g",
  },
  {
    name: "Apples",
    slug: "apples",
    fat: new Prisma.Decimal(0.2),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(0.3),
    carbohydrate: new Prisma.Decimal(14.0),
    // calories: 52,
    costPerUnit: new Prisma.Decimal(3.0),
    unit: "g",
  },
  {
    name: "Bananas",
    slug: "bananas",
    fat: new Prisma.Decimal(0.3),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(1.1),
    carbohydrate: new Prisma.Decimal(23.0),
    // calories: 96,
    costPerUnit: new Prisma.Decimal(1.5),
    unit: "g",
  },
  {
    name: "Olive Oil",
    slug: "olive-oil",
    fat: new Prisma.Decimal(100.0),
    salt: new Prisma.Decimal(0.0),
    protein: new Prisma.Decimal(0.0),
    carbohydrate: new Prisma.Decimal(0.0),
    // calories: 884,
    costPerUnit: new Prisma.Decimal(10.0),
    unit: "liter",
  },
  {
    name: "Brown Bread",
    slug: "brown-bread",
    fat: new Prisma.Decimal(3.3),
    salt: new Prisma.Decimal(1.0),
    protein: new Prisma.Decimal(9.0),
    carbohydrate: new Prisma.Decimal(49.0),
    // calories: 252,
    costPerUnit: new Prisma.Decimal(2.5),
    unit: "loaf",
  },
  {
    name: "Tomatoes",
    slug: "tomatoes",
    fat: new Prisma.Decimal(0.2),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(0.9),
    carbohydrate: new Prisma.Decimal(3.9),
    // calories: 18,
    costPerUnit: new Prisma.Decimal(2.0),
    unit: "g",
  },
  {
    name: "Yogurt",
    slug: "yoghurt",
    fat: new Prisma.Decimal(3.0),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(5.0),
    carbohydrate: new Prisma.Decimal(6.0),
    // calories: 59,
    costPerUnit: new Prisma.Decimal(1.0),
    unit: "g",
  },
  {
    name: "Salmon Fillet",
    slug: "salmon-fillet",
    fat: new Prisma.Decimal(13.0),
    salt: new Prisma.Decimal(0.1),
    protein: new Prisma.Decimal(20.0),
    carbohydrate: new Prisma.Decimal(0.0),
    // calories: 208,
    costPerUnit: new Prisma.Decimal(20.0),
    unit: "g",
  },
  {
    name: "Broccoli",
    slug: "broccoli",
    fat: new Prisma.Decimal(0.3),
    salt: new Prisma.Decimal(0.01),
    protein: new Prisma.Decimal(2.8),
    carbohydrate: new Prisma.Decimal(6.6),
    // calories: 34,
    costPerUnit: new Prisma.Decimal(2.5),
    unit: "g",
  },
  {
    name: "Dark Chocolate",
    slug: "dark-chocolate",
    fat: new Prisma.Decimal(32.0),
    salt: new Prisma.Decimal(0.02),
    protein: new Prisma.Decimal(5.0),
    carbohydrate: new Prisma.Decimal(46.0),
    // calories: 546,
    costPerUnit: new Prisma.Decimal(8.0),
    unit: "g",
  },
]
