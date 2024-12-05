import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting name="Eduard" />
      <Greeting name="Jan" />
    </div>
  );
}

function Greeting({ name }) {
  const coaches = ["Jan", "Gimena", "Sven", "Klaus"];

  return <h1>{coaches.includes(name) ? "Hello, Coach" : `Hello, ${name}`}</h1>;
}
