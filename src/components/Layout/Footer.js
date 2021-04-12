import React from 'react'
import LogoFacebookIcon from '../icons/LogoFacebookIcon.js'
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
        <LogoFacebookIcon />
      </a>
      <p>450 E Lake Dr, Decatur, GA 30030</p>
      <p> © Oakhurst Dog Park 2021</p>
    </footer>
  )
}

export default Footer
