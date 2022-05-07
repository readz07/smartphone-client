import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';

const AtAGlance = () => {
    const [products] = useProductsData()

    let uniqIds = {};
    let filtered = products.filter(obj => !uniqIds[obj.supplier] && (uniqIds[obj.supplier] = true));
    console.log(filtered)
    return (
        <Container>

            <Row>
                <Col><h4>At A Glance</h4></Col>
            </Row>
            <Row>
                <Col><hr /></Col>
            </Row>
            <Row>
                <Col>
                    <Card className='bg-primary text-white'>
                        <Card.Header>Product Data</Card.Header>
                        <Card.Body>
                            <Card.Title>Total Models : {products.length}</Card.Title>
                            <Card.Text>
                               Total Entries From Sellers statistics here
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-warning text-white'>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>
                                   
                            </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-danger text-white'>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className='bg-info text-white'>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                            <Card.Title>Card Title </Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default AtAGlance;