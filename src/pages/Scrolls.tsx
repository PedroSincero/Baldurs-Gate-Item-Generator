import FilterByName from "../components/Filters/FilterByName";
import scrolls from "../data/scrolls.json";
import Item from "../components/Item";
import { useState } from "react";

export default function Scrolls() {
  const [filterName, setFilterName] = useState("");
  // console.log(filterName);
  
  return (
    <>
    <div>
      <FilterByName handleChange={({ target: { value } }) => setFilterName(value)} />
    </div>
    <div className="grid grid-cols-4 gap-4">
      {
        scrolls.filter(({name}) => name.toLowerCase().includes(filterName.toLowerCase())).map((scroll, index) => (
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
