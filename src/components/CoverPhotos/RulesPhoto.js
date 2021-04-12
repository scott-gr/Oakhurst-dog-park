import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './coverphoto.module.css'

const RulesPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      rulesphoto: file(relativePath: { eq: "beagle.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            quality: 100
            webpQuality: 100
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
        imgStyle={{
          objectPosition: 'top',
        }}
        tag="img"
        fluid={data.rulesphoto.childImageSharp.fluid}
        loading="eager"
        durationFadeIn={250}
      />
      <span styleName="pageHeader">
        <h2>Park Rules</h2>
      </span>
    </div>
  )
}

export default RulesPhoto
