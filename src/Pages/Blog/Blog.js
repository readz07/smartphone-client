import React, { useEffect, useState } from 'react';
import useProductsData from '../../Hooks/useProductsData';

const Blog = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('mobile-data.json')
      .then(res=>res.json())
      .then(data=>console.log(data))
    }, [products])
    
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
};

export default Blog;