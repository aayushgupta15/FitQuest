import React, { useState } from "react";
import style from "../styles/modules/navbar.module.css";
import Button from "./Button";
import logo from "../images/logo.jpg";
import BMI from "./BodyMassIndex";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const modal = (e) => {
    e.preventDefault();
    setIsOpen(true);
    console.log("hello");
  };

  return (
    <nav>
      <div className={style.nav__container}>
        <div className="logo">
          <img src={logo} alt="NA" />
        </div>
        {/* <div className="link"> */}
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
        <div className={style.button}>
          <Button onClick={modal}>Check BMI</Button>
        </div>
      </div>
      <BMI isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

export default Navbar;
