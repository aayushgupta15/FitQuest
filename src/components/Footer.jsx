import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer>
      <div className="social">
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
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
