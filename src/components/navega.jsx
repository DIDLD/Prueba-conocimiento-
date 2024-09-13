import React, { Component } from "react";
import { Container, Nav, Navbar, NavDropdown, Button, Form, Offcanvas } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './arriba.css'

export default class Navega extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
          <Navbar.Brand href="https://www.claconnect.com/-/media/cla-image-repository/logos/new-logos/cla-logo-white-300-dpi-png.png?rev=4e08c033b33e4de491ab6acd5712b2cf&hash=F188F6390FA42C294E3EA031DED89E07">

              <img
                src="data:image/png;base64,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"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className="me-3">Home</Nav.Link>
                  <Nav.Link href="#about" className="me-3">About</Nav.Link>
                  <Nav.Link href="#computer" className="me-3">Computer</Nav.Link>
                  <Nav.Link href="#laptop" className="me-3">Laptop</Nav.Link>
                  <Nav.Link href="#products" className="me-3">Products</Nav.Link>
                  <Nav.Link href="#contact" className="me-3">Contact Us</Nav.Link>
                  
                  <Form className="d-flex" >
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                  <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
    );
  }
}
