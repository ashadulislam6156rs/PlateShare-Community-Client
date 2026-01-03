import React, { useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Bounce, toast } from "react-toastify";

const Register = () => {
  const { createUser, logInGoogle, updateUserInfo, setUser } =
    useContext(AuthContext);
  const [showEye, setShowEye] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const hendleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    const password = e.target.password.value;
    const checked = e.target.checked.checked;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasValidLength = password.length >= 6;

    if (!hasUppercase) {
      toast.error("Please Enter At Least One Uppercase!", { theme: "light" });
      return;
    }
    if (!hasLowercase) {
      toast.error("Please Enter At Least One Lowercase!", { theme: "light" });
      return;
    }
    if (!hasValidLength) {
      toast.error("Please Enter Minimum 6 Length Password!", {
        theme: "light",
      });
      return;
    }
    if (!checked) {
      toast.error("Please accept our terms & conditions!", { theme: "light" });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const userUpdateInfo = { displayName: name, photoURL: photoURL };

        updateUserInfo(userUpdateInfo)
          .then(() => setUser({ ...user, userUpdateInfo }))
          .catch((err) => toast.error(`${err.message}`, { theme: "light" }));

        toast.success(
          "Congratulations! Your account has been successfully registered.",
          {
            theme: "light",
          }
        );

        e.target.reset();
        navigate(location?.state || "/");
      })
      .catch((err) => toast.error(`${err.message}`, { theme: "light" }));
  };

  const handleGoogleLogIn = () => {
    logInGoogle()
      .then(() => {
        toast.success("Congratulations! Your account successfully LogIn.", {
          theme: "light",
        });
        navigate(location?.state || "/");
      })
      .catch((err) => toast.error(`${err.message}`, { theme: "light" }));
  };

  return (
    <Container className="flex justify-center items-center py-15 px-3 md:px-5 bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <title>Register - PlateShare Community</title>
      <form
        onSubmit={hendleCreateUser}
        className="shadow-lg bg-base-200 dark:bg-gray-800 rounded-box w-full md:w-3/6 lg:w-2/4 border p-7 border-[#012444] dark:border-gray-600"
      >
        <h1 className="text-2xl font-bold text-center py-2">Register</h1>
        <p className="text-sm font-normal text-center pb-4 dark:text-gray-300">
          Already Have An Account? Please{" "}
          <Link
            to={"/login"}
            className="hover:underline text-[#fd7d07] dark:text-orange-400"
          >
            <span className="cursor-pointer font-semibold">LogIn</span>
          </Link>
        </p>

        <fieldset className="fieldset space-y-2">
          {/* Name */}
          <fieldset>
            <h4 className="text-base font-semibold mb-2">Name</h4>
            <label className="floating-label">
              <span className="bg-[#012444] p-1 rounded-md text-white">
                Enter Name
              </span>
              <input
                type="text"
                required
                name="name"
                placeholder="e.g. Hablu mia"
                className="input input-md w-full outline-0 focus:border-[#012444] bg-white dark:bg-gray-700 dark:text-gray-200"
              />
            </label>
          </fieldset>

          {/* Photo URL */}
          <fieldset>
            <h4 className="text-base font-semibold mb-2">Photo URL</h4>
            <label className="floating-label">
              <span className="bg-[#012444] p-1 rounded-md text-white">
                Enter photoURL
              </span>
              <input
                type="url"
                name="photoURL"
                placeholder="Enter photoURL"
                className="input input-md w-full outline-0 focus:border-[#012444] bg-white dark:bg-gray-700 dark:text-gray-200"
              />
            </label>
          </fieldset>

          {/* Email */}
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
                className="input input-md w-full outline-0 focus:border-[#012444] bg-white dark:bg-gray-700 dark:text-gray-200"
              />
            </label>
          </fieldset>

          {/* Password */}
          <fieldset>
            <h4 className="text-base font-semibold mb-2">Password</h4>
            <label className="floating-label w-full relative bg-amber-300 dark:bg-gray-700">
              <span className="bg-[#012444] p-1 rounded-md text-white">
                Enter Password
              </span>
              <input
                type={showEye ? "password" : "text"}
                placeholder="Enter Password..."
                required
                name="password"
                className="input input-md w-full outline-0 focus:border-[#012444] bg-white dark:bg-gray-700 dark:text-gray-200"
              />
              <button
                type="button"
                onClick={() => setShowEye(!showEye)}
                className="absolute right-3 top-3 text-base z-50 cursor-pointer text-gray-700 dark:text-gray-200"
              >
                {showEye ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            </label>
          </fieldset>

          {/* Terms Checkbox */}
          <p className="flex items-center gap-3">
            <input
              type="checkbox"
              name="checked"
              className="checkbox checkbox-secondary"
            />
            <span className="dark:text-gray-300">
              Accept Our terms & conditions!
            </span>
          </p>

          {/* Register Button */}
          <button className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07]">
            Register
          </button>

          {/* OR Divider */}
          <p className="flex justify-center items-center">
            <span className="border-b-2 w-full border-gray-200 dark:border-gray-600"></span>
            <span className="px-3 font-semibold">OR</span>
            <span className="border-b-2 w-full border-gray-200 dark:border-gray-600"></span>
          </p>

          {/* Google Sign In */}
          <Link
            to={"/"}
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

export default Register;
