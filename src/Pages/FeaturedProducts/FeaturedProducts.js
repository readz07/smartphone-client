import React from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
import SingleProduct from '../SingleProduct/SingleProduct';

const FeaturedProducts = () => {
    const [products] = useProductsData([])
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Featured Products</h4></Col>

                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <CardGroup className='gap-5'>
                        {products.slice(0, 6).map(product => <SingleProduct product={product} key={product.id}></SingleProduct>)}
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedProducts;