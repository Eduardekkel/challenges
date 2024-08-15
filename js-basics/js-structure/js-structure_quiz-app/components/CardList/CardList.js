import { Card } from "../Card/Card.js";
import Card from "../Card/Card.js";
export function CardList() {
  const cardList = document.createElement("section");
  cardList.classList.add("card-list");

  store.cards.forEach((card) => {
    const cardElement = Card(card);
    cardList.append(cardElement);
  });

  return cardList;
}
