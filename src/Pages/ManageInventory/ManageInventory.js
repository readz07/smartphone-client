import React, { useState, useEffect } from 'react';
import { Button, CardGroup, Col, Container, Row } from 'react-bootstrap';
import ManageSingleProduct from '../ManageSingleProduct/ManageSingleProduct';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [pageNumbers, setPageNumbers] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const[size, setSize] = useState(9)
    const navigate = useNavigate()
   
    const navigateToAddItem = () => {
        navigate('/addproduct')
    }

    const [products, setProducts] = useState([])
    useEffect(() => {
      fetch(`http://localhost:5000/products?pagenumber=${currentPage}&size=${size}`)
      .then(res=>res.json())
      .then(data=>setProducts(data))
    }, [currentPage, size])

    useEffect(() => {
        fetch('http://localhost:5000/productscount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageNumbers(pages)
            })
    }, [])

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
                        {products.map(product => <ManageSingleProduct product={product} key={product._id}>
                            <Button onClick={()=>handleDeleteProduct(product._id)} className='btn-danger btn-md ps-5 pe-5'>Delete Item</Button>
                        </ManageSingleProduct>)}
                    </CardGroup>
                </Row>
                <div className='mt-5'>
                    {  
                        [...Array(pageNumbers).keys()]
                            .map(pageNumber => <Button key={pageNumber} className= {currentPage===pageNumber? 'active m-2':'m-2'} onClick={()=>setCurrentPage(pageNumber)} >{pageNumber + 1}</Button>)

                    }
                </div>
            </Container>

        </div>
    );
};

export default ManageInventory;