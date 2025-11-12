import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container/Container";
import {  useParams } from "react-router";
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
  const [loading,setLoading] = useState(true)
  const [error, setError] = useState(false)
   const [singleFood, setSingleFood] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:3000/food/foodDetails/${id}`)
      .then((res) => res.json())
      .then(data => {
      setSingleFood(data);
      setLoading(false);
      })
      .catch(err => {
      console.log(err);
      setError(true)
    })
    
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:3000/foodRequest/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpacificrequestFoods(data);
      });
  }, [id]);

  const handleFoodStauschange = (foodId) => {
    fetch(`http://localhost:3000/foods/statusUpdate/${foodId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Donated" }),
    })
      .then((res) => res.json())
      .then(() => {
         setSingleFood({ ...singleFood, status: "Donated" });

        // if (allFoods._id === foodId) {
        //   allFoods.status = "Donated";
        // }
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
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

  const handleFoodRequestModal = () => {
    modalRef.current.showModal();
  };

  const handleFoodRequestSubmit = (e) => {
    e.preventDefault();
    const userLocation = e.target.userLocation.value;
    const userMessage = e.target.userMessage.value;
    const userNumber = e.target.userNumber.value;

    const newFoodRequest = {
      foodId: _id,
      userName: user?.displayName,
      userEmail: user?.email,
      userNumber,
      userPhotoURL: user?.photoURL,
      userLocation,
      userMessage,
      status: "Pending",
    };

    fetch("http://localhost:3000/foodRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFoodRequest),
    })
      .then(() => {
        toast.success("Congratulations! Your Food Request Successfully Send.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((err) =>
        toast.error(`${err.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      );

    // after submit close modal
    modalRef.current.close();
  };


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


  
  if (loading) {
    return <Loading></Loading>;
  }

if (error || !singleFood) {
  return <ErrorFoodNotFound></ErrorFoodNotFound>;
}

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-50 py-8">
      <Container className="px-3">
        <div className="card lg:card-side bg-white rounded-0 overflow-hidden md:gap-5 lg:gap-0">
          <figure className="w-full h-80 md:h-[500px] lg:h-full lg:w-[850px] rounded-2xl bg-amber-400">
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
              <p className="text-gray-700 mb-4">{description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-700">Status:</span>{" "}
                  {status}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Quantity:</span>{" "}
                  {quantity}
                </p>

                <p>
                  <span className="font-semibold text-gray-700">
                    Cooked Time:
                  </span>{" "}
                  {
                    <>
                      <span className="mr-1">{formattedDate},</span>
                      <span>{formattedTime}</span>
                    </>
                  }
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Expire Date:
                  </span>{" "}
                  {expireDate}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Pickup Time:
                  </span>{" "}
                  {pickupTimeWindow}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Location:</span>{" "}
                  {pickupLocation}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">
                    Packaging:
                  </span>{" "}
                  {packagingType}
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Rating:</span>{" "}
                  {rating} ⭐
                </p>
                <p>
                  <span className="font-semibold text-gray-700">Requests:</span>{" "}
                  {requestCount}
                </p>
              </div>

              <div className="mb-4"></div>

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
                    <p className="font-medium text-gray-700">{provider?.name}</p>
                    <p className="text-sm text-gray-600">{provider?.email}</p>
                    <p className="text-sm text-gray-500">
                      Verified:{" "}
                      {provider?.verified ? (
                        <>
                          Yes{" "}
                          <FaCheckCircle className="inline-block text-green-500 font-bold" />
                        </>
                      ) : (
                        <>
                          No{" "}
                          <RxCross2 className="inline-block text-red-500 text-xl font-bold" />
                        </>
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
                aria-label={`Request ${foodName}`}
              >
                Request Food
              </button>
            </div>
          </div>
        </div>

        {/*My Reguest Food Show */}
        <div className="mt-3">
          {user?.email == provider.email ? (
            <RequestFoods
              handleFoodStauschange={handleFoodStauschange}
              spacificRequestFoods={spacificRequestFoods}
            ></RequestFoods>
          ) : (
            ""
          )}
        </div>

        {/* Open the modal using document.getElementById('ID').showModal() method */}

        <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal-action -mt-2">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error btn-outline btn-md">
                  Close
                </button>
              </form>
            </div>
            <h3 className="md:text-4xl text-2xl text-[#fd7d07] font-semibold pb-3 text-center">
              Food Request
            </h3>
            <div>
              <form onSubmit={handleFoodRequestSubmit}>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Location
                    <span className=" text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="userLocation"
                    placeholder="e.g. Rampura, Dhaka"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Why Need Food ?<span className="text-red-400">*</span>
                  </legend>
                  <textarea
                    placeholder="UserMessage"
                    required
                    name="userMessage"
                    className="textarea textarea-success w-full focus:outline-0 resize-none"
                  ></textarea>
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Contact No:
                    <span className=" text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="userNumber"
                    placeholder="e.g. 01xxxxxxxxx"
                    required
                  />
                </fieldset>
                <div className="flex justify-center items-center mt-3">
                  <button
                    type="submit"
                    className="bg-linear-to-r cursor-pointer w-full rounded-lg text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 md:py-2 font-semibold"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </Container>
    </div>
  );
};

export default FoodDetails;
