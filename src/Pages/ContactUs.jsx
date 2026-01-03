import React from "react";
import Container from "../Componants/Container/Container";
import { Bounce, toast } from "react-toastify";

const ContactUs = () => {
  const handleContactUs = (e) => {
    e.preventDefault();

    toast.success("Thanks for your message! We'll get back to you soon.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light", // Light toast theme kept as requested
      transition: Bounce,
    });

    e.target.reset();
  };

  return (
    <Container>
      <title>Contact Us - PlateShare Community</title>
      <section className="max-w-3xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200 dark:bg-gray-900 rounded-lg">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">
          Contact Us
        </h1>

        <p className="mb-8 text-center text-gray-700 dark:text-gray-300">
          We'd love to hear from you! Whether you have a question, feedback, or
          want to support PlateShare, feel free to reach out.
        </p>

        <form onSubmit={handleContactUs} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 dark:text-gray-200"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 dark:text-gray-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              name="message"
              required
              className="w-full border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white dark:bg-gray-800 dark:text-gray-200"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-linear-to-r px-3 cursor-pointer rounded-lg text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 md:py-2 font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default ContactUs;
