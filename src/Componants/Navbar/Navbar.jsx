import React, { useContext, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router";
import logo from "../../assets/PlateShare_logo.png";
import { HiOutlineHome } from "react-icons/hi";
import Container from "../Container/Container";
import { TbBowlSpoon } from "react-icons/tb";
import { AuthContext } from "../../AuthContext/AuthContext";
import UserDeshboard from "./UserDeshboard";

const Navbar = () => {
  
  const [barToggol, setBarToggol] = useState(true);
  const {user} = useContext(AuthContext)

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
              <FaBars />
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                barToggol
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            >
              <FaXmark />
            </div>
          </div>
          {/* Small device menu list*/}
          <ul
            id="mobileDeviceActive"
            className={`bg-[#00000020] z-100 p-3 rounded-md shadow-lg absolute transition-all duration-300 ease-in-out -left-64 top-18 lg:hidden ${
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
          
          </ul>
        </div>
        {/* navbar buttons */}
        <div className="navbar-end space-x-2">
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
