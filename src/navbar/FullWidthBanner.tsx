import React from 'react';
import './FullWidthBanner.css';

const FullWidthBanner = ({ image, title }: any) => {
  return (
    <div
      className="full-width-banner"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="banner-overlay">
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
};

export default FullWidthBanner;
