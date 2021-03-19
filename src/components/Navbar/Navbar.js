import React from 'react'
import MobileMenu from './MobileMenu.js'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'

const Navbar = () => {
  const pathname = window.location.pathname
  const breakpoints = useBreakpoint()
  return (
    <nav styleName="navwrapper">
      {pathname !== '/' ? <NavIcon /> : null}

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
