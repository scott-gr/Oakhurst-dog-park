import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './rulesphoto.module.css'

const RulesPhoto = () => {
  const data = useStaticQuery(graphql`
    query { 
      photo: file(relativePath: { eq: "beagle.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      styleName="heroBox"
      tag="section"
      fluid={data.photo.childImageSharp.fluid}
      durationFadeIn={50}
    >
      <span styleName="rulesHeader">
        <h2 styleName="headerText">Park Rules</h2>
      </span>
    </BackgroundImage>
  )
}

export default RulesPhoto
