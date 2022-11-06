import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
      <div className="div-flex">
        {items.map((prod) => {
          return <Item prod={prod} key={prod.id} />;
        })}
      </div>
  );
};

export default ItemList;
