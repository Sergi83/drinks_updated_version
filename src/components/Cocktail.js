import React from 'react';
import { Link } from 'react-router-dom';

// component for smooth loading images
import ProgressiveImage from "react-progressive-graceful-image";


export default function Cocktail({ image, name, id, info, glass }) {
  
  // create parameters for images (when images loading)
  const dominantImageColor = '#86356B';
  const placeholder = (
    <div
      style={{ backgroundColor: dominantImageColor }}
    />
  );

  return (
    <article className='cocktail'>
      <div className='img-container'>
        <ProgressiveImage src={image} placeholder={placeholder} >
          {src => <img src={src} alt={name} />}
        </ProgressiveImage>
        {/* <img src={image} alt={name} /> */}
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
  );
};
