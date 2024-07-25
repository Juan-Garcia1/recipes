import SearchForm from "./components/SearchForm";
import Hero from "./components/Hero";
import Card from "./components/Card";

async function getRecipes(opts = {}) {
  const filter = "select=id,name,image,rating";
  let url = `https://dummyjson.com/recipes`;

  if (opts.searchQuery) {
    url += `/search?q=${opts.searchQuery}`;
  }

  url += opts.searchQuery ? `&${filter}` : `?${filter}`;

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

export default async function Home({ searchParams }) {
  const data = await getRecipes({ searchQuery: searchParams.search });
  return (
    <main>
      <Hero
        title="The Journey to Great Taste Starts Now"
        subText="Uncover a world of flavors with our curated collection of recipes. From quick weeknight meals to exquisite dishes, we have something for every palate."
      >
        <SearchForm />
      </Hero>
      <div className="container">
        {!data.recipes.length ? (
          <p className="no-results-message">
            Sorry, no results found for <strong>{searchParams.search}</strong>.
          </p>
        ) : (
          <ul className="recipes">
            {data.recipes.map((recipe) => (
              <li key={recipe.id}>
                <Card {...recipe} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
