import React, { useState } from "react";
import ItemList from "./ItemList";

function Content({
  products,
  handleCheckBox,
  handleDelete,
  inputValue,
  setInputValue,
  handleAddItem,
}) {
  return (
    <main>
      {/* <>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </> */}
      <>
        {products.length ? (
          <ItemList
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
            products={products}
          />
        ) : (
          <p style={{ marginTop: "2rem" }}>Your List is empty!!!</p>
        )}
      </>
    </main>
  );
}

export default Content;
