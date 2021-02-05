import React from "react"
import "./layout.module.css"
import NavBar from "../Navbar/Navbar.js"
import Button from "../Button/Button.js"
// import { useViewport, ViewportProvider } from "../../Hooks/useViewport.js"

const Layout = ({ children }) => {
  return (
    // <ViewportProvider>
    <div styleName="globalWrapper">
      <NavBar />
      {children}
      <footer>
        <section styleName="btnRow">
          <Button type="submit" text="Rules" />
          <Button type="submit" text="Blog" />
          <Button type="submit" text="Contact" />
        </section>
        <p>© Oakhurst Dog Park 2021</p>
      </footer>
    </div>
    // </ViewportProvider>
  )
}

export default Layout
