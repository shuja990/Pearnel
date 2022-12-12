import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./Home.css";
const Home = () => {
  return (
    <Row style={{ margin: 0 }} className="home-page">
      <div
        className="background-home"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Col
          lg={6}
          md={6}
          sm={12}
          style={{
            borderTop: "3px solid white",
            borderBottom: "3px solid white",
            paddingTop: "50px",
            paddingBottom: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 className="welcome">
            Welcome to the Office of <br /> Minister Pearnel Charles, Jnr. MP
          </h2>
          <h1 className="working">Working for you</h1>
          <Button
            style={{ marginLeft: "auto", marginRight: "auto" }}
            className="button-involved"
          >
            Get Involved
          </Button>
        </Col>
      </div>
      <img src={require("../../assets/logo.png")} alt="James" style={{filter:"none",width:"150px",height:"150px"}}/>

    </Row>
  );
};

export default Home;
