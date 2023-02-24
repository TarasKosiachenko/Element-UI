import Buttons from "./components/Buttons/Buttons";
import SvgSelector from "./components/SvgSelector/SvgSelector";
import Alerts from "./components/Alerts/Alerts"
import Carousels from "./components/Carousels/Carousels"
import HomePage from "./components/HomePage/HomePage";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";

import logo from "./img/logo.png";
import UiSvgSelector from "./components/UI/UiSvgSelector/UiSvgSelector";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <header>
        <span>
          <UiSvgSelector variant="github" link="https://github.com/TarasKosiachenko/Element-UI" />
        </span>
        <span>
          <UiSvgSelector variant="search" />
        </span>
      </header>
      <nav>
        <div className="navigate">
          <span>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </span>
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
          </ul>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="svg" element={<SvgSelector />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="carousels" element={<Carousels />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
