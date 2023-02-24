import React, { useState } from "react";
import "./UiCarousel.scss";

const UiCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? children.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === children.length - 1 ? 0 : activeIndex + 1);
  };

  const containerStyle = {
    transform: `translateX(-${activeIndex * 100}%)`,
    transition: "transform 0.5s ease-in-out",
    width: `100%`,
  };

  return (
    <div className="carousel">
      <div className="carousel-container" style={containerStyle}>
        {children.map((child, index) => (
          <div className="carousel-item" key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrevClick}>
        &lt;
      </button>
      <button className="carousel-button next" onClick={handleNextClick}>
        &gt;
      </button>
    </div>
  );
};

export default UiCarousel;