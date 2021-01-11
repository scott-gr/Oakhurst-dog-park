import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundSlider from "gatsby-image-background-slider"

const Carousel = () => (
  <BackgroundSlider
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile(filter: { sourceInstanceName: { eq: "slides" } }) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 960, quality: 80, background: "#0A0A0B",   duotone: {
                highlight: "#61616B",
                shadow: "#0A0A0B",
                opacity: 75}),
              {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    `)}
    initDelay={3} // delay before the first transition (if left at 0, the first image will be skipped initially)
    transition={2} // transition duration between images
    duration={7} // how long an image is shown
    // specify images to include (and their order) according to `relativePath`
    images={[
      "doglooking.png",
      "widepark.png",
      "twosheps.png",
      "pool.png",
      "falltrees.png",
    ]}
    // pass down standard element props
    style={{
      transform: "scale(1)",
      height: "60vh",
    }}
    backgroundColor= {"#0A0A0B"}
  ></BackgroundSlider>
)

export default Carousel
