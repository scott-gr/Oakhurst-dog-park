import React from "react"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"
import styles from "./navbar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

  const Burger = <FontAwesomeIcon icon={faBars} />
  return (
    <nav className={styles.navwrapper}>
      <NavIcon />
      <input type="checkbox" className={styles.menuToggle}></input>

      <button className={styles.menuOpen}>
        < Burger />
      </button>

      <div className={`${styles.menu} ${styles.menuEffects}`}>
        <label for="menuToggle"></label>
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
