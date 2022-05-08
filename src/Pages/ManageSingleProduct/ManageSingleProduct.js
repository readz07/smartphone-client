import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const ManageSingleProduct = ({ product, children }) => {
    const navigate = useNavigate()
    const {_id, name, description, image, price, quantity, supplier } = product

    //product detail button 
    const handleProductDetail = (id) => {
        localStorage.setItem(id, parseInt(quantity))  
        navigate(`/productdetail/${id}`)
    }


    return (
        <Col md={3} className="mx-auto">
            <Card className='auto border border-grey border-1 h-100' style={{ width: '18rem' }}>
                <Card.Img className='w-100' variant="top" src={image} alt="product-image" />
                <Card.Header>{supplier}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 50)}</Card.Text>
                    <Card.Header>Price: ${price}</Card.Header>
                    <Card.Header>Stock Quantity: {quantity}</Card.Header>
                </Card.Body>
                <Card.Footer className="d-grid">
                    <Button onClick={() => handleProductDetail(_id)} className='btn-md ps-5 pe-5 fluid'>Product Detail</Button>
                </Card.Footer>
                <Card.Footer className="d-grid">
                    {children}
                </Card.Footer>

            </Card>
        </Col>
    );
};

export default ManageSingleProduct;