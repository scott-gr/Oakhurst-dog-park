import React from 'react'
import './layout.module.css'
import NavBar from '../Navbar/Navbar.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Layout = ({ children }) => {
  return (
    <div styleName="globalWrapper">
      <NavBar />
      {children}
      <footer>
        <a
          styleName="fbIcon"
          href="https://www.facebook.com/OakhurstDogPark"
          alt="Facebook Page"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <p styleName="copywright"> © Oakhurst Dog Park 2021</p>
      </footer>
    </div>
    // </ViewportProvider>
  )
}

export default Layout
