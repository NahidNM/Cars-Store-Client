import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const UpdateCar = () => {

    const update = useLoaderData()
    // console.log(update)
    const {carName, _id, price, quantity, shortDescription} = update;
    // console.log(_id);
    
    const {User} = UseAuth();
//   console.log(user)
  
  const handleupdate = event =>{
    event.preventDefault();
    
    const form = event.target;
    const carName = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const shortDescription = form.description.value;
    
    const updatetoys = {carName, price, quantity, shortDescription  }
//    console.log(updatetoys);
   
   fetch(`https://cars-store-server.vercel.app/myCar/${_id}`, {
    method: "PUT",
  headers: {
    "content-type" : "application/json"
  },
  body: JSON.stringify(updatetoys)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount>0){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Car Update succesfull',
        showConfirmButton: false,
        timer: 1500
      })
    }
  })
    
  }
    
    
    
    return (
       <div className='max-w-xl mx-auto md:pt-16'>
         <div className='p-8 drop-shadow-2xl md:m-10 bg-slate-400'>
           <h1 className='my-5 text-2xl font-semibold text-center'>Update a Car Data</h1> 
           
     <form onSubmit={handleupdate}  className='mx-auto '>
          <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text">Name : </span>
  </label>
  <label className=" input-group">
    <input type="text" name='name' defaultValue={carName} placeholder="name" required className="w-full border-x-pink-950 input input-bordered" />
    
  </label>
</div>

           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Price : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='price' defaultValue={price} placeholder="price"  required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Quantity : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='quantity' defaultValue={quantity} placeholder="quantity" required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Description : </span>
  </label>
  <label className="input-group">
    <textarea  name='description'  className="w-full textarea textarea-secondary" defaultValue={shortDescription} placeholder="descrotion"></textarea>
  </label>
</div> 
         

<div className=''>
              <button className='flex items-center px-5 py-2 mx-auto my-3 text-xl font-semibold text-center bg-orange-400 border rounded-lg border-stone-500 hover:bg-red-400'>Update</button>
              </div>
           </form>
        </div>
       </div>
    );
};


export default UpdateCar;