import React, { useRef, useEffect } from "react";
import "./index.scss"

function HomePage() {
  const imgRef = useRef(null);

  useEffect(() => {
    const homeContent = imgRef.current.parentElement;
    const parentDiv = homeContent.parentElement;
    const parentHeight = parentDiv.offsetHeight;
    const homeContentHeight = parentHeight;
    homeContent.style.height = `${homeContentHeight}px`;
  }, []);

  useEffect(() => {
    const img = imgRef.current;
    const homeContent = img.parentElement;
    let posX = 0;
    let posY = 0;
    let dirX = 1;
    let dirY = 1;
    const speed = 3.5;
    const boundaryX = homeContent.clientWidth - img.width;
    const boundaryY = homeContent.clientHeight - img.height;

    const moveImg = () => {
      posX += dirX * speed;
      posY += dirY * speed;
      img.style.transform = `translate(${posX}px, ${posY}px)`;

      if (posX <= 0 || posX >= boundaryX) {
        dirX *= -1;
      }

      if (posY <= 0 || posY >= boundaryY) {
        dirY *= -1;
      }
    };

    const intervalId = setInterval(moveImg, 30);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="homePage">
      <h1>Home Page</h1>
      <div className="contentWrapper">
        <div className="homeContent">
          <img
            id="pot"
            src="https://i.gifer.com/origin/f5/f5baef4b6b6677020ab8d091ef78a3bc_w200.webp"
            alt="img"
            style={{ maxWidth: "100%" }}
            ref={imgRef}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;