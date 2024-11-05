import { sql } from "@vercel/postgres"
import type { NextApiRequest, NextApiResponse } from "next"
import { NextResponse } from "next/server"

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { meal, mealIngredients } = await req.json()

  const { rows } =
    await sql`INSERT INTO meals (name, slug) VALUES (${meal.name}, ${meal.slug}) RETURNING id`

  const meal_ingredients = mealIngredients.map((i) => ({
    meal_id: rows[0].id,
    ingredient_id: i,
  }))

  await sql.query(
    `INSERT INTO meal_ingredients (meal_id, ingredient_id)
    SELECT meal_id, ingredient_id FROM json_populate_recordset(NULL::meal_ingredients, $1)`,
    [JSON.stringify(meal_ingredients)],
  )

  return NextResponse.json({ res: "Success", message: "tsst" })
}
