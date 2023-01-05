import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";

const Header = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand={false}
        defaultExpanded
        collapseOnSelect
        // rootCloseEvent={() => setExpanded(!expanded)}
        style={{ background: "transparent" }}
      >
        <Container fluid>
          {/* <LinkContainer to="/">
            <Navbar.Brand></Navbar.Brand>
          </LinkContainer> */}
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${false}`}
            onClick={() => setExpanded(!expanded)}
          />{" "}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            placement="end"
            // style={{ background: "#3f3f3f",color:"white" }}
          >
            <Offcanvas.Header>
              <LinkContainer to="/">
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  <img
                    src={require("../assets/logo.png")}
                    alt="James"
                    width="120px"
                    style={{ filter: "none" }}
                  />
                </Offcanvas.Title>
              </LinkContainer>
            </Offcanvas.Header>
            <Offcanvas.Body className="">
              <NavDropdown.Divider></NavDropdown.Divider>
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
                <LinkContainer to="/news">
                  <Nav.Link>Media & Resources </Nav.Link>
                </LinkContainer>

                <LinkContainer to="/contact">
                  <Nav.Link>Contact </Nav.Link>
                </LinkContainer>
              </Nav>
              <NavDropdown.Divider></NavDropdown.Divider>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
