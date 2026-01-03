import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [activeStory, setActiveStory] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const founderStories = [
    {
      name: "Our Journey",
      role: "From Kitchen to Community",
      story:
        "It all started in a small kitchen in Dhaka, where food brought families together. We noticed how sharing a home-cooked meal could turn strangers into friends. That simple observation sparked an idea: what if we could create a platform where everyone could experience this magic?",
      icon: "❤️",
    },
    {
      name: "The Vision",
      role: "Building Connections",
      story:
        "We believe that behind every dish is a story, a tradition, and a person who poured their heart into it. PlateShare isn't just about food—it's about preserving culinary heritage, supporting talented home chefs, and creating a community where everyone belongs.",
      icon: "👥",
    },
    {
      name: "Today",
      role: "Growing Together",
      story:
        "What began as a weekend project has grown into a thriving community. Every day, we see neighbors becoming friends, home chefs building businesses, and families preserving their recipes for future generations. This is just the beginning.",
      icon: "📈",
    },
  ];

  const features = [
    {
      icon: "🍽️",
      title: "Authentic Home Cooking",
      description:
        "Experience genuine homemade food prepared with love and traditional recipes passed down through generations.",
    },
    {
      icon: "🤝",
      title: "Community Connection",
      description:
        "Meet amazing people in your neighborhood who share your passion for good food and cultural traditions.",
    },
    {
      icon: "👨‍🍳",
      title: "Empower Home Chefs",
      description:
        "Support talented home cooks in turning their passion into opportunity while preserving culinary heritage.",
    },
    {
      icon: "📍",
      title: "Hyperlocal Discovery",
      description:
        "Find delicious homemade meals right in your area and explore diverse cuisines from around your city.",
    },
  ];

  const values = [
    {
      icon: "💜",
      title: "Made with Love",
      description:
        "Every meal shared on our platform is prepared with care, quality ingredients, and genuine passion.",
    },
    {
      icon: "🏘️",
      title: "Community First",
      description:
        "We prioritize building meaningful relationships and creating safe, welcoming spaces for everyone.",
    },
    {
      icon: "🌍",
      title: "Cultural Celebration",
      description:
        "We honor and celebrate the rich diversity of culinary traditions from all backgrounds and cultures.",
    },
    {
      icon: "🛡️",
      title: "Trust & Safety",
      description:
        "Your safety matters. We maintain high standards and verified profiles to ensure secure experiences.",
    },
  ];

  const stats = [
    { number: "5,000+", label: "Food Lovers" },
    { number: "12,000+", label: "Meals Shared" },
    { number: "25+", label: "Neighborhoods" },
    { number: "98%", label: "Happy Members" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-500">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden
             bg-gradient-to-r  
             text-gray-900
             dark:from-[#012444] dark:via-[#1b2f5b] dark:to-[#fd7e07] dark:text-white"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10 text-center">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
          >
            Bringing People Together,
            <br />
            <span className="text-yellow-600 dark:text-yellow-300">
              One Meal at a Time
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto md:mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We're on a mission to reconnect communities through the universal
            language of homemade food
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-7 py-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Our Story
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From a simple idea to a growing movement
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {founderStories.map((story, index) => (
            <button
              key={index}
              onClick={() => setActiveStory(index)}
              className={`p-4 rounded-lg text-left transition-all ${
                activeStory === index
                  ? "bg-gradient-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07] text-white shadow-lg scale-105"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{story.icon}</span>
                <div>
                  <h3 className="font-semibold">{story.name}</h3>
                  <p
                    className={`text-sm ${
                      activeStory === index
                        ? "text-yellow-300"
                        : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {story.role}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-200">
            {founderStories[activeStory].story}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-yellow-200 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
          >
            Why PlateShare?
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            More than just a food platform—we're building a movement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-yellow-400 shadow-sm hover:shadow-xl transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07] rounded-xl flex items-center justify-center text-white mb-4 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 dark:bg-gray-900 py-5 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              data-aos="fade-up"
            >
              What We Stand For
            </h2>
            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Our core values guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{value.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
