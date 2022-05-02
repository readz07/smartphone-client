import React from 'react';
import {Button, ButtonGroup } from 'react-bootstrap';
import GoogleIcon from '../../images/sigin-icons/google.ico'
import FacebookIcon from '../../images/sigin-icons/facebook.ico'
import TwitterIcon from '../../images/sigin-icons/twitter.ico'
import { useSignInWithGoogle, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    let errorMsg;
    if (error || error1) {
        errorMsg=
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }
      if (loading || loading1) {
        return <p>Loading...</p>;
      }
      if (user || user1) {
        return (
          navigate('/')
        );
      }
    return (
        <div>
            <p>{errorMsg}</p><br/>
        
            <ButtonGroup size="md" className="mb-2">
                
                <Button onClick={() => signInWithGoogle()} variant='danger'><img src={GoogleIcon} alt="google icon" style={{ height: '24px' }} /> Google</Button>
                <Button onClick={() => signInWithFacebook()} variant='primary'><img src={FacebookIcon} alt="facebook icon" style={{ height: '24px' }} /> Facebook</Button>
                <Button variant="info text-white"><img src={TwitterIcon} alt="twitter icon" style={{ height: '24px' }} /> Twitter</Button>
            </ButtonGroup>
        </div>
    );
};

export default SocialLogin;