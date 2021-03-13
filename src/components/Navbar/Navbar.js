import React from 'react'
// import Toggle from './Toggle.js'
import MobileMenu from './MobileMenu.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {navBox, navwrapper} from './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'

const Navbar = () => {
  const breakpoints = useBreakpoint()

  return (
    <nav className={navwrapper}>
      <NavIcon />

      {breakpoints.mobileXl ? (
        <MobileMenu />
      ) : (
        <div className={navBox}>
          {' '}
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}

export default Navbar
