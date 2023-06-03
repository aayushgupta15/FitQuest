import React from "react";
import style from "../styles/modules/navbar.module.css";
import Button from "./Button";
import logo from "../images/logo.jpg";

function Navbar() {
  return (
    <nav className={style.nav__container}>
      <div className={style.navbar}>
        <img src={logo} alt="NA" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <Button type="button" value="Check BMI" variant="primary" />
      </div>
    </nav>
  );
}

export default Navbar;
