import React from "react"
import Layout from "../components/Layout/Layout.js"
import SEO from "../components/seo.js"
import "./styles/index.module.css"
import PhotoSlider from "../components/Slider/slider.js"
import FeaturedPost from "../components/FeaturedPost/FeaturedPost.js"
import { graphql } from "gatsby"
// import Button from "../components/Button/Button.js"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />

      <h2 styleName="bigText">Oakhurst Dog Park</h2>
      {/* <h4 styleName="smallText">Some really great, eye-catching words about the dog park. This text is fun, not necessarily informative.</h4> */}

      <div styleName="overlay" />
      <PhotoSlider />
      <FeaturedPost />
      <section styleName="brief">
        {" "}
        <p>Address</p>
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
