// import FilterByName from "../components/Filters/FilterByName";
import scrolls from "../data/scrolls.json";
import Item from "../components/Item";

export default function Scrolls() {
  return (
    <>
    <div>
      {/* <FilterByName /> */}
    </div>
    <div>
      {/* {
        scrolls.map((scroll) => (
          <Item name={scroll.name} description={scroll.description} image={scroll.image} properties={scroll.properties} details={scroll.details} effect={scroll.effect} />
        ))
      } */}
      <Item
      name={scrolls[0].name}
      description={scrolls[0].description}
      image={scrolls[0].image}
      properties={scrolls[0].properties}
      details={scrolls[0].details}
      effect={scrolls[0].effect}
      condition={scrolls[0].condition}
      link={scrolls[0].link}
      />
    </div>
    </>
    
    // filterByName
    // filterByRarity
    // FilterByPrice, smaller than, equal to, greater than
    // sortingr
  )
}
