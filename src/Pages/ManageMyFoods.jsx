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
    fetch(`http://localhost:3000/manageMyFoods?email=${user.email}`)
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

        fetch(`http://localhost:3000/deleteMyFood/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });

              const remainingFoods = myFoods.filter(food => food._id !== id);
              setMyFoods(remainingFoods);
            }
          
        }).catch(err => console.log(err.message)
        )
      }
    });
    
  }


  if (loading) {
    return <Loading></Loading>;
  }


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
                    <th>SL. No.</th>
                    <th>My Foods</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {myFoods?.map((food, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask rounded-lg h-12 w-20">
                              <img
                                src={food.foodImage}
                                alt="Avatar"
                              />
                            </div>
                          </div>
                          <div>
                            <div>
                              {food.foodName}
                            </div>
                            <div className="text-sm opacity-50">
                              {food.quantity}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="badge bg-[#00d2908c]">
                          {food.status}
                        </div>
                      </td>
                      <th className="flex gap-2 items-center md:mt-4">
                        <Link
                          to={`/updateMyFood/${food._id}`}
                          className="btn-success text-success hover:text-white md:px-4 px-3.5 btn btn-outline btn-ghost btn-xs"
                        >
                          Update
                        </Link>
                        <button
                          onClick={() => handleMyFoodsDelete(food._id)}
                          className="btn btn-outline px-4 text-error hover:text-white btn-error btn-ghost btn-xs"
                        >
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
