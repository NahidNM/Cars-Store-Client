import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { FaSearch } from 'react-icons/fa';
import { Dna } from 'react-loader-spinner'
import UseCarTable from '../../Hooks/UseCarTable';


const AllCars = () => {
 const {loading} =UseAuth();
    const [cars, setCars] = useState([]);
    const [data, setData] = useState(cars);

    useEffect(()=>{
        fetch('http://localhost:5000/allCar')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCars(data)
            setData(data)
        })
     },[])


const [limit,setLimit]=useState(20)
const handleLimit=()=>{
    setLimit(cars.length)
}

const handlelowLimit=()=>{
    setLimit(20)
}

const filter = (event) => {
    setData(
      cars.filter((car) =>
        car.carName.toLowerCase().includes(event.target.value)
      )
    );
  };

  if(loading){
    return <div className='flex justify-around md:pt-16'><Dna
    visible={true}
    height="100"
    width="180"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  /></div>
}

    return (
      
         <div className='md:py-16'> 
        
        <div className="relative md:mx-16 md:-right-96 ">
          <div className="flex items-center my-3 bg-stone-400 rounded-xl md:mx-96">
            <input
              className="py-2 pl-2 my-2 md:mx-2 md:pr-24 rounded-xl "
              onChange={filter}
              type="text"
              placeholder="Search"
            />
            <button>
              <FaSearch color="#F7E1AE" size={30} className="md:mx-2" />
            </button>
          </div>
        </div>
        
         
  <div className='grid grid-cols-5 font-bold text-white md:text-2xl md:py-4 bg-slate-600 rounded-xl'>
         <div className='text-center'>
          <h1>Cars</h1>
         </div>
         <div className='text-center'>
          <h1>Price</h1>
         </div>
         <div className='text-center'>
          <h1>Qauntity</h1>
         </div >
         <div className='text-center'>
          <h1>Seller</h1>
         </div>
         <div className='text-center'>
          <h1>Details</h1>
         </div>
         </div>
              {
                  data?.slice(0,limit).map(alldata => 
                     <UseCarTable
                     data={alldata} key={alldata._id}
                     ></UseCarTable>
                  )
              }
            
              
              <div className="flex justify-around">
          {limit==20?<button className="my-4 bg-red-400 hover:bg-gradient-to-r from-red-400 to-yellow-200 py-2 px-3 rounded-lg text-xl text-white" onClick={handleLimit}>View All Car</button>:
          <button className="my-4 bg-red-400 hover:bg-gradient-to-r from-red-400 to-yellow-200 py-2 px-4 rounded-lg text-xl text-white " onClick={handlelowLimit}>View Less</button>}
        </div>
              
          </div>
       
  
          
      );
};

export default AllCars;