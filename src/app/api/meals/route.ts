import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

export async function GET() {
  const prisma = new PrismaClient()
  const rows = await prisma.meal.findMany()

  return NextResponse.json({ data: rows }, { status: 200 })
}
