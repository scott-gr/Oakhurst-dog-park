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
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 95
            webpQuality: 95
            pngCompressionSpeed: 8
            background: "#171717"
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgTwo: file(relativePath: { eq: "happylab.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgThree: file(relativePath: { eq: "pool.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgFour: file(relativePath: { eq: "stump.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgFive: file(relativePath: { eq: "doglooking.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgSix: file(relativePath: { eq: "twosheps.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 95
            webpQuality: 95
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgSeven: file(relativePath: { eq: "falltrees.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      sliderImgEight: file(relativePath: { eq: "twodogs.png" }) {
        childImageSharp {
          fluid(
            fit: COVER
            cropFocus: CENTER
            quality: 90
            webpQuality: 90
            pngCompressionSpeed: 8
            traceSVG: { color: "#c1bcc1", turdSize: 6 }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
      naturalSlideWidth={50}
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
      loading="eager"
    >
      <Slider
        styleName="carouselWrapper"
        classNameTray="trayClass"
        classNameTrayWrap="wrapClass"
      >
        <Slide styleName="slide" innerClassName="innerClass" index={0}>
          <Img
            fluid={data.sliderImgOne.childImageSharp.fluid}
            durationFadeIn={325}
            tag="img"
            loading="eager"
          />
        </Slide>
        <Slide styleName="slide" index={1}>
          <Img
            fluid={data.sliderImgTwo.childImageSharp.fluid}
            durationFadeIn={325}
            tag="img"
            loading="eager"
          />
        </Slide>
        <Slide styleName="slide" index={2}>
          <Img
            fluid={data.sliderImgThree.childImageSharp.fluid}
            durationFadeIn={325}
            tag="img"
            loading="eager"
          />
        </Slide>
        <Slide styleName="slide" index={3}>
          <Img fluid={data.sliderImgFour.childImageSharp.fluid} tag="img" />
        </Slide>
        <Slide styleName="slide" index={4}>
          <Img fluid={data.sliderImgFive.childImageSharp.fluid} tag="img" />
        </Slide>
        <Slide styleName="slide" index={5}>
          <Img fluid={data.sliderImgSix.childImageSharp.fluid} tag="img" />
        </Slide>
        <Slide styleName="slide" index={6}>
          <Img fluid={data.sliderImgSeven.childImageSharp.fluid} tag="img" />
        </Slide>
        <Slide styleName="slide" index={7}>
          <Img fluid={data.sliderImgEight.childImageSharp.fluid} tag="img" />
        </Slide>
      </Slider>
    </CarouselProvider>
  )
}

export default PhotoSlider
