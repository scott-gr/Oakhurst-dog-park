import React from 'react'
import './layout.module.css'
import Footer from "./Footer.js"
import NavBar from '../Navbar/Navbar.js'
const Layout = ({ children }) => {
  return (
    <div styleName="globalWrapper">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
