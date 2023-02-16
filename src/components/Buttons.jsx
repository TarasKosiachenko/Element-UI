import UiButton from "./UI/UiButton/UiButton";

const Buttons = () => {
  return (
    <>
      <UiButton
        text="Text"
        onClick={() => console.log('click')}
        disabled={false}
        variant="text" // text, contained, outlined
        color="secondary" // success, error, secondary
        size="small" // small, medium, large
      />
      <UiButton
        text="Contained"
        onClick={() => console.log('click')}
        variant="contained"
        color="success"
        size="small"
      />
      <UiButton
        text="Outlined"
        onClick={() => console.log('click')}
        disabled={false}
        variant="outlined"
        color="error"
        size="small"
      />
    </>
  );
}

export default Buttons;