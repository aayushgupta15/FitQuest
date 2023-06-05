import React, { useEffect } from "react";
import style from "../styles/modules/navbar.module.css";
import Button from "./Button";
import logo from "../images/logo.jpg";
import BMI from "./BMI";

function Navbar() {
  const [modalOpen, setModalOpen] = useEffect(false);

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
          <Button
            type="button"
            value="Check BMI"
            variant="primary"
            onClick={() => setModalOpen(true)}
          />
          <BMI modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
        {/* </div> */}
      </div>
    </nav>
  );
}

export default Navbar;
