import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const NavbarLinks = () => {
  return (
    <>
      <Link className={styles.navItem} to="/about">
        About
      </Link>

      <Link className={styles.navItem} to="/blog">
        Blog
      </Link>

      <Link className={styles.navItem} to="/rules">
        Rules
      </Link>

      <Link className={styles.navItem} to="/contact">
        Contact
      </Link>
    </>
  )
}

export default NavbarLinks
