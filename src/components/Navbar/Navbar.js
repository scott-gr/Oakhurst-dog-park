import React, { useState } from "react"
import Burger from "./Burger.js"
import styles from "./navbar.module.css"
import NavbarLinks from "./NavbarLinks.js"
import Hero from "../Hero/Hero.js"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav className={styles.navwrapper}>
      <Hero />

      <div
        className={styles.toggle}
        open={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <Burger open className={styles.burgerOpen} />
        ) : (
          <Burger className={styles.burger} />
        )}
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
