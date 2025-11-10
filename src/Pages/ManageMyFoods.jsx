import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import { Link } from "react-router";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/manageMyFoods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyFoods(data);
      })
      .catch((err) => console.log(err.message));
  }, [user.email]);

  console.log(myFoods);
  // foodImage, foodName, status, quantity

  return (
    <div>
      <Container className={`px-3`}>
        <div>
          <h1 className="text-3xl font-bold text-[#fd7d07] text-center py-5 md:py-10">
            {" "}
            Manage My Foods:{" "}
            <span className="from-[#632EE3] to-[#9F62F2] bg-linear-to-r text-transparent bg-clip-text">
              {myFoods.length}
            </span>
          </h1>

          {/* table */}
          <div className="overflow-x-auto pr-5 mb-5">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th className="hidden md:block">SL No.</th>
                  <th>My Foods</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myFoods?.map((food, index) => (
                  <tr>
                    <th className="hidden md:block">{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-20">
                            <img
                              src={food.foodImage}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold hidden md:block">
                            {food.foodName}
                          </div>
                          <div className="text-sm opacity-50 hidden md:block">
                            {food.quantity}
                          </div>
                          
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="badge bg-[#00d2908c]">{food.status}</div>
                    </td>
                    <th className="flex md:flex-row flex-col gap-2 items-center md:mt-4">
                      <Link
                        to={`/updateMyFood/${food._id}`}
                        className="btn-success text-success hover:text-white md:px-4 px-3.5 btn btn-outline btn-ghost btn-xs"
                      >
                        Update
                      </Link>
                      <button className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs">
                        Delete
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManageMyFoods;
