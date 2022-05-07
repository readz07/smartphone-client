import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
import StockOut from './StockOut/StockOut';

const OutOfStock = () => {
    const [products, setProducts] = useProductsData()
    
    const stockOut = products.filter(product=> product.quantity ===0)
    
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Out of Stocks!</h1>
                    {
                      stockOut.map(product=> <StockOut key={product._id} product={product}></StockOut>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default OutOfStock;