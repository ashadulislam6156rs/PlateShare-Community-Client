import React, { useState, useEffect } from "react";
import { FaChevronDown, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-out",
      offset: 100,
    });
  }, []);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Is PlateShare completely free?",
          a: "Yes! PlateShare is 100% free and community-driven. There are no hidden fees, subscriptions, or charges. We believe food sharing should be accessible to everyone.",
        },
        {
          q: "How do I create an account?",
          a: "Simply download the app or visit our website, click 'Sign Up', and fill in your basic information. Verify your email, and you're ready to start sharing or receiving meals!",
        },
        {
          q: "Do I need to provide my real information?",
          a: "Yes, we require verified information to ensure community safety. Your data is encrypted and used only for food sharing activities. We never share your information with third parties.",
        },
      ],
    },
    {
      category: "Food Safety",
      questions: [
        {
          q: "Is the food safe to eat?",
          a: "Safety is our top priority. All food shared on PlateShare must be fresh and properly prepared. We have community guidelines and user ratings to ensure quality. Always check the food condition and preparation details before accepting.",
        },
        {
          q: "What types of food can I share?",
          a: "You can share prepared meals, homemade dishes, bakery items, fresh produce, and restaurant leftovers. Avoid sharing food that's been left open or unrefrigerated for extended periods.",
        },
        {
          q: "Are there food handling guidelines?",
          a: "Yes! All shared food must be stored at proper temperatures, clearly labeled with preparation date, and free from allergens. We provide detailed food safety guidelines in our community standards.",
        },
        {
          q: "What if I get sick from food?",
          a: "While food is prepared responsibly, you share at your own risk. Always inspect food before consumption. Our ratings and review system help identify trustworthy sharers. Report any issues to our support team immediately.",
        },
      ],
    },
    {
      category: "Posting & Sharing",
      questions: [
        {
          q: "How do I post food to share?",
          a: "Tap the '+' button, fill in food details (type, quantity, ingredients), upload photos, set pickup location and time, then publish. It takes less than 2 minutes!",
        },
        {
          q: "Can I set specific pickup times?",
          a: "Absolutely! When posting, you can specify available pickup times. You can allow flexible timing or set exact windows that work for you.",
        },
        {
          q: "What information should I include?",
          a: "Include food type, quantity, preparation date, ingredients/allergens, storage method, and any special preparation notes. The more details, the better!",
        },
        {
          q: "How many people can claim one food post?",
          a: "You decide! You can limit it to one person or allow multiple pickups until the food is gone. First come, first served unless you specify otherwise.",
        },
      ],
    },
    {
      category: "Finding & Receiving",
      questions: [
        {
          q: "How do I find nearby meals?",
          a: "Use our map feature to see available meals near you. Filter by food type, distance, and pickup time. You'll see details and photos before deciding to claim a meal.",
        },
        {
          q: "Can I claim multiple meals?",
          a: "Yes! You can claim as many meals as you need. Just ensure you can pickup at the scheduled times. Being reliable builds your community reputation.",
        },
        {
          q: "What if the food is claimed before I arrive?",
          a: "Sometimes meals go quickly! The app will notify you. Keep checking for new posts—there's always fresh food being shared by kind community members.",
        },
      ],
    },
    {
      category: "Community & Trust",
      questions: [
        {
          q: "How do ratings and reviews work?",
          a: "After each exchange, both parties can leave ratings and reviews. This helps build trust and identify reliable community members. Be honest and respectful in your feedback.",
        },
        {
          q: "What happens if someone violates community guidelines?",
          a: "We take violations seriously. Report inappropriate behavior to our moderation team. Repeated violations result in warnings, suspension, or account termination.",
        },
        {
          q: "Is my location information safe?",
          a: "Yes! Location data is encrypted and only visible for active food sharing. You control your exact pickup location details. We never share location data publicly.",
        },
      ],
    },
    {
      category: "Impact & Purpose",
      questions: [
        {
          q: "How does PlateShare reduce food waste?",
          a: "By connecting people with surplus food, we redirect meals that would be wasted. Every shared meal saves food, reduces emissions, and helps the community.",
        },
        {
          q: "Can I track my impact?",
          a: "Yes! Your profile shows meals shared, meals received, and estimated food saved. See how you're making a difference in real-time!",
        },
        {
          q: "Does PlateShare support local causes?",
          a: "Absolutely! We partner with local food banks, NGOs, and community organizations. A portion of our support goes to food security initiatives.",
        },
      ],
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-orange-300/20 dark:bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-3 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div
            className="inline-block mb-4"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaQuestionCircle className="text-4xl text-orange-500 mx-auto mb-3" />
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Find answers to common questions about PlateShare, food safety, and
            our community
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-4">
              {/* Category Header */}
              <div
                className="flex items-center gap-3 mb-6"
                data-aos="fade-right"
                data-aos-delay={sectionIndex * 100}
              >
                <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {section.category}
                </h3>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                {section.questions.map((faq, qIndex) => {
                  const globalIndex =
                    faqs
                      .slice(0, sectionIndex)
                      .reduce((sum, s) => sum + s.questions.length, 0) + qIndex;
                  const isActive = activeIndex === globalIndex;

                  return (
                    <div
                      key={qIndex}
                      className="group"
                      data-aos="fade-up"
                      data-aos-delay={sectionIndex * 100 + qIndex * 50}
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left"
                      >
                        <div
                          className={`relative p-6 rounded-xl transition-all duration-300 border ${
                            isActive
                              ? "bg-gradient-to-r from-orange-500/10 to-pink-500/10 dark:from-orange-500/5 dark:to-pink-500/5 border-orange-400/30 dark:border-orange-500/30"
                              : "bg-white dark:bg-slate-800/50 border-gray-200/50 dark:border-slate-700/50 hover:border-orange-300/50 dark:hover:border-orange-500/30"
                          } group-hover:shadow-lg`}
                        >
                          {/* Question with Icon */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-1 transition-all duration-300 ${
                                  isActive
                                    ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
                                    : "bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400"
                                }`}
                              >
                                <FaCheckCircle className="text-sm" />
                              </div>
                              <h4
                                className={`font-semibold text-lg transition-colors duration-300 ${
                                  isActive
                                    ? "text-orange-600 dark:text-orange-400"
                                    : "text-gray-900 dark:text-white"
                                }`}
                              >
                                {faq.q}
                              </h4>
                            </div>

                            {/* Chevron Icon */}
                            <FaChevronDown
                              className={`flex-shrink-0 w-5 h-5 mt-1 text-gray-400 dark:text-slate-500 transition-transform duration-300 ${
                                isActive ? "rotate-180 text-orange-500" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </button>

                      {/* Answer */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isActive ? "max-h-96" : "max-h-0"
                        }`}
                      >
                        <div className="px-6 py-4 text-gray-600 dark:text-gray-300 border-l-2 border-orange-400 dark:border-orange-500 ml-8 mt-2">
                          {faq.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
