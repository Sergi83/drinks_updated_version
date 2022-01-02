import React from 'react';

import ProgressiveImage from "react-progressive-graceful-image";

const ShowSingleCocktail = ({props}) => {

    const { name, image, category, info, glass, instructions, ingredients } = props;

    // for smooth loading images
    const dominantImageColor = '#86356B';
    const placeholder = (
        <div
        style={{ backgroundColor: dominantImageColor }}
        />
    );

    return (
        <>
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
                <ProgressiveImage src={image} placeholder={placeholder}>
                    {(src) => <img src={src} alt={name} />}
                </ProgressiveImage>
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span> {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span> {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span> {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span> {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructons :</span> {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                            {ingredients.map((item, index) => {
                                return item ? <span key={index}> {item},</span> : null
                            })}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ShowSingleCocktail;
