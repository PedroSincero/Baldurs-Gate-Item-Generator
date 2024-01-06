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
    <div>
      <div>
        <p>{name}</p>
        <div>
          <p>{details.rarity}</p>
          <p>{details.weight}</p>
          <p>{details.price}</p>
        </div>
      </div>
      <div>
        <div>
          <img src={image} alt={name}  />
        </div>
        <div>
          <div>
          {
            properties.map((property) => (
              <p>{property}</p>
            ))
          }
          </div>
        </div>
        <div>
          <p>
            {description}
          </p>
        </div>
        <div>
          {
            effect.map((effect) => (
              <p>{effect}</p>
            ))
          }
        </div>
        <div>
          {
            condition.map((condition) => (
              <p>{condition}</p>
            ))
          }
        </div>
        <div>
          <a href={link} target="_blank" rel="noreferrer">More Details</a>
        </div>
      </div>
    </div>
  )
}
