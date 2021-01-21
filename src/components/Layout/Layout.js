import React from "react"
import styles from "./layout.module.css"
import NavBar from "../Navbar/NavBar.js"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <NavBar />

      <main>{children}</main>
      <footer>
        © Oakhurst Dog Park 2021, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
