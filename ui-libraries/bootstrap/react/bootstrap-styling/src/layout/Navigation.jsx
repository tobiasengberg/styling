import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {
    return (
            <Navbar bg="exilic" fixed="top" expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Place Software</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Hem</Nav.Link>
                        <Nav.Link href="#link">Kontakt</Nav.Link>
                        <NavDropdown title="Teman" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Index</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                            Semantik
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Graf</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                            Separated link
                            </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Navigation;