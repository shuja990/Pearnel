import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
const Home = () => {
  return (
    <Container>
      <Row style={{ alignItems: "center" }}>
        <Col lg={6} md={6} sm={12}>
          <h2>Minister Pearnel Charles, Jnr. MP</h2>
          <p>MINISTER OF AGRICULTURE AND FISHERIES</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Button>Get Involved</Button>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img src={require("../../assets/home.png")} alt="Pearnel Charles" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
