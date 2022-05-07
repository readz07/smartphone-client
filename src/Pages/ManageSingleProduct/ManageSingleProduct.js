import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';
const ManageSingleProduct = ({product}) => {
    const [products, setProducts] = useProductsData([])
    const{_id, name, description, image, price, quantity, supplier}=product
    
    
    const handleDeleteProduct = (id) =>{
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
            const url = `http://localhost:5000/products/${id}`
            fetch(url, 
            {method:"DELETE"}
            )
            .then(res=>res.json())
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
                    <Card.Text>{description.slice(0,50)}</Card.Text>
                    <Card.Header>Price: ${price}</Card.Header>
                    <Card.Header>Stock Quantity: {quantity}</Card.Header>
                </Card.Body>
                <Card.Footer className="d-grid">
                    <Button onClick={()=>handleDeleteProduct(_id)} className='btn-danger btn-md ps-5 pe-5'>Delete Item</Button>
                </Card.Footer>
                
            </Card>
        </Col>
    );
};

export default ManageSingleProduct;