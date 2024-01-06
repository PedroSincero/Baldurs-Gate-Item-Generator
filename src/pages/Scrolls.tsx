// import FilterByName from "../components/Filters/FilterByName";
import scrolls from "../data/scrolls.json";
import Item from "../components/Item";

export default function Scrolls() {
  return (
    <>
    <div>
      {/* <FilterByName /> */}
    </div>
    <div className="grid grid-cols-4 gap-4">
      {
        scrolls.map((scroll) => (
          <Item
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
      {/* <Item
      name={scrolls[0].name}
      description={scrolls[0].description}
      image={scrolls[0].image}
      properties={scrolls[0].properties}
      details={scrolls[0].details}
      effect={scrolls[0].effect}
      condition={scrolls[0].condition}
      link={scrolls[0].link}
      />
      <Item
      name={scrolls[1].name}
      description={scrolls[1].description}
      image={scrolls[1].image}
      properties={scrolls[1].properties}
      details={scrolls[1].details}
      effect={scrolls[1].effect}
      condition={scrolls[1].condition}
      link={scrolls[1].link}
      />
      <Item
      name={scrolls[2].name}
      description={scrolls[2].description}
      image={scrolls[2].image}
      properties={scrolls[2].properties}
      details={scrolls[2].details}
      effect={scrolls[2].effect}
      condition={scrolls[2].condition}
      link={scrolls[2].link}
      /> */}
    </div>
    </>
    
    // filterByName
    // filterByRarity
    // FilterByPrice, smaller than, equal to, greater than
    // sortingr
  )
}
