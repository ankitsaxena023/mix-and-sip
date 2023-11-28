import React from "react";
import Wrapper from "../assets/wrappers/CocktailCard";
import { Link, useOutletContext } from "react-router-dom";

const CocktailCard = ({ id, name, image, info }) => {
  return (
    <Wrapper>
      <Link to={`/cocktail/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
        </div>
        <div className="footer">
          <h4>{name}</h4>
          <p>{info}</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default CocktailCard;
