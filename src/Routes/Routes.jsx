import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import AllCars from "../Pages/Allcars/AllCars";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../Pages/CarDetails/CarDetails";
import BlogPage from "../Pages/BlogPage/BlogPage";
import AddCar from "../Pages/AddCar/AddCar";
import MyCar from "../Pages/MyCar/MyCar";
import UpdateCar from "../Pages/MyCar/UpdateCar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



export const router = createBrowserRouter([
    {
     path: '/',
     element: <Main></Main>,
     errorElement: <ErrorPage></ErrorPage>,
     children : [
        {
            path: '/',
            element : <Home></Home>
        }, 
        {
            path:'login',
            element: <Login></Login>
        },
        {
             path: 'signUp',
             element: <SignUp></SignUp>
        },
        {
            path:'allCar',
            element: <AllCars></AllCars>
        },
        {
            path: '/cardetails/:id',
            element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
            loader: ({params}) => fetch(`https://cars-store-server.vercel.app/allCar/${params.id}`)
         },
         {
            path:'blog',
            element: <BlogPage></BlogPage>
         },
         {
            path:'addCar',
            element: <AddCar></AddCar>
         },
         {
            path: 'myCar',
            element: <MyCar></MyCar>,
            loader: ({params})=>fetch("https://cars-store-server.vercel.app/allCar")
        },
        {
            path: '/myCar/:id',
            element: <UpdateCar></UpdateCar>,
            loader: ({params})=> fetch(`https://cars-store-server.vercel.app/myCar/${params.id}`)  
          },
     ]
    },
  ]);