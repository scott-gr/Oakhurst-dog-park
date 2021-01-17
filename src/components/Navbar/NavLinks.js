import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link className={styles.navItem} to="/">
          About
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/gallery">
          Gallery
        </Link>
      </li>
      <li>
        <Link className={styles.navItem} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  )
}

export default NavLinks
