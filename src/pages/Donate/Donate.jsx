import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Donate = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Donate </h1>

      <Row style={{ alignItems: "start", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12}>
          <p>Donate and help to build South East Clarendon!</p>
          <p>
            If you’re interested in contributing to Member of Parliament,
            Pearnel Charles Jr’s strive to building South East Clarendon, you
            can make a deposit to:
          </p>
          <p>OR</p>
          <p>donate through…</p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/MP-117.jpg")}
            alt="Pearnel Charles"
            height={"450px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Donate;
