import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { NextApiResponse } from "next"

export async function GET() {
  const prisma = new PrismaClient()
  const rows = await prisma.ingredient.findMany()

  return NextResponse.json({ data: rows }, { status: 200 })
}

export async function POST(req: Request, res: NextApiResponse) {
  const ingredients = await req.json()
  const prisma = new PrismaClient()

  try {
    const results = await prisma.ingredient
      .createMany({ data: ingredients })
      .then((x) => console.log(x))
      .catch((e) => console.log("Failed to add:", e))

    res.status(200).json({ message: "Success", data: results })
  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating ingredients",
      error: error.message,
    })
  } finally {
    await prisma.$disconnect()
    return NextResponse.json({ data: ingredients, res: "Success" })
  }
}
