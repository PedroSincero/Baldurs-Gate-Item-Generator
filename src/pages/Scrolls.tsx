import FilterByName from "../components/Filters/FilterByName";
// import FilterByPrice from "../components/Filters/FilterByPrice";

import scrolls from "../data/scrolls.json";
import Item from "../components/Item";
import { useState } from "react";
import SelectField from "../components/SelectField";

export default function Scrolls() {
  const COMPARISON_OPERATORS = ['All', 'Common', 'Uncommon', 'Rare', 'Very Rare']; 

  const [filterName, setFilterName] = useState("");
  const [filterRarity, setFilterRarity] = useState("All");
  
  return (
    <>
    <div>
      <FilterByName handleChange={({ target: { value } }) => setFilterName(value)} />
      <SelectField options={COMPARISON_OPERATORS} name="rarity" handleChange={({ target: { value } }) => setFilterRarity(value)} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {
        scrolls
          .filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase()))
          .filter(({details: { rarity }}) => rarity === filterRarity || filterRarity === "All")
          .map((scroll, index) => (
          <Item
          key={index}
          name={scroll.name}
          description={scroll.description}
          image={scroll.image}
          properties={scroll.properties}
          details={scroll.details}
          effect={scroll.effect}
          condition={scroll.condition}
          link={scroll.link} />
        ))
      }
    </div>
    </>
  )
}
