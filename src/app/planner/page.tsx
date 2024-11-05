"use client"
import SquareContainer from "@/components/SquareContainer"
import { planner } from "@/data"
import dayjs from "dayjs"
import { useEffect } from "react"

export default function Planner() {
  const startDate = dayjs("2024-11-04T00:00:00.000Z")
  const _days = [0, 1, 2, 3, 4, 5, 6]
  const plannedPeriod = planner
  const barcode = "737628064502"
  console.log("scanning...", barcode)
  // useEffect(() => {
  //   async function fetchData() {
  //     // You can await here
  //     const response = await fetch(
  //       `https://world.openfoodfacts.org/api/v3/product/${barcode}.json`,
  //     )
  //       .then((x) => x.json())
  //       .catch((x) => console.log(x))

  //     console.log("Response::", response)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="m-12">
      <div>Start Date: {startDate.format("ddd DD, MMM")}</div>
      {/* <div className="flex flex-wrap">
        {_days.map((day) => {
          return <Day date={startDate.add(day, "days")} />
        })}
      </div> */}
      <table className="w-full">
        <tr>
          <th>Day</th>
          <th>Breakfast</th>
          <th>Lunch</th>
          <th>Dinner</th>
          <th>Snacks</th>
          <th>Extra details</th>
        </tr>
        {_days.map((day) => {
          return <Day date={startDate.add(day, "days")} />
        })}
      </table>
    </div>
  )
}
{
  /* <tr>
<td>Row 7, Col 1</td>
<td>Row 7, Col 2</td>
<td>Row 7, Col 3</td>
<td>Row 7, Col 4</td>
</tr> */
}

const Day = ({ date }) => {
  const { breakfast, lunch, dinner } = transformData(
    planner.meals.filter((meal) => dayjs(meal.date).isSame(date, "date")),
  )
  // console.log(breakfast)

  return (
    <tr>
      <td>{dayjs(date).format("dddd")}</td>
      <td className="relative">
        <div className="text-black-0 font-bold bottom-0 text-center">
          {breakfast?.mealDetails.name}
        </div>
        {/* <img src={`/${breakfast?.mealDetails.slug}.jpg`} /> */}
      </td>
      <td className="relative">
        <div className="text-black-0 font-bold bottom-0 text-center">
          {lunch?.mealDetails.name}
        </div>
        {/* <img src={`/${lunch?.mealDetails.slug}.jpg`} /> */}
      </td>
      <td className="relative">
        <div className="text-black-0 font-bold bottom-0 text-center">
          {dinner?.mealDetails.name}
        </div>
        {/* <img src={`/${dinner?.mealDetails.slug}.jpg`} /> */}
      </td>

      <td>
        <div>Cost (estimated): £{}</div>
      </td>
    </tr>
  )
}

const transformData = (meals) => {
  // console.log(meals)
  return {
    breakfast: meals.find((meal) => meal.mealTime === "breakfast"),
    lunch: meals.find((meal) => meal.mealTime === "lunch"),
    dinner: meals.find((meal) => meal.mealTime === "dinner"),
  }
}
