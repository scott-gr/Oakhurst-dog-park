import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import {fbIcon, copywright} from './layout.module.css'

const Footer = () => {
  return (
    <footer>
      <a
        className={fbIcon}
        href="https://www.facebook.com/OakhurstDogPark"
        alt="Facebook Page"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <p className={copywright}> © Oakhurst Dog Park 2021</p>
    </footer>
  )
}

export default Footer
