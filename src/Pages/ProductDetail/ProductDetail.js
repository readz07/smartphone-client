import React, { useEffect, useState } from 'react';
import useProductsData from '../../Hooks/useProductsData';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {

    const { productId } = useParams()
    const [product, setProduct] = useProductsData()
    const [newQuantity, setNewQuantity] = useState(0)

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [productId])
    const { name, supplier, description, quantity, price, image } = product
    const navigate = useNavigate();
    const navigateToInventory = () => {
        navigate('/manageinventory')
    }

    //adding product quantity
    const handleProductStock = (event) => {
        event.preventDefault();
        const addQuantity = parseInt(event.target.quantity.value)
        if(addQuantity > 0 || addQuantity == null){
            
        
        const newQuantity = addQuantity + quantity
        
        const url = `http://localhost:5000/products/${productId}`
        fetch(url,{
            method : 'PUT',
            headers: {
                "content-type" : "application/json"
            },
        body: JSON.stringify({quantity:newQuantity})
        })
        .then(res=>res.json())
        .then(data=>setNewQuantity(data))
        toast('Quantity Updated')
        }
    }

    //Deliver product stock manage
    const handleDeliverItem = (event) => {
        event.preventDefault();
        
        if(quantity > 0){
            
        
        const deliveryItem = quantity - 1
        
        const url = `http://localhost:5000/products/${productId}`
        fetch(url,{
            method : 'PUT',
            headers: {
                "content-type" : "application/json"
            },
        body: JSON.stringify({quantity:deliveryItem})
        })
        .then(res=>res.json())
        .then(data=>setNewQuantity(data))
        toast('Product has been delivered')
        event.target.reset()
        }
    }
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Product Detail</h4></Col>
                    <Col><Button onClick={navigateToInventory} className="btn-primary btn-md pe-5 ps-5 float-end">Manage Inventories</Button></Col>
                </Row>
                <Row>
                    <Col><hr /></Col>
                </Row>
                <Row>
                    <Col md={6} className="mx-auto">
                        <Card className='auto border border-grey border-1 h-100'>
                            <Card.Img className='w-100' variant="top" src={image} alt="product-image" />
                            <Card.Header>{supplier}</Card.Header>
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text>Price: ${price}</Card.Text>
                                <Card.Text>Stock Quantity: {quantity}</Card.Text>
                                {
                                    quantity===0 && <Card.Text><Button className='bg-danger ps-5 pe-5 border-0'>Sold</Button></Card.Text>
                                    
                                }


                            </Card.Body>
                            <Card.Footer >
                                <Form onSubmit={handleDeliverItem}>
                                    
                                    <Button variant="primary" type="submit">
                                        Deliver Item
                                    </Button>
                                </Form>
                                <Form onSubmit={handleProductStock}>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Quantity</Form.Label>
                                        <Form.Control type="number" name="quantity" placeholder="Type Quantity" />
                                    </Form.Group>                                    
                                    
                                    <Button variant="primary" type="submit">Add Quantity</Button>
                                </Form>
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>
                <ToastContainer></ToastContainer>
            </Container>
        </div>
    );
};
export default ProductDetail;