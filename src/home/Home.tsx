import React from "react";
import Carousel from "./Carousel";
import CartLeftPara from "./CartLeftPara";
import CartRightPara from "./CartRightPara";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Carousel />
      <CartLeftPara />
      <CartRightPara />
      <Services />
    </div>
  );
};

export default Home;
