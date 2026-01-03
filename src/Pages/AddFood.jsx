import React, { useContext, useState } from "react";
import Container from "../Componants/Container/Container";
import { AuthContext } from "../AuthContext/AuthContext";
import { Bounce, toast } from "react-toastify";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddFood = (e) => {
    e.preventDefault();
    setLoading(true);

    const foodName = e.target.foodName.value;
    const foodImage = e.target.foodImage.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const expireDate = e.target.expireDate.value;
    const pickupLocation = e.target.pickupLocation.value;

    const verifiedEmail = user?.emailVerified || false;
    const cookedTime = new Date().toLocaleString();

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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFood),
    })
      .then(() => {
        toast.success("Food added successfully!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        });
        e.target.reset();
      })
      .catch((err) =>
        toast.error(err.message, {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
          transition: Bounce,
        })
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      className="min-h-screen pb-5 md:p-10 
       text-gray-900 
      dark:bg-gray-900 dark:text-gray-100"
    >
      <title>Add Food - PlateShare Community</title>

      <Container>
        <div className="md:w-5/6 mx-auto w-full px-3 md:px-0">
          <div
            className="card bg-white dark:bg-gray-800 
            mt-4 shadow-lg rounded-lg md:p-6 w-full"
          >
            <div className="md:p-5 pt-5">
              <h1
                className="md:text-4xl text-2xl 
                text-[#fd7d07] font-semibold pb-3 text-center"
              >
                Add New Food
              </h1>

              <p
                className="text-gray-600 dark:text-gray-400 
                font-semibold text-sm text-center"
              >
                Share your extra or leftover food with the community. Your small
                contribution can help reduce waste and support someone in need.
              </p>

              <form onSubmit={handleAddFood} className="mt-7 space-y-4">
                {/* Food Name & Quantity */}
                <div className="flex gap-5">
                  <fieldset className="w-full">
                    <legend className="text-gray-700 dark:text-gray-300">
                      Food Name *
                    </legend>
                    <input
                      type="text"
                      name="foodName"
                      required
                      placeholder="e.g. Mango Lassi"
                      className="input w-full 
                        bg-white text-gray-900 border-gray-300 
                        dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                        focus:ring focus:ring-yellow-500"
                    />
                  </fieldset>

                  <fieldset className="w-full">
                    <legend className="text-gray-700 dark:text-gray-300">
                      Quantity *
                    </legend>
                    <input
                      type="text"
                      name="quantity"
                      required
                      placeholder="Serves 2 people"
                      className="input w-full 
                        bg-white text-gray-900 border-gray-300 
                        dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                        focus:ring focus:ring-yellow-500"
                    />
                  </fieldset>
                </div>

                {/* Location & Expire Date */}
                <div className="flex gap-5">
                  <fieldset className="w-full">
                    <legend className="text-gray-700 dark:text-gray-300">
                      Pickup Location *
                    </legend>
                    <input
                      type="text"
                      name="pickupLocation"
                      required
                      placeholder="Rampura, Dhaka"
                      className="input w-full 
                        bg-white text-gray-900 border-gray-300 
                        dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                        focus:ring focus:ring-yellow-500"
                    />
                  </fieldset>

                  <fieldset className="w-full">
                    <legend className="text-gray-700 dark:text-gray-300">
                      Expire Date *
                    </legend>
                    <input
                      type="date"
                      name="expireDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="input w-full 
                        bg-white text-gray-900 border-gray-300 
                        dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                        focus:ring focus:ring-yellow-500"
                    />
                  </fieldset>
                </div>

                {/* Image */}
                <fieldset>
                  <legend className="text-gray-700 dark:text-gray-300">
                    Food Image *
                  </legend>
                  <input
                    type="url"
                    name="foodImage"
                    required
                    placeholder="Image URL"
                    className="input w-full 
                      bg-white text-gray-900 border-gray-300 
                      dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                      focus:ring focus:ring-yellow-500"
                  />
                </fieldset>

                {/* Description */}
                <fieldset>
                  <legend className="text-gray-700 dark:text-gray-300">
                    Additional Notes *
                  </legend>
                  <textarea
                    name="description"
                    required
                    placeholder="Food details..."
                    className="textarea w-full resize-none
                      bg-white text-gray-900 border-gray-300 
                      dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600
                      focus:ring focus:ring-yellow-500"
                  ></textarea>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-4 py-2 rounded-lg font-semibold text-white
                    bg-linear-to-r from-[#012444] via-[#1b2f5b] to-[#fd7e07]
                    hover:bg-linear-to-l"
                >
                  {loading ? "Adding..." : "Add New Food"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AddFood;
