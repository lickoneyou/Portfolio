import React from "react";
import styles from "./Portfolio.module.css";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../Btn/Btn";

const Portfolio = ({ language }) => {
  const seasons = ["winter", "spring", "summer", "autumn"];
  const state = useSelector((state) => state.portfolio);
  const dispatch = useDispatch();

  return (
    <section className={styles.portfolio}>
      <Title title={language.portfolio} />
      <div className={styles.btnWrapper}>
        {seasons.map((el) => (
          <Btn
            key={el}
            title={language[el]}
            bg={el == state}
            onClick={() => dispatch({ type: el })}
          />
        ))}
      </div>
      <div className={styles.imageWrapper}>
        <img src={`./assets/img/${state}/1.jpg`} alt="state" />
        <img src={`./assets/img/${state}/2.jpg`} alt="state" />
        <img src={`./assets/img/${state}/3.jpg`} alt="state" />
        <img src={`./assets/img/${state}/4.jpg`} alt="state" />
        <img src={`./assets/img/${state}/5.jpg`} alt="state" />
        <img src={`./assets/img/${state}/6.jpg`} alt="state" />
      </div>
    </section>
  );
};

export default Portfolio;
