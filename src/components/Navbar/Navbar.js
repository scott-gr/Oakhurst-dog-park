import React from "react"
import { Link } from "gatsby"
import styles from "./navbar.module.css"

const Navbar = () => {

  return (
    <nav className={styles.navwrapper}>
      <Link className={styles.navItem} to="/">
        Oakhurst Dog Park
      </Link>
      <Link className={styles.navItem} to="/blog">
        Blog
      </Link>

    </nav>
  )
}

export default Navbar
