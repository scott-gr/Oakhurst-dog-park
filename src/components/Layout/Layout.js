
import React from "react"
import styles from "./layout.module.css"
import Navbar from "../Navbar/Navbar.js"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <Navbar />

      <main>{children}</main>
      <footer>
        © Scott Griffin 2020, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout