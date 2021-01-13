import React from "react"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navwrapper}>
      {/* Style or add sections to the navbar here, but links are kept in ./NavLinks.js */}
      <div><NavLinks />      <NavIcon /></div>

    </nav>
  )
}

export default Navbar
