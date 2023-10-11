import React from 'react';
import UseAuth from '../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const AddCar = () => {
    
    const { User }  =UseAuth(); 
    
    const handleAddCar = event =>{
        event.preventDefault();
        
        const form = event.target;
        const carName = form.carName.value;
        const addedby = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const img = form.photo.value;
        const rating = form.rating.value;
        const shortDescription = form.shortDescription.value;
        
        const addCar = {carName, img, addedby, email,  price, quantity, rating, shortDescription, category}
       console.log(addtoys);
       
       fetch("http://localhost:5000/addCar", {
        method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(addCar)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.insertedId){
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Car data added succesfull',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
        
      }
    
    
    
    return (
        <div data-aos="zoom-in-up" className='px-5 py-8 md:m-10 bg-slate-400'>
           <h1 className='my-5 text-2xl font-semibold text-center'>Add New Car Data</h1> 
           
     <form onSubmit={handleAddCar} className='max-w-5xl mx-auto'>
         
          <div className='grid gap-5 md:grid-cols-2'>
            
          <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text">Name : </span>
  </label>
  <label className=" input-group">
    <input type="text" name='carName' placeholder="name" required className="w-full border-x-pink-950 input input-bordered" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Seller Name : </span>
  </label>
  <label className="input-group">
    <input type="text" name='seller' placeholder="seller name" required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Seller Email :</span>
  </label>
  <label className="input-group">
    <input type="email" name='email' defaultValue={User?.email} placeholder="email" className="w-full input input-bordered border-x-pink-950" />
  </label>
</div>
  
<div>
<label className="label">
    <span className="text-xl font-medium label-text ">Sub-category :</span>
  </label>
<select name='category' className="w-full max-w-xs select select-secondary">
  <option disabled selected>Category</option>
  <option>Police Car</option>
  <option>Taxi Car</option>
  <option>Ambulance Car</option>
  <option>Mini Car</option>
</select>
</div>

<div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Price : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='price' placeholder="price"  required className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>
           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Quantity : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='quantity' placeholder="quantity" required className="w-full input input-bordered border-x-pink-950" />
  </label>
</div>

<div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Rating : </span>
  </label>
  <label className="input-group">
    <input type="Number" name='rating' placeholder="rating" required className="w-full input input-bordered border-x-pink-950" />
  </label>
</div>

           <div className="form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Description : </span>
  </label>
  <label className="input-group">
    <textarea  name='shortDescription'  className="w-full textarea textarea-secondary" placeholder="descrotion"></textarea>
  </label>
</div>    
          </div>
          
          <div className=" form-control">
  <label className="label">
    <span className="text-xl font-medium label-text ">Photo URL : </span>
  </label>
  <label className="input-group">
    <input type="text" name='photo' placeholder="Enter photo url" className="w-full input input-bordered border-x-pink-950" />
    
  </label>
</div>

<div className=''>
              <button className='flex items-center px-5 py-2 mx-auto my-3 text-xl font-semibold text-center bg-orange-400 border rounded-lg border-stone-500 hover:bg-red-400'>Submit</button>
              </div>
           </form>
        </div>
    );
};

export default AddCar;