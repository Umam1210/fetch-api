import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const restJson = await response.json();
    console.log({ restJson: restJson.products });
    setProducts(restJson.products);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="App">
      <Row xs={1} md={4} className="g-4">
        {products.map((item) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }} className="my-4 mx-3">
                <Card.Img variant="top" src={item?.thumbnail} width ="200px"/>
                <Card.Body>
                  <Card.Title>{item?.title}</Card.Title>
                  <Card.Text>{item?.description}</Card.Text>
                </Card.Body>
                <Card.Title>price : {item?.price}</Card.Title>
              <p>stock : {item?.stock}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
