import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Pearnel Charles Jr</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
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
                <LinkContainer to="/education">
                  <NavDropdown.Item>Educating Our Youth</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/small-business">
                  <NavDropdown.Item>
                    Supporting Small Businesses
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/building">
                  <NavDropdown.Item>
                    Building and Road Infrastructure{" "}
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/access-water">
                  <NavDropdown.Item>Access to Water </NavDropdown.Item>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
