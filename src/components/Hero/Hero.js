import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import './hero.module.css'

// queries for mobile and desktop sized icons
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "tricolorwhiteshadow.png" }) {
        childImageSharp {
          fixed(height: 240, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const heroImage = data.heroImage.childImageSharp.fixed

  return <Img styleName="hero" fixed={heroImage} durationFadeIn={50} />
}

export default Hero
