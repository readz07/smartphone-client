import React from 'react';
import { Container } from 'react-bootstrap';
import AtAGlance from '../AtAGlance/AtAGlance';
import Chart from '../Chart/Chart';

const Dashboard = () => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Chart></Chart>
            <AtAGlance></AtAGlance>
        </Container>
    );
};

export default Dashboard;