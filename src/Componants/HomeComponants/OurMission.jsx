import React from "react";
import Container from "../Container/Container";
import { FaSmile } from "react-icons/fa";
import { FaUsers, FaUtensils } from "react-icons/fa6";

const OurMission = () => {
  return (
    <div className="py-10">
      <Container className={`px-3`}>
        <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
          Our Mission
        </h1>
        <div className="md:w-1/2 w-full mx-auto">
          <p className="text-center py-2 pt-3 text-base text-gray-500">
            Every plate shared brings hope. Join our community to reduce food
            waste and help those in need.
          </p>
        </div>
        {/*  Cards */}
        <div className="mt-7 grid md:grid-cols-2 gap-7 lg:grid-cols-3">
          {/* card-1 */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 transition">
            <div className="mb-4">
              <FaSmile className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-2xl font-bold">1,250+</h3>
            <p className="text-gray-700">Meals Shared</p>
          </div>

          {/* card-2 */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 transition">
            <div className="mb-4">
              <FaUtensils className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-2xl font-bold">5,400 kg</h3>
            <p className="text-gray-700">Food Donated</p>
          </div>
          {/* card-3 */}
          <div className="bg-white bg-opacity-10 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 transition">
            <div className="mb-4">
              <FaUsers className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-2xl font-bold">320+</h3>
            <p className="text-gray-700">Volunteers</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
