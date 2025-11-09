import React, { useEffect, useState } from 'react';
import Container from '../Container/Container';
import FoodCard from './FoodCard';


const FeatureFoods = () => {

    const [featureFoods, setFeatureFoods] = useState();
    useEffect(() => {
        fetch("http://localhost:3000/feature-foods")
            .then((res) => res.json())
            .then(data => {
                // console.log(data);
                setFeatureFoods(data)
            
        })
    }, [])

    // console.log(featureFoods);
    
    
    return (
      <div className="pt-10">
        <Container className={`px-3`}>
          <h1 className="text-3xl font-bold text-[#fd7d07] text-center">
            Feature Foods
          </h1>
          <div className="w-1/2 mx-auto">
            <p className="text-center py-2 pt-3 text-base text-gray-500">
              Discover our featured foods, carefully prepared and fresh, ready
              to delight your taste buds while reducing food waste daily.
            </p>
          </div>
          {/* Foods Card */}
          <div className="mt-7 grid md:grid-cols-2 gap-7 lg:grid-cols-3">
            {featureFoods?.map((food) => (
              <FoodCard key={food._id} food={food}></FoodCard>
            ))}
          </div>
        </Container>
      </div>
    );
};

export default FeatureFoods;