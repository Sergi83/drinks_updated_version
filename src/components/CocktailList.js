import React from 'react';
import Cocktail from './Cocktail';
import { useGlobalContext } from '../context';
import LoadingList from './Loading/LoadingList';


export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();


  if (!loading && cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    );
  };

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      {(cocktails.length >= 1) 
        ? (
          <div className='cocktails-center'>
            {cocktails.map((item) => {
                return <Cocktail key={item.id} {...item} />
              })
            }
          </div>
          )
        : (
          <section className="cocktails-center">
            {[1,2,3].map(n => <LoadingList key={n} />)}
          </section>
        )
      }
    </section>
  );
};
