import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "tricolor.png" }) {
        childImageSharp {
          fluid(maxWidth:250) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  if (!data?.heroImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
      <Img
        className={styles.logo}
        fluid={data.heroImage.childImageSharp.fluid}
      />
  )
}

export default Hero
