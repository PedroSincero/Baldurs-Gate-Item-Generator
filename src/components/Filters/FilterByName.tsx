interface FilterByNameProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FilterByName({ handleChange }: FilterByNameProps) {
  return (
    <label htmlFor="filterName">
      Filtrar por nome:
      <input
        type="text"
        id="filterName"
        name="filterName"
        data-testid="filterName"
        onChange={ handleChange }
      />
    </label>
  )
}
