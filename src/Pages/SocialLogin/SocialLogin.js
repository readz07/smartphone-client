import React from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import GoogleIcon from '../../images/sigin-icons/google.ico'
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate, useLocation } from 'react-router-dom';
import Loading from '../Common/Loading/Loading';
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth , {sendEmailVerification:true});
    let errorMsg;
    if (error) {
        errorMsg=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if (loading) {
        return <Loading></Loading>
      }
      if (user) {
        return (
          navigate(from,{location:true})
        );
      }
    return (
        <div>
            <p>{errorMsg}</p><br/>
        
            <ButtonGroup size="md" className="mb-2">
                
                <Button onClick={() => signInWithGoogle()} variant='danger'><img src={GoogleIcon} alt="google icon" style={{ height: '24px' }} /> Google</Button>
                
            </ButtonGroup>
        </div>
    );
};

export default SocialLogin;