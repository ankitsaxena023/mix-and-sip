import { useLoaderData, Link, Navigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";
import SingleCocktailIngredient from "../components/SingleCocktailIngredient";
import { useQuery } from "@tanstack/react-query";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <h2>Instruction</h2>
          <p>{instructions}</p>
          <h2>Glass</h2>
          <p>{glass}</p>
        </div>
      </div>
      <div>
        <h3>Ingredients</h3>
        <div>
          <SingleCocktailIngredient singleDrink={singleDrink} />
        </div>
      </div>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </header>
    </Wrapper>
  );
};

export default Cocktail;
