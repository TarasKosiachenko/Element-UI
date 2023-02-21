import UiButton from "../UI/UiButton/UiButton";
import "./index.scss";

const Buttons = () => {
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
          <UiButton text="Contained" variant="contained" />
          <UiButton text="Outlined" variant="outlined" />
          <UiButton text="Text" variant="text" />
        </div>
      </div>

      <div className="section">
        <h2>Color</h2>
        <p>
          Use any of the available button style types to quickly create a styled
          button. Just modify the color prop.
        </p>
        <div className="demo">
          <UiButton text="Primary" color="primary" />
          <UiButton text="Secondary" color="secondary" />
          <UiButton text="Success" color="success"/>
          <UiButton text="Warning" color="warning" />
          <UiButton text="Danger" color="danger" />
          <UiButton text="Light" color="light" />
          <UiButton text="Dark" color="dark" />
        </div>
      </div>

      <div className="section">
        <h2>Size</h2>
        <p>For larger or smaller buttons, use the size prop.</p>
        <div className="demo">
          <div>
            <div className="size">
              <UiButton text="Small" size="small" />
              <UiButton text="Medium" size="medium" />
              <UiButton text="Large" size="large" />
            </div>
            <div className="size">
              <UiButton text="Small" variant="outlined" size="small" />
              <UiButton text="Medium" variant="outlined" size="medium" />
              <UiButton text="Large" variant="outlined" size="large" />
            </div>
            <div className="size">
              <UiButton text="Small" variant="text" size="small" />
              <UiButton text="Medium" variant="text" size="medium" />
              <UiButton text="Large" variant="text" size="large" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Disabled button</h2>
        <p>Make buttons look inactive by adding the disabled prop to.</p>
        <div className="demo">
          <UiButton text="Contained" variant="contained" disabled />
          <UiButton text="Outlined" variant="outlined" disabled />
          <UiButton text="Text" variant="text" disabled />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
