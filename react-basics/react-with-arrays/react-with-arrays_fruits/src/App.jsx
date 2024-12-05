import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 7034,
      name: "🍇 Grape",
      color: "violet",
    },
    {
      id: 4444,
      name: "🍓 Strawberry",
      color: "red",
    },
    {
      id: 1222,
      name: "🥑 Avocado",
      color: "green",
    },
    {
      id: 2345,
      name: "🍊 Orange",
      color: "orange",
    },
  ];
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );

  // return (
  //   <div className="app">
  //     <Card name="🍌 banana" />
  //   </div>
  // );
}
