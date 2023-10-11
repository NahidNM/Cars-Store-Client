
import { Navigate, useLocation } from 'react-router-dom';
import { Vortex } from 'react-loader-spinner';
import UseAuth from '../Hooks/UseAuth';

const PrivateRoute = ({children}) => {
    const { User, loading } = UseAuth()
const location = useLocation(); 
// console.log(location)
if(loading){
    return  <h1 className='flex items-center justify-center text-2xl font-semibold md:my-20'>
        <Vortex
  visible={true}
  height="100"
  width="100"
  ariaLabel="vortex-loading"
  wrapperStyle={{}}
  wrapperClass="vortex-wrapper"
  colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
/></h1>
}
   if(User){
    return children;
   }
   return <Navigate state={{from: location}} to="/login"  replace></Navigate>
};


export default PrivateRoute;