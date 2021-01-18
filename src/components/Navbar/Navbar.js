import React from "react"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"
import styles from "./navbar.module.css"
import BurgerIcon from "./BurgerIcon.js"

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentVisible: true,
    }
    // bind event handler methods here (defined below) for callback to work
    this.toggleContentVisible = this.toggleContentVisible.bind(this)
  }

  toggleContentVisible() {
    // called at onClick of burger button
    // toggles contentVisible between true and false
    this.setState(prevState => {
      return { contentVisible: !prevState.contentVisible }
    })
  }

  render() {
    return (
      <nav className={styles.navwrapper}>
        <NavIcon />

        <button className={styles.menuOpen} onClick={this.toggleContentVisible}>
          <BurgerIcon />
        </button>

        <div className={`${styles.menu} ${styles.menuEffects}`}>
          {/* <label for="menuToggle"></label> */}
          <div
            className={`menu_content ${
              this.state.contentVisible ? "show_content" : ""
            }`}
          >
            <NavLinks />
          </div>
        </div>
      </nav>
    )
  }
}
export default Navbar
