import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import * as style from './aboutphoto.module.css'

const AboutPhoto = () => {
  const data = useStaticQuery(graphql`
    query {
      photo: file(relativePath: { eq: "fieldfall.png" }) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className={style.heroBox}
      tag="section"
      fluid={data.photo.childImageSharp.fluid}
      durationFadeIn={50}
    >
      <span className={style.aboutHeader}>
        <h2 className={style.headerText}>About the Park</h2>
      </span>
    </BackgroundImage>
  )
}

export default AboutPhoto
