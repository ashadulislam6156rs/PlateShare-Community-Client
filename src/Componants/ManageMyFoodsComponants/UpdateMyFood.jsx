import React from "react";
import Container from "../Container/Container";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateMyFood = () => {
  const food = useLoaderData();
  const {
    _id,
    foodName,
    foodImage,
    quantity,
    description,
    cookedTime,
    expireDate,
    pickupTimeWindow,
    pickupLocation,
    locationType,
    packagingType,
    provider,
    status,
  } = food || {};

  const handleUpdateFoodDetails = (e) => {
    e.preventDefault();
    const target = e.target;
    const updateFoodData = {
      foodName: target.foodName.value,
      foodImage: target.foodImage.value,
      quantity: target.quantity.value,
      description: target.description.value,
      cookedTime: target.cookedTime.value,
      expireDate: target.expireDate.value,
      pickupTimeWindow: target.pickupTimeWindow.value,
      pickupLocation: target.pickupLocation.value,
      locationType: target.locationType.value,
      packagingType: target.packagingType.value,
      status: target.foodStatus.value,
      provider: {
        name: target.Provider_name.value,
        provider_image: target.provider_image.value,
      },
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");

        fetch(
          `https://plateshare-community-server.vercel.app/update-food/${_id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateFoodData),
          }
        )
          .then(() => {
            e.target.reset();
          })
          .catch((err) => console.log(err));
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="md:pb-5 md:p-10 bg-[#f7f7f7] dark:bg-slate-900 transition-colors duration-300">
      <title>Update My Food - PlateShare Community</title>
      <Container>
        <div className="md:w-5/6 pb-5 pt-6 md:pt-3 p-3 md:p-5 bg-base-300 dark:bg-slate-800 rounded-lg mx-auto w-full transition-colors duration-300">
          <h1 className="md:text-4xl text-2xl text-[#fd7d07] font-semibold py-3 text-center">
            Update Food Details
          </h1>

          <form
            onSubmit={handleUpdateFoodDetails}
            className="mt-7 w-full space-y-5"
          >
            {/* Food Name & Quantity */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Food Name <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                  name="foodName"
                  defaultValue={foodName}
                  placeholder="e.g. Mango Lassi"
                  required
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Food Quantity{" "}
                  <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  placeholder="e.g. Serves 2 people"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
            </div>

            {/* Cooked Time & Pickup Time */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Cooked Time <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="cookedTime"
                  defaultValue={cookedTime}
                  placeholder="e.g. 11:00 AM"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Pickup Time <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="pickupTimeWindow"
                  placeholder="e.g. 12:00-1:00 PM"
                  defaultValue={pickupTimeWindow}
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
            </div>

            {/* Location Type & Packaging */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Location Type{" "}
                  <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="locationType"
                  defaultValue={locationType}
                  placeholder="e.g. Home"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Packaging Type{" "}
                  <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="packagingType"
                  defaultValue={packagingType}
                  placeholder="e.g. Box"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
            </div>

            {/* Pickup Location & Expire Date */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Pickup Location <span className="text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="pickupLocation"
                  defaultValue={pickupLocation}
                  placeholder="e.g. Rampura, Dhaka"
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Expire Date <span className="text-red-400">*</span>
                </legend>
                <input
                  type="date"
                  name="expireDate"
                  className="input w-full focus:ring-0 outline-none focus:outline-none border-teal-500 dark:bg-slate-700 dark:text-white"
                  defaultValue={expireDate}
                  required
                />
              </fieldset>
            </div>

            {/* Food Image & Status */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Food Image <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="url"
                  name="foodImage"
                  placeholder="Enter Food Image URL"
                  defaultValue={foodImage}
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Status <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="foodStatus"
                  placeholder="e.g. Available"
                  defaultValue={status}
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
            </div>

            {/* Provider Details */}
            <div className="flex gap-5 flex-col md:flex-row">
              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Provider Image{" "}
                  <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="url"
                  name="provider_image"
                  placeholder="Enter Your Image URL"
                  defaultValue={provider?.provider_image}
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Provider Name{" "}
                  <span className="text-base text-red-400">*</span>
                </legend>
                <input
                  type="text"
                  name="Provider_name"
                  placeholder="e.g. Hasan"
                  defaultValue={provider?.name}
                  required
                  className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
                />
              </fieldset>
            </div>

            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">
                Provider Email
                <span className="text-base text-red-400">*</span>
              </legend>
              <input
                type="text"
                className="input w-full focus:outline-0 border-teal-500 dark:bg-slate-700 dark:text-white"
                readOnly
                defaultValue={provider?.email}
              />
            </fieldset>

            {/* Description */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">
                Description <span className="text-red-400">*</span>
              </legend>
              <textarea
                placeholder="Enter Food Details"
                required
                name="description"
                defaultValue={description}
                className="textarea textarea-success w-full focus:outline-0 resize-none dark:bg-slate-700 dark:text-white dark:placeholder-gray-300"
              ></textarea>
            </fieldset>

            {/* Submit Button */}
            <div className="flex justify-center items-center w-full mt-5">
              <button
                type="submit"
                className="bg-linear-to-r cursor-pointer w-full rounded-lg text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] dark:from-[#fd7d07] dark:via-[#1b2f5b] dark:to-[#012444] py-1.5 md:py-2 font-semibold transition-colors duration-300"
              >
                Update Food
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default UpdateMyFood;
