import "./App.css";

export default function App() {
  return (
    <main>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
      <Button>four</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
