import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <p>
        <span>©</span>
        <span>2022</span>
        <span>github</span>
      </p>
      <p>Rolling Scopes School</p>
      <div>
        <a href="#">
          <img src="./assets/img/social/inst.png" alt="inst" />
        </a>
        <a href="#">
          <img src="./assets/img/social/fb.png" alt="fb" />
        </a>
        <a href="#">
          <img src="./assets/img/social/tw.png" alt="tw" />
        </a>
        <a href="#">
          <img src="./assets/img/social/pinterest.png" alt="pinterest" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
