import React from 'react'
import './layout.module.css'
import NavBar from '../Navbar/Navbar.js'
import Footer from './Footer.js'

const Layout = ({ children }) => {
  return (
    <>
      <div styleName="globalWrapper">
        <NavBar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
