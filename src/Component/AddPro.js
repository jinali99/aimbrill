// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';

// const AddPro = () => {
//   const [title, setTitle] = useState("");
//   const [price, setPrice] = useState("");
//   const [description, setDescription] = useState("");
//   const [image, setImage] = useState("");
//   const [category, setCategory] = useState("");
//   const onSubmit = (e) => {
//     e.preventDefault();
//   fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       title: title,
//       price: price,
//       description: description,
//       image: image,
//       category: category,
//     }),
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
//   };
//   return (
//     <div>
//       <Form.Label htmlFor="title">Title</Form.Label>
//       <Form.Control type="text" id="title" aria-describedby="title" value={title}
//         onChange={(e) => { setTitle(e.target.value) }} />
      
//       <Form.Label htmlFor="category">category</Form.Label>
//       <Form.Control type="text" id="category" aria-describedby="category" value={category}
//         onChange={(e) => { setCategory(e.target.value) }} /> 
      
//         <Form.Label htmlFor="pice">Price</Form.Label>
//       <Form.Control type="text" id="price" aria-describedby="price" value={price}
//         onChange={(e) => { setPrice(e.target.value) }} />
      
//       <Form.Label htmlFor="description">Description</Form.Label>
//       <Form.Control type="text" id="title" aria-describedby="title" value={description}
//         onChange={(e) => { setDescription(e.target.value) }} />
      
//       <Form.Label htmlFor="title">Image</Form.Label>
//       <Form.Control type="img" id="img" aria-describedby="img" value={image}
//         onChange={(e) => { setImage(e.target.value) }} />
      
//       <Button variant="primary" type="submit" onSubmit={onSubmit}>
//         Submit
//       </Button>
//     </div>
    
    
//   );

// };

// export default AddPro;


import React, { useState } from "react";
import './AddPro.css'

const AddPro = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  
  const AddItem = (e) => {
    e.preventDefault()
    console.log(title, description, category, image, price);
    fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title: title,
          price: price,
          description: description,
          image: image,
          category: category,
        }
      )
    }).then((res) => {
      if (res.status === 200) {
        alert(" Data Added Successfully ");
      }
    })
  }
  return (
    <>
      <form onSubmit={AddItem}>
        <div className="additem-body">
          <div className="additem-inner">
            <h2 className="additem-title">Edit Product</h2>
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
                onChange={(e) => setTitle(e.target.value)}
                className="add-input"
                placeholder="Enter Title"
              />
            </div>
            <div>
              <label className="add__label" htmlFor="description">
                Description
              </label>
              <input
                type="text"
                id="description"
                onChange={(e) => setDescription(e.target.value)}
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
                onChange={(e) => setCategory(e.target.value)}
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
                onChange={(e) => setImage(e.target.value)}
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
                onChange={(e) => setPrice(e.target.value)}
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
    </>
  );
};

export default AddPro;