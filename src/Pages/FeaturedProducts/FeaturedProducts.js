import React from 'react';
import { CardGroup, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
import SingleProduct from '../SingleProduct/SingleProduct';

const FeaturedProducts = () => {
    const [products, setProducts] = useProductsData([])
    return (
        <div>
            <Container className='my-5'>
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