import React, { useEffect, useState } from "react";
import Container from "../Componants/Container/Container";
import FoodCard from "../Componants/HomeComponants/FoodCard";
import axios from "axios";
import Loading from "../Loading/Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const limit = 6;

  /*  Foods */
  const fetchFoods = async (reset = false) => {
    try {
      setLoading(true);

      const res = await axios.get(
        "https://plateshare-community-server.vercel.app/available-foods",
        {
          params: {
            search,
            page,
            limit,
          },
        }
      );

      let fetchedFoods = res.data.foods;

      /* sorting */
      if (sortBy === "quantity") {
        fetchedFoods.sort((a, b) => b.quantity - a.quantity);
      } else if (sortBy === "rating") {
        fetchedFoods.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === "pickupLocation") {
        fetchedFoods.sort((a, b) =>
          a.pickupLocation.localeCompare(b.pickupLocation)
        );
      }

      if (reset) {
        setFoods(fetchedFoods);
      } else {
        setFoods((prev) => [...prev, ...fetchedFoods]);
      }

      setHasMore(page < res.data.totalPages);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  /* 🔁 When search / sort changes */
  useEffect(() => {
    setPage(1);
    fetchFoods(true);
  }, [search, sortBy]);

  /* 🔁 Pagination */
  useEffect(() => {
    if (page !== 1) fetchFoods();
  }, [page]);

  return (
    <div className="pt-10 dark:bg-gray-900 min-h-screen text-gray-100">
      <title>Available Foods - PlateShare Community</title>

      <Container className="px-3">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
          Available Foods
        </h1>
        <p className="text-center py-3 max-w-xl mx-auto text-gray-400">
          Browse fresh, ready-to-collect meals shared by our community.
        </p>

        {/* 🔍 Search & Sort */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-6">
          <input
            type="text"
            placeholder="Search food name or location"
            className="input dark:text-white input-bordered text-black w-full md:w-1/4"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select dark:text-white text-black w-full md:w-1/4"
          >
            <option value="">Sort By</option>
            <option value="pickupLocation">Pickup Location</option>
            <option value="quantity">Quantity</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Food Cards */}
        <div className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-7 pb-10">
          {foods.map((food) => (
            <FoodCard key={food._id} food={food} darkMode />
          ))}
        </div>

        {/*  Load More */}
        {hasMore && (
          <div className="flex justify-center pb-10">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="btn bg-[#fd7d07] text-white hover:bg-[#012444]"
              disabled={loading}
            >
              {loading ? <Loading></Loading> : "Load More"}
            </button>
          </div>
        )}

        {!loading && foods.length === 0 && (
          <p className="text-center text-gray-400 py-16">No foods found 😢</p>
        )}
      </Container>
    </div>
  );
};

export default AvailableFoods;
