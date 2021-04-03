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
        alt="Our Facebook Page"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <p>450 E Lake Dr, Decatur, GA 30030</p>
      <p> © Oakhurst Dog Park 2021</p>
    </footer>
  )
}

export default Footer
