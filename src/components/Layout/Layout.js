import React from "react"
import styles from "./layout.module.css"
import NavBar from "../Navbar/Navbar.js"

const Layout = ({ children }) => {

  return (
    <div className={styles.globalWrapper}>
      <NavBar />
      {children}
      <footer>
        © Oakhurst Dog Park 2021
      </footer>
    </div>
  )
}

export default Layout
