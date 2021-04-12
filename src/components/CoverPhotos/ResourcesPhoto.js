import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './coverphoto.module.css'

const ResourcesPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      resourcesphoto: file(relativePath: { eq: "gate.png" }) {
        childImageSharp {
          fluid(fit: COVER, quality: 100, 
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
            ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div styleName="heroBox">
      <Img
        styleName="heroImg"
        tag="img"
        fluid={data.resourcesphoto.childImageSharp.fluid}
        loading="eager"
        durationFadeIn={250}
      />
      <span styleName="pageHeader">
        <h2>Resources</h2>
      </span>
    </div>
  )
}

export default ResourcesPhoto
