import { type MealIngredient, PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()
  console.log(body)
  const prisma = new PrismaClient()
  const mealData = {
    name: body.name,
  }

  const mealBack = await prisma.meal.create({ data: mealData })

  const mealIngredient = body.ingredients.map(
    async (ingredient: MealIngredient) => {
      const _ingredient = {
        ingredientId: ingredient.id,
        mealId: mealBack.id,
        quantity: ingredient.quantity,
      }
      await prisma.mealIngredient.create({ data: _ingredient })
    },
  )

  return NextResponse.json({ res: "Success", data: mealIngredient })
}
