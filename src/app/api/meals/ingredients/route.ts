import { NextResponse } from "next/server"
import { sql } from "@vercel/postgres"

export async function GET(request) {
  const { rows } = await sql`SELECT 
    m.name AS meal_name,
    m.id AS meal_id,
    i.id AS ingredient_id,
    i.name AS ingredient_name
FROM meals m
LEFT JOIN meal_ingredients mi ON m.id = mi.meal_id
LEFT JOIN ingredients i ON mi.ingredient_id = i.id;`

  return NextResponse.json({ data: rows }, { status: 200 })
}
