import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AccessWater from "../AccessWater/AccessWater";
import Building from "../Building";
import Education from "../Education/Education";
import SmallBiz from "../SmallBiz/SmallBiz";

const Vision = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <h1 className="text-center p-4">SEC vision and plans </h1>

      <Row style={{ alignItems: "start", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12} className="">
          <p>
            My vision as Member of Parliament for South East Clarendon is to
            build a better SEC by increasing employment, improving
            infrastructure, expanding access to water, education and other
            resources, in a manner that will heighten the standard of living
            among all residents in the constituency.
          </p>
          <p>
            My mission is to build communities and empower constituents to
            provide for themselves and contribute to the country’s economic and
            social growth.
            <br />
            <br />
            <span className="font-weight-bold" style={{ color: "#0f92b9" }}>
              South East Clarendon, you are now my priority. Your issues are my
              issues, your concerns are my concerns.
            </span>
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/vision2.jpeg")}
            alt="Pearnel Charles"
            width="100%"
            height={"350px"}
            style={{ borderRadius: "10px",objectFit:"contain" }}
          />
        </Col>
      </Row>
      <Education/>
      <SmallBiz/>
      <Building/>
      <AccessWater/>

    </Container>
  );
};

export default Vision;
