import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import {heroBox, aboutHeader, headerText} from './aboutphoto.module.css'

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
      className={heroBox}
      tag="section"
      fluid={data.photo.childImageSharp.fluid}
      durationFadeIn={50}
    >
      <span className={aboutHeader}>
        <h2 className={headerText}>About the Park</h2>
      </span>
    </BackgroundImage>
  )
}

export default AboutPhoto
