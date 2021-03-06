import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const StockOut = ({product}) => {
    
    const navigate = useNavigate()
    const { _id, name, description, image, price, quantity, supplier } = product
    const handleProductStock = (id) => {
        localStorage.setItem(id, parseInt(quantity))
        navigate(`/productdetail/${id}`)
    }
    return (
        
            <Col md={3} className="mx-auto">
            <Card className='auto border border-grey border-1 h-100 mb-3'>
                <Card.Img width='350' variant="top" src={image} alt="product-image" />
                <Card.Header>{supplier}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 50)}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    {
                                    quantity === 0 ? <Card.Text><Button disabled readonly className='bg-danger ps-5 pe-5 border-0'>Sold</Button> </Card.Text>: <Card.Text>Stock Quantity: {quantity}</Card.Text>

                                }
                </Card.Body>
                <Card.Footer className="d-grid">
                    <Button onClick={() => handleProductStock(_id)} className='btn-md ps-5 pe-5 fluid'>Add New Stock</Button>
                </Card.Footer>
                
            </Card>
            
        </Col>
        
    );
};

export default StockOut;