import React, { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import AddItem from "./component/AddItem";
import SearchItems from "./component/SearchItems";
import { useEffect } from "react";

function App() {
  const API_URL = `http://localhost:3000/products`;

  const [products, setProducts] = useState([]);
  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log("====>", listItems);
        setProducts(listItems);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchItem();
  }, []);

  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      item: item,
      checked: false,
    };
    const updatedList = [...products, newItem];
    setProducts(updatedList);
    // localStorage.setItem("shoppinglist", JSON.stringify(updatedList));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    setNewItems("");
  };

  const handleCheckBox = (id) => {
    const updatedBox = products.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProducts(updatedBox);
    // localStorage.setItem("shoppinglist", JSON.stringify(updatedBox));
  };

  const handleDelete = (id) => {
    const updatedBox = products.filter((item) => item.id !== id);
    setProducts(updatedBox);
    // localStorage.setItem("shoppinglist", JSON.stringify(updatedBox));
  };

  const checkedLength = products.filter((item) => item.checked);

  return (
    <div className="App">
      <Header title={"Grosary List"} />
      <AddItem
        handleSubmit={handleSubmit}
        newItems={newItems}
        setNewItems={setNewItems}
      />
      <SearchItems search={search} setSearch={setSearch} />
      <Content
        products={products.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
      <Footer
        listLength={products.length}
        checkedItems={checkedLength.length}
      />
    </div>
  );
}

export default App;
