import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './coverphoto.module.css'

const GetInvolvedPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      getinvolvedphoto: file(relativePath: { eq: "wheelbarrow.png" }) {
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
      styleName={`heroBox heroBoxGetInv`}
      tag="section"
      fluid={data.getinvolvedphoto.childImageSharp.fluid}
      durationFadeIn={50}
    >
      <span styleName="pageHeader">
        <h2 styleName="headerText">Get Involved</h2>
      </span>
    </BackgroundImage>
  )
}

export default GetInvolvedPhoto
