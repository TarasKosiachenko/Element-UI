import { Link } from "react-router-dom";

const List = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
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
    </ul>
  );
};

export default List;
