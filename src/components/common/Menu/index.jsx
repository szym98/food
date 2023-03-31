import React from "react";
import "./style.css";
import { menuItemsData } from "./data";
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <main>
      {menuItemsData.map((item) => (
       <MenuItem item={item}/>
      ))}
    </main>
  );
};
export default Menu;