import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import './hero.module.css'

// queries for mobile and desktop sized icons
// const Hero = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       heroImage: file(relativePath: { eq: "tricolorwhiteshadow.png" }) {
//         childImageSharp {
//           fixed(height: 240, quality: 100) {
//             ...GatsbyImageSharpFixed_withWebp
//           }
//         }
//       }
//     }
//   `)
//   const heroImage = data.heroImage.childImageSharp.fixed

//   return <Img styleName="hero" fixed={heroImage} durationFadeIn={50} />
// }

// export default Hero
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
      <Img styleName="hero" fixed={heroImage} durationFadeIn={100} />
  )
}

export default Hero