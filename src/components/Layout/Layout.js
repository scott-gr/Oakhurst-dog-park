
import React from "react"
import { Link } from "gatsby"
import styles from "./layout.module.css"
import Navbar from "../Navbar/Navbar.js"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className={styles.mainheading}>
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className={styles.headerlink} to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <Navbar />
      <header className={styles.globalHeader}>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout