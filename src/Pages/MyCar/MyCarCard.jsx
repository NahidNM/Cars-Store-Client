import React from 'react';
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line, RiEdit2Fill } from "react-icons/ri";

const MyCarCard = (props) => {
    
    
    const {carName, _id, price, addedby, quantity,  img, category,} = props.data;
  const handleDelete=props.delete

    return (
       
      <div data-aos="flip-down" className="grid grid-cols-5 py-4 my-5 bg-stone-300 rounded-xl">
        <div className="flex items-center pl-5">
          <img src={img} className="w-20 h-20 rounded-lg" />
          <div className="px-2">
            <h1 className="text-xl font-semibold">{carName}</h1>
            <div className="text-lg badge badge-outline">{category}</div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">${price} </h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">{quantity}</h1>
        </div>
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-semibold text-center">{addedby}</h1>
        </div>
        
        <div className="md:flex items-center justify-center mx-auto ">
            
         {/* Handle Update toy */}
        <Link to={`/myCar/${_id}`}>
        <button  className="mx-3 btn btn-accent-focus">
          <RiEdit2Fill size={20} />
          </button></Link>
          
          {/* Handle Delete toy */}
          <button onClick={()=>handleDelete(_id)} className="md:mx-3 btn btn-accent-focus mt-3 ml-3">
            <RiDeleteBin6Line size={20} />
          </button>
          
        </div>
      </div>
    );
};


export default MyCarCard;