import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import StaticImage from 'gatsby-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import {slide, slideGrid, carouselWrapper} from './slider.module.css'
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
      sliderImgTwo: file(relativePath: { eq: "doglooking.png" }) {
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
      sliderImgFour: file(relativePath: { eq: "twodogs.png" }) {
        childImageSharp {
          fluid(fit: COVER, cropFocus: CENTER, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      sliderImgFive: file(relativePath: { eq: "falltrees.png" }) {
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
    ? 3
    : breakpoints.pcXl
    ? 3
    : 4

  return (
    <CarouselProvider
      key={visibleSlides}
      naturalSlideWidth={100}
      naturalSlideHeight={175}
      totalSlides={6}
      visibleSlides={visibleSlides}
      infinite={true}
      touchEnabled={false}
      isIntrinsicHeight={true}
      dragEnabled={false}
      isPlaying={true}
      orientation={'horizontal'}
      className={slideGrid}
    >
      <Slider
        className={carouselWrapper}
        classNameTray="trayClass"
        classNameTrayWrap="wrapClass"
      >
        <Slide className={slide} innerClassName="innerClass" index={0}>
          <StaticImage
            fluid={data.sliderImgOne.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide className={slide} index={1}>
          <StaticImage
            fluid={data.sliderImgTwo.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide className={slide} index={2}>
          <StaticImage
            fluid={data.sliderImgThree.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide className={slide} index={3}>
          <StaticImage
            fluid={data.sliderImgFour.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide className={slide} index={4}>
          <StaticImage
            fluid={data.sliderImgFive.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
        <Slide className={slide} index={5}>
          <StaticImage
            fluid={data.sliderImgSix.childImageSharp.fluid}
            durationFadeIn={50}
            tag="img"
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
