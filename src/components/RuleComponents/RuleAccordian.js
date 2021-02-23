import React from 'react';
import "./rules.module.css"

const RuleAccordian = props => {
  return (
    <details>
      <summary>{props.category}</summary>
      {props.children}
    </details>
  )
}
export default RuleAccordian;