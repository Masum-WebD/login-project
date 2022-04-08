


import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-0 d-flex justify-content-end">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
           <Link to="login" className="rounded text-withe fw-bold fs-5">
           Login
           </Link>
          </Nav>
        </Container>
      </Navbar>
    
    </div>
  );
};

export default MenuBar;
