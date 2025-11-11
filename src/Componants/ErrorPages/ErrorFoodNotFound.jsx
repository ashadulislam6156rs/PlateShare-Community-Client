import React from "react";
import { Link } from "react-router";
import ErrorImg from "../../assets/App-Error.png"

const ErrorFoodNotFound = () => {
  return (
    <>
      <title>Error Food Not Found</title>
      <div className="flex justify-center items-center py-10 pb-20 px-3">
        <div className=" w-full h-full flex justify-between items-center flex-col gap-5">
          <img className="w-50 pt-10" src={ErrorImg} alt="" />
          <h1 className="text[#001931] font-bold text-4xl uppercase">
            OPPS! Food Not Found.
          </h1>
          <p className="text-[#627382] text-base">
            The Food you are requesting is not found on your system. Please try
            another Foods.
          </p>
          <Link
            to={"/"}
            className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07]"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorFoodNotFound;
