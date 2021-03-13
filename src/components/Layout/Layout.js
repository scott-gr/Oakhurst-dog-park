import React from 'react'
import { globalWrapper } from './layout.module.css'
import Footer from './Footer.js'
import NavBar from '../Navbar/Navbar.js'
const Layout = ({ children }) => {
  return (
    <>
      <main className={globalWrapper}>
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
