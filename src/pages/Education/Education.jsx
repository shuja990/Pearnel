import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Education = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Educating Our Youth </h1>

      <Row
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
          <p>
            Education is one of the strongest tools in eradicating poverty and
            is an essential factor for the full and effective participation of
            youth in the processes of social, economic and political
            development.
          </p>
          <p>
            My goal as MP is to increase the participation rates of young
            people, with a focus on marginalized youth, to ensure that they
            acquire the knowledge, capacities, skills and values needed to
            fulfil their role as agents of development and good governance.
          </p>
          <p>
            This is why through our Back-to-School Assistance and Tuition
            Assistance programmes, we have helped hundreds of students across
            all levels (primary, secondary and tertiary) with grants and book
            vouchers to ease the financial burden on parents to provide a full
            education to their children.
          </p>
          <p>
            Our internship and volunteer programmes have also helped young
            people to gain the work experience needed to hone their career
            skills while getting involved in their community.
          </p>
          <p>
            It is my dream for all children to have equal access to quality
            education.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/MP-106.jpg")}
            alt="Pearnel Charles"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
