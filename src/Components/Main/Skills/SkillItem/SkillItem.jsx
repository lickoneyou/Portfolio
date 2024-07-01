import React from "react";
import styles from './SkillItem.module.css'

const SkillItem = ({ elem, language }) => {
  return (
    <div className={styles.itemWrapper}>
      <img src={`./assets/img/icons/${elem}.png`} alt="icon" />
      <h4>{language[`skill-title-${elem}`]}</h4>
      <p>{language[`skill-text-${elem}`]}</p>
    </div>
  );
};

export default SkillItem;
