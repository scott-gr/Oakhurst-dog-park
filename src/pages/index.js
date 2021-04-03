import React, { lazy, Suspense } from 'react'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import './styles/index.module.css'
// import PhotoSlider from '../components/Slider/slider.js'
import { graphql } from 'gatsby'
import Hero from '../components/Hero/Hero.js'

const AnnouncementPost = lazy(() =>
  import(`../components/AnnouncementPost/AnnouncementPost.js`)
)
const PhotoSlider = lazy(() => import(`../components/Slider/slider.js`))
const renderLoader = () => <p styleName="postLoading">Loading Post...</p>
const sliderLoader = () => <div styleName="slideLoading" />
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome" />
      <Hero />
      <Suspense fallback={sliderLoader()}>
        <PhotoSlider />
      </Suspense>
      <Suspense fallback={renderLoader()}>
        <AnnouncementPost />
      </Suspense>
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
