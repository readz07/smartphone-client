import React from 'react';
import { Container } from 'react-bootstrap';
import Chart from '../Chart/Chart';

const Dashboard = () => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Chart></Chart>
        </Container>
    );
};

export default Dashboard;