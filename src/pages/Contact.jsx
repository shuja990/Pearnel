import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <Container
      style={{
      }}
    >
      <h1 className="text-center p-4">Contact Us </h1>
      <Row
        style={{
          alignItems: "start",
          justifyContent: "space-between",
          border: "1px solid #ababab",
          padding: "20px",
          borderRadius: "30px",
          marginRight: "auto !important",
          marginLeft: "auto !important",
        }}
        className="m-2 mb-4"
      >
        <Col lg={6} md={12} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Message</Form.Label>

              <Form.Control
                as="textarea"
                placeholder="Leave your message here"
                rows={7}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="mt-2 ps-4 pe-4"
              style={{
                background: "black",
                color: "white",
                border: "none",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "sans-serif",
              }}
            >
              Submit
            </Button>
          </Form>
        </Col>
        <Col lg={6} md={12} sm={12}>
          <h2>Minister</h2>
          <div className="contact-grid">
            <h5>Office: </h5>
            <p>Hope Gardens, Kingston 6</p>
          </div>
          <div className="contact-grid">
            <h5>Telephone: </h5>
            <a href="tel:876-618-7133" style={{ color: "#7db45f" }}>
              876-618-7133
            </a>
          </div>
          <div className="contact-grid">
            <h5>Email: </h5>
            <a href="mailto:minister@moa.gov.jm" style={{ color: "#7db45f" }}>
              minister@moa.gov.jm
            </a>
          </div>
          <h3>Constituency: </h3>
          <div className="contact-grid">
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
          <div className="contact-grid">
            <h5>Telephone: </h5>
            <a href="tel:876-634-5151" style={{ color: "#7db45f" }}>
              876-634-5151
            </a>
          </div>
          <div className="contact-grid">
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

      <Row
        style={{
          alignItems: "start",
          justifyContent: "space-between",
          padding: "20px",
          borderRadius: "30px",
          marginRight: "auto !important",
          marginLeft: "auto !important",
        }}
        className="mt-4"
      >
        <Col lg={6} md={6} sm={12}>
      <h2>Law Office</h2>

          <h2>Jamaica Office</h2>
          <div className="contact-grid">
            <h5>Office: </h5>
            <p>20 1/2 Duke Street Kingston</p>
          </div>
          <div className="contact-grid">
            <h5>Office Phone: </h5>
            <a href="tel:(876) 922-4425 " style={{ color: "#7db45f" }}>
              (876) 922-4425
            </a>
          </div>
          <div className="contact-grid">
            <h5>Cell: </h5>
            <a href="tel:(876) 492-8777  " style={{ color: "#7db45f" }}>
              (876) 492-8777{" "}
            </a>
          </div>
          <div className="contact-grid">
            <h5>Fax: </h5>
            <a href="tel: (876) 922-9130 " style={{ color: "#7db45f" }}>
              (876) 922-9130
            </a>
          </div>
          <div className="contact-grid">
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
          <div className="contact-grid">
            <h5>Telephone: </h5>
            <a href="tel:(202) 241-4236 " style={{ color: "#7db45f" }}>
              (202) 241-4236
            </a>
          </div>
          <div className="contact-grid">
            <h5>Fax: </h5>
            <a href="tel:(646) 588-1977 " style={{ color: "#7db45f" }}>
              (646) 588-1977{" "}
            </a>
          </div>
          <div className="contact-grid">
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
