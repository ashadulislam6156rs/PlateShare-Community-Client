import React from "react";
import { FaHandHolding, FaUtensils } from "react-icons/fa6";
import Container from "../Container/Container";
import { FaSearch } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="pt-10">
      <Container className={`px-3`}>
        <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
          How it works
        </h1>
        <div className="w-1/2 mx-auto">
          <p className="text-center py-2 pt-3 text-base text-gray-500">
            Share your extra meals, let those in need find them, and collect or
            deliver food easily. Simple steps, big impact!
          </p>
        </div>

        <div className="grid mt-7 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* card-1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-102 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {" "}
              <FaUtensils className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] mb-2">
              Post Food
            </h3>
            <p className="text-gray-600 text-center">
              Share your extra meals by posting them on the platform quickly and
              easily .
            </p>
          </div>

          {/* card-2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-102 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {" "}
              <FaSearch className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] mb-2">
              Find Food
            </h3>
            <p className="text-gray-600 text-center">
              Search for available meals near you and choose the ones you need.
            </p>
          </div>

          {/* card-3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-102 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              {" "}
              <FaHandHolding className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] mb-2">
              Collect Food
            </h3>
            <p className="text-gray-600 text-center">
              Pick up your selected meals and enjoy them while helping the
              community.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
