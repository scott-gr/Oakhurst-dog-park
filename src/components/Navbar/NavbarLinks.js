import React from 'react'
import { Link } from 'gatsby'
import './navbar.module.css'

const NavbarLinks = () => {
  return (
    <>
      <Link styleName="navItem" to="/about">
        About
      </Link>

      <Link styleName="navItem" to="/rules">
        Park Rules
      </Link>

      <Link styleName="navItem" to="/blog">
        Blog
      </Link>

      <Link styleName="navItem" to="/resources">
        Resources
      </Link>

      <Link styleName="navItem" to="/getinvolved">
        Get Involved
      </Link>
    </>
  )
}

export default NavbarLinks
