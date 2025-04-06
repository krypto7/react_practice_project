import React, { useState } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import AddItem from "./component/AddItem";
import SearchItems from "./component/SearchItems";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      item: "Egg",
      checked: false,
    },
    {
      id: 2,
      item: "App",
      checked: true,
    },
    {
      id: 3,
      item: "Pancake",
      checked: false,
    },
    {
      id: 4,
      item: "Pizza",
      checked: false,
    },
  ]);

  const [newItems, setNewItems] = useState("");
  const [search, setSearch] = useState("");

  const addItem = (item) => {
    const newItem = {
      id: Date.now(),
      item: item,
      checked: false,
    };
    setProducts([...products, newItem]);
    localStorage.setItem("shoppinglist", JSON.stringify(newItem));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItem(newItems);
    setNewItems("");
  };

  const handleCheckBox = (id) => {
    const udpatedBox = products.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setProducts(udpatedBox);
    localStorage.setItem("shoppinglist", JSON.stringify(udpatedBox));
  };

  const handleDelete = (id) => {
    const udpatedBox = products.filter((item) => item.id !== id);
    setProducts(udpatedBox);
    localStorage.setItem("shoppinglist", JSON.stringify(udpatedBox));
  };

  // const handleAddItem = () => {
  //   if (!inputValue.trim()) return;
  //   const newItem = {
  //     id: Date.now(),
  //     item: inputValue,
  //     checked: false,
  //   };

  //   const udpatedList = [...products, newItem];
  //   setProducts(udpatedList);
  //   localStorage.setItem("shoppinglist", JSON.stringify(udpatedList));
  //   setInputValue("");
  // };

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
        // inputValue={inputValue}
        // setInputValue={setInputValue}
        // handleAddItem={handleAddItem}
      />
      <Footer
        listLength={products.length}
        checkedItems={checkedLength.length}
      />
    </div>
  );
}

export default App;
