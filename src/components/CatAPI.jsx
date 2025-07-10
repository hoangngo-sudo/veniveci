import { getRandomName } from './CatNames';

const API_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const fetchRandomCat = async (bannedAttributes = []) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?has_breeds=1`,
    {
      headers: {
        'x-api-key': API_KEY
      }
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch cat data');
  }
  const [imageData] = await response.json();
  
  if (!imageData || !imageData.breeds || imageData.breeds.length === 0) {
    return fetchRandomCat(bannedAttributes);
  }
  
  const breed = imageData.breeds[0];
  
  // Check if this cat has any banned attributes
  const attributes = [
    breed.name,
    `${breed.life_span} years`,
    breed.origin,
    `${breed.weight.imperial} lbs`
  ];
  
  if (attributes.some(attr => bannedAttributes.includes(attr))) {
    // This cat has a banned attribute, try again
    return fetchRandomCat(bannedAttributes);
  }
  
  // Return a nicely formatted cat object with a random name
  return {
    image: imageData,
    breed,
    randomName: getRandomName()
  };
};

export { fetchRandomCat, API_KEY };