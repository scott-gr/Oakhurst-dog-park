import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import './slider.module.css'
import 'pure-react-carousel/dist/react-carousel.es.css'

// Pure React Carousel Docs https://github.com/express-labs/pure-react-carousel

const PhotoSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      sliderImgOne: file(relativePath: { eq: "widepark.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgTwo: file(relativePath: { eq: "happylab.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgThree: file(relativePath: { eq: "pool.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFour: file(relativePath: { eq: "stump.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFive: file(relativePath: { eq: "doglooking.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgSix: file(relativePath: { eq: "twosheps.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgSeven: file(relativePath: { eq: "falltrees.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgEight: file(relativePath: { eq: "twodogs.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const breakpoints = useBreakpoint()
  const visibleSlides = breakpoints.mobile
    ? 1
    : breakpoints.mobileXl
    ? 2
    : breakpoints.tablet
    ? 2
    : breakpoints.pc
    ? 2
    : breakpoints.pcXl
    ? 3
    : 4

  return (
    <CarouselProvider
      key={visibleSlides}
      naturalSlideWidth={100}
      naturalSlideHeight={175}
      totalSlides={8}
      visibleSlides={visibleSlides}
      infinite={true}
      touchEnabled={false}
      isIntrinsicHeight={true}
      dragEnabled={false}
      isPlaying={true}
      orientation={'horizontal'}
      styleName="slideGrid"
    >
      <Slider
        styleName="carouselWrapper"
        classNameTray="trayClass"
        classNameTrayWrap="wrapClass"
      >
        <Slide styleName="slide" innerClassName="innerClass" index={0}>
          <Img
            fluid={data.sliderImgOne.childImageSharp.fluid}
            durationFadeIn={10}
            loading="eager"
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={1}>
          <Img
            fluid={data.sliderImgTwo.childImageSharp.fluid}
            durationFadeIn={10}
            loading="eager"
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={2}>
          <Img
            fluid={data.sliderImgThree.childImageSharp.fluid}
            durationFadeIn={10}
            loading="eager"
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={3}>
          <Img
            fluid={data.sliderImgFour.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={4}>
          <Img
            fluid={data.sliderImgFive.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={5}>
          <Img
            fluid={data.sliderImgSix.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={6}>
          <Img
            fluid={data.sliderImgSeven.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide styleName="slide" index={7}>
          <Img
            fluid={data.sliderImgEight.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
