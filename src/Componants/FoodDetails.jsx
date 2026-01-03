import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container/Container";
import { useParams } from "react-router";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../AuthContext/AuthContext";
import ErrorFoodNotFound from "./ErrorPages/ErrorFoodNotFound";
import RequestFoods from "./RequestFoods";
import { Bounce, toast } from "react-toastify";
import Loading from "../Loading/Loading";

const FoodDetails = () => {
  const { id } = useParams();
  const modalRef = useRef();
  const { user } = useContext(AuthContext);

  const [spacificRequestFoods, setSpacificrequestFoods] = useState([]);
  const [error, setError] = useState(false);
  const [singleFood, setSingleFood] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch food details
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://plateshare-community-server.vercel.app/food/foodDetails/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSingleFood(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  // Fetch food requests
  useEffect(() => {
    fetch(`https://plateshare-community-server.vercel.app/foodRequest/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpacificrequestFoods(data);
      })
      .catch(() => setError(true));
  }, [id]);

  const handleFoodStauschange = (foodId) => {
    fetch(
      `https://plateshare-community-server.vercel.app/foods/statusUpdate/${foodId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "Donated" }),
      }
    )
      .then((res) => res.json())
      .then(() => setSingleFood({ ...singleFood, status: "Donated" }))
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
          transition: Bounce,
        })
      );
  };

  const {
    _id,
    foodName,
    foodImage,
    status,
    quantity,
    pickupLocation,
    expireDate,
    pickupTimeWindow,
    description,
    cookedTime,
    packagingType,
    provider,
    requestCount,
    rating,
  } = singleFood || {};

  const handleFoodRequestModal = () => modalRef.current.showModal();

  const handleFoodRequestSubmit = (e) => {
    e.preventDefault();
    const { userLocation, userMessage, userNumber } = e.target;

    const newFoodRequest = {
      foodId: _id,
      userName: user?.displayName,
      userEmail: user?.email,
      userNumber: userNumber.value,
      userPhotoURL: user?.photoURL,
      userLocation: userLocation.value,
      userMessage: userMessage.value,
      status: "Pending",
    };

    fetch("https://plateshare-community-server.vercel.app/foodRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFoodRequest),
    })
      .then(() =>
        toast.success("Your food request was sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
          transition: Bounce,
        })
      )
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          theme: "light",
          transition: Bounce,
        })
      );

    modalRef.current.close();
  };

  // Format time
  const cookdate = new Date(cookedTime);
  const formattedTime = cookdate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const formattedDate = cookdate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  if (loading) return <Loading />;
  if (error || !singleFood?._id) return <ErrorFoodNotFound />;

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-50 dark:bg-slate-900 py-8 transition-colors duration-300">
      <title>{foodName} - PlateShare Community</title>
      <Container className="px-3">
        {/* Food Card */}
        <div className="card lg:card-side bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md transition-colors duration-300 md:gap-5 lg:gap-0">
          <figure className="w-full h-80 md:h-[500px] lg:h-full lg:w-[850px] rounded-2xl bg-amber-400 overflow-hidden">
            <img
              src={foodImage}
              alt={foodName}
              className="object-cover h-full w-full transition-opacity duration-300 hover:opacity-90"
            />
          </figure>

          <div className="card-body flex flex-col justify-between p-3 w-full md:pl-10">
            <div>
              <h2 className="card-title text-3xl font-bold text-[#fd7d07] pb-2">
                {foodName}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-semibold">Status:</span> {status}
                </p>
                <p>
                  <span className="font-semibold">Quantity:</span> {quantity}
                </p>
                <p>
                  <span className="font-semibold">Cooked Time:</span>{" "}
                  {formattedDate}, {formattedTime}
                </p>
                <p>
                  <span className="font-semibold">Expire Date:</span>{" "}
                  {expireDate}
                </p>
                <p>
                  <span className="font-semibold">Pickup Time:</span>{" "}
                  {pickupTimeWindow}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {pickupLocation}
                </p>
                <p>
                  <span className="font-semibold">Packaging:</span>{" "}
                  {packagingType}
                </p>
                <p>
                  <span className="font-semibold">Rating:</span> {rating} ⭐
                </p>
                <p>
                  <span className="font-semibold">Requests:</span>{" "}
                  {requestCount}
                </p>
              </div>

              {/* Donator Info */}
              <div className="mb-6 border-t pt-4 border-[#fd7e075d]">
                <h3 className="font-semibold mb-2 text-[#fd7d07] text-xl">
                  Donator Information
                </h3>
                <div className="flex items-center space-x-4">
                  <img
                    src={provider?.provider_image}
                    alt={provider?.name || "Provider"}
                    className="w-16 h-16 rounded-full object-cover border border-gray-300"
                  />
                  <div>
                    <p className="font-medium text-gray-700 dark:text-gray-200">
                      {provider?.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {provider?.email}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      Verified:{" "}
                      {provider?.verified ? (
                        <FaCheckCircle className="inline-block text-green-500 ml-1" />
                      ) : (
                        <RxCross2 className="inline-block text-red-500 ml-1" />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-actions mt-4">
              <button
                onClick={handleFoodRequestModal}
                className="my-btn bg-linear-to-r text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] w-full"
              >
                Request Food
              </button>
            </div>
          </div>
        </div>

        {/* Request List if user is provider */}
        {user?.email === provider?.email && (
          <div className="mt-3">
            <RequestFoods
              handleFoodStauschange={handleFoodStauschange}
              spacificRequestFoods={spacificRequestFoods}
            />
          </div>
        )}

        {/* Food Request Modal */}
        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box dark:bg-slate-800 dark:text-white">
            <div className="modal-action -mt-2">
              <form method="dialog">
                <button className="btn btn-error btn-outline btn-md">
                  Close
                </button>
              </form>
            </div>
            <h3 className="md:text-4xl text-2xl text-[#fd7d07] font-semibold pb-3 text-center">
              Food Request
            </h3>
            <form onSubmit={handleFoodRequestSubmit} className="space-y-4">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Location <span className="text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="userLocation"
                  placeholder="e.g. Rampura, Dhaka"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Why Need Food? <span className="text-red-400">*</span>
                </legend>
                <textarea
                  name="userMessage"
                  placeholder="UserMessage"
                  required
                  className="textarea w-full focus:outline-0 resize-none dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                ></textarea>
              </fieldset>
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Contact No: <span className="text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="userNumber"
                  placeholder="e.g. 01xxxxxxxxx"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
              <div className="flex justify-center mt-3">
                <button
                  type="submit"
                  className="bg-linear-to-r w-full text-white rounded-lg hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 md:py-2 font-semibold"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </Container>
    </div>
  );
};

export default FoodDetails;
