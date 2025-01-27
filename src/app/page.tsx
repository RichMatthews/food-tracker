"use server"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import KitchenIcon from "@mui/icons-material/Kitchen"
import RestaurantIcon from "@mui/icons-material/Restaurant"
import Link from "next/link"

export default async function Home() {
  return (
    <div className="flex flex-col w-48 bg-slate-950 p-4 h-full">
      <div>
        <div className="mb-48 text-xl font-bold text-white">Food Tracker</div>
        <div className="mb-12 text-white">
          <KitchenIcon className="mr-4" />
          <span>
            <Link href="/kitchen">Your Kitchen</Link>
          </span>
        </div>
        <div className="mb-12 text-white">
          <RestaurantIcon className="mr-4" />
          <span>
            <Link href="/meals">Your Meals</Link>
          </span>
        </div>
        <div className="mb-12 text-white">
          <CalendarMonthIcon className="mr-4" />
          <span>
            <Link href="/planner">Planner</Link>
          </span>
        </div>
      </div>
    </div>
  )
}
