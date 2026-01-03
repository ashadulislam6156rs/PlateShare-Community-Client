import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";

const FoodCard = ({ food }) => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const {
    _id,
    foodName,
    foodImage,
    status,
    quantity,
    pickupLocation,
    expireDate,
    pickupTimeWindow,
    provider,
  } = food || {};

  return (
    <div>
      <div
        className="card w-full h-[580px] flex flex-col justify-between
        bg-base-200 dark:bg-slate-800
        shadow-lg dark:shadow-none
        rounded-lg overflow-hidden
        transition-all duration-300
        hover:shadow-xl dark:hover:shadow-[0_0_15px_rgba(253,125,7,0.3)]"
        data-aos="fade-up"
        data-aos-offset="120"
        data-aos-delay="70"
        data-aos-duration="900"
      >
        {/* Image */}
        <figure className="w-full h-60 overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            src={foodImage}
            alt={foodName}
          />
        </figure>

        {/* Content */}
        <div className="p-4 space-y-2 flex-1">
          <h2 className="text-2xl font-bold text-[#fd7d07]">{foodName}</h2>

          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            Quantity: <span className="font-normal">{quantity}</span>
          </p>

          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            Pickup Location:{" "}
            <span className="font-normal">{pickupLocation}</span>
          </p>

          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
            Expires on: <span className="font-normal">{expireDate}</span>
          </p>

          <div className="flex flex-wrap gap-4 items-center border-t border-gray-300 dark:border-slate-600 pt-2">
            <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">
              Pickup Time:{" "}
              <span className="font-normal">{pickupTimeWindow}</span>
            </p>

            <p
              className={`text-sm font-semibold ${
                status === "Available"
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              Status: <span className="font-normal">{status}</span>
            </p>
          </div>

          {/* Provider */}
          <div className="flex gap-3 items-center pt-2">
            <img
              className="w-10 h-10 rounded-full border border-gray-300 dark:border-slate-600"
              src={provider?.provider_image}
              alt={provider?.name}
            />
            <h1 className="font-medium text-gray-800 dark:text-gray-200">
              {provider?.name}
            </h1>
          </div>
        </div>

        {/* Button */}
        <Link to={`/food/foodDetails/${_id}`} className="p-4 pt-1">
          <button
            className="w-full py-2 rounded font-semibold
            text-[#fd7d07] border border-[#012444]
            hover:bg-[#012444] hover:text-white
            dark:border-[#fd7d07]
            dark:bg-[#0f172a]
            dark:hover:bg-[#fd7d07]
            dark:hover:text-black
            transition-colors duration-300"
          >
            View Food Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
