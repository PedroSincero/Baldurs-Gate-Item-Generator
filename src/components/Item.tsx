interface DetailsScrolls {
  rarity: string,
  weight: string,
  price: string,
}

interface ItemProps {
  name: string;
  description: string;
  image: string;
  details: DetailsScrolls;
  link: string;
}

export default function Item({ name, description, image, details, link}: ItemProps) {
  return (
    <div className="border w-80">
      <div className="grid grid-flow-col border">
        <p className="text-lg">{name}</p>
        <div className="text-xs">
          <p>Rarity: {details.rarity}</p>
          <p>Weight: {details.weight}</p>
          <p>Price: {details.price}</p>
        </div>
      </div>
      <div className="flex w-full h-full">
        <img src={image} alt={name}  className=" border w-28 h-24"/>
        {/* <div className="border">
        {/* </div> */}
        <div>
          {/* <div className="border">
            Properties
            {
              properties.map((property) => (
                <p className="text-xs">{property}</p>
              ))
            }
          </div> */}
          <div className="border">
            Description
            <p className="text-xs">
              {description}
            </p>
          </div>
          <a href={link} target="_blank" rel="noreferrer" >
            More Details
          </a> 
        </div>
      </div>
      {/* <div className="grid grid-flow-col border">
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
      </div> */}
      {/* <div className="flex border items-end">
        
      </div> */}
    </div>
  )
}
