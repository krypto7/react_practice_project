import React, { useState } from "react";
import ItemList from "./ItemList";

function Content({ products, handleCheckBox, handleDelete }) {
  return (
    <main>
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
