import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Container from "../Componants/Container/Container";
import FoodRequestCards from "../Componants/FoodRequestCards";

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requestFoods, setRequestFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myfoodRequest?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRequestFoods(data)
      });
  }, [user?.email]);

  console.log(requestFoods);
  

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
