import React, { useState } from "react"
// import { Link } from "gatsby"
import Burger from "./Burger.js"
import "./navbar.module.css"
import NavbarLinks from "./NavbarLinks.js"
import Hero from "../Hero/Hero.js"

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <nav styleName="navwrapper">
      <Hero />
      <div
        styleName="toggle"
        open={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? (
          <Burger open styleName="burgerOpen" />
        ) : (
          <Burger styleName="burger" />
        )}
      </div>
      {navbarOpen ? (
        <div styleName="navBox">
          <NavbarLinks />
        </div>
      ) : (
        <div styleName="navBoxOpen" open>
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default NavBar
