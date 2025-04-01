
const furnitureList = [
  { id: 1, name: "Sofa" },
  { id: 2, name: "Table" },
  { id: 3, name: "Chair" },
  { id: 4, name: "Bed" },
  { id: 5, name: "Wardrobe" }
];
const furniture = {
  type: "Sofa",
  color: "Blue",
  size: "Large"
};

const furnitureDetails = {
  id: 1,
  name: "Sofa",
  description: "A comfortable sofa for your living room.",
  price: "$500",
  image: "/sofa.jpg"
};
const furnitureImages = {
  sofa: "/sofa.jpg",
  table: "/table.jpg",
  chair: "/chair.jpg",
  bed: "/bed.jpg",
  wardrobe: "/wardrobe.jpg"
};

export { furnitureList, furniture, furnitureDetails, furnitureImages };
export default furnitureList;