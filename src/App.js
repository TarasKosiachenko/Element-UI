import List from "./components/List/List";
import "./App.scss";
import { Routes, Route, Link } from "react-router-dom";

import logo from "./img/logo.png";
import UiSvgSelector from "./components/UI/UiSvgSelector/UiSvgSelector";

function App() {
  const pages = [
    "HomePage",
    "Buttons",
    "SvgSelector",
    "Alerts",
    "Carousels",
    "Accordions",
    "Cards",
    "Dropdowns",
    "DragnDrop",
  ];

  return (
    <div style={{ display: "flex" }}>
      <header>
        <span>
          <UiSvgSelector
            variant="github"
            link="https://github.com/TarasKosiachenko/Element-UI"
          />
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
          {pages.map((page, id) => {
            const PageComponent = require(`./components/${page}/${page}`).default;
            return (
              <Route
                key={id}
                path={id === 0 ? "/" : page.toLowerCase()}
                element={<PageComponent />}
              />
            );
          })}
        </Routes>
      </main>
    </div>
  );
}

export default App;
