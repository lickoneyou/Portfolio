import React from "react";
import styles from "./Price.module.css";
import Title from "../Title/Title";
import PriceItem from "./PriceItem/PriceItem";

const Price = ({ language }) => {
  const priceItem = [1, 2, 3];
  return (
    <section className={styles.price}>
      <Title title={language.price} />
      <div className={styles.itemsWrapper}>
        {priceItem.map((el, ind) => (
          <PriceItem key={el * ind} language={language} elem={el} />
        ))}
      </div>
    </section>
  );
};

export default Price;
