import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Contact Us </h1>

      <Row
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
          <h2>Minister</h2>
          <div className="d-flex h5">
            <h5>Office: </h5>
            <p>Hope Gardens, Kingston 6</p>
          </div>
          <div className="d-flex h5">
            <h5>Telephone: </h5>
            <a href="tel:876-618-7133" style={{ color: "#7db45f" }}>
              876-618-7133
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Email: </h5>
            <a href="mailto:minister@moa.gov.jm" style={{ color: "#7db45f" }}>
              minister@moa.gov.jm
            </a>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
        <h3>Constituency: </h3>
          <div className="d-flex h5">
            <h5>Office:</h5>
            <p>
              Mineral Heights Place,
              <br />
              1a Sulphur Drive
              <br />
              Mineral Heights
              <br />
              Mondays - Thursdays (9:00 am – 5:00 pm)
              <br />
              Fridays (9:00 am – 4:30 pm)
            </p>
          </div>
          <div className="d-flex h5">
            <h5>Telephone: </h5>
            <a href="tel:876-634-5151" style={{ color: "#7db45f" }}>
              876-634-5151
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Email: </h5>
            <a
              href="mailto:seclarendon2020@gmail.com"
              style={{ color: "#7db45f" }}
            >
              seclarendon2020@gmail.com
            </a>
          </div>
        </Col>
      </Row>
      <h2>Law Office</h2>
      <Row
        style={{ alignItems: "center", justifyContent: "space-between" }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
          <h2>Jamaica Office</h2>
          <div className="d-flex h5">
            <h5>Office: </h5>
            <p>20 1/2 Duke Street Kingston</p>
          </div>
          <div className="d-flex h5">
            <h5>Office Phone: </h5>
            <a href="tel:(876) 922-4425 " style={{ color: "#7db45f" }}>
              (876) 922-4425
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Cell: </h5>
            <a href="tel:(876) 492-8777  " style={{ color: "#7db45f" }}>
              (876) 492-8777{" "}
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Fax: </h5>
            <a href="tel: (876) 922-9130 " style={{ color: "#7db45f" }}>
              (876) 922-9130
            </a>
          </div>
          <div className="d-flex align-items-start">
            <h5>Email: </h5>
            <a href="mailto:pcharleslaw@gmail.com" style={{ color: "#7db45f" }}>
              pcharleslaw@gmail.com{" "}
            </a>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h2>US Office </h2>
          <div className="d-flex h5">
            <p>
              6000 Turkey Lake Rd, Suite 112
              <br />
              Orlando, Florida <br />
              32819
            </p>
          </div>
          <div className="d-flex h5">
            <h5>Telephone: </h5>
            <a href="tel:(202) 241-4236 " style={{ color: "#7db45f" }}>
              (202) 241-4236
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Fax: </h5>
            <a href="tel:(646) 588-1977 " style={{ color: "#7db45f" }}>
              (646) 588-1977{" "}
            </a>
          </div>
          <div className="d-flex h5">
            <h5>Email: </h5>
            <a href="mailto:pcharleslaw@gmail.com" style={{ color: "#7db45f" }}>
              pcharleslaw@gmail.com{" "}
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
