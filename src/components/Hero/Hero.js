import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './hero.module.css'

// queries for mobile and desktop sized icons
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroMobile: file(relativePath: { eq: "tricolor.png" }) {
        childImageSharp {
          fixed(height: 80, pngCompressionSpeed: 10) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      heroDesktop: file(relativePath: { eq: "tricolor.png" }) {
        childImageSharp {
          fixed(height: 150, pngCompressionSpeed: 10) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const breakpoints = useBreakpoint()
  const heroImage = breakpoints.mobileXl
    ? data.heroMobile.childImageSharp.fixed
    : data.heroDesktop.childImageSharp.fixed

  if (
    !data?.heroMobile?.childImageSharp?.fixed ||
    !data?.heroDesktop?.childImageSharp?.fixed
  ) {
    return <div>Picture not found</div>
  }

  return (
    <Link styleName="heroLink" to="/">
      <Img styleName="hero" fixed={heroImage} durationFadeIn={100} />
    </Link>
  )
}

export default Hero
