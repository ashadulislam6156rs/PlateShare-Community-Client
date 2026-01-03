import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://plateshare-community-server.vercel.app/manageMyFoods?email=${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [user.email]);

  const handleMyFoodsDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://plateshare-community-server.vercel.app/deleteMyFood/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });

              const remainingFoods = myFoods.filter((food) => food._id !== id);
              setMyFoods(remainingFoods);
            }
          })
          .catch((err) => console.log(err.message));
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200">
      <title>Manage My Foods - PlateShare Community</title>
      <Container className="px-3">
        <div>
          <h1 className="text-3xl font-bold text-orange-500 dark:text-orange-400 text-center py-5 md:py-10">
            Manage My Foods:{" "}
            <span className="from-[#632EE3] to-[#9F62F2] bg-linear-to-r text-transparent bg-clip-text">
              {myFoods.length}
            </span>
          </h1>

          {/* table */}
          <div className="overflow-x-auto pr-5 mb-5">
            <table className="table table-zebra dark:table-auto dark:bg-gray-800 dark:text-gray-200">
              <thead className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200">
                <tr>
                  <th>SL. No.</th>
                  <th>My Foods</th>
                  <th>View Food Details</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {myFoods?.map((food, index) => (
                  <tr
                    key={food._id}
                    className="dark:border-b dark:border-gray-600"
                  >
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-20">
                            <img src={food.foodImage} alt={food.foodName} />
                          </div>
                        </div>
                        <div>
                          <div>{food.foodName}</div>
                          <div className="text-sm opacity-50">
                            {food.quantity}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link
                        to={`/food/foodDetails/${food._id}`}
                        className="btn-success text-success hover:text-white md:px-4 px-3.5 btn btn-outline btn-ghost btn-xs dark:text-green-400 dark:border-green-500 dark:hover:bg-green-500 dark:hover:text-white"
                      >
                        View Details
                      </Link>
                    </td>
                    <td>
                      <div className="badge bg-[#00d2908c] dark:bg-green-600">
                        {food.status}
                      </div>
                    </td>
                    <th className="flex gap-2 items-center md:mt-4">
                      <Link
                        to={`/updateMyFood/${food._id}`}
                        className="btn-success text-success hover:text-white md:px-4 px-3.5 btn btn-outline btn-ghost btn-xs dark:text-green-400 dark:border-green-500 dark:hover:bg-green-500 dark:hover:text-white"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleMyFoodsDelete(food._id)}
                        className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs dark:text-red-400 dark:border-red-500 dark:hover:bg-red-500 dark:hover:text-white"
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageMyFoods;
