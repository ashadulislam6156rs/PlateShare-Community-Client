import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const [myFoods, setMyFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/manageMyFoods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
      setMyFoods(data)
      
      })
    .catch(err => console.log(err.message)
    )
  }, [user.email]);

  console.log(myFoods);
  


  return (
    <div>
      <Container className={`px-3`}>
        <div>
          <h1 className="lg:text-4xl text-2xl font-semibold text-center py-10">
            {" "}
            Manage My Foods:{" "}
            <span className="from-[#632EE3] to-[#9F62F2] bg-linear-to-r text-transparent bg-clip-text">
              {myFoods.length}
            </span>
          </h1>

          {/* table */}
          <div className="overflow-x-auto pr-5">
            <table className="table table-zebra ">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Product</th>
                  <th>Buyer</th>
                  <th>Bid Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {myFoods?.map((bid, index) => (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask rounded-lg h-12 w-20">
                            <img
                              src={bid.product_photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid.product_title}</div>
                          <div className="text-sm opacity-50">
                            {bid.product_location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={bid.buyer_photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid.buyer_name}</div>
                          <div className="text-sm opacity-50">
                            {bid.buyer_location}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>${bid.buyer_bidPrice}</td>
                    <th className="flex gap-2 items-center">
                      <button className="btn-success text-success hover:text-white px-4 btn btn-outline btn-ghost btn-xs">
                        Update
                      </button>
                      <button className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs">
                        Delet
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
