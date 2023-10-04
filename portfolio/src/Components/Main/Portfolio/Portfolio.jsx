import React from 'react'
import styles from './Portfolio.module.css'
import Title from "../Title/Title";

const Portfolio = ({language}) => {
  return (
    <section>
        <Title title={language.portfolio}/>
    </section>
  )
}

export default Portfolio