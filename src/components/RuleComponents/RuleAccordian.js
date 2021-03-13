import React from 'react'
import RuleBlock from './RuleBlock.js'
import {category, categoryBox} from './rules.module.css'

const RuleAccordian = (props) => {
  return (
    <details className={categoryBox}>
      <summary className={category}>{props.category}</summary>
      <RuleBlock category={props.category} />
    </details>
  )
}
export default RuleAccordian
