import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaRegUserCircle } from "react-icons/fa";
import UseAuth from '../../../Hooks/UseAuth';

const Navbar = () => {
const { User, logOut } = UseAuth()
const cart = [2];
   
   // Log Out Handle
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  
  
    // Header item
    const navOption = (
      <div className="items-center gap-5 md:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide transition-colors duration-200 border md:px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl  py-1 text-white"
                : "hover:font-medium text-xl text-orange-600 font-semibold"
            }
          >
            {" "}
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/allCar"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1 text-white"
                : "hover:font-medium text-xl text-orange-600 font-semibold"
            }
          >
            All Cars
          </NavLink>
        </li>
        <li>
          <NavLink
           to="/blog"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide  transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1"
                : "hover:font-medium text-xl text-orange-600 font-semibold"
            }
          >
            Blogs
          </NavLink>
        </li>
  
        {/* <li>
          <Link className=''>
            <div className='flex'>
            <button className="flex items-center gap-3 px-2 py-1 border rounded-lg bg-cyan-700 border-zinc-400">
              <FaShoppingCart className='w-10 text-xl'></FaShoppingCart>
              <h1 className="text-xl">+{cart?.length || 0}</h1>
            </button>
            </div>
          </Link>
        </li> */}
        
        
        {
          User? <>
          <li><NavLink
           to="/myCar"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide  transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1"
                : "hover:font-medium text-xl text-orange-600 font-semibold"
            }
          >
          My Car
          </NavLink>
          </li>
          <li><NavLink
           to="/addCar"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide  transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1"
                : "hover:font-medium text-xl text-orange-600 font-semibold"
            }
          >
            Add Car
          </NavLink></li>
          </>:""
        }
      </div>
    );
  
    return (
      <div className="fixed z-10 mx-auto text-white bg-gray-600 md:max-w-screen-xl navbar md:py-0 md:px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="p-2 mt-3 text-white bg-black shadow w-28 menu menu-sm dropdown-content rounded-box"
            >
              {navOption}
            </ul>
          </div>
          <div className="flex items-center gap-2 ">
            <img src="https://i.ibb.co/PWTzwrq/car-logo.png" alt="" className="hidden w-10 md:block" />
            <h1 className="hidden text-2xl font-bold normal-case md:block">
              <span className='text-amber-500'>Cars</span><span className='text-sky-500'>Store</span>
            </h1>
          </div>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navOption}</ul>
        </div>
        <div className="text-white navbar-end">
          <div className="flex items-center gap-3 md:gap-4 md:mx-10 md:text-xl">
            {User ? (
              <>
                <div className="flex items-center gap-2 ">
                  <div
                    className="ml-5 tooltip avatar "
                    data-tip={User?.displayName}
                  >
                    <div className="w-12 border-t-4 border-b-4 border-blue-600 rounded-full ring-offset-base-100 ring-offset-2">
                      <img src={User?.photoURL} className="" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="relative mb-12 mr-10 md:ml-5">
                <FaRegUserCircle size={46}className='absolute rounded'></FaRegUserCircle>
              </div>
            )}
          </div>
          <div className='ml-4'>
            {User ? (
              <>
                <button onClick={handleLogOut} className="px-4 py-2 text-xl rounded-lg md:md:bg-red-400 hover:bg-gradient-to-r from-red-400 to-yellow-200">
                  LogOut
                </button>
              </>
            ) : (
              <div>
                <Link to="/login" className="px-4 py-2 text-xl bg-red-400 rounded-lg hover:bg-gradient-to-r from-red-400 to-yellow-200">
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;