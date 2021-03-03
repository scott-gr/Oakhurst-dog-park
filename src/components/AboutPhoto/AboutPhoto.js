import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

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
  return <Img fluid={data.photo.childImageSharp.fluid} durationFadeIn={100} />
}

export default AboutPhoto
