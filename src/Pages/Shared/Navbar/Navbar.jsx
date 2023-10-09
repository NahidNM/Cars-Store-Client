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
      <div className="items-center gap-5  md:flex">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide transition-colors duration-200 border md:px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl text-gray-300 py-1"
                : "hover:font-medium text-x text-zinc-800"
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
                ? "font-medium tracking-wide transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1"
                : "hover:font-medium text-xl"
            }
          >
            All Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-medium tracking-wide  transition-colors duration-200 border px-2 rounded-md border-zinc-400 shadow-2xl bg-cyan-700 text-xl py-1"
                : "hover:text-red-300 font-medium text-xl"
            }
          >
            Blogs
          </NavLink>
        </li>
  
        <li>
          <Link to="/" className=''>
            <div className='flex'>
            <button className="flex items-center gap-3 bg-cyan-700 px-2 py-1 rounded-lg border-zinc-400 border">
              <FaShoppingCart className='w-10 text-xl'></FaShoppingCart>
              <h1 className="text-xl">+{cart?.length || 0}</h1>
            </button>
            </div>
          </Link>
        </li>
      </div>
    );
  
    return (
      <div className="navbar fixed md:py-0  z-10  text-white bg-gray-300 bg-opacity-20 md:px-10  max-w-screen-xl mx-auto">
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
              className="p-2 mt-3 text-white bg-black shadow menu menu-sm dropdown-content rounded-box"
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
          <div className="flex items-center gap-2 md:gap-4 md:mx-10 md:text-xl">
            {User ? (
              <>
                <div className="flex items-center gap-2 ">
                  <div
                    className="ml-5 tooltip avatar "
                    data-tip={User?.displayName}
                  >
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={User?.photoURL} className="" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="ml-5 ">
                <FaRegUserCircle size={46}></FaRegUserCircle>
              </div>
            )}
          </div>
          <div>
            {User ? (
              <>
                <button onClick={handleLogOut} className="px-4 py-2 text-xl bg-red-400 rounded-lg hover:bg-gradient-to-r from-red-400 to-yellow-200">
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