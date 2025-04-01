import { useParams } from "react-router-dom";
import designs from "../jsfile/designs"; // Import the designs array

export const DesignDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const design = designs.find((item) => item.id === parseInt(id)); // Find the design by ID

  if (!design) {
    return <p className="text-center text-2xl">Design not found!</p>;
  }

  return (
    <div className="design-details m-10">
      <h1 className="text-4xl font-bold text-center mb-5">{design.name}</h1>
      <div className="flex flex-col items-center">
        <img
          src={design.image}
          alt={design.name}
          className="w-96 h-96 object-cover rounded-lg shadow-lg"
        />
        <p className="text-lg mt-5">{design.description}</p>
      </div>
    </div>
  );
};