import React from "react";
import styles from "./button.module.css";

export default class Button extends React.Component {
	render() {
		return <button className={styles.btn}type={this.props.type}>{this.props.text}</button>;
	}
}
