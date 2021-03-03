import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.module.css'

const Toggle = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <div
      styleName="toggle"
      open={navbarOpen}
      onClick={() => setNavbarOpen(!navbarOpen)}
    >
      {navbarOpen ? (
        <FontAwesomeIcon icon={faBars} open styleName="burgerOpen" />
      ) : (
        <FontAwesomeIcon icon={faBars} styleName="burger" />
      )}
    </div>
  )
}

export default Toggle
