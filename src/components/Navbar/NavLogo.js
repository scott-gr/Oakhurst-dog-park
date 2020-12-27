import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styles from "./navbar.module.css"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "gatsby-icon" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.logowrap} as={Link} to="/">
      <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
    </div>
  )
}

export default Logo