import React from "react";
import ShopCard from "./ShopCard";

export default function CardsView({ cards }) {
  let indexCard = 0;

  return (
    <div className="cardsView">
      {cards.map((card) => (
        <ShopCard card={card} key={indexCard++} />
      ))}
    </div>
  );
}
