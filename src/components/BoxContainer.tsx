import { PropsWithChildren } from "react"

type Props = {
  className?: string
}

export default function BoxContainer({
  children,
  className,
}: PropsWithChildren<Props>) {
  return (
    <div className={`border border-gray-300 p-4 text-gray-500 ${className}`}>
      {children}
    </div>
  )
}
