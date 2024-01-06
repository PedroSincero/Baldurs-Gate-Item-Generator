export default function FilterByName() {
  return (
    <label htmlFor="filterName">
      Filtrar por nome:
      <input
        type="text"
        id="filterName"
        name="filterName"
        data-testid="filterName"
      />
    </label>
  )
}
