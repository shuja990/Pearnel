import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const SmallBiz = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Supporting Small Businesses </h1>

      <Row
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
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
            src={require("../../assets/MP-112.jpg")}
            alt="Pearnel Charles"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SmallBiz;
