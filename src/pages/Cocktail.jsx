import { useLoaderData, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import axios from "axios";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const { data } = await axios(`${singleCocktailUrl}${id}`);
  console.log("data", data.drinks[0]);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
    strIngredient1: ingredient1,
    strIngredient2: ingredient2,
    strIngredient3: ingredient3,
    strIngredient4: ingredient4,
    strIngredient5: ingredient5,
    strMeasure1: measure1,
    strMeasure2: measure2,
    strMeasure3: measure3,
    strMeasure4: measure4,
    strMeasure5: measure5,
  } = singleDrink;

  const ingredientImagSrc = (str) => {
    if (!str) return;
    const lowerStr = str.toLowerCase();
    const splitStr = lowerStr.split(" ");
    console.log(splitStr);
    const newStr = splitStr.join("%20");
    return newStr;
  };

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name : </span>
            {name}
          </p>
          <p>
            <span className="drink-data">info : </span>
            {info}
          </p>
          <p>
            <span className="drink-data">category : </span>
            {category}
          </p>
          <p>
            <span className="drink-data">glass : </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions : </span>
            {instructions}
          </p>
        </div>
      </div>
      <div>
        <div className="img-container">
          <div>
            <img
              src={`https://thecocktaildb.com/images/ingredients/${ingredientImagSrc(
                ingredient1
              )}-Medium.png`}
              alt=""
              className="ing-img"
            />
            <h3>{ingredient1}</h3>
            <p>{measure1}</p>
          </div>
          <div>
            <img
              src={`https://thecocktaildb.com/images/ingredients/${ingredientImagSrc(
                ingredient2
              )}-Medium.png`}
              alt=""
              className="ing-img"
            />
            <h3>{ingredient2}</h3>
            <p>{measure2}</p>
          </div>
          <div>
            <img
              src={`https://thecocktaildb.com/images/ingredients/${ingredientImagSrc(
                ingredient3
              )}-Medium.png`}
              alt=""
              className="ing-img"
            />
            <h3>{ingredient3}</h3>
            <p>{measure3}</p>
          </div>
          <div>
            <img
              src={`https://thecocktaildb.com/images/ingredients/${ingredientImagSrc(
                ingredient4
              )}-Medium.png`}
              alt=""
              className="ing-img"
            />
            <h3>{ingredient4}</h3>
            <p>{measure4}</p>
          </div>
          <div>
            <img
              src={`https://thecocktaildb.com/images/ingredients/${ingredientImagSrc(
                ingredient5
              )}-Medium.png`}
              alt=""
            />
            <h3>{ingredient5}</h3>
            <p>{measure5}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
