import React from "react"
import { Link } from "gatsby"
import "./navbar.module.css"

const NavbarLinks = () => {
  return (
    <>
      <Link styleName="navItem" to="/about">
        About
      </Link>

      <Link styleName="navItem" to="/blog">
        Blog
      </Link>

      <Link styleName="navItem" to="/rules">
        Rules
      </Link>

      <Link styleName="navItem" to="/contact">
        Contact
      </Link>
    </>
  )
}

export default NavbarLinks
