import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './navbar.module.css'

// the white outline version of the logo

const NavIcon = () => {
  const data = useStaticQuery(graphql`
    query {
      iconImage: file(relativePath: { eq: "navicon.png" }) {
        childImageSharp {
          fluid(maxHeight: 60) {
            ...GatsbyImageSharpFluidLimitPresentationSize
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  if (!data?.iconImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      styleName="navIcon"
      fluid={data.iconImage.childImageSharp.fluid}
      height={100}
      width={100}
    />
  )
}

export default NavIcon
