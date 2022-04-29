import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Chart from '../Chart/Chart'
import OutOfStock from '../OutOfStock/OutOfStock'
const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Chart></Chart>
            <OutOfStock></OutOfStock>
        </div>
    );
};

export default Home;