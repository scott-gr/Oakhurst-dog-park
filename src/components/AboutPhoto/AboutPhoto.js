import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import './aboutphoto.module.css'

const AboutPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "fieldfall.png" }) {
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
        styleName= "heroBox"
        tag="section"
        fluid={data.photo.childImageSharp.fluid}
        durationFadeIn={50}
      >
      <span styleName="aboutHeader"><h2 styleName="headerText">About the Park</h2></span>
    </BackgroundImage>
  )
}

export default AboutPhoto
