import SelectField from "../SelectField";

export default function FilterByPrice() {

  const COMPARISON_OPERATORS = ['maior que', 'menor que', 'igual a']; 
  return (
    <div>
      <SelectField options={COMPARISON_OPERATORS} name="comparison_operator" handleChange={({ target: { value } }) => console.log(value)} />
    </div>
  )
}
