import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './navbar.module.css'

// the white outline version of the logo

const NavIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: { eq: "navicon.png" }) {
        childImageSharp {
          fluid(maxHeight: 100, fit: CONTAIN) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  if (!data?.iconImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Link to="/">
      <Img
        styleName="navIcon"
        fluid={data.iconImage.childImageSharp.fluid}
        durationFadeIn={25}
        loading="eager"
      />
    </Link>
  )
}

export default NavIcon
