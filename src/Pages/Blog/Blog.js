import React, { useEffect, useState } from 'react';
import { Accordion } from 'react-bootstrap';
import useProductsData from '../../Hooks/useProductsData';

const Blog = () => {
    
    return (
        <div className='col-md-6 mx-auto container mt-5'>
            <h1>Questions and Answers</h1>
            

            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question 1: Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        Answers: From my point of view JavaScript is a scripting language. On the other hand NodeJs is
                        a JavaScript runttime not a programming language. Another key differnece
                        is JavaScript can run in any browser adn engine like Spider Monkey, V8, Script Core. But
                        NodeJs only run in V8 engine. Moreovre, JS is used for client side activity. On contrary,
                        Node Js is used for server side activity.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question 2: When should you use nodejs and when should you use mongodb</Accordion.Header>
                    <Accordion.Body>
                        Answers: This question is bit weird. However, NodeJs and MongoDb are used for two different
                        purpose. Because both of them are two different technology. NodeJs is a JavaScript runtime that
                        is used to connect with database and retrive data from database. MongoDb is No Sql database to store
                        data.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Question 3: Differences between sql and nosql databases.</Accordion.Header>
                    <Accordion.Body>
                        There are few core differnces between sql and nosql. Suppose, SQL has a long history, almost 40 years!
                        SQL can be scaled vertically as well as horizontally. SQL represents relational and tubular data. On the
                        other hand, NoSQL uses master-slave arehitecture and scales horizontally. NoSQL is column oriented and key
                        value paired model table.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Question 4: What is the purpose of jwt and how does it work</Accordion.Header>
                    <Accordion.Body>
                        Answers: JWT is a reliable mechanism used to share data between two parties and can store data safely. It's so
                        popular even Google uses it. It helps to verify the owner of JSON data. it's encoded and used cryptography.
                        JWT is a secret or private key which is issued with sign of JWT. The receiver of the JWT will verify the signature
                        and ensure that the token hasn't been altered.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;