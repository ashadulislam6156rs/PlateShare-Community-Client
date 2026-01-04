import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Loading from "../../Loading/Loading";
import { FaUserShield } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEye } from "react-icons/fi";

const UsersManagement = () => {
  const userDetailsModalRef = useRef();
  const [currentUser, setCurrentUser] = useState({});

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users-management"],
    queryFn: async () => {
      const res = await axios.get(
        "https://plateshare-community-server.vercel.app/users"
      );
      return res.data.filter((user) => user.userRole !== "Admin");
    },
  });

  const handleUserDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F57C00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://plateshare-community-server.vercel.app/user/${user._id}/delete`
          )
          .then(() => {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            refetch();
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  const handleUsersViewDetails = (user) => {
    setCurrentUser(user);
    userDetailsModalRef.current.showModal();
  };

  const handleUserRoleUpdate = async (user, role) => {
    try {
      await axios.patch(
        `https://plateshare-community-server.vercel.app/user/role/${user._id}/update`,
        { userRole: role }
      );
      toast.success(`User role updated to ${role}`);
      refetch();
    } catch (err) {
      toast.error(err.message);
    }
  };

  const updateUserRole = (user, role) => {
    Swal.fire({
      title: `Change role to ${role}?`,
      text: "This action is irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F57C00",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleUserRoleUpdate(user, role);
      }
    });
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <title>Users Management | eTutionTrack</title>

      <h1 className="text-3xl font-bold text-center pt-5 text-gray-800 dark:text-gray-100">
        Users Management
      </h1>
      <p className="text-sm text-center md:w-3/4 mx-auto text-gray-600 dark:text-gray-400 pb-7 pt-2">
        Manage registered users, update roles, view profiles and maintain a
        clean user database.
      </p>

      <div className="overflow-x-auto bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/40 border border-gray-200 dark:border-gray-700">
        <table className="table">
          <thead className="bg-cyan-500 dark:bg-cyan-700 text-white text-sm">
            <tr>
              <th>#</th>
              <th>User Info</th>
              <th>Email</th>
              <th>Role</th>
              <th>Register On</th>
              <th>Update Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-700 dark:text-gray-200"
              >
                <td className="font-bold">{index + 1}</td>

                {/* User Info */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photoURL} alt="avatar" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.fullName}</div>
                      <div className="text-sm opacity-60">
                        {user.contactNumber || "—"}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td>
                  <span className="badge badge-outline badge-primary px-3">
                    {user.email}
                  </span>
                </td>

                {/* Role */}
                <td>
                  <span
                    className={`badge px-3 ${
                      user.userRole === "Admin"
                        ? "badge-primary"
                        : "badge-neutral"
                    }`}
                  >
                    {user.userRole}
                  </span>
                </td>

                {/* Register Time */}
                <td className="text-sm opacity-70">
                  {new Date(user?.createdAt).toLocaleString("en-GB", {
                    timeZone: "Asia/Dhaka",
                  })}
                </td>

                {/* Update Role */}
                <td>
                  <button
                    title="Make Admin"
                    onClick={() => updateUserRole(user, "Admin")}
                    disabled={user.userRole === "Admin"}
                    className={`btn btn-square btn-sm bg-[#0D47A1] text-white hover:bg-transparent hover:text-[#0D47A1] border border-transparent hover:border-[#0D47A1] dark:hover:text-white dark:hover:border-white ${
                      user.userRole === "Admin"
                        ? "opacity-30 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    <FaUserShield />
                  </button>
                </td>

                {/* Actions */}
                <td className="space-x-2">
                  <button
                    title="View Details"
                    onClick={() => handleUsersViewDetails(user)}
                    className="btn btn-square btn-sm bg-[#0D47A1] text-white hover:bg-transparent hover:text-[#0D47A1] border border-transparent hover:border-[#0D47A1] dark:hover:text-white dark:hover:border-white"
                  >
                    <FiEye />
                  </button>
                  <button
                    title="Delete User"
                    onClick={() => handleUserDelete(user)}
                    className="btn btn-square btn-sm bg-red-500 text-white hover:bg-transparent hover:text-red-500 border border-transparent hover:border-red-500 dark:hover:text-red-400 dark:hover:border-red-400"
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      <dialog
        ref={userDetailsModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg max-w-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#F57C00]">
              <img
                src={currentUser?.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#F57C00]">
                {currentUser?.fullName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentUser?.email}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-semibold">Role</p>
              <p>{currentUser?.userRole}</p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 p-3 rounded-lg">
              <p className="font-semibold">Register Time</p>
              <p>
                {new Date(currentUser?.createdAt).toLocaleString("en-GB", {
                  timeZone: "Asia/Dhaka",
                })}
              </p>
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary w-full">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UsersManagement;
