import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(request) {
  const prisma = new PrismaClient()
  const data = await prisma.ingredient.findUnique({
    where: { id: 1 },
  })
  console.log(data, "data??")
  return NextResponse.json({ data }, { status: 200 })
}
