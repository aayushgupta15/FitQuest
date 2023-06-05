import React from "react";
import style from "../styles/modules/navbar.module.css";
import Button from "./Button";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <nav>
      <div className={style.nav__container}>
        <a href="#">
          <img src={logo} alt="NA" />
        </a>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#footer">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={style.button}>
        <Button type="button" value="Check BMI" variant="primary" />
      </div>
    </nav>
  );
}

export default Navbar;
