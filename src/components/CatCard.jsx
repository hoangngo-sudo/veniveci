import React from 'react';

const CatCard = ({ cat, onBanAttribute }) => {
  const { image, breed } = cat;
  
  return (
    <div className="cat-card">
      <h2 className="cat-name">{cat.randomName}</h2>
      
      <div className="cat-attributes">
        <button 
          className="attribute-buttons" 
          onClick={() => onBanAttribute(`${breed.life_span} years`)}
        >
          {breed.life_span} years
        </button>
        <button 
          className="attribute-buttons" 
          onClick={() => onBanAttribute(breed.name)}
        >
          {breed.name}
        </button>
        <button 
          className="attribute-buttons" 
          onClick={() => onBanAttribute(`${breed.weight.imperial} lbs`)}
        >
          {breed.weight.imperial} lbs
        </button>
        <button 
          className="attribute-buttons" 
          onClick={() => onBanAttribute(breed.origin)}
        >
          {breed.origin}
        </button>
      </div>
      
      <img
        className="cat-pic"
        src={image.url}
        alt={`A ${breed.name} cat`}
        height="250px"
        width="250px"
      />
    </div>
  );
};

export default CatCard;