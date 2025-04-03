import React, { useState } from 'react';
import './Carousel.css';
import imageOne from "./medic1.jpg";
import imageTwo from "./medic2.jpg";
import imageThree from "./medic3.jpg";

const Carousel = () => {
  const slides = [
    {
      image: imageOne,
      title: 'Slide 1 Title',
      body: 'This is the body text for Slide 1.',
    },
    {
      image: imageTwo,
      title: 'Slide 2 Title',
      body: 'This is the body text for Slide 2.',
    },
    {
      image: imageThree,
      title: 'Slide 3 Title',
      body: 'This is the body text for Slide 3.',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div
        className="carousel-slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="carousel-content">
          <h2>{slides[currentSlide].title}</h2>
          <p>{slides[currentSlide].body}</p>
        </div>
        <button className="carousel-arrow left" onClick={prevSlide}>
          &#9664;
        </button>
        <button className="carousel-arrow right" onClick={nextSlide}>
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
