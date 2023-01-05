import React from "react";
import { Container, Card } from "react-bootstrap";
import Image1 from "../assets/winston.jpeg";
import Image2 from "../assets/2.jpg";
import Image3 from "../assets/3.jpg";
import Image4 from "../assets/4.jpg";

const Councillors = () => {
  const data = [
    {
      name: "Councillor Winston Maragh",
      designation: "His Worship the Mayor",
      area: "Rocky Point Division",
      image: Image1,
    },
    {
      name: "Mrs. Carlene Benjamin",
      designation: "Councillor",
      area: "Palmers Cross Division",
      image: Image2,
    },
    {
      name: "Mr. Collin Coke",
      designation: "Councillor-caretaker",
      area: "Mineral Heights Division",
      image: Image3,
    },
    {
      name: "Ms. Marsha Kirlew",
      designation: "Councillor-caretaker",
      area: "Hayes Division",
      image: Image4,
    },
  ];
  return (
    <Container style={{ padding: "10px" }}>
      <h1 className="text-center p-4">Meet the Councillors/Caretakers</h1>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {data.map((dat) => (
          <Card style={{ width: "18rem", marginRight: "8px" }}>
            <Card.Img
              variant="top"
              src={dat.image}
              height={"300px"}
              style={{ filter: "none" }}
            />
            <Card.Body>
              <Card.Title>{dat.name}</Card.Title>
              <Card.Text>{dat.designation}</Card.Text>
              <Card.Text>{dat.area}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Councillors;
