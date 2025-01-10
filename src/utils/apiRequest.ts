export const apiRequest = async (url: string, method: string, body) => {
  console.log(url)
  await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    ...(body && body),
  }).then((result) => {
    console.log(result.json(), "result!")
    result.json()
  })
}
