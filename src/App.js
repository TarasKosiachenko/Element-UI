import UiButton from './components/UI/UiButton/UiButton';
import './App.scss';

function App() {

  return (
    <div>
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
      variant="contained" // text, contained, outlined
      color="success" // success, error, secondary
      size="small" // small, medium, large
    />
    <UiButton
      text="Outlined"
      onClick={() => console.log('click')}
      disabled={false}
      variant="outlined" // text, contained, outlined
      color="error" // success, error, secondary
      size="small" // small, medium, large
    />
    </div>
  );
}

export default App;
