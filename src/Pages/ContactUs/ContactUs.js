import React from 'react';
import { Button, Col, Form, Row} from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';

const ContactUs = () => {
    

    const handleContactSubmit = (event) => {
       event.preventDefault()
        toast('Thanks For Contact');
        event.target.reset()
    };
    return (
        <div className='mx-auto container col-md-6 mt-5 mb-5 pb-5 pt-5'>
            <Form  onSubmit={handleContactSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Email"
                            
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>                    
                </Row>
                <Row className="mb-3">
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Type Your Message Here</Form.Label>
                        <Form.Control as="textarea" rows={6}  required/>
                    </Form.Group>
                </Row>
                <Button type="submit">Submit form</Button>
                <ToastContainer></ToastContainer>
            </Form>






        </div>
    );
};

export default ContactUs;