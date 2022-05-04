import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from '../Pages/Common/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
      toast('Signed In Successfully')
      
      return <>
      <ToastContainer></ToastContainer>
      <Loading></Loading>
      </>
  }
    if (!user) {
        
        return <Navigate to="/signin" state={{ from: location }} replace />;
      }
    return children;
};

export default RequireAuth;