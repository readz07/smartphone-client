import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, Nav, Navbar} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import Logo from '../../../images/logo.svg'
const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} alt="logo" style={{height:'24px'}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '270px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            {
                                user &&
                                <>
                                    <Nav.Link as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                                    <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link>
                                    <Nav.Link as={Link} to="/myproducts">My Products</Nav.Link>
                                </>
                            }
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
                            
                        </Nav>
                        <Form className="d-flex">
                        {user? <Button onClick={handleSignOut} className="btn btn-warning ps-2 pe-2 text-white mx-2">Sign Out</Button>:
                            <Button className='me-2' as={Link} to="/signin">Sign In</Button> 
                        }
                        {!user&& <Button as={Link} to="/signup">Sign Up</Button>}
                        </Form>
                        
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;