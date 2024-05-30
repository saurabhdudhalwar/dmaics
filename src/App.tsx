import AboutUs from "./aboutUs/AboutUs";
import Home from "./home/Home";
import Navbar from "./navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Regulatory from "./regulatory/Regulatory";
import ProductList from "./productList/ProductList";
import ContactUs from "./contactUs/ContactUs";
import MyCarousel from "./home/MyCarousel";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ marginTop: "18vh" }}>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/regulatory" element={<Regulatory />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
