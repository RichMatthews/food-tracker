import { type FoodProduct, PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const prisma = new PrismaClient()
  const mealData = {
    name: body.name,
  }

  const mealBack = await prisma.meal.create({ data: mealData })

  console.log(body.ingredients, "body??")
  const mealIngredient = body.ingredients.map(
    async (foodProduct: FoodProduct) => {
      const _foodProduct = {
        foodProductId: foodProduct.id,
        mealId: mealBack.id,
        quantity: foodProduct.quantity,
      }
      await prisma.mealFoodProduct.create({ data: _foodProduct })
    },
  )

  return NextResponse.json({ res: "Success", data: mealIngredient })
}
