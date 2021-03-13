import React, { Component } from 'react'
import Menu from 'react-burger-menu/lib/menus/slide'
import NavbarLinks from './NavbarLinks.js'
import NavIcon from './NavIcon.js'
import  './menu.css'
class MobileMenu extends Component {
  showSettings(event) {
    event.preventDefault()
  }

  render() {
    return (
      <Menu right width="100%" itemListClassName={'menuList'} disableAutoFocus>
        <NavIcon />
        <NavbarLinks />
      </Menu>
    )
  }
}

export default MobileMenu
