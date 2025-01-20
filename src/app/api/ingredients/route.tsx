import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { NextApiResponse } from "next"

export async function GET() {
  const prisma = new PrismaClient()
  const rows = await prisma.foodProduct.findMany()

  return NextResponse.json({ data: rows }, { status: 200 })
}

export async function POST(req: Request, res: NextApiResponse) {
  const foodProducts = await req.json()
  const prisma = new PrismaClient()

  try {
    const results = await prisma.foodProduct
      .createMany({ data: foodProducts })
      .then((x) => console.log("Successfully created products"))
      .catch((e) => console.error(`Error creating food products, ${e}`))

    res.status(200).json({ message: "Success", data: results })
  } catch (error: any) {
    return res.status(500).json({
      message: "Error creating ingredients",
      error: error.message,
    })
  } finally {
    await prisma.$disconnect()
    return NextResponse.json({ data: foodProducts, res: "Success" })
  }
}
