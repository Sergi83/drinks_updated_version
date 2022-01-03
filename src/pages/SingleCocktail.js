import React from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingItem from '../components/Loading/LoadingItem';


// for smooth loading images
import ShowSingleCocktail from '../components/ShowSingleCocktail';

export default function SingleCocktail() {
  // useParams -> for multiple routes (cocktail/:id), moving to the id of route
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);

    async function getCocktail() {

      try {
        // get the cocktail by its id
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);

        } else {
          setCocktail(null);
        };

      } catch (error) {
        console.log(error);
      };
      setLoading(false);
    };

    // run function -> get data from api
    getCocktail();
  }, [id]);

  if (loading) {
    // 1. single item
    return <LoadingItem />;
  };

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>;

  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;


    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          to home page
        </Link>
        <ShowSingleCocktail  props={{
          name,
          image,
          category,
          info,
          glass,
          instructions,
          ingredients
        }} />
      </section>
    );
  }
};
