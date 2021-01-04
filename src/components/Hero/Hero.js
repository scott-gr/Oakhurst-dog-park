import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Hero({ data }) {
  return (
  <div>
    <Img fluid={data.file.childImageSharp.fluid} alt="oakhurst dog park logo"/>
  </div>
  )}

export const query = graphql`
  query {
    file(relativePath: { eq: "content/assets/logo/tricolor.png" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }`

  
