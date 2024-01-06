interface DetailsScrolls {
  rarity: string,
  weight: string,
  price: string,
}

interface ItemProps {
  name: string;
  description: string;
  image: string;
  properties: string[];
  details: DetailsScrolls;
  effect: string[];
  condition: string[];
  link: string;
}

export default function Item({ name, description, image, properties, details, effect, condition, link}: ItemProps) {
  return (
    <div className="border h-[500px]">
      <div className="grid grid-flow-col border h-16">
        <p className="text-lg">{name}</p>
        <div className="text-xs">
          <p>Rarity: {details.rarity}</p>
          <p>Weight: {details.weight}</p>
          <p>Price: {details.price}</p>
        </div>
      </div>
      <div className="flex ">
        <div className="border">
        <a href={link} target="_blank" rel="noreferrer">
          <img src={image} alt={name}  className=" w-72"/>
          More Details
        </a>
        </div>
        <div>
          <div className="border">
            Properties
            {
              properties.map((property) => (
                <p className="text-xs">{property}</p>
              ))
            }
          </div>
          <div className="border">
            Description
            <p className="text-xs">
              {description}
            </p>
          </div>


        </div>
      </div>
      <div className="grid grid-flow-col border">
        <div className="border">
          Conditions
          {
            condition.map((condition) => (
              <p className="text-xs">{condition}</p>
            ))
          }
        </div>
        <div className="border">
          Effects
          {
            effect.map((effect) => (
              <p className="text-xs">{effect}</p>
            ))
          }
        </div>
      </div>
      {/* <div className="flex border items-end">
        
      </div> */}
    </div>
  )
}
