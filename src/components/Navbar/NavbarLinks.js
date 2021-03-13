import React from 'react'
import { Link } from 'gatsby'
import {navItem}  from './navbar.module.css'

const NavbarLinks = () => {
  return (
    <>
      <Link tag="nav" className={navItem} to="/about">
        About
      </Link>

      <Link className={navItem} to="/blog">
        Blog
      </Link>

      <Link className={navItem} to="/rules">
        Park Rules
      </Link>

      <Link className={navItem} to="/getinvolved">
        Get Involved
      </Link>
    </>
  )
}

export default NavbarLinks
