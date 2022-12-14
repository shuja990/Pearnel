import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Building = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Row style={{ alignItems: "start" }} className="mt-5">
        <Col lg={6} md={6} sm={12} className="pe-4 order-two ">
          <img
            src={require("../assets/building.jpeg")}
            alt="Pearnel Charles"
            height={"400px"}
            style={{ width: "100%" }}
          />
        </Col>
        <Col lg={6} md={6} sm={12} className="order-one">
          <h2 className="text-center p-4">Building and Road Infrastructure </h2>
          <p>
            One of the major challenges in South East Clarendon continues to be
            poor building and road infrastructure. <br />
            <br />
            With one of the largest proportions of total land used for farming,
            proper road infrastructure and drainage is crucial in Clarendon. Due
            to poor road conditions, farmers continue to have a challenge
            transporting their produce and residents continue to struggle with
            similar transportation issues. Flooding during extreme weather
            conditions due to poor drainage and other geographical factors is
            also a recurring concern.
          </p>
          <p>
            As Member of Parliament, it is my goal to develop the road network
            and drainage system to create more resilient infrastructure and
            reduce the incidence of flooding, and to improve vehicular movement
            and safety on the roadways to benefit all road users.
          </p>
          <p>
            I intend to engage the National Works Agency to continue identifying
            communities as well as major roadways that need significant
            infrastructure development.
          </p>
          I also aim to continue assisting constituents with building
          infrastructure through our Building Assistance programme which has
          already provided several members of the constituency with grants for
          construction projects for homes and businesses.
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={6}>
        <img
            src={require("../assets/building2.jpeg")}
            alt="Pearnel Charles"
            height={"400px"}
            style={{ width: "100%" }}
          />
        </Col>
        <Col lg={6}>
        <img
            src={require("../assets/building3.jpeg")}
            alt="Pearnel Charles"
            height={"400px"}
            style={{ width: "100%" }}
          />
        </Col>

      </Row>
    </Container>
  );
};

export default Building;
