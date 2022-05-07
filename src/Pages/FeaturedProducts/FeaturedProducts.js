import React from 'react';
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProductsData from '../../Hooks/useProductsData';
import SingleProduct from '../SingleProduct/SingleProduct';

const FeaturedProducts = () => {
    const [products] = useProductsData([])
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Featured Products</h4></Col>
                    <Col><Button as={Link} to='/manageinventory' className="btn-primary btn-md pe-5 ps-5 float-end"> Manage Inventories</Button></Col>
                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <CardGroup className='gap-3'>
                        {products.slice(0, 6).map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)}
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
};

export default FeaturedProducts;