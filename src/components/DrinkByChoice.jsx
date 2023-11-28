import React from "react";
import Wrapper from "../assets/wrappers/DrinkByChoice";
import { Link } from "react-router-dom";

const DrinkByChoice = ({ drinksArray, item }) => {
  return (
    <>
      <Wrapper>
        <div className="mainImgContainer">
          <img
            src={`https://thecocktaildb.com/images/ingredients/${item}-Medium.png`}
            alt={item}
            className="ing-img"
          />
          <h4>{item}</h4>
        </div>
        <div>
          <div className="drinksTitle">
            <h4>Drinks</h4>
          </div>
          <div className="drinksContainer">
            {drinksArray.map((item) => {
              const {
                idDrink: id,
                strDrink: name,
                strDrinkThumb: image,
              } = item;
              return (
                <Link to={`/cocktail/${id}`} key={id}>
                  <div key={id} className="singleDrinkContainer">
                    <img src={image} alt={name} className="drinkImg" />
                    <p>{name.length > 30 ? name.slice(0, 21) : name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default DrinkByChoice;
