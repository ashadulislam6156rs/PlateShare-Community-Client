import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";
import useRole from "../Hooks/useRole";
import { IoMdLogOut } from "react-icons/io";

const UserDeshboard = () => {
  const { user, userSignOut, setUser } = useContext(AuthContext);
    const { role } = useRole();

  const handleUserLogOut = () => {
    userSignOut()
      .then(() => {
        setUser(null);
        toast.success("Your account has been successfully logged out.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark", 
          transition: Bounce,
        });
      })
      .catch((err) => {
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "dark", // dark mode toast
          transition: Bounce,
        });
      });
  };

  return (
    <div className="dropdown dropdown-end ">
      {/* Avatar Button */}
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 h-10 rounded-full border-2 border-[#fff8ec] flex justify-center items-center">
          <img
            className="w-9 h-9 rounded-full"
            alt="User Avatar"
            src={user?.photoURL}
          />
        </div>
      </div>

      {/* Dropdown Menu */}
      <ul
        tabIndex="-1"
        id="userNavbar"
        className="menu menu-sm mt-5 dropdown-content
                   bg-white dark:bg-slate-800 rounded-md z-50 w-52 p-0
                   shadow-md dark:shadow-[#fd7d0750] transition-colors duration-300"
      >
        {/* User Info */}
        <div className="mb-3 rounded-t-md bg-gradient-to-r from-[#012444] to-[#012444] px-3 py-2 text-white">
          <h1 className="text-sm font-semibold truncate">
            {user?.displayName || "Anonymous User"}
          </h1>
          <p className="text-xs opacity-90">{role}</p>
        </div>

        {/* Logout Button */}
        <li className="px-2 pb-2">
          <button
            className="w-full py-1.5 font-semibold
                       bg-linear-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07]
                       dark:bg-[#fd7d07] dark:text-white dark:hover:bg-[#012444] dark:hover:text-white
                       hover:bg-linear-to-l text-white rounded transition-colors duration-300"
            onClick={handleUserLogOut}
          >
            <IoMdLogOut className="inline text-lg" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDeshboard;
