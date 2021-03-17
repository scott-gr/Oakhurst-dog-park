import React, { useState } from 'react'
// import Toggle from './Toggle.js'
import MobileMenu from './MobileMenu.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'

const Navbar = () => {
  const breakpoints = useBreakpoint()
  return (
    <nav styleName="navwrapper">
      <NavIcon />

      {breakpoints.mobileXl ? (
        <MobileMenu />
      ) : (
        <div styleName="navBox">
          {' '}
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
