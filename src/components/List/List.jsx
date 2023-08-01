import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./List.scss";

const List = () => {
  const listRef = useRef(null);
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    if (isListOpen) {
      listRef.current.style.maxHeight = `${listRef.current.scrollHeight}px`;
    } else {
      listRef.current.style.maxHeight = "0";
    }
  }, [isListOpen]);

  const handleListClick = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <div className="nav_lists">
      <li>
          <Link to="/">Home</Link>
        </li>
      <p
        className={`list_header ${!isListOpen ? "hide" : ""}`}
        onClick={handleListClick}
      >
        Components
      </p>

      <ul
        className="list_body"
        ref={listRef}
      >
        <li>
          <Link to="buttons">Buttons</Link>
        </li>
        <li>
          <Link to="svg">Svg</Link>
        </li>
        <li>
          <Link to="alerts">Alerts</Link>
        </li>
        <li>
          <Link to="carousels">Carousels</Link>
        </li>
        <li>
          <Link to="accordions">Accordions</Link>
        </li>
        <li>
          <Link to="cards">Cards</Link>
        </li>
        <li>
          <Link to="dropdowns">Dropdowns</Link>
        </li>
        <li>
          <Link to="dragndrop">Drag'n'Drop</Link>
        </li>
      </ul>
    </div>
  );
};

export default List;