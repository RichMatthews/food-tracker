import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"
import { PrismaClient } from "@prisma/client"

export async function GET(request) {
  const prisma = new PrismaClient()
  const rows = await prisma.ingredient.findMany()
  console.log(rows, "rows in the server")
  return NextResponse.json({ data: rows }, { status: 200 })
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { mealBody } = await req.json()

  const prisma = new PrismaClient()
  const ingredient = await prisma.ingredient.create({ data: mealBody })
  console.log(ingredient, "ingredient?")

  // await sql`INSERT INTO ingredients (name, slug, fat, carbs, protein, cost, unit) VALUES (
  // ${mealBody.name}, ${mealBody.slug}, ${mealBody.fat}, ${mealBody.carbs}, ${mealBody.protein}, ${mealBody.cost}, ${mealBody.unit})`

  return NextResponse.json({ res: "Success", message: "tsst" })
}
