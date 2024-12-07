type Props = {
  onSubmit: () => void
  setCarbohydrate: (value: number) => void
  setCostPerUnit: (value: number) => void
  setFat: (value: number) => void
  setName: (value: string) => void
  setProtein: (value: number) => void
  setUnit: (value: string) => void
}

export default function AddNewIngredient({
  onSubmit,
  setCarbohydrate,
  setCostPerUnit,
  setFat,
  setName,
  setProtein,
  setUnit,
}: Props) {
  return (
    <div className="flex flex-col w-1/4">
      <h3 className="text-2xl mb-4">Add New Ingredient</h3>
      <input
        className="border-2 mb-2 p-1"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border-2 mb-2 p-1"
        placeholder="protein content"
        onChange={(e) => setProtein(Number(e.target.value))}
      />
      <input
        className="border-2 mb-2 p-1"
        placeholder="carb content"
        onChange={(e) => setCarbohydrate(Number(e.target.value))}
      />
      <input
        className="border-2 mb-2 p-1"
        placeholder="fat content"
        onChange={(e) => setFat(Number(e.target.value))}
      />
      <input
        className="border-2 mb-2 p-1"
        placeholder="cost"
        onChange={(e) => setCostPerUnit(Number(e.target.value))}
      />
      <input
        className="border-2 mb-2 p-1"
        placeholder="unit"
        onChange={(e) => setUnit(e.target.value)}
      />
      <button className="border-2" onClick={onSubmit}>
        Add ingredient
      </button>
    </div>
  )
}
