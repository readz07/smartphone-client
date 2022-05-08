import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Button, CardGroup, Col, Container, Row,} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import MyProduct from '../MyProduct/MyProduct';

const MyProducts = () => {
    
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{        
        const getMyProducts = async() =>{
            const email = user.email
            const url = `https://blooming-oasis-75068.herokuapp.com/productslist?email=${email}`
            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setMyProducts(data)
            }
            catch(error){
                console.log(error.message)
                if(error.response.status===401 || error.response.status===403){
                    signOut(auth);
                    navigate('/signin')
                }
            }
        }
        getMyProducts()
    },[user])

    //Delete button
    const handleDeleteProduct = (id) =>{
        const proceed = window.confirm('Are you sure to delete');
        if(proceed){
            const url = `https://blooming-oasis-75068.herokuapp.com/products/${id}`
           fetch(url, {
               method: 'DELETE'
           })
           .then(res => res.json())
           .then(data=>{
               if(data.deletedCount>0){                   
                   const remaining = myProducts.filter(product=>product._id !== id)
                   setMyProducts(remaining)
               }
           })
               
        }
    }
    
    return (
        <Container className='my-5'>
                <Row>
                    <Col><h4>My Products</h4></Col>
                    <Col><Button as={Link} to='/manageinventory' className="btn-primary btn-md pe-5 ps-5 float-end"> Manage Inventories</Button></Col>
                </Row>
                <Row>
                    <Col><hr /></Col>

                </Row>
                <Row>
                    <CardGroup className='gap-5'>
                        {myProducts.map(myProduct => <MyProduct myProduct={myProduct} key={myProduct._id} >
                            <Button onClick={() => handleDeleteProduct(myProduct._id)} className='btn-md btn-danger ps-5 pe-5 fluid'>Delete</Button>
                        </MyProduct>)}
                    </CardGroup>
                </Row>
                
            </Container>
    );
};

export default MyProducts;