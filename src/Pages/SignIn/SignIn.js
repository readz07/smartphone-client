import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from "../SocialLogin/SocialLogin"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Common/Loading/Loading';
import axios from 'axios';
import useToken from '../../Hooks/useToken';

const SignIn = () => {

    const navigate = useNavigate();    
    let location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth, {sendEmailVerification:true});
    const handleUserSignIn = async event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password =event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }
    
    const [token] = useToken(user);
   
    let errorMsg;
    if (error) {
        errorMsg =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
        
    }

    if (loading) {
        
        return <Loading></Loading>
        
    }
    if (token) {
        navigate  (from, {replace: true});
        
    }
    const handleSignUp = () => {
        navigate('/signup')
    }
    return (
        <div className='container mx-auto col-md-6 mt-5 mb-5'>
            <h1>Sign In Here</h1>
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Sign In
                </Button>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Forget Password<Button variant="link text-decoration-none">Click Here</Button> Not a member<Button onClick={handleSignUp} variant="link text-decoration-none">Sign Up Here</Button>
                    </Form.Label>
                </Form.Group>
                <p>{errorMsg}</p>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>

                        Or Use<br /><br />
                        <SocialLogin></SocialLogin>
                    </Form.Label>
                </Form.Group>
                
            </Form>
        </div>
    );
};

export default SignIn;