import React, { useState, useEffect } from "react";
import {
  FaBell,
  FaEnvelope,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      easing: "ease-out",
      offset: 120,
    });
  }, []);

  const handleSubscribe = () => {
    if (!email) return setError("Please enter a valid email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return setError("Please enter a valid email");

    setIsLoading(true);
    setTimeout(() => {
      setIsSubscribed(true);
      setEmail("");
      setError("");
      setIsLoading(false);
      setTimeout(() => setIsSubscribed(false), 5000);
    }, 800);
  };

  const benefits = [
    { icon: "🍽️", text: "New meal listings near you" },
    { icon: "🌍", text: "Community impact updates" },
    { icon: "💡", text: "Food sharing tips & tricks" },
    { icon: "🎉", text: "Exclusive events & rewards" },
  ];

  return (
    <section className=" bg-slate-50 dark:bg-slate-900 py-10 relative overflow-hidden transition-colors">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-200/30 dark:bg-orange-400/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-400/10 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-3 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6" data-aos="zoom-in">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center text-white text-3xl">
              <FaBell />
            </div>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay Connected to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-blue-400">
              Your Community
            </span>
          </h2>

          <p
            className="text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get weekly updates about new meals, community stories, and impact
            milestones
          </p>
          <p
            className="text-sm text-slate-500 dark:text-slate-400"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Unsubscribe anytime. No spam. ✨
          </p>
        </div>

        {/* Form */}
        <div className="relative mb-16" data-aos="fade-up" data-aos-delay="300">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-2xl blur-2xl -z-10"></div>

          <div className="relative bg-white dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 sm:p-12">
            {!isSubscribed ? (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 text-slate-400 dark:text-slate-500">
                      <FaEnvelope />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      onKeyPress={(e) => e.key === "Enter" && handleSubscribe()}
                      placeholder="Enter your email"
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-600/40 text-slate-900 dark:text-white placeholder-slate-400 rounded-lg py-4 pl-12 pr-4 outline-none transition-all duration-300 focus:border-orange-400/50"
                    />
                  </div>
                  <button
                    onClick={handleSubscribe}
                    disabled={isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isLoading ? (
                      "Subscribing..."
                    ) : (
                      <>
                        Subscribe{" "}
                        <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>

                {error && (
                  <div className="text-red-500 text-sm text-center">
                    {error}
                  </div>
                )}
                <div className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  By subscribing, you agree to our Privacy Policy.
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-3xl animate-bounce">
                    <FaCheckCircle />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Welcome to the Community!
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Check your inbox for confirmation. You'll receive updates
                  soon!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={400 + i * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-300/50 dark:from-slate-600/40 dark:to-slate-700/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
              <div className="relative bg-slate-50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-300 dark:border-slate-600/50 group-hover:border-slate-400 dark:group-hover:border-slate-500 rounded-xl p-6 transition-all duration-300 flex items-center gap-4">
                <div className="text-3xl">{b.icon}</div>
                <p className="text-slate-900 dark:text-slate-200">{b.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 pt-12 border-t border-slate-300 dark:border-slate-600/50 text-center"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <p className="text-slate-700 dark:text-slate-500 mb-6">
            Join{" "}
            <span className="text-orange-400 font-semibold">
              10,000+ community members
            </span>{" "}
            making a difference
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "#FoodSharing",
              "#CommunityFocus",
              "#ZeroWaste",
              "#KindnessMatters",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-sm px-4 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600/50 text-slate-900 dark:text-slate-200 rounded-full hover:border-orange-400/50 transition-all cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={900 + i * 50}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
