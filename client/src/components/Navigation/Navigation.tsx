import { FC } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const Navigation: FC = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/register"}>
            Register
          </Nav.Link>
          <Nav.Link as={Link} to={"/login"}>
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
