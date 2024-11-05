"use client"
import { ingredients } from "@/data"
import { usePathname } from "next/navigation"

export default function Slug() {
  const searchParams = usePathname()
  const slug = searchParams.split("/")[2]
  const data = ingredients.find((ingredient) => ingredient.slug === slug)

  return (
    <div>
      <h3>{data.name}</h3>
    </div>
  )
}
