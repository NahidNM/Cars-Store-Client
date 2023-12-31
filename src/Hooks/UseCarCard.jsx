import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactStars from "react-stars";

const UseCarCard = (props) => {
    // console.log(props.data);
    const {_id, carName, img, price,rating} = props.data;
    // console.log(_id)
    
    return (
        
        <div data-aos="zoom-in-up" className="pt-4 mx-auto text-white bg-gray-500 shadow-xl w-96 card md:w-80">
        
        <figure className="pt-0 ">
        <img src={img} alt="Shoes" className="mx-0 w-72 rounded-xl" />
        </figure>
        
        <div className="pt-0 mt-2 font-semibold card-body ">
        <h2  className=" card-title">Name : {carName}</h2>
        
        <div className='flex items-center gap-5'>
        <span className=''>Rating : {rating}</span>
        <ReactStars
            value={rating}
            color1={"gray"}
            size={24}
            color2={"#ffd700"}
          />
        </div>
          <p>Price : {price}</p>
          
        <div className='flex items-center justify-between '>
        <div className="card-actions">
        <Link to={`/cardetails/${_id}`}>
                <button className='px-4 py-2 text-xl bg-red-400 rounded-lg hover:bg-gradient-to-r from-red-400 to-yellow-200'>Add Product</button>
         </Link>
        </div>
        <div className="card-actions">
        <Link to={`/cardetails/${_id}`}>
                <button className='px-4 py-2 text-xl bg-red-300 rounded-lg hover:bg-gradient-to-r from-red-400 to-yellow-200'>Details</button>
         </Link>
        </div>
        </div>
        </div>
        </div>

    );
};

export default UseCarCard;