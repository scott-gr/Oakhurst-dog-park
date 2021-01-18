import React, { useState } from "react"
import BurgerIcon from "./BurgerIcon.js"
import styles from "./navbar.module.css"
import NavLinks from "./NavLinks.js"
import NavIcon from "./NavIcon.js"

const NavFull = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navwrapper}>
      <NavIcon />
      <div
        className={styles.toggle}
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <BurgerIcon open /> : <BurgerIcon />}
      </div>
      {navbarOpen ? (
        <div className={styles.navbox}>
          <NavLinks />
        </div>
      ) : (
        <div className={styles.navbox} open>
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default NavFull
