import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function Login() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
    
                <Row className="mb-3">
                       
                       <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                           <Form.Label>Username</Form.Label>
                               <Form.Control
                                   type="text"
                                   placeholder="Username"
                                   aria-describedby="inputGroupPrepend"
                                   required
                               />
                               <Form.Control.Feedback type="invalid">
                                   Please choose a username.
                               </Form.Control.Feedback>
                       </Form.Group>
                   </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                defaultValue="Mark"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Button type="submit" className='center'>Submit form</Button>
                </Form>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
}
