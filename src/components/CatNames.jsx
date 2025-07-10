const CAT_NAMES = [
  "Buddy", "Max", "Bailey", "Charlie", "Lucy", "Cooper", "Lola", 
  "Daisy", "Rocky", "Molly", "Stella", "Coco", "Ruby", "Bear", 
  "Lily", "Zoe", "Milo", "Leo", "Oliver", "Luna",
  "Whiskers", "Shadow", "Simba", "Nala", "Felix", "Mittens"
];

export const getRandomName = () => {
  return CAT_NAMES[Math.floor(Math.random() * CAT_NAMES.length)];
};