import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { addpro } from "../Slice/addSlice";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
  const navigate = useNavigate();
  const product = useSelector((state) => state.addReducer.product);
  const dispatch = useDispatch();
  const url_api = "https://fakestoreapi.com/products";
  const getProduct = async () => {
    const response = await fetch(url_api);
    const productData = await response.json();
    dispatch(addpro(productData));
  };
  React.useEffect(() => {
    getProduct();
  }, []);

  const Delete = async (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        alert(" Data Deleted Successfully ");
      }
    });
  };
  const Edit = (product) => {
    navigate("/edit" ,{ state: { product: product } })     ;
  };
  const addcart = (product) => {
    navigate("/addcart", { state: { product: product } });
  };
  return (
    <div>
      {product.map((pro) => {
        return (
          <div style={{ flexBasis: "100%" }} key={pro.id}>
            <Card style={{ width: "18rem", lineHeight: 1 }}>
              <Card.Img src={pro.image} height="180px" />
              <Card.Body>
                <Card.Title>{pro.title}</Card.Title>
                <Card.Text>category : {pro.category}</Card.Text>
                <Card.Text>Price : {pro.price}</Card.Text>
                <div className="py-2">
                  <button
                    type="button"
                    onClick={() => Edit(pro)}
                    className="btn btn-dark ms-8 py-2 px-4"
                  >
                    EDIT
                  </button>
                  <button
                    type="button"
                    onClick={() => Delete(pro.id)}
                    className="btn btn-dark ms-8 py-2 px-4"
                  >
                    DELETE
                  </button>
                </div>

                <div className="gap-2">
                  <button
                    type="button"
                    onClick={() => addcart(pro)}
                    className="btn btn-dark ms-8 py-2 px-4"
                  >
                    Add To Cart
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
