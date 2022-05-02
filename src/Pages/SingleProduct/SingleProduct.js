import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const navigate = useNavigate();
    const { id, name, description, image, price, quantity, supplier } = product
    const handleProductStock = (id, product) => {
        navigate(`/manageinventory/${id}`)

    }
    return (
        <Col md={3} className="mx-auto">
            <Card className='auto border border-grey border-1 h-100' style={{ width: '18rem' }}>
                <Card.Img className='w-100' variant="top" src={image} alt="product-image" />
                <Card.Header>{supplier}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 50)}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Stock Quantity: {quantity}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-grid">
                    <Button onClick={() => handleProductStock(id, product)} className='btn-md ps-5 pe-5 fluid'>Manage Stock</Button>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default SingleProduct;