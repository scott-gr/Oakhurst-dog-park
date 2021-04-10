import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './coverphoto.module.css'

const GetInvolvedPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      getinvolvedphoto: file(relativePath: { eq: "wheelbarrow.png" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100, webpQuality: 100, pngCompressionSpeed: 6) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      styleName={`heroBox`}
      tag="section"
      fluid={data.getinvolvedphoto.childImageSharp.fluid}
      loading="eager"
      durationFadeIn={250}
    >
      <span styleName="pageHeader">
        <h2>Get Involved</h2>
      </span>
    </BackgroundImage>
  )
}

export default GetInvolvedPhoto
