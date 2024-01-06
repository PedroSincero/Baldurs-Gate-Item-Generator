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
    <div className="border w-80">
      <div className="flex border justify-between">
        <p className="text-lg">{name}</p>
        <div className="text-xs">
          <p>Rarity: {details.rarity}</p>
          <p>Weight: {details.weight}</p>
          <p>Price: {details.price}</p>
        </div>
      </div>
      <div className="flex ">
        <div className="border ">
          <img src={image} alt={name}  />
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
          <div className="flex justify-between">
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
      <div className="border">
        <a href={link} target="_blank" rel="noreferrer">More Details</a>
      </div>
    </div>
  )
}
