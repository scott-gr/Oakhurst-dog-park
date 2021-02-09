import React from "react"
import Toggle from "./Toggle.js"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import "./navbar.module.css"
import NavbarLinks from "./NavbarLinks.js"
import Hero from "../Hero/Hero.js"

const Navbar = () => {
  const breakpoints = useBreakpoint()

  return (
    <nav styleName="navwrapper">
      <Hero />

      {breakpoints.mobile ? (
        <Toggle />
      ) : (
        <div styleName="navBox">
          {" "}
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
