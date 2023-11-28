import React from "react";
import { Link } from "react-router-dom";

export const SingleCocktailIngredient = ({ singleDrink }) => {
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);

  const validMeasures = Object.keys(singleDrink)
    .filter((key) => key.startsWith("strMeasure") && singleDrink[key] !== null)
    .map((key) => singleDrink[key]);

  return (
    <div className="img-container">
      {validIngredients.map((item, i) => {
        return (
          <Link to={`/ingredient/${item}`} key={i}>
            <div className="singleImgDiv" key={item}>
              <img
                src={`https://thecocktaildb.com/images/ingredients/${item}-Medium.png`}
                alt={item}
                className="ing-img"
              />
              <h4>{item}</h4>
              {validMeasures.map((measure, j) => {
                if (i === j) {
                  return <p key={i}>{measure}</p>;
                }
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SingleCocktailIngredient;
