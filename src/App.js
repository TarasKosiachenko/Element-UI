import Buttons from "./components/Buttons/Buttons";
import SvgSelector from "./components/SvgSelector/SvgSelector";
import Alerts from "./components/Alerts/Alerts";
import Carousels from "./components/Carousels/Carousels";
import Accordions from "./components/Accordions/Accordions";
import Cards from "./components/Cards/Cards";
import HomePage from "./components/HomePage/HomePage";
import List from "./components/List/List ";
import Dropdowns from "./components/Dropdowns/Dropdowns";
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
          <List />
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="svg" element={<SvgSelector />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="carousels" element={<Carousels />} />
          <Route path="accordions" element={<Accordions />} />
          <Route path="cards" element={<Cards />} />
          <Route path="dropdowns" element={<Dropdowns />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
