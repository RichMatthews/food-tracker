import SquareContainer from "@/components/SquareContainer"
import { planner } from "@/data"
import dayjs from "dayjs"

export default function Planner() {
  const startDate = dayjs("2024-11-04T00:00:00.000Z")
  const _days = [0, 1, 2, 3, 4, 5, 6]
  const plannedPeriod = planner

  return (
    <div className="m-12">
      <div>Start Date: {startDate.format("ddd DD, MMM")}</div>
      <div className="flex flex-wrap">
        {_days.map((day) => {
          return <Day date={startDate.add(day, "days")} />
        })}
      </div>
    </div>
  )
}

const Day = ({ date }) => {
  const { breakfast, lunch, dinner } = transformData(
    planner.meals.filter((meal) => dayjs(meal.date).isSame(date, "date")),
  )

  return (
    <SquareContainer className="m-4" large>
      <div>{dayjs(date).format("dddd")}</div>
      <div>Breakfast: {breakfast?.mealDetails.name}</div>
      <div>Lunch: {lunch?.mealDetails.name}</div>
      <div>Dinner: {dinner?.mealDetails.name}</div>

      <div>
        <div>Cost (estimated): £{}</div>
      </div>
    </SquareContainer>
  )
}

const transformData = (meals) => {
  console.log(meals)
  return {
    breakfast: meals.find((meal) => meal.mealTime === "breakfast"),
    lunch: meals.find((meal) => meal.mealTime === "lunch"),
    dinner: meals.find((meal) => meal.mealTime === "dinner"),
  }
}
