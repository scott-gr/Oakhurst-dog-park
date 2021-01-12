import React, { Component } from "react"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import styles from "./slider.module.css"
import 'pure-react-carousel/dist/react-carousel.es.css';

class PhotoSlider extends Component {
  render() {
    return (
      <CarouselProvider 
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
        // hasMasterSpinner={true}
        orientation={"horizontal"}
      >
        <Slider className={styles.carouselWrapper}>
          <Slide className={styles.first, styles.slide} index={0}>I am the first Slide.</Slide>
          <Slide className={styles.second} index={1}>I am the second Slide.</Slide>
          <Slide className={styles.third} index={2}>I am the third Slide.</Slide>
        </Slider>
      </CarouselProvider>
    )
  }
}

export default PhotoSlider
