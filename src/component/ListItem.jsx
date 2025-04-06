import React from "react";
import { MdDelete } from "react-icons/md";

function ListItem({ item, handleCheckBox, handleDelete, handleClick }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheckBox(item.id)}
      />
      <label
        onDoubleClick={() => handleCheckBox(item.id)}
        onClick={() => handleClick(item.id)}
        style={item.checked ? { textDecoration: "line-through" } : null}
      >
        {item.item}
      </label>
      <MdDelete
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
}

export default ListItem;
