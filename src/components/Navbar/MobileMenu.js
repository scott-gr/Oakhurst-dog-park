import React, { Component } from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import NavbarLinks from './NavbarLinks.js'
import "./menu.css"
class MobileMenu extends Component {
  showSettings(event) {
    event.preventDefault()
    
  }

  
  render() {
    
    return (
      <Menu  right width="100%">
        <NavbarLinks className="menu-item" />
      </Menu>
    )
  }
}

export default MobileMenu
