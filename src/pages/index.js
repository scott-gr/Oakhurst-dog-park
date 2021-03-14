import React from 'react'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import './styles/index.module.css'
import PhotoSlider from '../components/Slider/slider.js'
import FeaturedPost from '../components/FeaturedPost/FeaturedPost.js'
import { graphql } from 'gatsby'
import Hero from '../components/Hero/Hero.js'

// import Button from "../components/Button/Button.js"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Oakhurst Dog Park" />
      <Hero />
      <PhotoSlider />
      <FeaturedPost />
      <section styleName="featured">
        {/* facebook page plugin testing */}
        {/* <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FOakhurstDogPark&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=165794700171132"
          width="340"
          height="500"
          // style="border:none;overflow:hidden"
          scrolling="no"
          frameborder="0"
          allowfullscreen="true"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe> */}
      </section>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
