import React from 'react'
import styles from './Title.module.css'

const Title = ({title}) => {
  return (
    <div className={styles.titleWrapper}>
        <hr />
        <h2>{title}</h2>
        <hr />
    </div>
  )
}

export default Title