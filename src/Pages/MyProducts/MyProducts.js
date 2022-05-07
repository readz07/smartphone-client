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
    const [myproducts, setMyProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{        
        const getMyProducts = async() =>{
            const email = user.email
            const url = `http://localhost:5000/productslist?email=${email}`
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
                        {myproducts.map(myproduct => <MyProduct myproduct={myproduct} key={myproduct._id} ></MyProduct>)}
                    </CardGroup>
                </Row>
                
            </Container>
    );
};

export default MyProducts;