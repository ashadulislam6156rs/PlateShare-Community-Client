import React, { useEffect, useState } from "react";
import Container from "../Componants/Container/Container";
import FoodCard from "../Componants/HomeComponants/FoodCard";
import Loading from "../Loading/Loading";

const ViewAllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plateshare-community-server.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => {
        setAllFoods(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-10 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <title>View All Foods - PlateShare Community</title>
      <Container className="px-3">
        <h1 className="text-3xl font-bold text-[#fd7d07] dark:text-orange-400 text-center">
          All Foods
        </h1>
        <div className="md:w-1/2 mx-auto">
          <p className="text-center py-2 pt-3 text-base text-gray-500 dark:text-gray-400">
            Explore our full collection of fresh, delicious foods — each
            prepared with care and shared to bring joy to your meals while
            helping reduce daily food waste. Find the perfect dish waiting just
            for you.
          </p>
        </div>
        {/* Foods Card */}
        <div className="mt-7 grid md:grid-cols-2 gap-7 lg:grid-cols-3">
          {allFoods?.map((food) => (
            <FoodCard key={food._id} food={food}></FoodCard>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ViewAllFoods;
