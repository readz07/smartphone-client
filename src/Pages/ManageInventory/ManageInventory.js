import React from 'react';
import {Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';
import { useNavigate } from 'react-router-dom';
const ManageInventory = () => {
    const navigate = useNavigate()
    const [products] = useProductsData([])
    const navigateToAddItem= ()=>{
        navigate('/addproduct')
    }
    console.log(products)
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Manage Inventories</h4></Col>
                    <Col><Button onClick={navigateToAddItem} className="btn-primary btn-md pe-5 ps-5 float-end">Add New Product</Button></Col>

                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <CardGroup className='gap-5'>
                        {products.map(product => <ManageSingleProduct product={product} key={product.id}></ManageSingleProduct>)}
                    </CardGroup>
                </Row>
            </Container>
        </div>
    );
};

export default ManageInventory;