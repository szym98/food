import React from "react";
import "./style.css";
import bannerImg from "./banner.png"
import Logo from "../../../components/common/Logo";

const Banner = () => {
  return (
    <header>
      <div className="header-content"></div>
        <Logo/>
        <div className="content-main">
            <h1>Delicious food for your cravings</h1>
            <p> We made fresh and healthy meals</p>
            <button>View menu <i className='fas fa-long-arrow-alt-right'></i>
            </button>

        </div>
      <img src={bannerImg} alt="banner" className="header-images"/>
    </header>
  );
};
export default Banner;