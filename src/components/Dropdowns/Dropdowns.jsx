import UiDropdown from "../UI/UiDropdown/UiDropdown";
import "./index.scss";

const Dropdowns = () => {
  const variants = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "light",
    "dark",
  ];

  return (
    <div className="content">
      <h1>Dropdowns</h1>
      <p>
        Dropdowns are toggleable, contextual overlays for displaying lists of
        links and more.
      </p>
      <div className="section">
        <h2>Examples</h2>
        <p>
          The basic Dropdown is composed of a wrapping <code>Dropdown</code>,
          provide a <code>title</code> prop and some{" "}
          <code>{`<DropdownItem>`}</code>s and you're ready to go.
        </p>
        <div className="demo">
          {variants.map((variant) => (
            <UiDropdown key={variant} title="Dropdown" variant={variant}>
              <UiDropdown.Item href="#/action-1">Action</UiDropdown.Item>
              <UiDropdown.Item href="#/action-2" active>Another action</UiDropdown.Item>
              <UiDropdown.Item href="#/action-3">Something else</UiDropdown.Item>
            </UiDropdown>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdowns;
