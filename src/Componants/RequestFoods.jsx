import React, { useEffect, useState } from "react";

const RequestFoods = ({ spacificRequestFoods, handleFoodStauschange }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(spacificRequestFoods);
  }, [spacificRequestFoods]);

  const handleAcceptedFood = (foodId, _id) => {
    handleFoodStauschange(foodId);

    fetch(
      `https://plateshare-community-server.vercel.app/foodRequest/statusUpdate/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Accepted" }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setFoods((prev) =>
          prev.map((item) =>
            item._id === _id ? { ...item, status: "Accepted" } : item
          )
        );
      })
      .catch((err) => console.log(err.message));
  };

  const handleRejectedFood = (_id) => {
    fetch(
      `https://plateshare-community-server.vercel.app/foodRequest/statusUpdate/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Rejected" }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setFoods((prev) =>
          prev.map((item) =>
            item._id === _id ? { ...item, status: "Rejected" } : item
          )
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#fd7d07] py-10 text-center">
        {" "}
        All Request:{" "}
        <span className="from-[#632EE3] to-[#9F62F2] bg-linear-to-r text-transparent bg-clip-text">
          {foods.length}
        </span>
      </h1>

      {/* table */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL. NO.</th>
              <th>Requester</th>
              <th>Food ID</th>
              <th>Location</th>
              <th>Why Need Food </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {foods.map((food, index) => (
              <tr>
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
                <td>
                  <p>{food.foodId}</p>
                </td>
                <td>{food.userLocation}</td>
                <td className="w-70">{food.userMessage}</td>
                <th>
                  <div className="col-span-1">
                    {food.status == "Pending" ? (
                      <div className="badge badge-warning">Pending</div>
                    ) : food.status == "Rejected" ? (
                      <div className="badge badge-error">Rejected</div>
                    ) : (
                      <div className="badge badge-success">Accepted</div>
                    )}
                  </div>
                </th>
                <th>
                  <div className="col-span-1 flex gap-2">
                    <button
                      onClick={() => handleAcceptedFood(food.foodId, food._id)}
                      className="btn-success text-success hover:text-white px-4 btn btn-outline btn-ghost btn-xs"
                    >
                      Accepted
                    </button>
                    <button
                      onClick={() => handleRejectedFood(food._id)}
                      className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs"
                    >
                      Rejected
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestFoods;
