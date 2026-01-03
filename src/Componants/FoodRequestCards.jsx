import React, { useEffect, useState } from "react";

const FoodRequestCards = ({ requestFoods }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (requestFoods && Array.isArray(requestFoods)) {
      setFoods(requestFoods);
    } else {
      setFoods([]);
    }
  }, [requestFoods]);

  return (
    <div className="px-3 md:px-0 bg-white dark:bg-[#012444] rounded-md">
      <h1 className="text-3xl font-bold text-[#fd7d07] py-10 text-center">
        My Request Foods:{" "}
        <span className="bg-linear-to-r text-transparent bg-clip-text from-[#632EE3] to-[#9F62F2]">
          {foods.length}
        </span>
      </h1>

      {/* Table */}
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
            </tr>
          </thead>
          <tbody>
            {foods.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-5 text-gray-500 dark:text-gray-400"
                >
                  No food requests found.
                </td>
              </tr>
            ) : (
              foods.map((food, index) => (
                <tr
                  key={food._id || index}
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
                    <div className="col-span-1">
                      {food.status === "Pending" ? (
                        <div className="badge badge-warning">Pending</div>
                      ) : food.status === "Rejected" ? (
                        <div className="badge badge-error">Rejected</div>
                      ) : (
                        <div className="badge badge-success">Accepted</div>
                      )}
                    </div>
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

export default FoodRequestCards;
