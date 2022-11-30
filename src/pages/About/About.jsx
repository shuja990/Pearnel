import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">About</h1>

      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12}>
          <h2>Minister Pearnel Charles, Jnr. MP</h2>
          <p>MINISTER OF AGRICULTURE AND FISHERIES</p>
          <p>
            Honourable Pearnel Charles, Jr., MP, was appointed Minister of
            Agriculture and Fisheries on January 11, 2022. Prior to that, he was
            Minister of Housing, Urban Renewal, Environment and Climate Change.
            He is also a two-time Member of Parliament, currently serving in
            South East Clarendon.
          </p>
          <p>
            Minister Charles is a former Government Senator and Member of
            Cabinet where he served as Minister without Portfolio in the
            Ministry of Economic Growth and Job Creation with responsibility for
            Water, Housing, and Infrastructure. Prior to this appointment, he
            served as Minister of State in the Ministry of Foreign Affairs and
            Foreign Trade with responsibility for Diaspora Affairs and the
            National Council for Coastal Zone Management, among other areas.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/Ministry-3.jpg")}
            alt="Pearnel Charles"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
      <Row style={{ alignItems: "center", marginTop: "20px" }}>
        <p>
          Minster Charles also served as Minister of State in the Ministry of
          National Security, where he had portfolio duties for the Department of
          Correctional Services, the Jamaica Combined Cadet Force, and special
          projects within the national security portfolio.
        </p>

        <p>
          Pearnel Charles Jr. is an Attorney-at-Law qualified to practice law in
          Jamaica and the United States of America. Throughout his professional
          career, he served with distinction as a Judicial Clerk, Senior Clerk
          of Court, Crown Counsel at the Office of the Director of Public
          Prosecutions and as the Lead Counsel and Managing Attorney of The Law
          Offices of Pearnel P. Charles Jr.
        </p>
      </Row>
      <Row style={{ alignItems: "center" }}>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/MP-118.jpg")}
            alt="Pearnel Charles"
            height={"400px"}
            style={{ width: "100%" }}
          />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <p>
            The Minister is a former President of the Law Society and a former
            Guild President of the University of West Indies where he earned two
            honors degrees; a Bachelor of Science (double major in Biochemistry
            and Zoology) and a Bachelor of Laws. Additionally, he holds a Master
            of Laws degree from The George Washington University Law School in
            Washington D.C. where he was awarded the Thomas Buergenthal
            Scholarship for academic performance.
          </p>
          <p>
            Pearnel Charles Jr. was born with a passion for community service
            and, as a youth advocate, he participates in community activities
            geared towards uplifting underserved communities and protecting the
            most vulnerable. He also continues to serve as the Chairman of the
            UNESCO Youth Advisory Council.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
