import React, { useEffect, useState } from "react";
import Container from "../Container/Container";
import FoodCard from "./FoodCard";
import { Link } from "react-router";
import Loading from "../../Loading/Loading";

const FeatureFoods = () => {
  const [featureFoods, setFeatureFoods] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://plateshare-community-server.vercel.app/feature-foods")
      .then((res) => res.json())
      .then((data) => {
        setFeatureFoods(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="pt-10 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <Container className="px-3">
        <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
          Feature Foods
        </h1>

        <div className="md:w-1/2 mx-auto">
          <p className="text-center py-2 pt-3 text-base text-gray-500 dark:text-gray-300">
            Discover our featured foods, carefully prepared and fresh, ready to
            delight your taste buds while reducing food waste daily.
          </p>
        </div>

        {/* Foods Card */}
        <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {featureFoods?.map((food) => (
            <FoodCard key={food._id} food={food} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex items-center justify-center py-10 pb-5">
          <Link
            to="/viewAllFoods"
            className="
              my-btn text-white font-semibold
              bg-linear-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07]
              hover:bg-linear-to-l
              dark:bg-none
              dark:bg-[#fd7d07]
              dark:text-black
              dark:hover:bg-[#012444]
              dark:hover:text-white
              transition-all duration-300
            "
          >
            View All
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default FeatureFoods;
