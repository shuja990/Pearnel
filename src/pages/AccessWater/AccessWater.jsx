import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const AccessWater = () => {
  return (
    <Container style={{ padding: "10px" }}>
      <Row style={{ alignItems: "start" }} className="mt-5">
        <Col lg={6} md={6} sm={12}>
          <h2 className="text-center p-4">Access to Water </h2>

          <p>
            Access to water is a long-standing issue for several communities in
            South East Clarendon.
          </p>
          <p>
            Water is an essential resource for life and is necessary for public
            health whether used for drinking, food production, domestic or
            recreational purposes. Everyone has the right to sufficient,
            continuous, safe, acceptable, physically accessible and affordable
            water for personal and domestic use.
          </p>
          <p>
            As Member of Parliament, I wish to improve water access and
            sanitation across all communities within South East Clarendon to
            increase community hygiene and reduce the transmission of diseases.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/Ministry-45.jpg")}
            alt="Pearnel Charles"
            height={"360px"}
            style={{ width: "100%" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AccessWater;
