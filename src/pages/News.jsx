import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import Image1 from "../assets/Ministry-1.jpg";
import Image2 from "../assets/Ministry-2.jpg";
import Image3 from "../assets/Ministry-3.jpg";
import Image4 from "../assets/Ministry-4.jpg";

const News = () => {
  const data = [
    {
      name: "Charles Jr urges pig farmers to protect industry from diseases",
      link: "https://www.jamaicaobserver.com/latest-news/charles-jr-urges-pig-farmers-to-protect-industry-from-diseases/",
      image: Image1,
    },
    {
      name: "Charles Jr says JAS self-reliance being probed",
      link: "https://www.jamaicaobserver.com/news/charles-jr-says-jas-self-reliance-being-probed/",
      image: Image2,
    },
    {
      name: "Charles Jr hands over $8m in grants, book vouchers to students",
      link: "https://www.jamaicaobserver.com/latest-news/charles-jr-hands-over-8m-in-grants-book-vouchers-to-students/",
      image: Image3,
    },
    {
      name: "Ministry of agriculture to expand gardens programme in schools",
      link: "https://www.jamaicaobserver.com/latest-news/ministry-of-agriculture-to-expand-gardens-programme-in-schools/",
      image: Image4,
    },
  ];
  return (
    <Container style={{ padding: "10px" }}>
      <h1 className="text-center p-4">Meet the Councillors/Caretakers</h1>
      <div className="d-flex justify-content-start align-items-center flex-wrap">
        {data.map((dat) => (
          <Card
            style={{
              width: "25rem",
              marginRight: "8px",
              height: "450px",
              margin: "6px",
            }}
          >
            <Card.Img
              variant="top"
              src={dat.image}
              height={"300px"}
              style={{ filter: "none" }}
            />
            <Card.Body>
              <Card.Title className="bold">{dat.name}</Card.Title>
              <Card.Text>{dat.designation}</Card.Text>
              <Card.Text>{dat.area}</Card.Text>
              <Button
              className="w-50"
                onClick={() =>
                  window.open(dat.link, "_blank", "noopener,noreferrer")
                }
              >
                Read more
              </Button>
            </Card.Body>

          </Card>
        ))}
      </div>
    </Container>
  );
};

export default News;
