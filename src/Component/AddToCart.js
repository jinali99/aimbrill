import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
const AddToCart = () => {
  const navigate = useNavigate();
  const { state } = useLocation()
  
  let product = state.product
  const BuyNow = (product) => {
    navigate("/buynow", { state: { product: product } }) 
  }
  return (
    <div className="mb-3" style={{ flexBasis: "100%" }} key={product.id}>
      <Card style={{ width: "18rem", lineHeight: 1 }}>
        <Card.Img src={product.image} height="200px" />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>category : {product.category}</Card.Text>
          <Card.Text>Price : {product.price}</Card.Text>
          <button
                    type="button"
                    onClick={() => BuyNow()}
                    className="btn btn-dark ms-8 py-2 px-4"
                  >
                    Buy Now
                  </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddToCart;
