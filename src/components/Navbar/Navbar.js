import React from 'react'
import loadable from '@loadable/component'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'
import { useLocation } from '@reach/router'

const MobileMenu = loadable(() => import(`./MobileMenu.js`), {
  fallback: <p>Menu Loading...</p>,
})

const Navbar = () => {
  const location = useLocation()
  const breakpoints = useBreakpoint()

  return (
    <nav styleName="navwrapper">
      {location.pathname !== '/' ? <NavIcon /> : null}

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
