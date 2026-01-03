import React from "react";
import { Link } from "react-router";
import ErrorImg from "../../assets/App-Error.png";

const ErrorFoodNotFound = () => {
  return (
    <>
      <title>Error Food Not Found</title>
      <div className="flex justify-center items-center py-10 pb-20 px-3 min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
          <img
            className="w-64 md:w-96 pt-10"
            src={ErrorImg}
            alt="Error Food Not Found"
          />
          <h1 className="text-[#001931] dark:text-gray-200 font-bold text-4xl uppercase text-center">
            OPPS! Food Not Found.
          </h1>
          <p className="text-[#627382] dark:text-gray-400 text-base text-center md:w-2/3">
            The food you are requesting is not found on your system. Please try
            another food.
          </p>
          <Link
            to={"/"}
            className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] dark:from-[#1b2f5b] dark:via-[#632EE3] dark:to-[#fd7e07]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorFoodNotFound;
