import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const{name, supplier, description, quantity, price, image} = product
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Product Detail</h4></Col>
                    <Col><Button  className="btn-primary btn-md pe-5 ps-5 float-end">Manage Inventories</Button></Col>

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
                                </Card.Body>
                                <Card.Footer className="d-grid">
                                    <Button  className='btn-md ps-5 pe-5 fluid'>Manage Stock</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    
                </Row>
            </Container>
        </div>
    );
};

export default ProductDetail;