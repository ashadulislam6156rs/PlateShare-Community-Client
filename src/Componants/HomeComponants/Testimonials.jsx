import React from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "PlateShare transformed how I think about food waste. Now I share meals regularly and feel proud making a real community impact.",
      author: "Sarah Ahmed",
      role: "Food Enthusiast",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      quote:
        "As a restaurant owner, PlateShare helps us distribute leftover food to people who need it. It's a win-win for everyone!",
      author: "Rajesh Kumar",
      role: "Restaurant Owner",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/1200x/bd/d3/bc/bdd3bc41294ea5a7d04f70c36893d3eb.jpg",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      quote:
        "The platform is so easy to use. I've made meaningful connections while helping others. This is what community should look like.",
      author: "Fatima Hassan",
      role: "Community Volunteer",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/736x/77/fd/aa/77fdaac4afd5e8da46936e9490fdad06.jpg",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      quote:
        "PlateShare gave me access to fresh meals when I needed it most. The community's generosity is truly heartwarming.",
      author: "Karim Mohammed",
      role: "Student",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/736x/ac/4e/ba/ac4ebaf46561a0ea3617ed706b7ff37d.jpg",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 5,
      quote:
        "I love the transparency and safety features. Knowing who I'm sharing food with gives me confidence in the platform.",
      author: "Amina Begum",
      role: "Health Conscious Parent",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/1200x/0c/4e/fd/0c4efdb2f5bf2a3e993fc23f4de50e4e.jpg",
      color: "from-purple-500 to-violet-500",
    },
    {
      id: 6,
      quote:
        "PlateShare isn't just an app—it's a movement. I've never felt more connected to my neighbors. This is the future!",
      author: "Hasan Ali",
      role: "Social Impact Advocate",
      location: "Dhaka",
      rating: 5,
      avatar:
        "https://i.pinimg.com/736x/8e/4d/bd/8e4dbd53c2aa4a87f0b3b06447f6aa03.jpg",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section className=" bg-slate-50 dark:bg-slate-900 py-10 relative overflow-hidden transition-colors">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 dark:bg-green-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 dark:bg-orange-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-3 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block text-sm font-bold text-orange-400 uppercase tracking-widest mb-3">
            Real Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What People Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Join thousands of people who are already making a difference through
            food sharing
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // 👈 hover করলে থামবে
          }}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="group relative h-full" data-aos="zoom-in">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-2xl opacity-0 group-hover:opacity-15 transition duration-300 blur-xl -z-10`}
                ></div>

                <div className="bg-white dark:bg-slate-800/60 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 h-full flex flex-col">
                  <FaQuoteLeft className="text-orange-400/30 text-3xl mb-4" />

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400" />
                    ))}
                  </div>

                  <p className="italic text-slate-700 dark:text-slate-300 text-lg flex-grow">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700/50 mt-6">
                    <img
                      src={testimonial.avatar}
                      className="w-10 h-10 rounded-full"
                      alt=""
                    />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                        {testimonial.author}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-10">
          <button className="prev-btn w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white flex items-center justify-center">
            <FaChevronLeft />
          </button>
          <button className="next-btn w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 text-white flex items-center justify-center">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
