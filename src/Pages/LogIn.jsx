import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../AuthContext/AuthContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Container from "../Componants/Container/Container";
import { Bounce, toast } from "react-toastify";

const LogIn = () => {
  const { logInGoogle, userLogInWithPassword } = useContext(AuthContext);
  const [showEye, setShowEye] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUserLogInWithPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    userLogInWithPassword(email, password)
      .then(() => {
        toast.success("Congratulations! Your account successfully LogIn.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then(() => {
        toast.success("Congratulations! Your account successfully LogIn.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        navigate(location?.state || "/");
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      );
  };

  return (
    <Container
      className={`flex justify-center items-center py-15 md:px-0 px-3`}
    >
      <title>LogIn - PlateShare Community</title>
      <form
        onSubmit={handleUserLogInWithPassword}
        className="shadow-lg bg-base-200 rounded-box w-full md:w-3/6 lg:w-2/6 border p-7 border-[#012444]"
      >
        <h1 className="text-2xl font-bold text-center py-2">Login</h1>
        <p className="text-sm font-normal text-center pb-4">
          Don't have an account? Please{" "}
          <Link to={"/register"} className="hover:underline text-[#fd7d07]">
            <span className="cursor-pointer font-semibold">Register Now</span>
          </Link>
        </p>
        <fieldset className="fieldset space-y-2">
          <fieldset>
            <h4 className="text-base font-semibold mb-2">Email</h4>
            <label className="floating-label">
              <span className="bg-[#012444] p-1 rounded-md text-white">
                Enter Email
              </span>
              <input
                type="email"
                required
                name="email"
                placeholder="e.g. plateshare@gmail.com"
                className="input input-md w-full outline-0 focus:border-[#012444]"
              />
            </label>
          </fieldset>

          <fieldset>
            <h4 className="text-base font-semibold mb-2">Password</h4>
            <label className="floating-label bg-amber-300 w-full relative">
              <span className="bg-[#012444] p-1 rounded-md text-white">
                Enter Password
              </span>
              <input
                type={showEye ? "password" : "text"}
                placeholder="Enter Password..."
                required
                name="password"
                className="input input-md w-full outline-0 focus:border-[#012444]"
              />
              <button
                type="button"
                onClick={() => setShowEye(!showEye)}
                className="absolute right-3 top-3 text-base z-50 cursor-pointer"
              >
                {showEye ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
              {/* <FaRegEye className="absolute right-3 top-3 text-base z-50" />
              <FaRegEyeSlash classNameclassName="absolute right-3 top-3 text-base z-50" /> */}
            </label>
          </fieldset>
          <p>
            <span className="hover:underline text-[#fd7d07]">
              <span className="cursor-pointer  font-semibold">
                Forgot Password?
              </span>
            </span>
          </p>

          <button className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07]">
            Login
          </button>
          <p className="flex justify-center items-center">
            <span className="border-b-2 w-full border-gray-200"></span>
            <span className="px-3 font-semibold">OR</span>
            <span className="border-b-2 w-full border-gray-200"></span>
          </p>
          {/* Google Btn */}
          <Link
            onClick={handleGoogleLogIn}
            className="my-outline-btn p-0.5 hover:text-[#ffffff] hover:bg-black flex justify-center items-center gap-2 md:py-1.5"
          >
            <FcGoogle /> Sign in With Google
          </Link>
        </fieldset>
      </form>
    </Container>
  );
};

export default LogIn;
