import Link from "next/link"
import BoxContainer from "@/components/BoxContainer"

export default function Home() {
  return (
    <div className="m-12">
      <h1 className="text-4xl mb-4">Welcome to Food Tracker </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div>
          <div>Feed placeholder</div>
          <div>This will be a place where you can see other peoples meal</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 m-12">
          <Link href="/create">
            <BoxContainer>Create new meal</BoxContainer>
          </Link>
          <Link href="/meals">
            <BoxContainer>Your Meals</BoxContainer>
          </Link>
          <Link href="/ingredients">
            <BoxContainer>Ingredients List</BoxContainer>
          </Link>
          <Link href="/planner">
            <BoxContainer>Planner</BoxContainer>
          </Link>
          <Link href="/history">
            <BoxContainer>History</BoxContainer>
          </Link>
        </div>
      </div>
    </div>
  )
}
