import React, { useRef } from "react";
import styles from "./Header.module.css";
import { useDispatch } from "react-redux";
import Btn from "../Btn/Btn";

const Header = ({ language }) => {
  const refRu = useRef();
  const refEn = useRef();
  const dispath = useDispatch();

  const getRuLanguage = () => {
    dispath({ type: "ru" });
    refRu.current.style.color = "#BDAE82";
    refEn.current.style.color = "#FFF";
  };

  const getEnLanguage = () => {
    dispath({ type: "en" });
    refEn.current.style.color = "#BDAE82";
    refRu.current.style.color = "#FFF";
  };

  const nav = ["skills", "portfolio", "video", "price", "contacts"];
  return (
    <header style={{ backgroundImage: "url(./assets/img/bg.png)" }}>
      <div className={styles.headerTop}>
        <img src="./assets/img/logo.png" alt="logo" />
        <div>
          <nav>
            <ul>
              {nav.map((el, ind) => (
                <li key={el + ind}>
                  <a href={"#" + el}>{language[el]}</a>
                </li>
              ))}
            </ul>
          </nav>
          <p>
            <span
              className="en"
              style={{ color: "#BDAE82" }}
              onClick={getEnLanguage}
              ref={refEn}
            >
              en
            </span>
            &nbsp;/&nbsp;
            <span className="ru" onClick={getRuLanguage} ref={refRu}>
              ru
            </span>
          </p>
        </div>
      </div>
      <div className={styles.headerBottom}>
        <div className={styles.headerBottomWrapper}>
          <h1>{language["hero-title"]}</h1>
          <p>{language["hero-text"]}</p>
          <Btn title={language.hire} bg={true} />
        </div>
      </div>
    </header>
  );
};

export default Header;
