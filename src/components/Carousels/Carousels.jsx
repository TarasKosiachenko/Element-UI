import React from "react";
import UiCarousel from '../UI/UiCarousel/UiCarousel';
import "./index.scss"

const Carousels = () => {

  return (
    <div className="content">
      <h1>Carousels</h1>
      <p>
        A slideshow component for cycling through elements—images or slides of text—like a carousel.
      </p>

      <div className="section">
        <h2>Example</h2>
        <div className="demo carousel-demo">
          <UiCarousel>
          <div className="carousel-item">
              <img className="carousel-img" src="https://media.cntraveler.com/photos/5eb18e42fc043ed5d9779733/master/pass/BlackForest-Germany-GettyImages-147180370.jpg" alt="Second slide" />
              <div className="carousel-caption">
                <p>A pessimist sees the difficulty in every opportunity. An optimist sees the opportunity in every difficulty</p>
                <h3>Winston Churchill</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-img" src="https://t4.ftcdn.net/jpg/00/78/89/41/360_F_78894153_6vehwXxxFzCbIyFjmZdrtoqxk219gWnd.jpg" alt="Second slide" />
              <div className="carousel-caption">
                <p>Action is the foundational key to all success</p>
                <h3>Pablo Picasso</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img className="carousel-img" src="https://cdn.firstcry.com/education/2022/05/10114506/695934271.jpg" alt="First slide" />
              <div className="carousel-caption">
                <p>If you are working on something exciting that you really care about, you don't have to be pushed. The vision pulls you</p>
                <h3>Steve Jobs</h3>
              </div>
            </div>
          </UiCarousel>
        </div>
      </div>
    </div>
  );
};

export default Carousels;

// import React from 'react';
// import UiCarousel from '../UI/UiCarousel/UiCarousel';

// function Carousels() {
// return (
  // <div className="content">
  //     <h1>Carousels</h1>
  //     <p>
  //       A slideshow component for cycling through elements—images or slides of text—like a carousel.
  //     </p>

  //     <div className="section">
  //       <h2>Example</h2>
  //       <div className="demo">
  //         <UiCarousel>
  //           <div className="ui-carousel-item">
  //           <img
  //                 src="holder.js/800x400?text=First slide&bg=373940"
  //                 alt="First slide"
  //               />
  //           <div className="ui-carousel-caption">
  //           <h3>First slide label</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //           </div>
  //           </div>
  //           <div className="ui-carousel-item">
  //           <img
  //                 src="holder.js/800x400?text=Second slide&bg=282c34"
  //                 alt="Second slide"
  //               />
  //           <div className="ui-carousel-caption">
  //           <h3>Second slide label</h3>
  //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //           </div>
  //           </div>
  //           <div className="ui-carousel-item">
  //           <img
  //                 src="holder.js/800x400?text=Third slide&bg=20232a"
  //                 alt="Third slide"
  //               />
  //           <div className="ui-carousel-caption">
  //           <h3>Third slide label</h3>
  //           <p>
  //           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //           </p>
  //           </div>
  //           </div>
  //         </UiCarousel>
  //       </div>
  //     </div>
  //   </div>
// );
// }

// export default Carousels;