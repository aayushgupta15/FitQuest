import React from "react";
import style from "../styles/modules/footer.module.css";
import logo from "../images/logo.jpg";
import { BsGithub, BsLinkedin, BsMailbox, BsTwitter } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <footer className={style.center}>
      {/* company name */}
      <div>
        <img src={logo} alt="NA" />
        <h4>FitQuest</h4>
        <strong>Created by - Aayush Gupta</strong>
      </div>

      {/* social handles */}
      <div className={style.social}>
        <ul>
          <li>
            <a href="#">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <BsGithub />
            </a>
          </li>
          <a href="mailto:fitquest01@gmail.com">
            <TfiEmail />
          </a>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
