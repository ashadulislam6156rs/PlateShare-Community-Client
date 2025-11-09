import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";

const UserDeshboard = () => {
  const { user, userSignOut, setUser } = useContext(AuthContext);

  const handleUserLogOut = () => {
    userSignOut()
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been successfully LogOut.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      });
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#fff8ec] flex justify-center items-center">
          <img
            className="w-9 h-9 rounded-full"
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL}
          />
        </div>
      </div>
      <ul
              tabIndex="-1"
              id="userNavbar"
        className="menu menu-sm mt-5 dropdown-content bg-base-100 rounded-box z-100 w-52 p-2 shadow-md shadow-[#0124445a]"
      >
        <li className="mb-2 shadow-md cursor-pointer ">
          <NavLink
            to={"/addFood"}
            className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
          >
            {/* <HiOutlineHome className="text-base" /> */}
            Add Food
          </NavLink>
        </li>

        <li className="mb-2 shadow-md cursor-pointer ">
          <NavLink
            to={"/manageMyFoods"}
            className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
          >
            {/* <HiOutlineHome className="text-base" /> */}
            Manage My Foods
          </NavLink>
        </li>
        <li className="mb-2 shadow-md cursor-pointer ">
          <NavLink
            to={"/myFoodRequests"}
            className="flex gap-2 items-center bg-slate-100 hover:bg-[#fd7d07] font-semibold hover:text-[#fff8ec] px-2 p-1 text-teal-600 rounded"
          >
            {/* <HiOutlineHome className="text-base" /> */}
            My Food Reguests
          </NavLink>
        </li>
        <li>
          <button
            className="bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 font-semibold"
            onClick={handleUserLogOut}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDeshboard;
