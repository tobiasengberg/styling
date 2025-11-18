import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CustomerForm = () => {
    return (
        <Container>
            <Form className="border p-3">
                <Form.Group as={Row} className="mb-3" controlId="customerId1">
                    <Form.Group as={Col} className="mb-3" controlId="customerName1">
                        <Form.Label  column sm="2">Namn:</Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Namn" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="customerAddress1">
                        <Form.Label column sm="2">Adress:</Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Adress" />
                        </Col>
                    </Form.Group>

                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="customerId2">
                    <Form.Group as={Col} className="mb-3" controlId="customerName">
                        <Form.Label  column sm="2">Namn:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Namn" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="customerAddress">
                        <Form.Label column sm="2">Adress:</Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Adress" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="customerHome">
                        <Form.Group as={Col} className="mb-3">
                        <Form.Check type="checkbox" label="Hemadress" />
                        </Form.Group>
                        <Form.Group as={Col} className="mb-3">
                        <Button className="row align-self-end" variant="primary" type="submit">
                            Skicka
                        </Button>
                        </Form.Group>
                    </Form.Group>

                </Form.Group>
            </Form>
        </Container>
    );
};

export default CustomerForm;