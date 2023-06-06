import React from "react";
import style from "../styles/modules/footer.module.css";
import logo from "../images/white.png";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

function Footer() {
  return (
    <footer className={style.footer} id="footer">
      {/* company name */}
      <div>
        <img src={logo} alt="NA" />
        <h4>FitQuest</h4>
      </div>

      {/* social handles */}
      <div className={style.social}>
        <p>Created by - Aayush Gupta</p>
        <br />
        <ul>
          <li>
            <a href="https://www.twitter.com/aayu_sh15" target="_blank">
              <BsTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aayu-sh15" target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://github.com/aayushgupta15" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="mailto:aayush61258@gmail.com">
              <GrMail />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
