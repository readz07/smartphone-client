import React from 'react';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import GoogleIcon from '../../images/sigin-icons/google.ico'
import FacebookIcon from '../../images/sigin-icons/facebook.ico'
import TwitterIcon from '../../images/sigin-icons/twitter.ico'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/signin')
    }
    return (
        <div className='container mx-auto col-md-6 mt-5 mb-5'>
            <h1>Sign Up Here</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
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
                        <ButtonGroup size="md" className="mb-2">
                            <Button variant='danger'><img src={GoogleIcon} alt="google icon" style={{height:'24px'}}/> Google</Button>
                            <Button variant='primary'><img src={FacebookIcon} alt="facebook icon" style={{height:'24px'}}/> Facebook</Button>
                            <Button variant="info text-white"><img src={TwitterIcon} alt="twitter icon" style={{height:'24px'}}/> Twitter</Button>
                        </ButtonGroup>
                    </Form.Label>
                </Form.Group>
            </Form>
        </div>
    );
};

export default SignUp;