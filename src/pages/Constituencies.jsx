import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Constituencies = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h2 className="text-center p-4">List of Communities/ Constituency Map</h2>
      <Row>
        <img
          src={require("../assets/Clarendon SE.jpeg")}
          alt="Pearnel Charles"
        />
      </Row>
      <Row
        style={{ alignItems: "start", justifyContent: "center" }}
        className="mt-5"
      >
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3>Rocky Point Division</h3>
          <ul>
            <li>Rocky Point</li>
            <li>Lionel Town</li>
            <li>Mitchell Town</li>
            <li>Portland Cottage</li>
            <li>Alley</li>
            <li>Water Lane</li>
            <li>Longwood</li>
          </ul>
          <h3>Palmers Cross Division</h3>
          <ul>
            <li>Palmers Cross</li>
            <li>Chateau</li>
            <li>Moores</li>
            <li>Birds Hill</li>
            <li>Sandy Bay</li>
            <li>Free Town</li>
            <li>Bois Content</li>
          </ul>
        </Col>
        <Col
          lg={6}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <h3> Hayes Division</h3>
          <ul>
            <li>Hayes</li>
            <li>Salt River</li>
          </ul>
          <h3>Mineral Heights Division</h3>
          <ul>
            <li>Mineral Heights</li>
            <li>Longville Park</li>
            <li>Curatoe Hill</li>
            <li>Halse Hall</li>
            <li>Hunts Pen</li>
            <li>Sandy Bay</li>
            <li>Cockpit</li>
            <li>New Bownes</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Constituencies;
