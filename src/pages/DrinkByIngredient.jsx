import axios from "axios";
import { useLoaderData } from "react-router-dom";
import DrinkByChoice from "../components/DrinkByChoice";
import { useQuery } from "@tanstack/react-query";

const drinkByIngredient =
  "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

const ingredientQuery = (item) => {
  return {
    queryKey: ["ingredient", item],
    queryFn: async () => {
      const { data } = await axios(`${drinkByIngredient}${item}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { item } = params;
    await queryClient.ensureQueryData(ingredientQuery(item));
    return { item };
  };

const DrinkByIngredient = () => {
  const { item } = useLoaderData();
  const { data } = useQuery(ingredientQuery(item));
  const drinksArray = data.drinks;

  return (
    <div>
      <DrinkByChoice item={item} drinksArray={drinksArray} />
    </div>
  );
};

export default DrinkByIngredient;
