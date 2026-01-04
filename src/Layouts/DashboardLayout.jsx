import React from "react";
import {  NavLink, Outlet, useNavigation } from "react-router";
import { IoFastFoodOutline, IoHomeOutline, IoPersonCircleOutline } from "react-icons/io5";
import { ToastContainer } from "react-toastify";
import Loading from "../Loading/Loading";
import { MdFastfood, MdOutlineFastfood } from "react-icons/md";
import { PiFootballHelmetLight } from "react-icons/pi";
import useRole from "../Componants/Hooks/useRole";
import { FaUsers } from "react-icons/fa6";


const DashboardLayout = () => {
 
  const navigatation = useNavigation();
  const { role } = useRole();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full dark:bg-[#012444] shadow-lg">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              {/* Sidebar toggle icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 dark:text-white inline-block size-4"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
            <div className="px-4 text-[#F57C00] font-bold text-xl">
              Plate<span className="text-[#29B6F6]">Share</span>
            </div>
          </nav>
          {/* Page content here *******************************/}
          <div className="p-4 bg-base-300 min-h-screen">
            {navigatation?.state == "loading" ? (
              <Loading></Loading>
            ) : (
              <Outlet></Outlet>
            )}{" "}
          </div>
        </div>

        <div className="drawer-side dark:bg-amber-50 is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-white md:bg-[#29b5f642] is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here *************************** */}
            <ul className="menu w-full bg-[#00b9da4a] grow font-semibold text-[#0D47A1]">
              {/* List item */}
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#F57C00]"
                      : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  }
                  data-tip="Home"
                >
                  {/* Home icon */}
                  <IoHomeOutline className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">Home</span>
                </NavLink>
              </li>

              {/* My Profile */}
              <li>
                <NavLink
                  to={"/dashboard/my-profile"}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#F57C00]"
                      : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  }
                  data-tip="My Profile"
                >
                  {/* User Profile icon */}
                  <IoPersonCircleOutline className="my-1.5 inline-block size-4" />
                  <span className="is-drawer-close:hidden">My Profile</span>
                </NavLink>
              </li>

              {/* User Route ***************** */}
              {role === "User" && (
                <>
                  <li>
                    <NavLink
                      to={"/dashboard/addFood"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#F57C00]"
                          : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      }
                      data-tip="Add Food"
                    >
                      <IoFastFoodOutline className="my-1.5 inline-block size-4" />
                      <span className="is-drawer-close:hidden">Add Food</span>
                    </NavLink>
                  </li>
                  {/* Manage My Foods */}
                  <li>
                    <NavLink
                      to={"/dashboard/manageMyFoods"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#F57C00]"
                          : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      }
                      data-tip="Manage My Foods"
                    >
                      <MdOutlineFastfood className="my-1.5 inline-block size-4" />
                      <span className="is-drawer-close:hidden">
                        Manage My Foods
                      </span>
                    </NavLink>
                  </li>
                  {/* My Food Requests */}
                  <li>
                    <NavLink
                      to={"/dashboard/myFoodRequests"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#F57C00]"
                          : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      }
                      data-tip="My Food Requests"
                    >
                      <PiFootballHelmetLight className="my-1.5 inline-block size-4" />
                      <span className="is-drawer-close:hidden">
                        My Food Requests
                      </span>
                    </NavLink>
                  </li>
                </>
              )}

              {/* Admin Route *************** */}
              {role === "Admin" && (
                <>
                  {/* Users Management */}
                  <li>
                    <NavLink
                      to={"/dashboard/usersManagement"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#F57C00]"
                          : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
                      }
                      data-tip="Users Management"
                    >
                      <FaUsers className="my-1.5 inline-block size-4" />
                      <span className="is-drawer-close:hidden">
                        Users Management
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* toast */}
      <ToastContainer />
    </div>
  );
};

export default DashboardLayout;
