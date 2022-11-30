import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const Moaf = () => {
  return (
    <Container style={{ padding: "50px" }}>
      <h1 className="text-center p-4">
        Ministry of Agriculture and Fisheries (MoAF){" "}
      </h1>

      <Row style={{ alignItems: "center", justifyContent: "space-between" }}>
        <Col lg={6} md={6} sm={12}>
          <p>
            The Ministry of Agriculture and Fisheries (MoAF) has been charged
            with the responsibility of driving the integration of the production
            of primary agricultural produce along all the stages of the supply
            chain through to value added and facilitating full commercialization
            of outputs of the agriculture, manufacturing, and service sectors.
          </p>
          <p>
            As minister, it is my goal to build a resilient and sustainable
            agricultural sector for Jamaica by developing all sub-sectors,
            agencies and other relevant stakeholders in the industry with the
            aim of establishing food security, national security, environmental
            security and economic security as the country advances in its fight
            against COVID, climate change, conflict and crime.
          </p>
          <p>
            This, I believe, can be done through a{" "}
            <span className="font-weight-bold" style={{ color: "black" }}>
              ‘Grow Smart, Eat Smart’
            </span>{" "}
            (GSES) strategy.
          </p>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/Ministry-48.jpg")}
            alt="Pearnel Charles"
            height={"350px"}
            style={{ borderRadius: "10px" }}
          />
        </Col>
      </Row>
      <Row style={{ alignItems: "center" }} className="mt-5">
        <Col lg={12}>
          <h2>Grow Smart, Eat Smart</h2>
        </Col>
        <Col lg={6} md={6} sm={12}>
          <img
            src={require("../../assets/Grow Smart Eat Smart.jpg")}
            alt="Pearnel Charles"
            height={"400px"}
            style={{ width: "100%" }}
          />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <p>
            ‘Grow Smart, Eat Smart’ is a national campaign that builds on
            existing policies and programmes of the Ministry with a major thrust
            to drive us to eat more wholesome and nutritious foods and grow
            strategically, optimizing our operations by using an empirical
            approach, introducing innovation and technology and advancing
            research and development towards better operations to develop and
            ultimately achieve better results.
          </p>
          <p>
            The campaign promotes utilizing every inch of our landscape not just
            to plant, but to plant with a purpose and to ensure that we unlock
            our full potential through improved efficiency and reduced waste.
          </p>
          <p>GSES focuses on the following areas of priority:</p>
          <ul>
            <li>Crop production</li>
            <li>Climate Smart Practices and Technologies</li>
            <li>
              Access to Finance, Protection, and Insurance for Farmers with a
              focus on Praedial Larceny, the development of a National Farming
              Trust and expansion of Fisher folk and Farmers insurance.
            </li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-4">
        <p>The campaign focuses on:</p>
        <ul>
          <li>
            Financing, technical training and support for farmers to promote
            farming as a viable business option
          </li>
          <li>Providing more leases for idle agriculture lands</li>
          <li>Linkages and Partnerships</li>
          <li>
            Ministries, Departments, Agencies and the Tourism sector - more
            local produce in the hotels and capitalizing on other markets in the
            tourism industry.
          </li>
          <li>
            Health - updating the Food & Nutrition Security Policy to boost
            consumption of local foods
          </li>
          <li>
            Education - Revamping of our school gardens, providing inputs into
            the school feeding programme and launch of a Hydroponics Pilot in
            high schools across the island
          </li>
          <li>Security- Launching of the Praedial Larceny Working Group</li>
          <li>Market-driven opportunities for farmers and fisher folks</li>
          <li>Access to Agricultural inputs (tools, fertilizer, training)</li>
          <li>Inclusivity: Youth, Women, persons with disabilities</li>
          <li>Agro-Processing </li>
        </ul>
      </Row>
      <Row className="mt-4">
        <Col lg={12}>
          <h2>GSES Launch Video: </h2>
        </Col>
        <Col lg={12}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vBObdTc4hKg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col lg={12}>
          <Button
            onClick={() => window.open("https://www.moa.gov.jm/", "_blank")}
          >
            Read More
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Moaf;
