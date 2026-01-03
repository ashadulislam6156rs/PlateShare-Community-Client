import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import image from "../../assets/image-404.png";

const Error_404 = () => {
  return (
    <div>
      <Container>
        <title>Error 404 - PlateShare Community</title>
        <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-[#fefefe] to-[#f3f4f6] dark:from-gray-900 dark:to-gray-800">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div>
              <img src={image} alt="404 Error" className="w-80 md:w-96" />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h1 className="text-8xl font-extrabold text-[#ffcc9c] dark:text-yellow-400">
                404
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Page not found
              </h2>
              <p className="text-gray-600 dark:text-gray-400 w-5/6 md:w-full mx-auto md:mx-0">
                We couldn't find the page you were looking for. It may have been
                moved or just doesn't exist.
              </p>
              <div className="pt-3">
                <Link
                  to={"/"}
                  className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] dark:from-[#1b2f5b] dark:via-[#632EE3] dark:to-[#fd7e07]"
                >
                  Back Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error_404;
