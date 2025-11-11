import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import FoodRequestCards from "../Componants/FoodRequestCards";
import Loading from "../Loading/Loading";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requestFoods, setRequestFoods] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/myfoodRequest?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRequestFoods(data)
        setLoading(false)
      });
  }, [user?.email]);

  if (loading) {
    return <Loading></Loading>;
}
  

  return (
    <div>
      {" "}
      <Container className={`px-3`}>
        <FoodRequestCards requestFoods={requestFoods}></FoodRequestCards>
      </Container>
    </div>
  );
};

export default MyFoodRequests;
