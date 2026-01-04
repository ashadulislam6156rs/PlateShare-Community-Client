import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdVerifiedUser } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import Loading from "../Loading/Loading";

const MyProfile = () => {
  const { user, updateUserInfo } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: currentUser = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `https://plateshare-community-server.vercel.app/users?email=${user?.email}`
      );
      return res.data;
    },
  });

  useEffect(() => {
    reset({
      fullName: currentUser.fullName,
      email: currentUser.email,
      address: currentUser?.address || "None",
      emailVerified: user?.emailVerified,
      finalUserImage: user?.photoURL,
    });
  }, [
    reset,
    currentUser.fullName,
    currentUser.email,
    currentUser?.address,
    user?.emailVerified,
    user?.photoURL,
  ]);

  const handleUpdateInfo = async (data) => {
    try {
      const updateInfo = {
        displayName: data.fullName,
        photoURL: data.finalUserImage,
      };
      updateUserInfo(updateInfo);

      const updatedData = {
        fullName: data.fullName,
        address: data?.address,
        photoURL: data.finalUserImage,
      };

      const result = await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });

      if (result.isConfirmed) {
        await axios.patch(
          `https://plateshare-community-server.vercel.app/user/${currentUser._id}/update`,
          updatedData
        );

        Swal.fire("Updated successfully!", "", "success");
        refetch();
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const calculateProfileCompletion = () => {
    let totalFields = 4;
    let completedFields = 0;

    if (currentUser?.fullName) completedFields++;
    if (currentUser?.email) completedFields++;
    if (currentUser?.address && currentUser.address !== "None")
      completedFields++;
    if (currentUser?.photoURL) completedFields++;

    return Math.round((completedFields / totalFields) * 100);
  };

  const profileCompletion = calculateProfileCompletion();

  if (isLoading) return <Loading />;

  return (
    <div>
      <title>My Profile | eTutionTrack</title>
      <Container>
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg dark:shadow-black/40 p-6 md:p-8 my-6">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            {/* Left Section */}
            <div className="flex flex-col items-center md:w-1/3 text-center">
              <img
                src={
                  currentUser?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="User Avatar"
                className="w-36 h-36 rounded-full object-cover border-4 border-[#F57C00] shadow-lg"
              />

              <h2 className="mt-4 text-xl font-bold text-[#F57C00]">
                {currentUser.fullName}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                {currentUser.email}
              </p>

              <div className="flex items-center justify-center mt-2 bg-linear-to-r from-[#F57C00] to-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                {user?.emailVerified ? (
                  <>
                    <MdVerifiedUser className="mr-1" />
                    Verified User
                  </>
                ) : (
                  <>
                    <RxCrossCircled className="mr-1" />
                    Not Verified
                  </>
                )}
              </div>

              {/* Progress */}
              <div className="w-full mt-6">
                <p className="text-gray-700 dark:text-gray-300 mb-1 font-medium">
                  Profile Completeness ({profileCompletion}%)
                </p>
                <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-4 bg-linear-to-r from-[#F57C00] to-red-500 rounded-full transition-all duration-500"
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-2/3 md:border-l-2 md:border-l-[#f57b0042] dark:md:border-l-gray-700 md:pl-3 flex flex-col gap-4">
              <h1 className="text-2xl font-bold text-[#F57C00] mb-4">
                Edit Profile
              </h1>

              <form
                onSubmit={handleSubmit(handleUpdateInfo)}
                className="space-y-2"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    {...register("fullName", { required: true })}
                    className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#F57C00]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    readOnly
                    className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 cursor-not-allowed"
                  />
                </div>

                {/* Image */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Image URL
                  </label>
                  <input
                    type="text"
                    {...register("finalUserImage")}
                    className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    {...register("address")}
                    className="w-full p-3 border rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-[#F57C00]"
                  />
                </div>

                <button className="myBtn btn w-full md:w-1/2 rounded-lg mt-5 dark:bg-[#F57C00] dark:text-white dark:hover:bg-[#d96500]">
                  <BiEditAlt />
                  Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
