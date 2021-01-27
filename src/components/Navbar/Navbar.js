import React, { useState } from "react"
import Burger from "./Burger.js"
import styles from "./navbar.module.css"
import NavbarLinks from "./NavbarLinks.js"
import NavIcon from "./NavIcon.js"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navwrapper}>
      {/* <NavIcon /> */}
      <div
        className={styles.toggle}
        open={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen) }
      >
        {navbarOpen ? <Burger open className={styles.burgerOpen}/> : <Burger className={styles.burger} />}
      </div>
      {navbarOpen ? (
        <div className={styles.navBox}>
          <NavbarLinks />
        </div>
      ) : (
        <div className={styles.navBoxOpen} open>
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default NavBar
