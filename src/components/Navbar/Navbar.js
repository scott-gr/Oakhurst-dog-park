import React from 'react'
import Toggle from './Toggle.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'

const Navbar = () => {
  const breakpoints = useBreakpoint()

  return (
    <nav styleName="navwrapper">

      {breakpoints.mobileXl ? (
        <Toggle />
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
