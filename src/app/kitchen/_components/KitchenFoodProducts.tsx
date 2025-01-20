"use client"

import { domain } from "@/utils/constants"
import { FoodProduct } from "@prisma/client"
import Link from "next/link"

import NutritionalInfoContent from "./NutritionalInfoContent"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function KitchenFoodProducts() {
  const [foodProducts, setProducts] = useState<Array<FoodProduct>>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () =>
    await fetch(`${domain}/api/ingredients`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setProducts(res.data))
      .catch((x) => console.error(`There was an error, possibly: ${x}`))

  return (
    <div>
      <Button className="mb-4" onClick={fetchProducts}>
        Refresh database
      </Button>
      <div className="flex flex-wrap">
        {foodProducts &&
          foodProducts.length > 0 &&
          foodProducts?.map((foodProduct) => (
            <Link href={`/kitchen/${foodProduct?.slug}`}>
              <NutritionalInfoContent foodProduct={foodProduct} />
            </Link>
          ))}
      </div>
    </div>
  )
}
