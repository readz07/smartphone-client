import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../images/404_image.jpg'
const NotFound = () => {
    return (
        <div className='col-md-6 mx-auto container mt-5'>
            <h1>Please Go Back To <Link to="/">Home Page</Link></h1>
            <div>
                <img className='w-100' src={NotFoundImg} alt="404 image"/>
            </div>
        </div>
    );
};

export default NotFound;