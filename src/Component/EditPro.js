import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const EditPro = () => {
  const { state } = useLocation()
  let product = state?.product
  const [title, setTitle] = useState(product.title);
    const [description, setDescription] = useState(product.description);
    const [category, setCategory] = useState(product.category);
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(product.price);
  const InputChange = (e) => {
      e.preventDefault()
      const { id, value } = e.target;
      console.log(id,value);
      if (id === "title") {
        setTitle(value);
      }
      if (id === "description") {
        setDescription(value);
      }
      if (id === "category") {
        setCategory(value);
      }
      if (id === "image") {
        setImage(value);
      }
      if (id === "price") {
        setPrice(value);
      }
    };
  const update = (e) => {
    e.preventDefault();
      
        fetch(`https://fakestoreapi.com/products/${product.id}`,{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: title,
                        price: price,
                        description: description,
                        image: image,
                        category: category
                    }
                )
            }).then((res) => {
              if (res.status === 200) {
                alert(" Data Edited Successfully ");
              }
              console.log(res);
              res.json();

          })
            .then(json => console.log(json))
    }
  return (
      <div>
          <form onSubmit={update}>
        <div className="additem-body">
          <div className="additem-inner">
            <h2 className="additem-title">Add New Product</h2>
          </div>

          <div>
            <div>
              <label className="add__label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                value={title}
                id="title"
                onChange={(e) => InputChange(e)}
                className="add-input"
                placeholder="title"
              />
            </div>
            <div>
              <label className="add__label" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                onChange={(e) => InputChange(e)}
                value={description}
                className="add-input"
                placeholder="Enter Description"
                required
              />
            </div>
            <div>
              <label className="add__label" htmlFor="category">
                Category
              </label>
              <input
                className="add-input"
                type="text"
                name="category"
                onChange={(e) => InputChange(e)}
                value={category}
                id="category"
                placeholder="category"
                required
              />
            </div>
            <div>
              <label className="add__imagelabel" htmlFor="category">
                Image
              </label>
              <input
                className="add-image"
                type="file"
                name="image"
                onChange={(e) => InputChange(e)}
                value={image}
                id="image"
                placeholder="image"
                required
              />
            </div>

            <div className="">
              <label className="add__label" htmlFor="price">
                price
              </label>
              <input
                className="add-input"
                type="text"
                value={price}
                onChange={(e) => InputChange(e)}
                id="price"
                name="price"
                placeholder="Enter Price"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="add-button"
              name="addTask"
            >
              Add Item
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EditPro