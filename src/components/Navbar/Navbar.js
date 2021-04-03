import React, { lazy, Suspense } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './navbar.module.css'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'
import { useLocation } from '@reach/router'

const MobileMenu = lazy(() => import(`./MobileMenu.js`))
const renderLoader = () => (
  <p>
    Loading...
    <NavIcon />
  </p>
)
const Navbar = () => {
  const location = useLocation()
  const breakpoints = useBreakpoint()

  return (
    <nav styleName="navwrapper">
      {location.pathname !== '/' ? <NavIcon /> : null}

      {breakpoints.mobileXl ? (
        <Suspense fallback={renderLoader()}>
          <MobileMenu />
        </Suspense>
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
