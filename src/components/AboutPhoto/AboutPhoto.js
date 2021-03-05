import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './aboutphoto.module.css'

const AboutPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "fieldfall.png" }) {
        childImageSharp {
          fluid(fit: CONTAIN) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)
  return (
    <Img className="parkPhoto" tag="image"fluid={data.photo.childImageSharp.fluid} durationFadeIn={100} />
  )
}

export default AboutPhoto
