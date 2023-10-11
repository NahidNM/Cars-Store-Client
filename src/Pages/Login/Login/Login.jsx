import { FaGoogle, FaEye } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UseAuth from '../../../Hooks/UseAuth';

const Login = () => {
    
    const {User, SignInUSer, googleCreatUSer } = UseAuth()
    const [error, seterror] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const mainlocation = location.state?.from?.pathname || '/'
    
    
    const handleLogin = (e) => {
        
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        SignInUSer(email, password)
          .then((result) => {
    
            Swal.fire({
              position: 'top-right',
              icon: 'success',
              title: 'Login successful',
              showConfirmButton: false,
              timer: 1500
            })
    
            form.reset()
            navigate(mainlocation)
    
          })
          .catch((error) => {
    
            seterror(error.message)
          
          });
    
      };
    
    
      const handleGoogle = () => {
        googleCreatUSer()
          .then((result) => {
              const {displayName,email,photoURL}   =  result.user
              const user = { name : displayName, image : photoURL,email : email};
            
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Google Login Successfull',
                showConfirmButton: false,
                timer: 1500
              })
    
            fetch('https://ass-12-server-mu.vercel.app/allusersGoogle', {
              method: 'POST',
              headers: {
                 "content-type": "application/json"
              },
              body: JSON.stringify(user)
           })
              .then(res => res.json())
              .then(data => {
              })
    
    
            navigate(mainlocation)
    
    
    
          })
          .catch((error) => {
            const errorCode = error.code;
            seterror(error.message)
          });
      };
    
    
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-300 to-indigo-400 ">
        <div className="flex flex-col w-full overflow-hidden rounded-lg shadow-lg md:flex-row md:w-4/5 bg-gradient-to-r from-yellow-500 to-indigo-500">
          <div className="relative md:w-3/5">
            <img
              src={'https://i.ibb.co/qnQt4Yc/Laughing-Samurai-Pros-and-Cons-of-Using-Animations-in-Your-Web-Design-scaled.jpg'}
              alt="Background"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-full px-8 py-12 md:w-3/6">
            <h2 className="mb-4 text-3xl font-bold text-center text-white md:text-left">Log in to Your Account</h2>
            <form onSubmit={handleLogin} action="" className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-white">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full px-4 py-2 placeholder-gray-400 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute text-xl transform -translate-y-1/2 top-1/2 right-3 focus:outline-none"
                    onClick={() => {
                      const passwordInput = document.querySelector('input[name="password"]');
                      passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
                    }}
                  >
                <FaEye/>
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-center text-white md:text-left">
                  New Here?
                  <Link to="/signUp" className="font-medium text-yellow-400 ps-1 hover:text-indigo-700">
                    SignUp Now....
                  </Link>
                </p>
              </div>
              <div>
                <p className='flex justify-center'>
                  <button 
                    type="submit"
                    className="flex items-center justify-center w-5/6 space-x-2 rounded-lg shadow-lg btn btn-warning btn-outline hover:bg-gradient-to-r from-red-400 to-yellow-200"
                  >
                    Login 
                  </button>
                </p>
              </div>
              {error && <p className="text-yellow-500">{error}</p>}
            </form>
            <div className="flex flex-col items-center mt-4 ">
              <p className="pb-5 text-sm text-center text-white">Sign Up With</p>
              <button onClick={()=>handleGoogle()} className='flex items-center justify-center w-5/6 space-x-2 rounded-lg shadow-lg btn btn-warning btn-outline hover:bg-gradient-to-r from-red-400 to-yellow-200 bg-slate-500'>
              <FaGoogle></FaGoogle>
                <h1>Google Login</h1>
                </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;