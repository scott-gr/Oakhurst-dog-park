import React from 'react'
import './layout.module.css'
import Footer from './Footer.js'
import NavBar from '../Navbar/Navbar.js'

function Layout({ children }) {
  return (
    <>
      <main styleName="globalWrapper">
        <NavBar />
        {children}
        <Footer loading="lazy" />
      </main>
    </>
  )
}

export default Layout
