import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Common/Loading/Loading';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();    
    let location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleSignIn = () => {
        navigate('/signin')
    }
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    const handleCreateUser = async event =>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value;
        console.log(email, password)
        createUserWithEmailAndPassword(email, password);
        const {data} =await axios.post("http://localhost:5000/signin", {email});
        localStorage.setItem('accessToken', data)
        navigate  (from, {replace: true});
    }
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return (
            <div>
                <p>Registered User: {user.email}</p>
            </div>
        );
    }

    return (
        <div className='container mx-auto col-md-6 mt-5 mb-5'>
            <h1>Sign Up Here</h1>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                        Already Registered<Button onClick={handleSignIn} variant="link text-decoration-none">Sign In Here</Button>
                    </Form.Label>
                </Form.Group>
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

export default SignUp;