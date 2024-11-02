export const meals = [
    {
      id: "1",
      slug: "beef-mince-with-pasta",
      name: "Beef mince with pasta",
      ingredients: [
        { id: "1", name: "beef mince" },
        { id: "2", name: "pasta" },
        { id: "3", name: "chopped tomatoes" },
        { id: "4", name: "onion" },
        { id: "5", name: "garlic" },
      ],
    },
    {
      id: "2",
      name: "Chicken with mexican rice",
      slug:"chicken-with-mexican-rice",
      ingredients: [
        { id: "1", name: "chicken breast" },
        { id: "2", name: "mexican rice" },
        { id: "3", name: "broccoli" },
      ],
    },
    {
      id: "3",
      name: "Sausage and egg breakfast muffin",
      "slug": "sausage-and-egg-breakfast-muffin",
      ingredients: [
        { id: "1", name: "sausage" },
        { id: "2", name: "muffin" },
        { id: "3", name: "egg" },
      ],
    },
    {
      id: "4",
      name: "Chuck steak",
      slug:"chuck-steak",
      ingredients: [
        { id: "1", name: "chuck steak" },
        { id: "2", name: "rice" },
        { id: "3", name: "carrots" },
        { id: "4", name: "onion" },
      ],
    },
  ]

  export const ingredients = [
    { id: "1", name: "beef mince", slug: "beef-mince" },
    { id: "2", name: "pasta", slug: "pasta" },
    { id: "3", name: "chopped tomatoes", slug: "chopped-tomatoes" },
    { id: "4", name: "onion", slug: "onion" },
    { id: "5", name: "garlic", slug: "garlic" },
    { id: "6", name: "olive oil", slug: "oil" },
    { id: "7", name: "carrot", slug: "carrot" },
    { id: "8", name: "bell pepper", slug: "bell-pepper" },
    { id: "9", name: "salt", slug: "salt" },
    { id: "10", name: "black pepper", slug: "black-pepper" },
    { id: "11", name: "chicken breast", slug: "chicken-breast" },
    { id: "12", name: "rice", slug: "rice" },
    { id: "13", name: "potato", slug: "potato" },
    { id: "14", name: "broccoli", slug: "broccoli" },
    { id: "15", name: "spinach", slug: "spinach" },
    { id: "16", name: "cheddar cheese", slug: "cheddar-cheese" },
    { id: "17", name: "butter", slug: "butter" },
    { id: "18", name: "milk", slug: "milk" },
    { id: "19", name: "flour", slug: "flour" },
    { id: "20", name: "bacon", slug: "bacon" },
  ]

  export const planner = {
    startDate: "2024-11-04T00:00:00.000Z",
    endDate: "2024-11-10",
    meals: [
      {
        date: "2024-11-04T00:00:00.000Z", 
        mealTime: "dinner",
        mealId: "1",
        mealDetails: {
          ...meals[0]
        }
      },
      {
        date: "2024-11-04T00:00:00.000Z", 
        mealTime: "breakfast",
        mealId: "3",
        mealDetails: {
          ...meals[2]
        }
      },
      {
        date: "2024-11-06T00:00:00.000Z", 
        mealTime: "breakfast",
        mealId: "3",
        mealDetails: {
          ...meals[2]
        }
      },
      {
        date: "2024-11-07T00:00:00.000Z", 
        mealTime: "lunch",
        mealId: "4",
        mealDetails: {
          ...meals[3]
        }
      }
    ]
  }