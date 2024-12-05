import "./App.css";

export default function App() {
  const handleClick = () => {
    alert("YOU CLICKED ME");
  };

  return (
    <h1>
      <Button color={"red"} text={"Click"} onClick={handleClick} />
    </h1>
  );
}

function Button({ color, disabled, text }) {
  const handleClick = () => {
    console.log("You clicked me!"), handleClick();
  };
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      style={{ height: "100px", width: "200px", backgroundColor: color }}
    >
      {text}
    </button>
  );
}
