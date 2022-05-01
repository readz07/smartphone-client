
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useProductsData from '../../Hooks/useProductsData';

const Chart = () => {
    const [products, setProducts] = useProductsData([])
    return (

        <Container>
            <Row>
                <Col><h4>Charts</h4></Col>

            </Row>
            <Row>
                <Col><hr /></Col>

            </Row>
            <Row>
                <Col>
                    <BarChart width={530} height={250} data={products}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey={"price"} fill="#8884d8" />
                        <Bar dataKey={"quantity"} fill="#82ca9d" />
                    </BarChart>
                </Col>
                <Col>
                    <AreaChart width={530} height={250} data={products}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={"name"} />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey={"price"} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey={"quantity"} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </Col>

            </Row>
        </Container>
    );
};

export default Chart;