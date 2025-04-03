import React from "react";
import FullWidthBanner from "../navbar/FullWidthBanner";
import image from "../resource/medic1.jpg";
import RegulatoryComp from "./RegulatoryComp";
const Regulatory = () => {
  return (
    <div>
      <div>
        <FullWidthBanner image={image} title="Regulatory" />
      </div>
      <div>
        <RegulatoryComp />
      </div>
    </div>
  );
};

export default Regulatory;
