
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Button, Form, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProductsData from '../../Hooks/useProductsData';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const navigateToInventory = () => {
        navigate('/manageinventory')
    }
    const [products, setProducts] = useProductsData()
    const handleAddingProduct = event => {
        event.preventDefault();
        const AddProduct = {
            email: user.email,
            name: event.target.name.value,
            supplier: event.target.supplier.value,
            image: event.target.image.value,
            description: event.target.description.value,
            price: parseInt(event.target.price.value),
            quantity: parseInt(event.target.quantity.value),
        }
        axios.post('http://localhost:5000/products', AddProduct)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Product has been added')
                    event.target.reset()
                }
            })


    };




    return (
        <div className='col-md-6 mx-auto'>
            <Container className='my-5'>
                <Row>
                    <Col><h4>Add A NEW PRODUCT HERE</h4></Col>
                    <Col><Button className="btn-primary btn-md pe-5 ps-5 float-end" onClick={navigateToInventory}>All Products</Button></Col>

                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <Form onSubmit={handleAddingProduct}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">

                                <Form.Control type="email" name={user.email} readOnly disabled
                                    value={user.email}
                                />

                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="3" >
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Supplier"
                                    name='supplier'

                                />

                            </Form.Group>
                            <Form.Group as={Col} md="3" >
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Product Name"
                                    name='name'
                                    required
                                />

                            </Form.Group>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    name='quantity'
                                    required
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Price"
                                    name='price'
                                    required
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control type="url" placeholder="Image URL"
                                    name='image'
                                    required
                                />

                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" className="mb-3" >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={5}
                                    name="description" type="text-area"
                                    required
                                />
                            </Form.Group>
                        </Row>

                        <Button type="submit">Add My Product</Button>
                    </Form>
                    <ToastContainer></ToastContainer>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;