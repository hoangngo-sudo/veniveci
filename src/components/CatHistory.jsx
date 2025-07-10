import React from 'react';

const CatHistory = ({ catHistory, onSelectCat }) => {
  return (
    <div className="left-section">
      <h2>Cat History</h2>
      <div className="cat-history-container">
        {catHistory && catHistory.length > 0 ? (
          catHistory.map((cat, index) => (
            <div 
              key={`${cat.image.id}-${index}`} 
              className="history-item"
              onClick={() => onSelectCat(cat)}
              title="Click to view this cat again"
            >
              <img 
                src={cat.image.url} 
                alt={`${cat.randomName} - a ${cat.breed.name} cat`} 
                className="history-thumbnail" 
              />
              <div className="history-cat-info">
                <p className="history-cat-name">{cat.randomName}</p>
                <p className="history-cat-breed">{`A ${cat.breed.name} cat from ${cat.breed.origin}`}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>No cat history yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatHistory;