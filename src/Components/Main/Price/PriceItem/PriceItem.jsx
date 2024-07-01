import React from "react";
import styles from "./PriceItem.module.css";
import Btn from "../../../Btn/Btn";

const PriceItem = ({language, elem}) => {
  return (
    <div className={styles.priceItem}>
      <h3>{language[`tarif-${elem}`]}</h3>
      <h5>{language[`price-${elem}`]}</h5>
      <p>
        <span>{language[`price-description-${elem}-span-1`]}</span>
        <span>{language[`price-description-${elem}-span-2`]}</span>
        <span>{language[`price-description-${elem}-span-3`]}</span>
        <span>{language[`price-description-${elem}-span-4`]}</span>
        <span>{language[`price-description-${elem}-span-5`]}</span>
      </p>
      <Btn title={language.order} bg={true}/>
    </div>
  );
};

export default PriceItem;
