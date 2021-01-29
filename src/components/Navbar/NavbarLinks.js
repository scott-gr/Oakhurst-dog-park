import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"
import NavIcon from "./NavIcon.js"

const NavbarLinks = () => {
  return (
    <>
      <Link className={styles.navItem} to="/">
        About
      </Link>

      <Link className={styles.navItem} to="/blog">
        Blog
      </Link>

      <Link className={styles.navItem} to="/gallery">
        Gallery
      </Link>

      <Link className={styles.navItem} to="/contact">
        Contact
      </Link>
    </>
  )
}

export default NavbarLinks
