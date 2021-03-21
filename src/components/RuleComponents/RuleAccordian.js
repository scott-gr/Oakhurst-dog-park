import React from 'react'
import RuleBlock from './RuleBlock.js'
import './rules.module.css'

const RuleAccordian = (props) => {
  return (
    <details>
      <summary styleName="category">{props.category}</summary>
      <RuleBlock category={props.category} />
    </details>
  )
}
export default RuleAccordian
