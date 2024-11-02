export default function BoxContainer({ children, className }) {
  return (
    <div className={`border border-gray-300 p-4 text-gray-500 ${className}`}>
      {children}
    </div>
  )
}
