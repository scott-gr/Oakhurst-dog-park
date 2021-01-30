import React from "react"
import styles from "./layout.module.css"
import NavBar from "../Navbar/Navbar.js"
// import { useViewport, ViewportProvider } from "../../Hooks/useViewport.js"

const Layout = ({ children }) => {

  return (
    // <ViewportProvider>
    <div className={styles.globalWrapper}>
      <NavBar />
      {children}
      <footer>
        © Oakhurst Dog Park 2021
      </footer>
    </div>
    // </ViewportProvider>
  )
}

export default Layout
