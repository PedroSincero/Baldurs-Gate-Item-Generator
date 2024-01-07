import FilterByName from "../components/Filters/FilterByName";

import scrolls from "../data/scrolls.json";
import Item from "../components/Item";
import { useState } from "react";
import SelectField from "../components/SelectField";

export default function Scrolls() {
  const COMPARISON_RARITY = ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare'];
  const COMPARISON_OPERATORS = ['maior que', 'menor que', 'igual a'];

  const [filterName, setFilterName] = useState("");
  const [filterRarity, setFilterRarity] = useState("All");
  const [filterOperator, setFilterOperator] = useState('maior que');
  const [inputPrice, setInputPrice] = useState('0');

  function compareByNumber(operator, value, data) {

    if (operator === 'maior que') {
      return data.filter(({details: { price }}) => Number(price.split(" ")[0]) > Number(value));
    }
    if (operator === 'menor que') {
      return data.filter(({details: { price }}) => Number(price.split(" ")[0]) < Number(value));
    }
    if (operator === 'igual a') {
      return data.filter(({details: { price }}) => Number(price.split(" ")[0]) === Number(value));
    }
  }

  return (
    <>
    <div>
      <FilterByName handleChange={({ target: { value } }) => setFilterName(value)} />
      <SelectField options={COMPARISON_RARITY} name="rarity" handleChange={({ target: { value } }) => setFilterRarity(value)} />
      <SelectField options={COMPARISON_OPERATORS} name="operator" handleChange={({ target: { value } }) => setFilterOperator(value)} />
      <input
        type="number"
        data-testid="value-filter"
        id="value-filter"
        name="value"
        min="0"
        value={ inputPrice }
        onChange={ ({target: { value }}) => setInputPrice(value) }
      />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {
        compareByNumber(filterOperator, inputPrice, scrolls)
          .filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
          .filter(({details: { rarity }}) => rarity === filterRarity || filterRarity === "All")
          .map((scroll, index) => (
          <Item
          key={index}
          name={scroll.name}
          description={scroll.description}
          image={scroll.image}
          details={scroll.details}
          link={scroll.link} />
        ))
      }
    </div>
    </>
  )
}