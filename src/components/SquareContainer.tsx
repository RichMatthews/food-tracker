export default function SquareContainer({ children, className, large }) {
  const width = large ? "w-80" : "w-40"
  const height = large ? "h-80" : "h-40"
  return (
    <div
      className={`border border-gray-300 p-4 text-gray-500 ${width} ${height} ${className}`}
    >
      {children}
    </div>
  )
}
