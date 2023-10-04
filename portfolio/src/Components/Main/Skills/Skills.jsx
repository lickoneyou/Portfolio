import React from 'react'
import Title from '../Title/Title'

const Skills = ({language}) => {
  return (
    <section>
      <Title title={language.skills}/>
    </section>
  )
}

export default Skills