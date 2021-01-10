import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"
import styles from "./carousel.module.css"

const Carousel = ({ children }) => (
    <BackgroundSlider
      className={styles.masthead}
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "logos" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 900, quality: 100) {
                  ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      `)}
      initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={3} // transition duration between images
      duration={6} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["transblack.png", "transwhite.png", "tricolor.png", "white.png"]}
      // pass down standard element props
      style={{
        transform: "scale(.9)",
        height: "fit-content",

      }}
      objectPosition="0% 0%"
 
    ></BackgroundSlider>

)

export default Carousel
