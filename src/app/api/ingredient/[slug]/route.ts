import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

export async function GET(_request: any, { params }: { params: any }) {
  const slug = (await params).slug
  const prisma = new PrismaClient()
  const data = await prisma.foodProduct.findFirst({
    where: { slug: slug },
  })

  return NextResponse.json({ data }, { status: 200 })
}
