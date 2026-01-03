import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "../../assets/PlateShare_logo.png";
import { HiOutlineHome } from "react-icons/hi";
import Container from "../Container/Container";
import { TbBowlSpoon } from "react-icons/tb";
import { AuthContext } from "../../AuthContext/AuthContext";
import UserDeshboard from "./UserDeshboard";
import { FcOnlineSupport } from "react-icons/fc";
import { MdDashboard, MdOutlineSupportAgent } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { SlInfo } from "react-icons/sl";

const Navbar = () => {
  
  const [barToggol, setBarToggol] = useState(true);
  const { user } = useContext(AuthContext)

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Container className="px-3">
      <div className="flex justify-between items-center py-2">
        {/* navbar start */}
        <div className="navbar-start space-x-4 lg:space-x-0">
          <div
            onClick={() => setBarToggol(!barToggol)}
            className="bg-gray-300 rounded-md px-5 py-4 text-2xl cursor-pointer block lg:hidden relative overflow-hidden"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            >
              <FaBars className="dark:text-black" />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <FaXmark className="dark:text-black" />
            </div>
          </div>
          {/* Small device menu list*/}
          <ul
            id="mobileDeviceActive"
            className={`bg-[#00000070] dark:bg-[#000000] z-100 p-3 rounded-md shadow-lg absolute transition-all duration-300 ease-in-out -left-64 top-18 lg:hidden ${
              barToggol ? "" : "left-1 block"
            }`}
          >
            <li className="mb-2 shadow-md cursor-pointer ">
              <NavLink
                to={"/"}
                className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
              >
                <HiOutlineHome className="text-base" />
                Home
              </NavLink>
            </li>
            <li className="mb-2 shadow-md cursor-pointer">
              <NavLink
                to={"/availableFoods"}
                className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
              >
                <TbBowlSpoon className="text-base" /> Available Foods
              </NavLink>
            </li>
            <li className="mb-2 shadow-md cursor-pointer">
              <NavLink
                to={"/aboutUs"}
                className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
              >
                <SlInfo className="w-4 h-4" /> About
              </NavLink>
            </li>
            <li className="mb-2 shadow-md cursor-pointer">
              <NavLink
                to={"/contactUs"}
                className="flex gap-2 items-center w-52 bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
              >
                <MdOutlineSupportAgent className="w-4 h-4" /> Contact
              </NavLink>
            </li>
          </ul>
          <NavLink to={"/"} className="">
            <img className="md:w-30 w-25" src={logo} alt="" />
          </NavLink>
        </div>
        {/* navbar menu list large device*/}
        <div className="navbar-center hidden lg:flex">
          <ul
            id="navLinkForLarge"
            className="menu menu-horizontal px-1 font-medium text-[#fff8ec] space-x-5"
          >
            <li>
              <NavLink
                to={"/"}
                className={"text-base px-1 bg-transparent rounded-b-none"}
              >
                <HiOutlineHome className="w-4 h-4" />
                <span className="-ml-1 text-sm">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/availableFoods"}
                className={"text-base px-1 bg-transparent rounded-b-none"}
              >
                <TbBowlSpoon className="w-4 h-4" />
                <span className="-ml-1 text-sm">Available Foods</span>
              </NavLink>
            </li>

            {user && (
              <li>
                <Link
                  to={"/dashboard"}
                  // onClick={handleClick}
                  className="hover:text-[#F57C00] bg-transparent"
                >
                  <MdDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
              </li>
            )}

            <li>
              <NavLink
                to={"/aboutUs"}
                className={"text-base px-1 bg-transparent rounded-b-none"}
              >
                <SlInfo className="w-4 h-4" />
                <span className="-ml-1 text-sm">About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contactUs"}
                className={"text-base px-1 bg-transparent rounded-b-none"}
              >
                <MdOutlineSupportAgent className="w-4 h-4" />
                <span className="-ml-1 text-sm">Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        {/* navbar buttons */}

        <div className="navbar-end space-x-2">
          {/* Theme Toggoling */}

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              className="theme-controller "
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off text-white h-6 w-6 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-6 w-6 text-white fill-current dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          {/* User */}
          {user ? (
            <UserDeshboard></UserDeshboard>
          ) : (
            <Link
              to={"/login"}
              className="transition-colors ease-in-out duration-700 cursor-pointer text-sm md:text-base font-semibold rounded-lg  px-3 py-1 md:px-4 md:py-1 border-2 text-[#fff8ec] hover:bg-[#fff8ec] hover:text-[#012444] bg-[#012444] border-[#fff8ec]"
            >
              LogIn
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
