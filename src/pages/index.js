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
      <section styleName="featured"> </section>
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
