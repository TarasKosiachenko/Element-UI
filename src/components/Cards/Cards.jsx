import UiCard from "../UI/UiCard/UiCard";
import UiButton from "../UI/UiButton/UiButton";
import "./index.scss";

const Cards = () => {
  const variants = ["top", "middle", "bottom"];

  return (
    <div className="content">
      <h1>Cards</h1>
      <p>
        Cards provide a flexible and extensible content container with multiple
        variants and options.
      </p>
      <div className="section">
        <h2>Basic Example</h2>
        <div className="demo">
          {
            variants.map((variant) => (
              <UiCard key={variant} style={{ width: "10rem" }}>
                <UiCard.Img variant={variant} src={`data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18693305aa7%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18693305aa7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23282c34%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22251.97499084472656%22%20y%3D%22221.36000137329103%22%3Evariant="${variant}"%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`} />
                <UiCard.Header>Card Header</UiCard.Header>
                <UiCard.Body>
                    <UiCard.Title>Card Title</UiCard.Title>
                    <UiCard.Text>Card Text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque quidem dicta.</UiCard.Text>
                    <UiButton text="Button" variant="contained" size="small" />
                </UiCard.Body>
              </UiCard>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Cards;
