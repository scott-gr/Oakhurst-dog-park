import React, { useState } from "react"
import BurgerIcon from "./BurgerIcon.js"
import styles from "./navbar.module.css"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navwrapper}>
      <NavIcon />
      <div
        className={styles.toggle}
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <BurgerIcon open className={styles.burgerOpen}/> : <BurgerIcon />}
      </div>
      {navbarOpen ? (
        <div className={styles.navBox}>
          <NavLinks />
        </div>
      ) : (
        <div className={styles.navBoxOpen} open>
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default NavBar
