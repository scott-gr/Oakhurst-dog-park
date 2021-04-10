import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Img from 'gatsby-image'
import './hero.module.css'

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroMobile: file(relativePath: { eq: "tricolorwhiteshadow.png" }) {
        childImageSharp {
          fixed(height: 235, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      heroDesktop: file(relativePath: { eq: "tricolorwhiteshadow.png" }) {
        childImageSharp {
          fixed(height: 300, quality: 100) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const breakpoints = useBreakpoint()
  const heroImage = breakpoints.pc
    ? data.heroMobile.childImageSharp.fixed
    : data.heroDesktop.childImageSharp.fixed

  if (
    !data?.heroMobile?.childImageSharp?.fixed ||
    !data?.heroDesktop?.childImageSharp?.fixed
  ) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      styleName="hero"
      fixed={heroImage}
      durationFadeIn={250}
      loading="eager"
    />
  )
}

export default Hero
