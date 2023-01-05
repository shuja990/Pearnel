import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const SmallBiz = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Row
        style={{ alignItems: "start", justifyContent: "space-between" }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
          <h2 className="text-center p-4">Supporting Small Businesses </h2>

          <p>
            Small businesses play an important role in supporting and building
            their communities.
          </p>
          <p>
            It is my dream to build South East Clarendon by providing assistance
            to small businesses through financing, innovation and training to
            enhance their sustainable growth and competitiveness and foster job
            creation, in turn strengthening the labour market, reducing the
            unemployment rate and growing Jamaica’s economy.{" "}
          </p>
          <p>
            It is my dream to build South East Clarendon by providing assistance
            to small businesses through financing, innovation and training to
            enhance their sustainable growth and competitiveness and foster job
            creation, in turn strengthening the labour market, reducing the
            unemployment rate and growing Jamaica’s economy.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/smallbiz.jpeg")}
            alt="Pearnel Charles"
            width="100%"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SmallBiz;
