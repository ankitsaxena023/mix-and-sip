import React from 'react';
import Wrapper from '../assets/wrappers/CocktailList';
import CocktailCard from '../components/CocktailCard';


const CocktailList = ({ drinks }) => {
  if (!drinks)
    return <h2>No matching cocktail found...</h2>

  const formattedDrinks = drinks.map(item => {
    const { idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <Wrapper>
      {formattedDrinks.map(item => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </Wrapper>
  )
}

export default CocktailList