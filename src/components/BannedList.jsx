import React from 'react';

const BannedList = ({ bannedAttributes, onRemoveAttribute }) => {
  return (
    <div className="right-section">
      <h2>Banned Attributes</h2>
      <div className="banned-attributes-container">
        {bannedAttributes.length === 0 ? (
          <p>No attributes banned yet</p>
        ) : (
          bannedAttributes.map((attribute) => (
            <button 
              key={attribute} 
              className="banned-attribute-buttons" 
              onClick={() => onRemoveAttribute(attribute)}
              title="Click to remove ban"
            >
              {attribute}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default BannedList;