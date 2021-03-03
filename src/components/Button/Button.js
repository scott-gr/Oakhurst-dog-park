import React from 'react'
import './button.module.css'

export default class Button extends React.Component {
  render() {
    return (
      <button styleName="btn" type={this.props.type}>
        {this.props.text}
      </button>
    )
  }
}
