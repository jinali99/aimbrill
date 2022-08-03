import "./App.css";
import ProductList from "./Component/ProductList";
import AddPro from './Component/AddPro';
import EditPro from './Component/EditPro'
import BuyNow from './Component/BuyNow'
import AddToCart from './Component/AddToCart'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route exact path="/addpro" element={<AddPro />} />
          <Route exact path="/edit" element={<EditPro />} />
          <Route exact path="/buynow" element={<BuyNow />} />
          <Route exact path="/addcart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
      {/* <ProductList /> */}
    </div>
  );
}

export default App;
