import React from 'react';
import { Link } from 'react-router-dom';

const UseCarTable = (props) => {

    const { price, category, img, carName, quantity, addedby, _id} = props.data;
      return (
          <div data-aos="flip-down" className='grid grid-cols-5 py-4 my-5 bg-stone-300 rounded-xl'>
        <div className='flex items-center gap-2 md:pl-3'>
            <img src={img} className='rounded-lg md:h-20 md:w-20 md:ml-2' alt="" />
              <div>
                <h1 className='font-semibold md:text-xl'>{carName}</h1>
                <div className='md:text-lg badge-outline badge'>{category}</div>
              </div>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='font-semibold text-center md:text-2xl '>{price}</h1>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='font-semibold text-center md:text-2xl '>{quantity}</h1>
        </div>
        <div className='flex items-center justify-center'>
            <h1 className='flex items-center justify-center font-semibold text-center md:text-2xl'>{addedby}</h1>
        </div>
        <div className='flex items-center justify-center'>
          
          <Link to={`/toydetails/${_id}`}>
          <button className='px-2 py-1 text-white bg-red-400  border-2 rounded-lg md:px-4 md:py-2 hover:bg-gradient-to-r from-red-400 to-yellow-200 text-xl'>details</button>
          </Link>
            
        </div>
  
          </div>
      );
  };
  
export default UseCarTable;