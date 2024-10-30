import Link from "next/link"
import BoxContainer from "@/components/BoxContainer"

export default function Home() {
  return (
    <div>
      <h1>Welcome to Food Tracker </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 m-12">
        <div>Feed</div>
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
          <Link href="/calendar">
            <BoxContainer>Calendar</BoxContainer>
          </Link>
        </div>
      </div>
    </div>
  )
}
