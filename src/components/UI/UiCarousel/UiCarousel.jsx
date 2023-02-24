import React, { useState } from "react";
import "./UiCarousel.scss";

const UiCarousel = ({ children, active = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(active);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? children.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === children.length - 1 ? 0 : activeIndex + 1);
  };

  const containerStyle = {
    transform: `translateX(-${activeIndex * 100}%)`,
    transition: "all .5s ease-in-out",
    width: `100%`,
  };

  return (
    <div className="carousel">
      <div className="carousel-container" style={containerStyle}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isActive: activeIndex === index,
            });
          }
          return null;
        })}
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

export const CarouselItem = ({ children, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      {children}
    </div>
  );
};

export const CarouselCaption = ({ children }) => {
  return <div className="carousel-caption">{children}</div>;
};

export default UiCarousel;
