import React from "react";
import FullWidthBanner from "../navbar/FullWidthBanner";
import image from "../resource/medic1.jpg";
import CartLeftPara from "../home/CartLeftPara";

const AboutUs = () => {
  return (
    <div>
      <div>
        <FullWidthBanner image={image} title="About Us" />
      </div>
      <div>
        <CartLeftPara />
      </div>
    </div>
  );
};

export default AboutUs;
