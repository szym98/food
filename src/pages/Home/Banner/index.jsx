import React from "react";
import "./style.css";
import bannerImg from "./banner.png";
import Logo from "../../../components/common/Logo";

const Banner = ({ handleScrollMenu }) => {
  return (
    <header>
      <div className="header-content"></div>
      <Logo />
      <div className="content-main">
        <h1>Delicious food for your cravings !</h1>
        <p>
          Only the best quality farm-fresh ingredients make it into our meals
          before being packed and delivered fresh to you.
        </p>
        <button onClick={handleScrollMenu}>
          View menu <i className="fas fa-long-arrow-alt-right"></i>
        </button>
      </div>
      <img src={bannerImg} alt="banner" className="header-images" />
    </header>
  );
};
export default Banner;
