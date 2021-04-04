import loadable from '@loadable/component'
import React from 'react'
import './layout.module.css'

const FacebookIcon = loadable(() => import(`./FacebookIcon.js`), {
  fallback: <span>F</span>,
})

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
        <FacebookIcon />
      </a>
      <p>450 E Lake Dr, Decatur, GA 30030</p>
      <p> © Oakhurst Dog Park 2021</p>
    </footer>
  )
}

export default Footer
