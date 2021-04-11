import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
// import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'
import './coverphoto.module.css'

const AboutPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutphoto: file(relativePath: { eq: "fieldfall.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            quality: 100
            webpQuality: 100
            pngCompressionSpeed: 6
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div styleName={`heroBoxRules heroBox`}>
      <Img
        styleName="heroImg"
        // objectPosition="top"
        fluid={data.aboutphoto.childImageSharp.fluid}
        loading="eager"
        durationFadeIn={250}
      />
      <span styleName="pageHeader">
        <h2>About the Park</h2>
      </span>
    </div>
  )
}

export default AboutPhoto
