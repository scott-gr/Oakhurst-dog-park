import React from "react"
import styles from "./layout.module.css"
import NavFull from "../Navbar/NavFull.js"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className={styles.globalWrapper} data-is-root-path={isRootPath}>
      <NavFull />

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
