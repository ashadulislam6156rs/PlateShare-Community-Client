import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({ food }) => {
    // console.log(food);
  const {
      _id,
      foodName,
      foodImage,
      category,
      status,
      quantity,
      pickupLocation,
      expireDate,
      pickupTimeWindow,
    } = food || {};
    
    return (
      <div>
        <div className="card w-full bg-base-200 shadow-lg h-[550px] flex flex-col justify-between rounded-lg overflow-hidden">
          <figure className="w-full h-70 overflow-hidden">
            <img className="w-full h-full" src={foodImage} alt={foodName} />
          </figure>

          <div className="p-4 space-y-2 flex-1 ">
            <h2 className="text-2xl font-bold text-[#fd7d07]">{foodName}</h2>
            <p className="text-sm text-gray-500 font-semibold">
              Category: <span className="font-normal">{category}</span>
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Quantity: <span className="font-normal">{quantity}</span>
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Pickup: <span className="font-normal">{pickupLocation}</span>
            </p>
            <p className="text-sm text-gray-500 font-semibold">
              Expires on: <span className="font-normal">{expireDate}</span>
            </p>
            <div className="flex gap-5 items-center border-t border-gray-300 pt-2">
              <p className="text-sm text-gray-500 font-semibold">
                Pickup Time:{" "}
                <span className="font-normal">{pickupTimeWindow}</span>
              </p>
              <p
                className={`text-sm font-semibold ${
                  status === "Available" ? "text-green-600" : "text-red-600"
                }`}
              >
                Status: <span className="font-normal">{status}</span>
              </p>
            </div>
          </div>

          <Link to={`/food/foodDetails/${_id}`} className="p-4 pt-1">
            <button className="w-full py-2 my-outline-btn border-[#012444] text-[#fd7d07] font-semibold rounded hover:bg-[#012444] hover:text-white">
              View Food Details
            </button>
          </Link>
        </div>
      </div>
    );
};

export default FoodCard;