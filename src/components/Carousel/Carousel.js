import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from 'gatsby-image-background-slider'
import styles from "./carousel.module.css"

const Carousel = ({ children }) => (
  <>
    <main>{children}</main>
    <BackgroundSlider
      className="masterhead"
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile (filter: {sourceInstanceName: {eq: "images"}}){
            nodes {
              relativePath
              childImageSharp {
                fluid (maxWidth: 1000, quality: 100){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={4} // transition duration between images
      duration={8} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["background-01.png", "background-02.png", "background-03.png", "background-04.png" ]}

      // pass down standard element props
      style={{
        transform: "scale(.77)" }}
      >
      {/* Captions in sync with background images*/}
      <div>Portfolio</div>
      <div>Assets</div>
      <div>AdvisorS</div>
      <div>Advisor</div>
            
    </BackgroundSlider>
  </>
)  

  

export default Carousel