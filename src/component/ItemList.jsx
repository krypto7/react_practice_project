import React from "react";
import ListItem from "./ListItem";

function ItemList({ products, handleCheckBox, handleDelete, handleClick }) {
  return (
    <>
      <ul>
        {products.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
            handleClick={handleClick}
          />
        ))}
      </ul>
    </>
  );
}

export default ItemList;
