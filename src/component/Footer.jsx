import React from "react";

function Footer({ listLength, checkedItems }) {
  const today = new Date();
  return (
    <footer>
      <p>
        {/* copyright@{today.getFullYear()} */}
        {listLength} List Items and {checkedItems} item selected
      </p>
    </footer>
  );
}

export default Footer;
