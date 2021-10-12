import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import logo from "../images/logo.png";
// import "./Menu.scss";
import "./Menu.css"

const Menu = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="container heart_header">
      <div className="row heart_header_all">
        <div className="col-3 heart_header_left">
          <img src={logo} alt="" />{" "}
        </div>
        <div className="col-9 heart_header_right">
          <ul className={click ? "nav_options actived" : "nav_options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Home</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Product</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Faq</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="mobile_menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu_icon" />
            ) : (
              <MenuIcon className="menu_icon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
