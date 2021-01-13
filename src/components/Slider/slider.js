import React, { Component } from "react"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import styles from "./slider.module.css"
import "pure-react-carousel/dist/react-carousel.es.css"

// Pure React Carousel Docs https://github.com/express-labs/pure-react-carousel
class PhotoSlider extends Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={6}
        visibleSlides={2.1}
        infinite={true}
        // isIntrinsicHeight={true}
        // hasMasterSpinner={true}
        orientation={"horizontal"}
      >
        <Slider className={styles.carouselWrapper}>
          <Slide className={styles.first} index={0}>
            I am the first Slide.
          </Slide>
          <Slide className={styles.second} index={1}>
            I am the second Slide.
          </Slide>
          <Slide className={styles.third} index={2}>
            I am the third Slide.
          </Slide>
          <Slide className={styles.fourth} index={3}>
            I am the fourth Slide.
          </Slide>
          <Slide className={styles.fifth} index={4}>
            I am the fifth Slide.
          </Slide>
          <Slide className={styles.sixth} index={5}>
            I am the sixth Slide.
          </Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}

export default PhotoSlider
