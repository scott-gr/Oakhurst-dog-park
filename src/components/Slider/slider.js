import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import styles from "./slider.module.css"
import "pure-react-carousel/dist/react-carousel.es.css"

// Pure React Carousel Docs https://github.com/express-labs/pure-react-carousel

const PhotoSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      sliderImgOne: file(relativePath: { eq: "widepark.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgTwo: file(relativePath: { eq: "doglooking.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgThree: file(relativePath: { eq: "pool.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFour: file(relativePath: { eq: "twodogs.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFive: file(relativePath: { eq: "falltrees.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgSix: file(relativePath: { eq: "twosheps.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  // if (!data?.heroImage?.childImageSharp?.fluid) {
  //   return (
  //     <CarouselProvider
  //       naturalSlideWidth={50}
  //       naturalSlideHeight={30}
  //       totalSlides={6}
  //       visibleSlides={2.1}
  //       infinite={true}
  //       isIntrinsicHeight={true}
  //       // hasMasterSpinner={true}
  //       orientation={"horizontal"}
  //       className={styles.slideGrid}
  //     >
  //       <Slider className={styles.carouselWrapper}>
  //         <Slide className={styles.first} index={0}>
  //           Picture not found
  //         </Slide>
  //         <Slide className={styles.second} index={1}>
  //           Picture not found
  //         </Slide>
  //         <Slide className={styles.third} index={2}>
  //           Picture not found
  //         </Slide>
  //         <Slide className={styles.fourth} index={3}>
  //           Picture not found
  //         </Slide>
  //         <Slide className={styles.fifth} index={4}>
  //           Picture not found
  //         </Slide>
  //         <Slide className={styles.sixth} index={5}>
  //           Picture not found
  //         </Slide>
  //       </Slider>
  //     </CarouselProvider>
  //   )
  // }

  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={6}
      visibleSlides={2}
      infinite={true}
      touchEnabled={true}
      dragEnabled={true}
      isPlaying={true}
      isIntrinsicHeight={true}
      // hasMasterSpinner={true}
      orientation={"horizontal"}
      className={styles.slideGrid}
    >
      <Slider className={styles.carouselWrapper}>
        <Slide index={0}>
          <Img
            className={styles.first}
            fluid={data.sliderImgOne.childImageSharp.fluid}
            durationFadeIn={50}
          />
        </Slide>
        <Slide index={1}>
          <Img
            className={styles.second}
            fluid={data.sliderImgTwo.childImageSharp.fluid}
            durationFadeIn={50}
          />
        </Slide>
        <Slide index={2}>
          <Img
            className={styles.third}
            fluid={data.sliderImgThree.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={3}>
          <Img
            className={styles.fourth}
            fluid={data.sliderImgFour.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={4}>
          <Img
            className={styles.fifth}
            fluid={data.sliderImgFive.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={5}>
          <Img
            className={styles.sixth}
            fluid={data.sliderImgSix.childImageSharp.fluid}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
