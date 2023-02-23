import UiButton from "../UI/UiButton/UiButton";
import "./index.scss";

const Buttons = () => {
  const variants = ["contained", "outlined", "text"];
  const colors = [ "primary", "secondary", "success", "danger", "warning", "light",  "dark" ];
  const sizes = ["small", "medium", "large"];
  let ucFirst = (str) => (!str ? str : str[0].toUpperCase() + str.slice(1));

  return (
    <div className="content">
      <h1>Buttons</h1>
      <p>
        Buttons allow users to take actions, and make choices, with a single
        tap.
      </p>
      <div className="section">
        <h2>Basic button</h2>
        <p>
          The Button comes with three variants: contained(default), outlined and
          text
        </p>
        <div className="demo">
          {variants.map((variant) => (
            <UiButton key={variant} text={ucFirst(variant)} variant={variant} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Color</h2>
        <p>
          Use any of the available button style types to quickly create a styled
          button. Just modify the color prop.
        </p>
        <div className="demo">
          {colors.map((color) => (
            <UiButton key={color} text={ucFirst(color)} color={color} />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Size</h2>
        <p>For larger or smaller buttons, use the size prop.</p>
        <div className="demo">
          <div>
            {variants.map((variant) => (
              <div key={variant} className="size">
                {sizes.map((size) => (
                  <UiButton
                    key={size}
                    text={ucFirst(size)}
                    variant={variant}
                    size={size}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Disabled button</h2>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
        <div className="demo">
          {variants.map((variant) => (
            <UiButton key={variant} text={ucFirst(variant)} variant={variant} disabled />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
