import { useEffect } from "react";
import {
  FaUtensils,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import AOS from "aos";

const services = [
  {
    icon: <FaUtensils />,
    title: "Share Meals",
    desc: "Post surplus meals easily and help people in your community.",
    features: ["Easy posting", "Photo upload", "Dietary info"],
    color: "from-orange-400 to-rose-500",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Nearby Pickup",
    desc: "Find nearby meals with smart location matching.",
    features: ["GPS search", "Distance filter", "Safe pickup"],
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: <FaHandsHelping />,
    title: "Community Support",
    desc: "Build trust, track impact, and grow together.",
    features: ["Profiles", "Impact tracking", "Reviews"],
    color: "from-emerald-400 to-green-500",
  },
];

const Services = () => {
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
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Core Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Simple, powerful features to reduce food waste and support your
            community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="
                group rounded-2xl p-7 transition
                bg-white dark:bg-slate-800/60
                border border-slate-200 dark:border-slate-700
                hover:shadow-lg dark:hover:shadow-slate-900/40
              "
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 mb-5 rounded-xl 
                bg-gradient-to-br ${item.color}
                flex items-center justify-center
                text-white text-2xl`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {item.desc}
              </p>

              <ul className="space-y-2 mb-5">
                {item.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <FaCheckCircle className="text-emerald-500" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:gap-3 transition-all">
                Learn More <FaArrowRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
