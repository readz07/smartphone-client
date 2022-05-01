import React from 'react';
import Banner from '../Banner/Banner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Chart from '../Chart/Chart'
import OutOfStock from '../OutOfStock/OutOfStock'
import Dashboard from '../Dashboard/Dashboard';
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Dashboard></Dashboard>
            <OutOfStock></OutOfStock>
        </div>
    );
};

export default Home;