
import React from 'react';
import { Button, Card, Col, ToastContainer } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProductsData from '../../Hooks/useProductsData';

const MyProduct = ({ myproduct}) => {
    const [products, setProducts] = useProductsData()
    const navigate = useNavigate()
    const { _id, name, description, image, price, quantity, supplier } = myproduct
    const handleProductStock = (id) => {
        navigate(`/productdetail/${id}`)
    }
    const handleDeleteProduct = (id) =>{
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data=>{
               if(data.deletedCount>0){                   
                   const remaining = products.filter(product=>product._id !== id)
                   setProducts(remaining)
               }
           })
               
        }
    }
    return (
        <Col md={3} className="mx-auto">
            <Card className='auto border border-grey border-1 h-100' style={{ width: '18rem' }}>
                <Card.Img className='w-100' variant="top" src={image} alt="product-image" />
                <Card.Header>{supplier}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description.slice(0, 50)}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>Stock Quantity: {quantity}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-grid">
                    <Button onClick={() => handleProductStock(_id)} className='btn-md ps-5 pe-5 fluid'>Product Detail</Button>
                </Card.Footer>
                <Card.Footer className="d-grid">
                    <Button onClick={() => handleDeleteProduct(_id)} className='btn-md btn-danger ps-5 pe-5 fluid'>Delete</Button>
                </Card.Footer>
            </Card>
            <ToastContainer></ToastContainer>
        </Col>
    );
};

export default MyProduct;