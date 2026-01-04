import React, { useEffect } from "react";
import Container from "../Container/Container";
import { FaSmile } from "react-icons/fa";
import { FaUsers, FaUtensils } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="py-10 bg-white dark:bg-[#0f172a] transition-colors duration-300">
      <Container className="px-3">
        <h1 className="text-4xl sm:text-5xl text-center font-bold text-gray-900 dark:text-white mb-4">
          Our Mission
        </h1>

        <div className="md:w-1/2 w-full mx-auto">
          <p className="text-lg text-gray-600 text-center dark:text-gray-300 max-w-2xl mx-auto">
            Every plate shared brings hope. Join our community to reduce food
            waste and help those in need.
          </p>
        </div>

        <div
          className="mt-7 grid md:grid-cols-2 lg:grid-cols-3 gap-7"
          data-aos="fade-up"
          data-aos-offset="120"
          data-aos-delay="70"
          data-aos-duration="900"
        >
          {/* Card 1 */}
          <div className="bg-white shadow-lg bg-opacity-10 dark:bg-slate-800 dark:bg-opacity-70 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 dark:hover:bg-slate-700 transition">
            <FaSmile className="text-4xl text-[#fd7d07] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              1,250+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Meals Shared</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg bg-opacity-10 dark:bg-slate-800 dark:bg-opacity-70 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 dark:hover:bg-slate-700 transition">
            <FaUtensils className="text-4xl text-[#fd7d07] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              5,400 kg
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Food Donated</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg bg-opacity-10 dark:bg-slate-800 dark:bg-opacity-70 rounded-xl p-6 flex flex-col items-center hover:bg-opacity-20 dark:hover:bg-slate-700 transition">
            <FaUsers className="text-4xl text-[#fd7d07] mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              320+
            </h3>
            <p className="text-gray-700 dark:text-gray-300">Volunteers</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurMission;
