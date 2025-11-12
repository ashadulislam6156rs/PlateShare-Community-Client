import React from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import image from "../../assets/image-404.png";

const Error_404 = () => {
  return (
    <div>
      <Container>
        <title>Error 404 - PlateShare Community</title>
        <div className="flex justify-center items-center min-h-screen bg-linear-to-br from-[#fefefe] to-[#f3f4f6]">
          <div className="flex gap-3 items-center">
            <div>
              <img src={image} alt="" />
            </div>
            <div className="space-y-4">
              <h1 className="text-8xl text-[#ffcc9c] font-extrabold">404</h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2">
                Page not found
              </h2>
              <p className="text-gray-600 w-5/6">
                We couldn't find the page you were looking for. It may have been
                moved or just doesn't exist.
              </p>
              <div className="pt-3">
                <Link
                  to={"/"}
                  className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07]"
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
