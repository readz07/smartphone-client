import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
import StockOut from './StockOut/StockOut';

const OutOfStock = () => {
    const [products, setProducts] = useProductsData()
    
    const stockOut = products.filter(product=> product.quantity ===0)
    
    return (
        <Container className='mt-5'>
            <Row>
                <Col>
                    <h1>Out of Stocks!</h1>
                </Col>
            </Row>

            <Row>
                <CardGroup className='my-5'>
                    
                    {
                      stockOut.map(product=> <StockOut key={product._id} product={product}></StockOut>)
                    }
                </CardGroup>
            </Row>
        </Container>
    );
};

export default OutOfStock;