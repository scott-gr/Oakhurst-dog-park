import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
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
    <Link className={styles.heroLink} to="/">
      <Img
      className={styles.hero}
      fixed={data.heroImage.childImageSharp.fixed}
      durationFadeIn={50}
    />
    </Link>
  )
}

export default Hero
