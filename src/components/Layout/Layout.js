import React from "react"
import styles from "./layout.module.css"
import NavBar from "../Navbar/Navbar.js"

const Layout = ({ children }) => {

  return (
    <div className={styles.globalWrapper}>
      <NavBar />
      {children}
      <footer>
        © Oakhurst Dog Park 2021, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
