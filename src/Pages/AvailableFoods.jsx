import React from "react";
import Container from "../Componants/Container/Container";
import { useLoaderData } from "react-router";
import FoodCard from "../Componants/HomeComponants/FoodCard";

const AvailableFoods = () => {
  const availableFoods = useLoaderData();

  return (
    <div className="pt-10 bg-gray-900 min-h-screen text-gray-100">
      <title>Available Foods - PlateShare Community</title>

      <Container className={`px-3`}>
        <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
          Available Foods
        </h1>
        <div className="w-1/2 mx-auto">
          <p className="text-center py-2 pt-3 text-base text-gray-400">
            Browse fresh, ready-to-collect meals shared by our community. Choose
            what you need and enjoy while reducing food waste.
          </p>
        </div>

        {/* Foods Card */}
        <div className="mt-7 grid md:grid-cols-2 gap-7 lg:grid-cols-3 pb-10">
          {availableFoods?.map((food) => (
            <FoodCard
              key={food._id}
              food={food}
              darkMode={true} // Dark mode prop
            ></FoodCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AvailableFoods;
