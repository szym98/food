import React from "react";
import "./style.css";
const MenuItem =( {item}) => {
    const {id, name, info, price, img}=item
  return (
    <div className="item">
      <img src={img} alt="item" />
      <div className="item-head_desc">
        <p className="head_desc-name">{name}</p>
        <p className="head_desc-info">
          <small>{info}</small>
        </p>
        <div className="item-foot_desc">
            <span className="item-foot_desc-price">${price}</span>
            <button>Add +</button>
        </div>
      </div>
    </div>
  );
};
export default MenuItem;