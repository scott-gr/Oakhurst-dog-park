import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import './layout.module.css'

const Footer = () => {
  return (
    <footer>
      <a
        styleName="fbIcon"
        href="https://www.facebook.com/OakhurstDogPark"
        alt="Facebook Page"
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <p styleName="copywright"> © Oakhurst Dog Park 2021</p>
    </footer>
  )
}

export default Footer
