// import { tool } from "ai"
// import { Ingredient, Prisma } from "@prisma/client"
// import { z } from "zod"
// import { domain } from "@/utils/constants"

// export const addFoodItemsToDatabase = tool({
//   description: "Adds the food items to my database",
//   parameters: z.object({
//     items: z.array(
//       z.object({
//         name: z.string(),
//         protein: z.number(),
//         slug: z.string(),
//         fat: z.number(),
//         carbohydrate: z.number(),
//         salt: z.number(),
//         costPerUnit: z.number(),
//         unit: z.string(),
//       }),
//     ),
//   }),
//   execute: async function ({ items }: { items: Array<Ingredient> }) {
//     console.log(items, "hte items")
//     try {
//       await fetch(`${domain}/api/ingredients`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(items),
//       }).then((result) => result.json())
//     } catch (e) {
//       console.log("An error occurred -->", e)
//     }
//     return items
//   },
// })

// export const displayUserFoodProducts = tool({
//   description:
//     "Shows a list of ingredients from the database that the user already has inserted",
//   parameters: z.object({
//     items: z.array(
//       z.object({
//         name: z.string(),
//         protein: z.number(),
//         slug: z.string(),
//         fat: z.number(),
//         carbohydrate: z.number(),
//         salt: z.number(),
//         costPerUnit: z.number(),
//         unit: z.string(),
//       }),
//     ),
//   }),
//   execute: async function ({ items }: { items: Array<Ingredient> }) {
//     let suitableItems = []
//     console.log("in the display tool correctly")
//     try {
//       await fetch(`${domain}/api/ingredients`, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         method: "GET",
//       })
//         .then((result) => result.json())
//         .then((x) => suitableItems.push(x))

//       // await apiRequest("http://localhost:3000/api/ingredients", "GET").then(
//       //   (x) => {
//       //     console.log(x, "should be ingredients list")
//       //   },
//       // )
//     } catch (e) {
//       console.log("An error occurred -->", e)
//     }
//     return suitableItems
//   },
// })

// export const requestFoodNutritionalInformation = tool({
//   description: "Return the food content for an item",
//   parameters: z.object({
//     name: z.string().describe("The item to return food for"),
//   }),
//   execute: async function ({ name }: { name: string }) {
//     const product =
//       foodProducts.find((prod) =>
//         prod.name.toLowerCase().includes(name.toLowerCase()),
//       ) ?? foodProducts[0]

//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     return product
//   },
// })


