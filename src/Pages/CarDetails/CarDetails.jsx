import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ReactStars from 'react-stars';

const CarDetails = () => {

    const details = useLoaderData()
    console.log(details)
    const {carName, _id, price, addedby, quantity,  img, category, shortDescription, rating, material} = details;
    
    return (
        <div className='pt-16' >
            <h1 className='my-5 text-4xl font-semibold text-center'>{carName} Car Details</h1>
            <div className="mx-auto shadow-xl card w-96 bg-base-100">
  <figure><img src={img} alt="" className='w-44 h-44' /></figure>
  <div className="pt-1 card-body">
   <div className='flex items-center justify-between'>
   <h2 className="card-title">Name : {carName}</h2>
   <h1><ReactStars
            value={rating}
            color1={"gray"}
            size={20}
            color2={"#ffd700"}
          /> </h1>
   </div>
   <div className='flex items-center justify-between gap-10'>
   <h1>Category : {category}</h1>
   <h1>Material : {material}</h1>
   </div>
    <div className='flex items-center justify-between gap-10'>
   <p>Price : {price}</p>
    <p>Quantity : {quantity}</p>
   </div>
    <p>Seller-Name : {addedby}</p>
  
    <p>Description : {shortDescription}</p>
    <div className="justify-end card-actions">
      <Link to='/'><button className="btn btn-primary">Back</button></Link>
    </div>
  </div>
</div>
</div>
 
      
    );
};

export default CarDetails;