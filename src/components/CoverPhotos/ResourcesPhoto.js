import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './coverphoto.module.css'

const ResourcesPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      resourcesphoto: file(relativePath: { eq: "gate.png" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100) {
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
      fluid={data.resourcesphoto.childImageSharp.fluid}
      loading="eager"
      durationFadeIn={25}
    >
      <span styleName="pageHeader">
        <h2>Resources</h2>
      </span>
    </BackgroundImage>
  )
}

export default ResourcesPhoto
