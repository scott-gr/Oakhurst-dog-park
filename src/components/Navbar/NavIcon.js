import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import StaticImage from 'gatsby-image'
import {navIcon} from './navbar.module.css'

// the white outline version of the logo

const NavIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: { eq: "navicon.png" }) {
        childImageSharp {
          fixed(height: 100, fit: CONTAIN) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  if (!data?.iconImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Link to="/">
      <StaticImage
        className={navIcon}
        durationFadeIn={50}
        fluid={data.iconImage.childImageSharp.fixed}
      />
    </Link>
  )
}

export default NavIcon
