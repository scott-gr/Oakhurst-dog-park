import React from "react"
import "./layout.module.css"
import NavBar from "../Navbar/Navbar.js"
import Button from "../Button/Button.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// import { useViewport, ViewportProvider } from "../../Hooks/useViewport.js"

const Layout = ({ children }) => {
  return (
    // <ViewportProvider>
    <div styleName="globalWrapper">
      <NavBar />
      {children}
      <footer>
        <section styleName="btnRow">
          <a styleName="fbIcon"
            href="https://www.facebook.com/OakhurstDogPark"
            alt="Facebook Page"
          >
            <FontAwesomeIcon  icon={faFacebook} />
          </a>
        </section>
        <p>© Oakhurst Dog Park 2021</p>
      </footer>
    </div>
    // </ViewportProvider>
  )
}

export default Layout
