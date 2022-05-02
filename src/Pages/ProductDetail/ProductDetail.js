import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const {productId} = useParams()
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('mobile-data.json')
      .then(res=>res.json())
      .then(data=>console.log(data))
    }, [])
    
    return (
        <div>
            <h1>Product Detail:{products.length}</h1>
        </div>
    );
};

export default ProductDetail;