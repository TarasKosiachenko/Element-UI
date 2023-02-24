import React from "react";
import UiCarousel, {
  CarouselItem,
  CarouselCaption,
} from "../UI/UiCarousel/UiCarousel";
import "./index.scss";

const carouselItems = [
  {
    src: "https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg",
    title: "First slide title",
    description:
      "First slide text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam officia fugit, magni alias.",
  },
  {
    src: "https://t4.ftcdn.net/jpg/00/78/89/41/360_F_78894153_6vehwXxxFzCbIyFjmZdrtoqxk219gWnd.jpg",
    title: "Second slide title",
    description:
      "Second slide text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam officia fugit, magni alias.",
  },
  {
    src: "https://cdn.firstcry.com/education/2022/05/10114506/695934271.jpg",
    title: "Last slide title",
    description:
      "Last slide text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam officia fugit, magni alias.",
  },
];

const Carousels = () => {

  return (
    <div className="content">
      <h1>Carousels</h1>
      <p>
        A slideshow component for cycling through elements—images or slides of
        text—like a carousel.
      </p>

      <div className="section">
        <h2>Example</h2>
        <div className="demo carousel-demo">
          <UiCarousel active={1}>
            {carouselItems.map(({ src, title, description }, index) => (
              <CarouselItem>
                <img className="carousel-img" src={src} alt="Second slide" />
                <CarouselCaption>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </CarouselCaption>
              </CarouselItem>
            ))}
          </UiCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
