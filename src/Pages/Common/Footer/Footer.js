import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    
    return (
        <div className='bg-light mt-5 pt-5 pb-5'>
        <Container>
            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className='border-0'><h5>Quick Links</h5></ListGroup.Item>                        
                        <ListGroup.Item className='border-0'><Link to="/">Home</Link></ListGroup.Item>                       
                        <ListGroup.Item className='border-0'><Link to="/manageinventory">Manage Inventory</Link></ListGroup.Item>                       
                        <ListGroup.Item className='border-0'><Link to="/addproduct">Add Product</Link></ListGroup.Item>                                            
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className='border-0'><h5>Insights</h5></ListGroup.Item>                        
                        <ListGroup.Item className='border-0'><Link to="/blog">Blog</Link></ListGroup.Item>                       
                        <ListGroup.Item className='border-0'><Link to="/signin">Sign In</Link></ListGroup.Item>                       
                        <ListGroup.Item className='border-0'><Link to="/signup">Sig Up</Link></ListGroup.Item>                                            
                    </ListGroup>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className='border-0'><h5>General Info</h5></ListGroup.Item>                        
                        <ListGroup.Item className='border-0'><span>Copyright &copy;</span>2022</ListGroup.Item>                       
                        <ListGroup.Item className='border-0'>Privacy Policy</ListGroup.Item>                       
                        <ListGroup.Item className='border-0'>Terms and Conditions</ListGroup.Item>                                            
                    </ListGroup>
                </Col>
                
            </Row>
        </Container>
        </div>
    );
};

export default Footer;