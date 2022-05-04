import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:"400px"}} className='w-100 dflex justify-content-center align-items-center'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;