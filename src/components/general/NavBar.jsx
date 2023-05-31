import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { NavLink, Link, useNavigate } from "react-router-dom";
function NavBar() {
  return (
    <>
    <Navbar className='' bg="primary" variant="dark" expand="lg">
    <Container >
    <NavLink className="navbar-brand" to="/">
          Inicio
        </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse className='' id="navbarScroll"
      >
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <NavLink className="nav-link" to="/catalogo">Catalogo</NavLink>
          <NavLink className="nav-link" to="/contacto">Contactanos</NavLink>
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button  variant="outline-dark">Buscar</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></>
  )
}

export default NavBar