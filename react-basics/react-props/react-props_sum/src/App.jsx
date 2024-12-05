import "./App.css";

export default function App() {
  return (
    <h1>
      <Sum valueA={3} valueB={400} />
    </h1>
  );
}

function Sum({ valueA, valueB }) {
  const sumOf = valueA + valueB;
  return (
    <div>
      {valueA}+{valueB}={sumOf}
    </div>
  );
}
