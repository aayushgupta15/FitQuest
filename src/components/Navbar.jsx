import React from "react";
import style from "../styles/modules/navbar.module.css";
import Button from "./Button";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <nav className={style.nav__container}>
      <img src={logo} alt="NA" />
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
      <Button type="button" value="Check BMI" variant="primary" />
    </nav>
  );
}

export default Navbar;
