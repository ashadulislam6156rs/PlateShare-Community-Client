import { useEffect } from "react";
import {
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaGlobeAmericas,
} from "react-icons/fa";
import AOS from "aos";

const reasons = [
  {
    icon: <FaLeaf />,
    title: "Reduce Waste",
    desc: "Turn surplus food into community resources.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: <FaHeart />,
    title: "Social Impact",
    desc: "Support people while building real connections.",
    color: "from-rose-400 to-pink-500",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    desc: "Verified users ensure trusted sharing.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: <FaLightbulb />,
    title: "Easy to Use",
    desc: "Simple design for everyone.",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: <FaUsers />,
    title: "Community First",
    desc: "People-powered local impact.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "Global Movement",
    desc: "Be part of sustainable living.",
    color: "from-teal-400 to-blue-500",
  },
];

const Highlights = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <section className="py-10 bg-slate-50 dark:bg-[#0f172a] transition-colors">
      <div className="max-w-7xl mx-auto px-3">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-sm font-semibold text-orange-500 uppercase">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mt-2">
            Why PlateShare?
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Reducing food waste while building meaningful human connections.
          </p>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div data-aos="fade-right">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Simple. Secure.
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
                Social Impact.
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Sharing food is not just about meals — it's about care, trust, and
              community.
            </p>

            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>🌱 Sustainable sharing</li>
              <li>🤝 Community-driven</li>
              <li>✨ Transparent & safe</li>
            </ul>
          </div>

          {/* Stats */}
          <div
            data-aos="fade-left"
            className="bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-3xl p-8"
          >
            {[
              { num: "10K+", label: "Users" },
              { num: "50K+", label: "Meals Shared" },
              { num: "100T+", label: "Food Saved" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between py-4 border-b last:border-none border-slate-200 dark:border-slate-700"
              >
                <span className="text-2xl font-bold text-slate-900 dark:text-white">
                  {item.num}
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              className="group p-7 rounded-2xl bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 hover:border-transparent transition"
            >
              <div
                className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${r.color} text-white flex items-center justify-center text-xl group-hover:scale-110 transition`}
              >
                {r.icon}
              </div>

              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {r.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
