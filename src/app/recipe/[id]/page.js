import Image from "next/image";
import Link from "next/link";
import "./Recipe.scss";

async function getSingleRecipe(opts = {}) {
  const url = `https://dummyjson.com/recipes/${opts.recipeId}`;
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error(
        `Response status: ${response.status}. Message: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error(error.message);
  }
}

export async function generateMetadata({ params }) {
  const data = await getSingleRecipe({ recipeId: params.id });
  const { name, mealType } = data;

  return {
    title: `${name} | Taste Trail`,
    keywords: mealType.map((type) => type),
  };
}

export default async function recipe({ params }) {
  const data = await getSingleRecipe({ recipeId: params.id });
  const {
    name,
    ingredients,
    instructions,
    image,
    mealType,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
  } = data;
  const sectionStyle = {
    background: `linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,.9) 90%), url(${image}) no-repeat center / cover`,
  };
  return (
    <div className="recipe" style={sectionStyle}>
      <Link href="/" className="logo">
        <Image src="/logo.svg" alt="Taste Trail Logo" width={80} height={80} />
      </Link>
      <div className="container container--recipe">
        <div className="recipe__header">
          <h1 className="recipe__name">{name}</h1>
        </div>
        <ul className="recipe__info">
          <li className="recipe__info-item">
            <span className="recipe__info-title">Prep Time</span>
            <Image
              className="recipe__info-icon"
              src={"/timer-icon.svg"}
              width={40}
              height={40}
              alt="timer"
            />
            <span className="recipe__info-body">{prepTimeMinutes}</span>
          </li>
          <li className="recipe__info-item">
            <span className="recipe__info-title">Cook Time</span>
            <Image src={"/pot-icon.svg"} width={60} height={60} alt="pot" />
            <span className="recipe__info-body">{cookTimeMinutes}</span>
          </li>
          <li className="recipe__info-item">
            <span className="recipe__info-title">Servings</span>
            <Image
              className="recipe__info-icon"
              src={"/servings-icon.svg"}
              width={50}
              height={50}
              alt="tray"
            />
            <span className="recipe__info-body">{servings}</span>
          </li>
          <li className="recipe__info-item">
            <span className="recipe__info-title">Difficulty</span>
            <Image
              className="recipe__info-icon"
              src={"/meter-icon.svg"}
              width={50}
              height={50}
              alt="meter"
            />
            <span className="recipe__info-body">{difficulty}</span>
          </li>
        </ul>
        <div className="recipe__main">
          <h2 className="recipe__title recipe__title--ingredients">
            Ingredients
          </h2>
          <ul className="recipe__list recipe__list--ingredients">
            {ingredients.map((ingredient) => (
              <li className="recipe__item" key={ingredient}>
                {ingredient}
              </li>
            ))}
          </ul>
          <h2 className="recipe__title recipe__title--steps">Steps</h2>
          <ol className="recipe__list recipe__list--steps">
            {instructions.map((step, index) => (
              <li className="recipe__item" key={index}>
                {step}
              </li>
            ))}
          </ol>
          <h2 className="recipe__title recipe__title--meal-type">Meal Type</h2>
          <ul className="recipe__links">
            {mealType.map((type) => (
              <li key={type} className="recipe__link-item">
                <Link className="recipe__link" href={`/recipe-type/${type}`}>
                  {type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
