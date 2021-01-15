import React from "react"
import NavbarLinks from "../Navbar/NavLinks"
import styles from "./burger.module.css"

class Burger extends React.Component {
  constructor(props) {
    super(props)
  }

  handleMenuClicked = event => {
    event.preventDefault()
    this.props.onMenuClicked()
  }
  render() {
    const { isMenuOpened } = this.props
    return (
      <>
        <nav className={isMenuOpened ? styles.menu : "hideMenu"}>
          <NavbarLinks />
        </nav>
        <div onClick={this.handleMenuClicked} className={styles.contextMenu} />
      </>
    )
  }
}

export default Burger
