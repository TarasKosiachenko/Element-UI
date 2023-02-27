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
    title: "Third slide title",
    description:
      "Third slide text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam officia fugit, magni alias.",
  },
];
const сontrolledСarouselItems = [
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18693305aa7%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18693305aa7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22289.71875%22%20y%3D%22221.36000137329103%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    alt: "First slide",
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18693305aa7%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18693305aa7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.97499084472656%22%20y%3D%22221.36000137329103%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    alt: "Second slide",
  },
  {
    src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18693305aa8%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18693305aa8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22278.3312454223633%22%20y%3D%22221.36000137329103%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    alt: "Third slide",
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
          <UiCarousel>
            {carouselItems.map(({ src, title, description }, index) => (
              <CarouselItem key={index}>
                <img className="carousel-img" src={src} alt={title} />
                <CarouselCaption>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </CarouselCaption>
              </CarouselItem>
            ))}
          </UiCarousel>
        </div>
      </div>

      <div className="section">
        <h2>Animation</h2>
        <p>Add the disappearance effect via the animation props</p>
        <div className="demo carousel-demo">
          <UiCarousel animation active={2}>
            {carouselItems.map(({ src, title }, index) => (
              <CarouselItem key={index}>
                <img className="carousel-img" src={src} alt={title} />
              </CarouselItem>
            ))}
          </UiCarousel>
        </div>
      </div>

      <div className="section">
        <h2>Crossfade</h2>
        <p>Add the fade prop to your carousel to animate slides with a fade transition instead of a slide.</p>
        <div className="demo carousel-demo">
          <UiCarousel fade>
            {сontrolledСarouselItems.map(({ src, alt }, index) => (
              <CarouselItem key={index}>
                <img className="carousel-img" src={src} alt={alt} />
              </CarouselItem>
            ))}
          </UiCarousel>
        </div>
      </div>

      <div className="section">
        <h2>Controlled</h2>
        <p>You can also control the Carousel state, via the active={'{'}3{'}'} prop</p>
        <div className="demo carousel-demo">
          <UiCarousel active={3}>
            {сontrolledСarouselItems.map(({ src, alt }, index) => (
              <CarouselItem key={index}>
                <img className="carousel-img" src={src} alt={alt} />
              </CarouselItem>
            ))}
          </UiCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousels;
