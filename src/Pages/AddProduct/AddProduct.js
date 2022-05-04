import React, { useState } from 'react';
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useProductsData from '../../Hooks/useProductsData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [products, setProducts] = useProductsData([])
    const onSubmit = (data, event) => {
        console.log(data)
        const url = "http://localhost:5000/products"
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => setProducts(result))
            toast('Product has been added')
            event.target.reset()
    };




    return (
        <div className='col-md-6 mx-auto'>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Add A NEW PRODUCT HERE</h4></Col>
                    <Col><Button className="btn-primary btn-md pe-5 ps-5 float-end">OR Manage Inventories</Button></Col>

                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" controlId="validationCustom01">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Supplier"
                                    {...register("supplier", { required: true })}

                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom02">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Product Name"
                                    {...register("name", { required: true })}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom03">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    {...register("quantity", { required: true })}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3" controlId="validationCustom04">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Price"
                                    {...register("price", { required: true })}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationCustom03">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="url" placeholder="Image URL"
                                    {...register("image", { required: true })}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid image URL.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    {...register("description", { required: true })}
                                />
                            </Form.Group>
                        </Row>

                        <Button type="submit">Submit form</Button>
                    </Form>
                </Row>
                <ToastContainer />
            </Container>

        </div>
    );
};

export default AddProduct;