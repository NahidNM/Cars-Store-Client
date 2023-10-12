import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import MyCarCard from './MyCarCard';
import Swal from 'sweetalert2';

const MyCar = () => {


  const { User } = UseAuth()
  // console.log(User);
   
    
    const alldata = useLoaderData()
    // console.log(alldata)
    const [mytoys, setMytoys] = useState([]);
    const [limit, setLimit] = useState(21);
    
    const Email = User?.email;
    // console.log(Email);
    const name = User?.displayName;
    
    useEffect(() => {
      if (!User?.email) return;
  
      const toysData = alldata?.filter((data) => data.email == Email);
      setMytoys(toysData);
    }, [alldata]);

    const handleLimit = () => {
      setLimit(mytoys.length);
    };

    const handlelowLimit = () => {
      setLimit(21);
    };

    const sort = () => {
      const temporaryArray = [...mytoys];
      const sorted = temporaryArray.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      setMytoys(sorted);
      // console.log(mytoys);
      // console.log(sorted);
    };

    const deSort = () => {
      const temporaryArray = [...mytoys];
  
      const desorted = temporaryArray.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  
      setMytoys(desorted);
  
      console.log(desorted);
    };
    

    // MY Add car delete
    const handleDelete=(_id)=>{
      Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/myCar/${_id}`, {
                          method: 'DELETE'
                      })
                      .then(res=> res.json())
      .then(data => {
          console.log(data)
          if(data.deletedCount>0)
          {
              const temporaryArray=[...mytoys]
              
              const remainder=temporaryArray?.filter(toy=>toy._id!==_id)
              console.log(temporaryArray)
              setMytoys(remainder)
              
              Swal.fire(
                  'Deleted!',
                  'Your data has been deleted.',
                  'success'
                )
          }
      })
            
          }
        })
  }
          
    return (
     <div className="md:mx-24 md:pt-16">
      <div className="flex items-center justify-between">
        <h1 className="mb-4 text-xl font-bold text-center text-gray-900 md:text-4xl dark:text-white">
          MY Add data
        </h1>

        <div className="w-56 collapse">
          <input type="checkbox" />
          <div className="text-xl font-medium text-center text-white collapse-title rounded-xl bg-stone-600">
            Sort toy data
          </div>
          <div className="grid grid-cols-1 collapse-content ">
            <button className="my-2 btn btn-accent-focus" onClick={sort}>
              Price(low to high)
            </button>
            <button className="my-1 btn btn-accent-focus" onClick={deSort}>
              Price(high to low)
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 py-4 my-4 text-2xl text-white rounded-xl bg-stone-600">
        <div className="text-center">
          <h1>Toy</h1>
        </div>
        <div className="text-center">
          <h1>Price</h1>
        </div>
        <div className="text-center">
          <h1>Quantity</h1>
        </div>
        <div className="text-center">
          <h1>Seller</h1>
        </div>
        <div className="text-center">
          <h1>Details</h1>
        </div>
      </div>
      

      <div className="">
      {
        mytoys.length?( mytoys.slice(0, limit).map(toy=>
          <MyCarCard key={toy._id} data={toy} delete={handleDelete}></MyCarCard>)) : <div>
            <h1 className='text-3xl text-center '>Data Not Found</h1>
          </div>
      }
      </div>
      <div className="flex justify-around">
        {limit == 21? (
          <button className="my-4 btn btn-accent-focus " onClick={handleLimit}>
            view all toys
          </button>
        ) : (
          <button
            className="my-4 btn btn-accent-focus "
            onClick={handlelowLimit}
          >
            view less
          </button>
        )}{" "}
      </div>
    </div>
    );
};

export default MyCar;