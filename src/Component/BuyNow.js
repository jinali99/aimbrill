import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const BuyNow = () => {
  const { state } = useLocation();
  const product = state?.product
  return (
    <div className="mb-3" style={{ flexBasis: "100%" }} key={product.id}>
      <Card style={{ width: "18rem", lineHeight: 1 }}>
        <Card.Img src={product.image} height="200px" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>category : {product.category}</Card.Text>
          <Card.Text>Price : {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BuyNow;
