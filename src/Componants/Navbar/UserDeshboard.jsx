import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";

const UserDeshboard = () => {
  const { user, userSignOut, setUser } = useContext(AuthContext);

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
    <div className="dropdown dropdown-end">
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
                   bg-white dark:bg-slate-800 rounded-box z-50 w-52 p-2
                   shadow-md dark:shadow-[#fd7d0750] transition-colors duration-300"
      >
       

        {/* Logout Button */}
        <li>
          <button
            className="w-full py-1.5 font-semibold
                       bg-linear-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07]
                       dark:bg-[#fd7d07] dark:text-white dark:hover:bg-[#012444] dark:hover:text-white
                       hover:bg-linear-to-l text-white rounded transition-colors duration-300"
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
