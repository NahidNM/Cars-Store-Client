import React, { useState } from 'react';
import UseAuth from '../../../Hooks/UseAuth';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const SignUp = () => {
    
   const { CreatUSerEmail, logOut, updateUser } = UseAuth()
   const [error, setError] = useState('');
   const navigate = useNavigate();


   const handleResiter = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
   
      const imageUrl = form.url.value

    const user = { name : name, image : imageUrl, email : email};
  

      if (password.length < 6) {
         setError("Password should be at least 6 characters long.");
         return;
      }

      if (!/[a-z]/.test(password)) {
         setError("Password should contain at least one lowercase letter.");
         return;
      }

      if (!/[A-Z]/.test(password)) {
         setError("Password should contain at least one capital letter.");
         return;
      }

      if (!/[@#$!%*?&]/.test(password)) {
         setError("Password should contain at least one special character.");
         return;
      }

      if (password !== confirmPassword) {
         setError('Invalid password confirmation. Double-check your entry and try again.');
         return;
      }
    


      


      // ---------userCreation------------------>>>>>>>>

      CreatUSerEmail(email, password)
         .then(() => {
            fetch('https://ass-12-server-mu.vercel.app/allusers', {
               method: 'POST',
               headers: {
                  "content-type": "application/json"
               },
               body: JSON.stringify(user)
            })
               .then(res => res.json())
               .then(data => {
               })
        
                 
                  updateUser(name, imageUrl)
                     .then(() => {
                        logOut();
                       
                        Swal.fire({
                           position: 'top-center',
                           icon: 'success',
                           title: 'SignUp Successful Login Now !!',
                           showConfirmButton: false,
                           timer: 1500
                         })
                        navigate('/login');
                        form.reset();
                     })
                     .catch(error => {
                        setError(error.message);
                     });


               // })


         })
         .catch((error) => {
            setError(error.message);
         });
   };

    
    
    return (

        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-indigo-400 ">
           <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg md:mt-20 md:flex-row md:w-4/5 bg-gradient-to-r from-yellow-500 to-indigo-500">
              <div className="relative md:w-3/5">
                 <img
                    src={'https://i.ibb.co/gy4ngF2/istockphoto-1201846513-612x612.jpg'}
                    alt="Background"
                    className="object-cover w-full h-full"
                 />
              </div>
              <div className="w-full px-8 py-12 md:w-3/6">
                 <h2 className="mb-4 text-3xl font-bold text-center text-white md:text-left">Resister Here </h2>
                 <form className="space-y-6" onSubmit={handleResiter}>
                    <div>
                       <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                          Name
                       </label>
                       <input
                          name="name"
                          type="text"
                          required
                          className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your Name"
                       />
                    </div>
  
                    <div>
                       <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-white">
                          Email address
                       </label>
                       <input
                          name="email"
                          type="email"
  
                          required
                          className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your email address"
                       />
                    </div>
                    
                    <div>
                       <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-white">
                          Image URL
                       </label>
                       <input
                          name="url"
                          type="url"
  
                          required
                          className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter Image Url"
                       />
                    </div>
                    
                    
                    <div>
                       <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                          Password
                       </label>
                       <div className="relative">
                          <input
                             name="password"
                             type="text"
  
                             required
                             className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                             placeholder="Enter your password"
                          />
  
                       </div>
                    </div>
  
                    <div>
                       <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-white">
                          Confirm-Password
                       </label>
                       <div className="relative">
                          <input
                             name="confirmPassword"
                             type="password"
  
                             required
                             className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                             placeholder="Confirm-password"
                          />
  
                       </div>
                    </div>
  
  
  
  
                    
  
                    {/* <div>
                       <label className="block mb-2 text-sm font-medium text-white">
                          Choose Your Profile
                       </label>
                       <div className="relative">
                          <input type="file" className="w-full max-w-xs file-input file-input-bordered file-input-warning" required name='image' />
  
  
                       </div>
                    </div> */}
                    {error && <p className="text-yellow-500">{error}</p>}
                    <div>
                       <p className="text-sm text-center text-white md:text-left">
                          Have an Acaount ?
                          <Link to="/login" className="font-medium text-yellow-400 ps-1 hover:text-indigo-700">
                             Login....
                          </Link>
                       </p>
                    </div>
                    <div className='flex justify-center '>
                      
                          <button
                             type="submit"
                             className="flex items-center justify-center w-5/6 space-x-2 rounded-lg shadow-lg btn btn-warning btn-outline hover:bg-gradient-to-r from-yellow-400 to-yellow-500"
                          >
                             Resister
                          </button>
                      
                    </div>
  
                 </form>
              </div>
           </div>
        </div>
     );
};

export default SignUp;