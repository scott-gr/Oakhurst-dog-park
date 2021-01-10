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
            filter: { sourceInstanceName: { eq: "slides" } }
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
      initDelay={4} // delay before the first transition (if left at 0, the first image will be skipped initially)
      transition={2.5} // transition duration between images
      duration={5} // how long an image is shown
      // specify images to include (and their order) according to `relativePath`
      images={["doglooking.png", "widepark.png", "twosheps.png", "pool.png", "falltrees.png"]}
      // pass down standard element props
      style={{
        transform: "scale(.9)",
        height: "fit-content",

      }}
      objectPosition="0% 0%"
 
    ></BackgroundSlider>

)

export default Carousel
