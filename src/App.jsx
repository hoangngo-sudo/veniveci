// filepath: c:\Users\hoang\Subdisk\school\UIC\CodePath\WEB102\veniveci\src\App.jsx
import React, { useState } from "react";
import "./App.css";
import CatCard from "./components/CatCard";
import BannedList from "./components/BannedList";
import CatHistory from "./components/CatHistory";
import { fetchRandomCat } from "./components/CatAPI";

function App() {
  const [cat, setCat] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bannedAttributes, setBannedAttributes] = useState([]);
  const [catHistory, setCatHistory] = useState([]);

  const loadRandomCat = async () => {
    setIsLoading(true);    
    try {
      const catData = await fetchRandomCat(bannedAttributes);
      setCat(catData);
      // Add to history when a new cat is loaded
      setCatHistory(prev => [...prev, catData]);
    } catch (err) {
      console.error("Failed to fetch a cat. Please try again.", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBanAttribute = (attribute) => {
    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes([...bannedAttributes, attribute]);
    }
  };

  const handleRemoveBannedAttribute = (attribute) => {
    setBannedAttributes(bannedAttributes.filter(attr => attr !== attribute));
  };

  const handleSelectHistoryCat = (selectedCat) => {
    setCat(selectedCat);
  };

  return (
    <div className="app-container">
      <CatHistory 
        catHistory={catHistory} 
        onSelectCat={handleSelectHistoryCat} 
      />

      <div className="center-page">
        <h1>All the cats are here 🐈</h1>        
        {isLoading ? (
          <div className="loading">Loading your purrfect match...</div>
        ) : cat ? (
          <CatCard cat={cat} onBanAttribute={handleBanAttribute} />
        ) : (
          <div>
            <h3>No cat selected yet</h3>
            <p>Click the Discover button to find a cat!</p>
          </div>
        )}
        
        <button 
          type="button" 
          className="discover-btn" 
          onClick={loadRandomCat}
          disabled={isLoading}
        >
          {isLoading ? 'Finding...' : 'Discover!'}
        </button>
      </div>
      
      <BannedList 
        bannedAttributes={bannedAttributes} 
        onRemoveAttribute={handleRemoveBannedAttribute} 
      />
    </div>
  );
}

export default App;