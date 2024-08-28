import { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

export default function App({ onClickAdd, OnClickMinus }) {
  let [people, setPeople] = useState(0);
  function handleClickAdd({ onClickAdd }) {
    setPeople((people += 1));
  }
  function handleClickMinus(OnClickMinus) {
    if (people >= 1) setPeople((people -= 1));
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onClickAdd={handleClickAdd} onClickMinus={handleClickMinus} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
