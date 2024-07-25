import Image from "next/image";
import Link from "next/link";
import "./Card.scss";

const Card = ({ id, name, image, rating }) => {
  const recipeLink = `/recipe/${id}`;
  return (
    <div className="card">
      <div className="card__thumbnail">
        <Link href={recipeLink}>
          <Image
            className="card__img"
            src={image}
            alt={name}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            width={0}
            height={0}
          />
        </Link>
        <span className="card__badge">
          <Image src="/star-icon.svg" alt="rating" width={15} height={15} />
          {rating}
        </span>
      </div>
      <Link href={recipeLink} className="card__title">
        {name}
      </Link>
    </div>
  );
};

export default Card;
