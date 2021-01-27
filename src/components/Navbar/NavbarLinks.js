import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const NavbarLinks = () => {
  return (
    <div className={styles.navLinks}>
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
    </div>
  )
}

export default NavbarLinks
