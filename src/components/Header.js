import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand={false}
        style={{ background: "#3f3f3f" }}
      >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>Pearnel Charles Jr</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />{" "}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            placement="end"
            style={{ background: "#3f3f3f",color:"white" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Pearnel Charles Jr{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
              <Nav>
                <LinkContainer to="/about">
                  <Nav.Link>About </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/moaf">
                  <Nav.Link>MOAF </Nav.Link>
                </LinkContainer>
                <NavDropdown title={"SEC"} id="SEC">
                  <LinkContainer to="/visions-plans">
                    <NavDropdown.Item>SEC Visions and Plans</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/councillors">
                    <NavDropdown.Item>
                      Meet the Councillors/Caretakers
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/communities">
                    <NavDropdown.Item>
                      List of Communities/ Constituency Map
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title={"Get Involved"} id="involved">
                  <LinkContainer to="/donate">
                    <NavDropdown.Item>Donate</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/intern">
                    <NavDropdown.Item>Intern/Volunteer</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/enumerate">
                    <NavDropdown.Item>Enumerate</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <NavDropdown title={"Media & Resources"} id="media">
                  <LinkContainer to="/news">
                    <NavDropdown.Item>News</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/archives">
                    <NavDropdown.Item>Archives</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
                <LinkContainer to="/contact">
                  <Nav.Link>Contact </Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
