"use client"

import { ReactNode, useState } from "react"
import { type FoodProduct } from "@prisma/client"
import { useActions, useUIState } from "ai/rsc"
import FoodProductDetails from "@/components/Chatbot/FoodProductDetails"
import { Button } from "@/components/ui/button"

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
    return selectedProducts
      .flatMap((product) => product.name)
      .includes(productName)
  }

  return (
    <div className="mb-4">
      <div className="text-base mb-4">
        I found these products, select the ones you wish to add below
      </div>
      <div className="flex m-4 ml-0">
        {products.map((product) => {
          const isSelected = selectedProducts
            .flatMap((prod) => prod.name)
            .includes(product.name)

          const bgColor = isSelected ? "bg-gray-50" : "bg-white"
          return (
            <div
              className={`${bgColor} cursor-pointer rounded-sm p-2 mr-2 shadow-xl hover:border-blue-500 border-2`}
              onClick={() => toggle(product)}
            >
              <FoodProductDetails foodProduct={product} />
            </div>
          )
        })}
      </div>

      <Button
        onClick={async () => {
          const display = await submitUserMessage(
            `addFoodProductToUserKitchen ${JSON.stringify(selectedProducts)}`,
          )

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Add {selectedProducts.length}{" "}
        {selectedProducts.length === 1 ? "product" : "products"} to kitchen
      </Button>
    </div>
  )
}
