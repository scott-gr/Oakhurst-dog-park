import React from 'react'
import './layout.module.css'
import Footer from './Footer.js'
import NavBar from '../Navbar/Navbar.js'
const Layout = ({ children }) => {
  return (
    <>
      <main styleName="globalWrapper">
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
