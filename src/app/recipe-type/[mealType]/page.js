import Card from "@/app/components/Card";
import Hero from "@/app/components/Hero";

async function getMealType(opts = {}) {
  const url = `https://dummyjson.com/recipes/meal-type/${opts.mealType}`;
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

export default async function recipe({ params }) {
  const data = await getMealType({ mealType: params.mealType });

  return (
    <>
      <Hero title={`${params.mealType} Recipes`} />
      <div className="container">
        <ul className="recipes">
          {data.recipes.map((recipe) => (
            <li key={recipe.id}>
              <Card {...recipe} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
