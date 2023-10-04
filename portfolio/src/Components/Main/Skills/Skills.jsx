import React from "react";
import Title from "../Title/Title";
import SkillItem from "./SkillItem/SkillItem";
import styles from './Skills.module.css'

const Skills = ({ language }) => {
  const skillItem = [1, 2, 3, 4];

  return (
    <section>
      <Title title={language.skills} />
      <div className={styles.skillItemsWrapper}>
      {skillItem.map(el => <SkillItem key={el} elem={el} language={language}/>)}
      </div>
    </section>
  );
};

export default Skills;
