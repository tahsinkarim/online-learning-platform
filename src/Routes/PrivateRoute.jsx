import { useContext } from "react";
import { ProgressBar } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <ProgressBar
          height='100'
          width='100'
          ariaLabel='progress-bar-loading'
          wrapperStyle={{}}
          wrapperClass='progress-bar-wrapper'
          borderColor='#F4442E'
          barColor='#51E5FF'
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
