export default async function Slug({ params }) {
  return (
    <div>
      <h3>{await params.slug}</h3>

      <div>Details will live here</div>
    </div>
  )
}
