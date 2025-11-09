import React from 'react';
import Container from './Container/Container';
import { useLoaderData } from 'react-router';
import { FaCheckDouble } from 'react-icons/fa6';
import { FaCheckCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const FoodDetails = () => {
    const food = useLoaderData();
console.log(food);


  const {
    foodName,
    foodImage,
    category,
    status,
    quantity,
    pickupLocation,
    expireDate,
    pickupTimeWindow,
    description,
    ingredients,
    allergyInfo,
    vegOrNonVeg,
    cookedTime,
    packagingType,
    tags,
    provider,
    requestCount,
    rating
    } = food || {};
    

    return (
      <div className="min-h-[calc(100vh-100px)] bg-gray-50 py-8">
        <Container className="px-3">
          <div className="card lg:card-side bg-white rounded-0 overflow-hidden md:gap-5 lg:gap-0">
            <figure className="w-full h-80 md:h-[500px] lg:h-full lg:w-[850px] rounded-2xl bg-amber-400">
              <img
                src={foodImage}
                alt={foodName}
                className="object-cover h-full w-full transition-opacity duration-300 hover:opacity-90"
              />
            </figure>

            <div className="card-body flex flex-col justify-between p-3 w-full md:pl-10">
              <div>
                <h2 className="card-title text-3xl font-bold text-[#fd7d07] pb-2">
                  {foodName}
                </h2>
                <p className="text-gray-700 mb-4">{description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-700">
                      Category:
                    </span>{" "}
                    {category}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Status:</span>{" "}
                    {status}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Quantity:
                    </span>{" "}
                    {quantity}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Veg/Non-Veg:
                    </span>{" "}
                    {vegOrNonVeg}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Cooked Time:
                    </span>{" "}
                    {new Date(cookedTime).toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Expire Date:
                    </span>{" "}
                    {expireDate}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Pickup Time:
                    </span>{" "}
                    {pickupTimeWindow}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Location:
                    </span>{" "}
                    {pickupLocation}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Packaging:
                    </span>{" "}
                    {packagingType}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">Rating:</span>{" "}
                    {rating} ⭐
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">
                      Requests:
                    </span>{" "}
                    {requestCount}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-1 text-gray-800">
                    Ingredients:
                  </h3>
                  <p className="text-gray-600">{ingredients.join(", ")}</p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-1 text-gray-800">
                    Allergy Info:
                  </h3>
                  <p className="text-gray-600">
                    {allergyInfo.length ? allergyInfo.join(", ") : "None"}
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="font-semibold mb-1 text-gray-800">Tags:</h3>
                  <p className="text-gray-600">{tags.join(", ")}</p>
                </div>

                <div className="mb-6 border-t pt-4 border-[#fd7e075d]">
                  <h3 className="font-semibold mb-2 text-[#fd7d07] text-xl">
                    Donator Information
                  </h3>
                  <div className="flex items-center space-x-4">
                    <img
                      src={provider.provider_image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                      <p className="font-medium text-gray-700">
                        {provider.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {provider.contact}
                      </p>
                      <p className="text-sm text-gray-500">
                        Verified:{" "}
                        {provider.verified ? (
                          <>
                            Yes{" "}
                            <FaCheckCircle className="inline-block text-green-500 font-bold" />
                          </>
                        ) : (
                          <>
                            No{" "}
                            <RxCross2 className="inline-block text-red-500 text-xl font-bold" />
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-actions mt-4">
                <button
                  className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] w-full"
                  aria-label={`Request ${foodName}`}
                >
                  Request Food
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default FoodDetails;