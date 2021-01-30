import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styles from "./hero.module.css"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "tricolor.png" }) {
        childImageSharp {
          fixed(height: 150, pngCompressionSpeed: 5) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)

  if (!data?.heroImage?.childImageSharp?.fixed) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      className={styles.hero}
      fixed={data.heroImage.childImageSharp.fixed}
      durationFadeIn={50}
    />
  )
}

export default Hero
