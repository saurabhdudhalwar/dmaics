import React from 'react';
import './CartLeftPara.css';
import exampleImage from './medic1.jpg';

const CartLeftPara: React.FC = () => {
  return (
    <div className="cart-left-para">
      <div className="cart-image">
        <img src={exampleImage} alt="Example" className="cart-image-block"/>
      </div>
      <div className="cart-content">
        <h2 style={{color:"#31b651"}}>Exciting Title</h2>
        <p>
          This is a descriptive paragraph that explains the image content.
          It's meant to be engaging and informative, giving the user
          valuable insights related to the topic displayed in the image.
        </p>
      </div>
    </div>
  );
};

export default CartLeftPara;
