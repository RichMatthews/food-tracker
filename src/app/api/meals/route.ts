import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function GET(request) {
  const { rows } = await sql`SELECT * from meals`

  return NextResponse.json({ data: rows }, { status: 200 })
}
