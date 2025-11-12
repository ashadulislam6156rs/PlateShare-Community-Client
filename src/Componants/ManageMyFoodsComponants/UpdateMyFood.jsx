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
    <div className="md:pb-5 md:p-10 bg-[#f7f7f7]">
      <title>Update My Food - PlateShare Community</title>
      <Container className={``}>
        <div className="md:w-5/6 pb-5 pt-6 md:pt-3  p-3 md:p-5 bg-base-300 rounded-lg mx-auto w-full">
          <div>
            <h1 className="md:text-4xl text-2xl text-[#fd7d07] font-semibold py-3 text-center">
              Update Food Details
            </h1>
          </div>
          <div className="w-full">
            <form onSubmit={handleUpdateFoodDetails} className="mt-7 w-full">
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
                    defaultValue={foodName}
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
                    defaultValue={quantity}
                    placeholder="e.g. Serves 2 people"
                    required
                    className="input w-full focus:outline-0 border-teal-500"
                  />
                </fieldset>
              </div>
              <div className="flex gap-5 items-center">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    CookedTime
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="cookedTime"
                    defaultValue={cookedTime}
                    placeholder="e. g. Mango Lassi"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Pickup Time
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    name="pickupTimeWindow"
                    placeholder="e.g. Serves 2 people"
                    defaultValue={pickupTimeWindow}
                    required
                    className="input w-full focus:outline-0 border-teal-500"
                  />
                </fieldset>
              </div>

              <div className="flex gap-5 items-center">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Location Type
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="locationType"
                    defaultValue={locationType}
                    placeholder="e. g. Home"
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Packaging Type
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    name="packagingType"
                    defaultValue={packagingType}
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
                    defaultValue={pickupLocation}
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
                    defaultValue={expireDate}
                    required
                  />
                </fieldset>
              </div>

              <div className="flex gap-5">
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
                    defaultValue={foodImage}
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Status
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    name="foodStatus"
                    placeholder="e.g. Available"
                    defaultValue={status}
                    required
                    className="input w-full focus:outline-0 border-teal-500"
                  />
                </fieldset>
              </div>
              <div className="flex gap-5">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Provider Image
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="url"
                    className="input w-full focus:outline-0 border-teal-500"
                    name="provider_image"
                    placeholder="Enter Your Image URL"
                    defaultValue={provider?.provider_image}
                    required
                  />
                </fieldset>
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Provider Name
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    name="Provider_name"
                    placeholder="e.g. Hasan"
                    defaultValue={provider?.name}
                    required
                    className="input w-full focus:outline-0 border-teal-500"
                  />
                </fieldset>
              </div>

              <div className="flex gap-5">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend">
                    Provider Email
                    <span className="text-base text-red-400">*</span>
                  </legend>
                  <input
                    type="text"
                    className="input w-full focus:outline-0 border-teal-500"
                    readOnly
                    defaultValue={provider?.email}
                  />
                </fieldset>
              </div>

              <fieldset className="fieldset w-full">
                <legend className="fieldset-legend">
                  Description
                  <span className="text-red-400">*</span>
                </legend>
                <textarea
                  placeholder="Enter Food Details"
                  required
                  name="description"
                  defaultValue={description}
                  className="textarea textarea-success w-full focus:outline-0 resize-none"
                ></textarea>
              </fieldset>

              <div className="flex justify-center items-center w-full mt-5">
                <button
                  type="submit"
                  className="bg-linear-to-r cursor-pointer w-full rounded-lg text-white hover:bg-linear-to-l from-[#012444] via-[#1b2f5b] to-[#fd7e07] py-1.5 md:py-2 font-semibold"
                >
                  Update New
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateMyFood;
