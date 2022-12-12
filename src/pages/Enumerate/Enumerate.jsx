import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Enumerate = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">Enumerate </h1>

      <Row style={{ alignItems: "start", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12}>
          <p>Voting is your right. Voting is your voice.</p>
          <p>
            When you vote, you are not only exercising your civic duty, but you
            are speaking out on important issues that affect you including road
            infrastructure, health care, education and taxes.
          </p>
          <p>
            Voting gives you the power to choose your leadership and ruling
            political party. Some elections are won by a handful of votes so be
            sure to do your part because your vote makes a difference!
          </p>
          <p>
            Are you on the voter’s list? Check your status now:
            <a href="https://ecj.com.jm/voters/voters-list/query/">here</a>
            and express your interest in joining the volunteer/internship
            programme.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/MP-130.jpg")}
            alt="Pearnel Charles"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <p>Not on the voter’s list? Here’s how to register:</p>
        </Col>
        <Col lg={12}>
          <ul>
            <li>
              Visit the South East Clarendon Constituency Office:
              <br />
              Mineral Heights Place, 1a Sulphur Drive
              <br />
              Mineral Heights
              <br />
              Mondays - Thursdays (9:00 am – 5:00 pm)
              <br />
              Fridays (9:00 am – 4:30 pm)
            </li>
            <li>
              Be sure to walk with your proof of age and proof of residence. At
              the office, the registration clerk will assist you in filling out
              Registration Record Card also known as the RRC. This form is used
              to record the elector’s demographic information, photograph, and
              fingerprints.
            </li>
            <li>
              After registration, you will be visited at your home for residence
              verification.
            </li>
            <li>
              Your voter ID should be ready within two to three months which you
              can collect at the constituency office.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <p>If you still have questions about the voting process, you can:</p>
        </Col>
        <Col lg={12}>
          <ul>
            <li>
              Call the constituency office at{" "}
              <a href="tel:876-634-5151" style={{color:"#0f92b9"}}>876-634-5151</a> OR call the EOJ at{" "}
              <a href="tel:1-888-991-8683" style={{color:"#0f92b9"}}>1-888-991-VOTE (8683)</a>.
            </li>
            <li>Visit the constituency office</li>
            <li>
              Visit the EOJ website via{" "}
              <a href="https://ecj.com.jm/" style={{color:"#7db45f"}}>https://ecj.com.jm/</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Enumerate;
