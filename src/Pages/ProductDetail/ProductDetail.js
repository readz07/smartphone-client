import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = () => {

    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const localId = parseInt(localStorage.getItem(productId));
    const [newQuantity, setNewQuantity] = useState(localId)

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
        const productQuantity = parseInt(event.target.quantity.value);
        localStorage.setItem(product._id, productQuantity + localId);
        setNewQuantity(productQuantity + localId);
        const updateProductQuantity = { quantity: productQuantity + localId };
        const url = `http://localhost:5000/products/${productId}`
        axios.put(url, updateProductQuantity).then((response) => {
            alert("Quantity Updated Successfully");
            event.target.reset();
        });

    }

    //Deliver product stock manage
    const handleDeliverItem = (event) => {
        event.preventDefault();
        if (newQuantity > 0) {
            setNewQuantity(newQuantity - 1);
            localStorage.setItem(product._id, newQuantity - 1);
        }
        const updatedQuantity = { quantity: localId - 1 };
        const url = `http://localhost:5000/products/${productId}`;
        axios.put(url, updatedQuantity).then((response) => {
            toast("Product has been delivered!");
        });
    };

    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Product Detail:{product.length}</h4></Col>
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
                                
                                {
                                    newQuantity === 0 ? <Card.Text><Button className='bg-danger ps-5 pe-5 border-0'>Sold</Button> </Card.Text>: <Card.Text>Stock Quantity: {newQuantity}</Card.Text>

                                }


                            </Card.Body>
                            <Card.Footer >
                                <Form onSubmit={handleDeliverItem}>

                                    <Button variant="primary" type="submit" disabled={newQuantity===0}>
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