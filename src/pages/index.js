import React from 'react'
import loadable from '@loadable/component'
import Layout from '../components/Layout/Layout.js'
import SEO from '../components/seo.js'
import './styles/index.module.css'
import { graphql } from 'gatsby'
import Hero from '../components/Hero/Hero.js'
// import PhotoSlider from '../components/Slider/slider.js'

const AnnouncementPost = loadable(() =>
  import(`../components/AnnouncementPost/AnnouncementPost.js`)
)
const PhotoSlider = loadable(() => import(`../components/Slider/slider.js`))
const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Welcome" description="Visit Oakhurst Dog Park in Decatur, GA. Open daily with plenty of room to play!"/>
      <Hero />
      <PhotoSlider />
      <AnnouncementPost />
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
