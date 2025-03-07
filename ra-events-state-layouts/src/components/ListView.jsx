import React from "react";
import ShopItem from "./ShopItem";

export default function ListView({ items }) {
  let indexItem = 0;

  return (
    <div className="listView">
      {items.map((item) => (
        <ShopItem item={item} key={indexItem++} />
      ))}
    </div>
  );
}
