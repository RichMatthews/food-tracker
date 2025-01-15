"use client"

import { ReactNode, useState } from "react"
import { type FoodProduct } from "@prisma/client"
import { useActions, useUIState } from "ai/rsc"
import Image from "next/image"
import FoodProductDetails from "@/components/Chatbot/FoodProductDetails"

export default function AddProductsView({
  products,
}: {
  products: Array<Omit<FoodProduct, "id">>
}) {
  const { submitUserMessage } = useActions()
  const [_, setMessages] = useUIState()
  const [selectedProducts, setSelectedProducts] = useState<Array<FoodProduct>>(
    [],
  )

  const toggle = (product: FoodProduct) => {
    setSelectedProducts([...selectedProducts, product])
  }

  const isSelected = (productName: string) => {
    console.log(
      selectedProducts.flatMap((product) => product.name),
      "Flat map",
    )
    return selectedProducts
      .flatMap((product) => product.name)
      .includes(productName)
  }

  console.log(selectedProducts, "This?")
  return (
    <div>
      <div className="text-base mb-4">
        I found these products, select the ones you wish to add below
      </div>
      <div className="flex m-4 cursor-pointer">
        {products.map((product) => (
          <div
            className={"rounded-sm p-2 mr-2 shadow-xl"}
            onClick={() => toggle(product)}
          >
            <FoodProductDetails foodProduct={product} />
          </div>
        ))}
      </div>

      <button
        className="bg-black text-white p-2 rounded-sm flex self-end m-2"
        onClick={async () => {
          console.log(selectedProducts, "sp::")
          const display = await submitUserMessage(
            `addFoodProductToUserKitchen ${JSON.stringify(selectedProducts)}`,
          )

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Add product to kitchen
      </button>
    </div>
  )
}
