import React, { useEffect, useState } from 'react';

const FoodRequestCards = ({ requestFoods }) => {
  // console.log(requestFoods);
  
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(requestFoods);
  }, [requestFoods]);


  const handleAcceptedFood = (foodId, _id) => {

    fetch(`http://localhost:3000/foods/statusUpdate/${foodId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Donated" }),
    })
      .then((res) => res.json())
      .then(() => {
      })
      .catch((err) => console.log(err.message));
    
    
    fetch(`http://localhost:3000/foodRequest/statusUpdate/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Accepted" }),
    })
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

    fetch(`http://localhost:3000/foodRequest/statusUpdate/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Rejected" }),
    })
      .then((res) => res.json())
      .then(() => {
        setFoods((prev) =>
          prev.map((item) =>
            item._id === _id ? { ...item, status: "Rejected" } : item
          )
        );
      })
      .catch((err) => console.log(err.message));
    
  }


  return (
    <div>
      <h1 className="text-3xl font-bold text-[#fd7d07] py-10 text-center">
        {" "}
        My Request Foods:{" "}
        <span className="from-[#632EE3] to-[#9F62F2] bg-linear-to-r text-transparent bg-clip-text">
          {foods.length}
        </span>
      </h1>

      {/* table */}

      <div className="space-y-4 pb-20">
        {foods.map((req) => (
          <div
            key={req._id}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-4 space-y-3"
          >
            <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-6 lg:gap-1 lg:grid-cols-6">
              <div className="flex items-center gap-3 md:col-span-2">
                <img
                  src={req.userPhotoURL}
                  alt="user"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-sm font-semibold">{req.userName}</h2>
                  <p className="text-xs text-gray-500">{req.userEmail}</p>
                </div>
              </div>

              <div className="md:col-span-1">
                <p className="text-xs text-gray-500 font-medium">Location</p>
                <p className="text-sm">{req.userLocation}</p>
              </div>

              <div className="md:col-span-1">
                <p className="text-xs text-gray-500 font-medium">Contact</p>
                <p className="text-sm">{req.userNumber}</p>
              </div>

              <div className="col-span-1">
                {req.status == "Pending" || req.status == "Rejected" ? (
                  <div className="badge badge-warning">{req.status}</div>
                ) : (
                  <div className="badge badge-success">Accepted</div>
                )}
              </div>

              <div className="col-span-1 flex gap-2">
                <button
                  onClick={() => handleAcceptedFood(req.foodId, req._id)}
                  className="btn-success text-success hover:text-white px-4 btn btn-outline btn-ghost btn-xs"
                >
                  Accepted
                </button>
                <button
                  onClick={() => handleRejectedFood(req._id)}
                  className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs"
                >
                  Rejected
                </button>
              </div>
            </div>
            <div className="border-t border-gray-200 pt-2">
              <p className="text-xs text-gray-500 font-medium">Why Need Food</p>
              <p className="text-sm  lg:max-w-[340px]">{req.userMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodRequestCards;