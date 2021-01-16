import React from "react"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"
import styles from "./navbar.module.css"
import Burger from "./Burger.js"


const Navbar = () => {
  return (
    <nav className={styles.navwrapper}>
      <NavIcon />

      <button className={styles.menuOpen}>
        < Burger />
      </button>

      <div className={`${styles.menu} ${styles.menuEffects}`}>
        {/* <label for="menuToggle"></label> */}
        <div className={styles.menuContent}>
          <NavLinks />
        </div>
      </div>
    </nav>
    // <nav className={styles.navwrapper}>
    //   {/* Style or add sections to the navbar here, but links are kept in ./NavLinks.js */}
    //   <NavLinks />
    //   <NavIcon />

    // </nav>
  )
}
export default Navbar
