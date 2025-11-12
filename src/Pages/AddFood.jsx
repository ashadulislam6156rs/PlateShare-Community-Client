import React, { useContext } from "react";
import Container from "../Componants/Container/Container";
import { AuthContext } from "../AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";

const AddFood = () => {
  const { user } = useContext(AuthContext);

  const handleAddFood = (e) => {
    e.preventDefault();
    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const expireDate = e.target.expireDate.value;
    const pickupLocation = e.target.pickupLocation.value;
    let verifiedEmail = false;

    if (user && user?.emailVerified) {
      verifiedEmail = true;
    }

    const date = new Date();
    const cookedTime = date.toLocaleString();

    const newFood = {
      foodName,
      foodImage,
      quantity,
      description,
      cookedTime,
      expireDate,
      pickupTimeWindow: "5 PM to 10 AM",
      pickupLocation,
      locationType: "Home",
      provider: {
        name: user?.displayName,
        email: user?.email,
        provider_image: user?.photoURL,
        verified: verifiedEmail,
      },
      packagingType: "Plastic bottle",
      status: "Available",
      requestCount: 0,
      rating: 0.0,
    };

    fetch("https://plateshare-community-server.vercel.app/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    })
      .then(() => {
        toast.success(
          "Congratulations! Your Food has been successfully Added.",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
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

  return (
    <div className="pb-5 md:p-10 bg-[#f7f7f7]">
      <Container className={``}>
        <div className="md:w-5/6 p-3 md:p-0 mx-auto w-full">
          <div className="card card-side bg-base-300 mt-4 shadow-md h-full md:p-6 w-full">
            <div className="md:p-5 pt-5">
              <h1 className="md:text-4xl text-2xl text-[#fd7d07] font-semibold pb-3 text-center">
                Add New Food
              </h1>
              <p className="text-[#1B1A1A70] font-semibold text-sm text-center">
                Share your extra or leftover food with the community by adding
                all the necessary details here. Include the food name, quantity,
                pickup location, time window, and any special notes so that
                people who need it can easily request and collect it. Your small
                contribution can help reduce waste and support someone in need.
              </p>

              <form onSubmit={handleAddFood} className="mt-7">
                <div className="flex gap-5 items-center">
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Food Name
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="foodName"
                      placeholder="e. g. Mango Lassi"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Food Quantity
                      <span className="text-base text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      name="quantity"
                      placeholder="e.g. Serves 2 people"
                      required
                      className="input w-full focus:outline-0 border-teal-500"
                    />
                  </fieldset>
                </div>

                <div className="flex gap-5">
                  {" "}
                  <fieldset className="fieldset w-full">
                    <legend className="fieldset-legend">
                      Pickup Location
                      <span className=" text-red-400">*</span>
                    </legend>
                    <input
                      type="text"
                      className="input w-full focus:outline-0 border-teal-500"
                      name="pickupLocation"
                      placeholder="e.g. Rampura, Dhaka"
                      required
                    />
                  </fieldset>
                  <fieldset className="fieldset w-full ">
                    <legend className="fieldset-legend ">
                      Expire Date
                      <span className="text-red-400">*</span>
                    </legend>
                    <input
                      type="date"
                      name="expireDate"
                      className="input w-full focus:ring-0 outline-none focus:outline-none border-teal-500 focus:border-teal-500"
                      placeholder="e.g. 11/10/2025"
                      required
                    />
                  </fieldset>
                </div>

                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Food Image
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="url"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="foodImage"
                    placeholder="Enter Food Image URL"
                    required
                  />
                </fieldset>

                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Additional Notes
                    <span className="text-red-400">*</span>
                  </legend>
                  <textarea
                    placeholder="Enter Food Details"
                    required
                    name="description"
                    className="textarea textarea-success w-full focus:outline-0 resize-none"
                  ></textarea>
                </fieldset>

                <div className="flex justify-center items-center w-full mt-5">
                  <button
                    type="submit"
                    className="bg-linear-to-r cursor-pointer w-full rounded-lg text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 md:py-2 font-semibold"
                  >
                    Add New Food
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddFood;
