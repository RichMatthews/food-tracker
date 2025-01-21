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
  const [selectedProducts, setSelectedProducts] = useState<
    Array<Omit<FoodProduct, "id">>
  >([])

  console.log(selectedProducts, "selectedProducts")

  const toggle = (product: Omit<FoodProduct, "id">) => {
    console.log(
      product,
      "prod",
      selectedProducts.filter((sp) => sp.slug === product.slug),
    )
    if (selectedProducts.filter((sp) => sp.slug === product.slug).length > 0) {
      return setSelectedProducts(
        selectedProducts.filter((sp) => sp.slug !== product.slug),
      )
    } else {
      console.log("in else?")
      setSelectedProducts([...selectedProducts, product])
    }
  }

  const productsText = selectedProducts.length === 1 ? "product" : "products"

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
              className={`${bgColor} cursor-pointer rounded-md p-2 mr-2 shadow-xl hover:border-blue-500 border-2`}
              onClick={() => toggle(product)}
            >
              <FoodProductDetails foodProduct={product} />
            </div>
          )
        })}
      </div>

      <Button
        disabled={selectedProducts.length === 0}
        onClick={async () => {
          const display = await submitUserMessage(
            `addFoodProductToUserKitchen ${JSON.stringify(selectedProducts)}`,
          )

          setMessages((messages: ReactNode[]) => [...messages, display])
        }}
      >
        Add {selectedProducts.length} {productsText} to kitchen
      </Button>
    </div>
  )
}
