import React, { useEffect } from "react";
import { FaHandHolding, FaUtensils } from "react-icons/fa6";
import Container from "../Container/Container";
import { FaSearch } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {

    useEffect(() => {
      Aos.init({
        duration: 900,
        once: false,
        easing: "ease-in-out",
      });
    }, []);

  return (
    <div className="pt-10 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <Container className="px-3">
        <h1 className="text-4xl text-center sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          How it works
        </h1>

        <div className="md:w-1/2 w-full mx-auto">
          <p className="text-lg text-gray-600 text-center dark:text-gray-300 max-w-2xl mx-auto">
            Share your extra meals, let those in need find them, and collect or
            deliver food easily. Simple steps, big impact!
          </p>
        </div>

        <div
          data-aos="flip-up"
          data-aos-offset="120"
          data-aos-delay="70"
          data-aos-duration="900"
          className="grid mt-7 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {/* card-1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-none p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaUtensils className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] dark:text-white mb-2">
              Post Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Share your extra meals by posting them on the platform quickly and
              easily.
            </p>
          </div>

          {/* card-2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-none p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaSearch className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] dark:text-white mb-2">
              Find Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Search for available meals near you and choose the ones you need.
            </p>
          </div>

          {/* card-3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg dark:shadow-none p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex justify-center mb-4">
              <FaHandHolding className="text-4xl text-[#fd7d07]" />
            </div>
            <h3 className="text-xl text-center font-semibold text-[#012444] dark:text-white mb-2">
              Collect Food
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center">
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
