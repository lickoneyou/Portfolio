import React from "react";
import styles from "./Btn.module.css";

const Btn = ({ title, bg }) => {
  return (
    <button
      className={styles.btn}
      style={{
        background: bg ? "#BDAE82" : 'transparent',
        color: bg ? "black" : "#BDAE82",
      }}
    >
      {title}
    </button>
  );
};

export default Btn;
