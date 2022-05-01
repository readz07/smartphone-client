import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const SingleProduct = ({product}) => {
    const{name, description, image, price, quantity, supplier}=product
    return (
        <Col md={3} className="mx-auto">
            <Card className='auto border border-grey border-1'>
                <Card.Img className='w-100' variant="top" src={image} alt="product-image" />
                <Card.Header>{supplier}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0,50)}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Card.Text>{quantity}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"><Button className='btn-lg'>Show Detail</Button></small>
                </Card.Footer>
            </Card>
            </Col>
        
    );
};

export default SingleProduct;