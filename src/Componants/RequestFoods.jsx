import React, { useEffect, useState } from "react";

const RequestFoods = ({ spacificRequestFoods, handleFoodStauschange }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (Array.isArray(spacificRequestFoods)) {
      setFoods(spacificRequestFoods);
    } else {
      setFoods([]);
    }
  }, [spacificRequestFoods]);

  const updateFoodStatus = (foodId, requestId, status) => {
    // Update main food status if accepted
    if (status === "Accepted") {
      handleFoodStauschange(foodId);
    }

    // Update request food status
    fetch(
      `https://plateshare-community-server.vercel.app/foodRequest/statusUpdate/${requestId}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setFoods((prev) =>
          prev.map((item) =>
            item._id === requestId ? { ...item, status } : item
          )
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="px-3 md:px-0">
      <h1 className="text-3xl font-bold text-[#fd7d07] py-10 text-center">
        All Requests:{" "}
        <span className="bg-linear-to-r text-transparent bg-clip-text from-[#632EE3] to-[#9F62F2]">
          {foods.length}
        </span>
      </h1>

      <div className="overflow-x-auto w-full">
        <table className="table w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th>SL. NO.</th>
              <th>Requester</th>
              <th>Food ID</th>
              <th>Location</th>
              <th>Why Need Food</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {foods.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-5 text-gray-500 dark:text-gray-400"
                >
                  No requests found.
                </td>
              </tr>
            ) : (
              foods.map((food, index) => (
                <tr
                  key={food._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={food.userPhotoURL} alt={food.userName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{food.userName}</div>
                        <div className="text-sm opacity-50">
                          {food.userNumber}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{food.foodId}</td>
                  <td>{food.userLocation}</td>
                  <td className="max-w-xs truncate">{food.userMessage}</td>
                  <td>
                    {food.status === "Pending" ? (
                      <div className="badge badge-warning">Pending</div>
                    ) : food.status === "Rejected" ? (
                      <div className="badge badge-error">Rejected</div>
                    ) : (
                      <div className="badge badge-success">Accepted</div>
                    )}
                  </td>
                  <td className="flex gap-2">
                    <button
                      onClick={() =>
                        updateFoodStatus(food.foodId, food._id, "Accepted")
                      }
                      className="btn btn-xs btn-outline btn-success hover:text-white px-4"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        updateFoodStatus(food.foodId, food._id, "Rejected")
                      }
                      className="btn btn-xs btn-outline btn-error hover:text-white px-4"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestFoods;
