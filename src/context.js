import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

// api search drinks by name
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// context
const AppContext = React.createContext();


const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('n');
  const [cocktails, setCocktails] = useState([]);

  // useCallback -> rerendering data from api when input parameters changes
  const fetchDrinks = useCallback( async () => {

    // start loading
    setLoading(true);

    try {
      // add letters of a cocktail name to api url and get data from api (cocktails)
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        // save new data to cocktails array (useState hook above)
        setCocktails(newCocktails);

      } else {
        // clear cocktails array
        setCocktails([]);
      };

      // finish loading
      setLoading(false);

    } catch (error) {
      console.log(error);

      // finish loading
      setLoading(false);
    }

    // save search letters (useCallback hook) -> re-rendering data from api just when searchTerm changes
  },[searchTerm]);

  // get data from api, loading state, searched word (or letters)
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm,fetchDrinks]);

  // pass data to context
  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

// create custom hook (make sure use)
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
