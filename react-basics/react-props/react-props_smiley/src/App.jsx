import "./App.css";

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "😄" : "😢"}</h1>;
}
