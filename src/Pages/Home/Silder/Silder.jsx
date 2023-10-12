import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UseBannerCarCard from '../../../Hooks/UseBannerCarCard';
import Marquee from 'react-fast-marquee';

const Silder = () => {

    const [cars, setCars] = useState();

// console.log(cars);

  useEffect(()=>{
    fetch('http://localhost:5000/allCar')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        setCars(data)    
    })
 },[])

    return (
        <div className='w-full text-white lg:-mt-36 max-w-screen-xl mx-auto md:pt-52 hidden md:block'>
        <Marquee  gradient={true}
                gradientColor={[52, 211, 153]}
                gradientWidth={100}>
   {
    cars?.map((data)=>(
     <UseBannerCarCard
     key={data._id} data={data}
     ></UseBannerCarCard>
    ))
   }
  </Marquee>
        </div>
    );
};

export default Silder;