import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Intern = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Intern/Volunteer </h1>

      <Row style={{ alignItems: "start", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12}>
          <p>
            Work with your Member of Parliament and help Charles Jr to make a
            change!
          </p>
          <p>
            Be active in your community. Witness the work of your Member of
            Parliament first hand and help to build and develop his campaign and
            the constituency.
          </p>
          <p>
            With just a few hours weekly or a full-time summer programme, you’ll
            help to build South East Clarendon while getting the work experience
            needed to make yourself more marketable.
          </p>
          <p>
            Send your resume to the constituency office via{" "}
            <a href="mailTo:seclarendon2020@gmail.com">
              {" "}
              seclarendon2020@gmail.com{" "}
            </a>
            and express your interest in joining the volunteer/internship
            programme.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/MP-134.jpg")}
            alt="Pearnel Charles"
            height={"450px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Intern;
