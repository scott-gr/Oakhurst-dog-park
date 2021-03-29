import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import './coverphoto.module.css'

const AboutPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutphoto: file(relativePath: { eq: "fieldfall.png" }) {
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
      fluid={data.aboutphoto.childImageSharp.fluid}
      durationFadeIn={50}
    >
      <span styleName="pageHeader">
        <h2>About the Park</h2>
      </span>
    </BackgroundImage>
  )
}

export default AboutPhoto
